import {TransactionTypeEnum} from '@/enums'

export class TransactionModel {
  date: Date;

  type: TransactionTypeEnum;

  quantityBtc: number;

  btcPrice: number;

  feeUsd: number;

  constructor() {
    this.date = new Date();
    this.type = TransactionTypeEnum.Sell;
    this.quantityBtc = 0;
    this.btcPrice = 0;
    this.feeUsd = 0;
  }
}

export default {
  TransactionModel
}
