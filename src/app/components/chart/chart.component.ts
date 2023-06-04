import { OnInit, Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil, Observable } from 'rxjs';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject<void>()
  chartModel$ = new BehaviorSubject<any>(null)
  predictionHour$!: Observable<string>

  get loading$() {
    return this.chartService.loading$
  }

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.selectChartModel().pipe(
      takeUntil(this._destroyed$)
    ).subscribe(model => {
      this.chartModel$.next(model)
      this.chartService.stopLoading()
    })

    this.predictionHour$ = this.chartService.predictionHour$
  }

  ngOnDestroy(): void {
    this._destroyed$.next()
    this._destroyed$.complete()
  }

  onPredictionHourChange(event: any) {
    this.chartService.setPredictionHours(event.target.value)
  }
}
