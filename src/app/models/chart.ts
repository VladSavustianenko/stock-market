export class ChartModel {
  series: {
    name: string,
    type: string,
    data: CandleDataModel[] | PredictionDataModel[],
  }[]
  chart: {
    height: number,
    type: string,
  }
  title: {
    text: string,
    align: string,
  };
  stroke: {
    width: number[]
  };
  tooltip: {
    shared: boolean,
  };
  xaxis: {
    type: string
  };

  constructor(data: ChartDataModel) {
    this.series = [
      {
        name: "line",
        type: "line",
        data: data.prediction,
      },
      {
        name: "candle",
        type: "candlestick",
        data: data.candlestick,
      }
    ]
    this.chart = {
      height: 350,
      type: "line",
    }
    this.title = {
      text: data.ticker,
      align: "left"
    }
    this.stroke = {
      width: [3, 1]
    };
    this.tooltip = {
      shared: true,
    };
    this.xaxis = {
      type: "datetime"
    };
  }
}

export class ChartDataModel {
  ticker: string;
  candlestick: CandleDataModel[];
  prediction: PredictionDataModel[];

  constructor(data: any) {
    this.ticker = data?.ticker || null;
    this.candlestick = data?.candlestick.map((v: any) => new CandleDataModel(v));
    this.prediction = data?.prediction.map((v: any) => new PredictionDataModel(v));
  }
}

class CandleDataModel {
  x: Date;
  y: number[];

  constructor(data: any) {
    this.x = new Date(data?.x);
    this.y = data?.y;
  }
}

class PredictionDataModel {
  x: Date;
  y: number;

  constructor(data: any) {
    this.x = data?.x || null;
    this.y = data?.y || null;
  }
}
