import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TickerModel } from 'src/app/models/ticker';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'ticker-select',
  templateUrl: './ticker-select.component.html',
  styleUrls: ['./ticker-select.component.scss'],
})
export class TickerSelectComponent implements OnInit {
  tickers$!: Observable<TickerModel[]>
  selectedTicker$!: Observable<TickerModel>

  constructor(private tickerService: TickerService) { }

  ngOnInit(): void {
    this.tickerService.fetchTickers()
    this.tickers$ = this.tickerService.tickers$
    this.selectedTicker$ = this.tickerService.activeTicker$
  }

  setActiveTicker(ticker: TickerModel) {
    this.tickerService.setActiveTicker(ticker)
  }
}
