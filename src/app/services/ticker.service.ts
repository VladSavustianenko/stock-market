import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject, Observable, filter, first, map } from "rxjs";
import { TickerModel } from "../models/ticker";
import { BASE_URL } from "../models/url";

@Injectable()
export class TickerService {
  private _tickers$ = new BehaviorSubject<TickerModel[]>([])
  tickers$ = this._tickers$ as Observable<TickerModel[]>

  private _activeTicker$ = new BehaviorSubject<TickerModel | null>(null)
  activeTicker$ = this._activeTicker$ as Observable<TickerModel>

  constructor(private http: HttpClient) {}

  fetchTickers() {
    this.http.get(BASE_URL + '/tickers').pipe(
      first(),
      filter(v => !!v),
      map((tickers: any) => tickers.map((t: any) => new TickerModel(t))),
    ).subscribe(tickers => {
      this._tickers$.next(tickers)
      this.setActiveTicker(tickers[0])
    })
  }

  setActiveTicker(ticker: TickerModel) {
    this._activeTicker$.next(ticker)
  }
}
