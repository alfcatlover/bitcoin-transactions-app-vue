import { TransactionTypeEnum } from '@/enums';

export interface AppState {
  startUsd: number;
  transactions: Array<TransactionModel>;
}

export class TransactionModel {
  id: string;

  date: Date;

  type: TransactionTypeEnum;

  quantityBtc: number;

  btcPrice: number;

  feeUsd: number;

  constructor() {
    this.date = new Date();
    this.type = TransactionTypeEnum.Buy;
    this.quantityBtc = 0;
    this.btcPrice = 0;
    this.feeUsd = 0;
  }
}

export default {
  TransactionModel,
};
