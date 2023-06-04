export class TickerModel {
  name: string
  symbol: string

  constructor(data: any) {
    this.name = data?.name
    this.symbol = data?.symbol
  }
}
