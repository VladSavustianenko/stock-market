import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs";
import { ChartDataModel, ChartModel } from "../models/chart";
import { TickerService } from "./ticker.service";
import { TickerModel } from "../models/ticker";
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from "../models/url";

@Injectable()
export class ChartService {
  private _predictionHour$ = new BehaviorSubject<string>('1')
  predictionHour$ = this._predictionHour$ as Observable<string>

  private _loading$ = new BehaviorSubject<boolean>(false)
  loading$ = this._loading$ as Observable<boolean>

  constructor(private tickerService: TickerService,
    private http: HttpClient) {}

  selectChartModel() {
    return combineLatest([
      this.predictionHour$.pipe(distinctUntilChanged()),
      this.tickerService.activeTicker$.pipe(filter(t => !!t)),
    ]).pipe(
      tap(() => this._loading$.next(true)),
      switchMap(([predictionHour, ticker]: [string, TickerModel]) => {
        return this.fetchChartData(predictionHour, ticker)
      }),
      map((data: ChartDataModel) => new ChartModel(data)),

    )
  }

  setPredictionHours(hours: string) {
    this._predictionHour$.next(hours)
  }

  stopLoading() {
    this._loading$.next(false)
  }

  private fetchChartData(predictionHour: string, ticker: TickerModel) {
    return this.http.get(`${BASE_URL}/predict/${ticker.symbol}/${predictionHour}`).pipe(
      filter(v => !!v),
      map((data: any) => new ChartDataModel(data?.data))
    )
  }
}
