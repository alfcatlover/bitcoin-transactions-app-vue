import { TransactionTypeEnum } from '@/enums';

export interface AppState {
  totalUsd: number;
  totalBtc: number;
  avgBuy: number;
  avgSell: number;
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
    this.quantityBtc = 1;
    this.btcPrice = 2000;
    this.feeUsd = 20;
  }
}

export default {
  TransactionModel,
};
