import Vue from 'vue';
import Vuex from 'vuex';
import { TransactionModel } from '@/types';
import { TransactionTypeEnum } from '@/enums';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1010,
    totalUsd: 100000,
    totalBtc: 0,
    transactions: Array<TransactionModel>(),
  },
  mutations: {
    addTransaction(state, payload) {
      debugger;
      state.count = payload.sumUsd;
      state.transactions.push({
        date: new Date(),
        type: TransactionTypeEnum.Sell,
        quantityBtc: payload.countBtc,
        btcPrice: payload.sumUsd,
        feeUsd: payload.feeUsd,
      });
    },
  },
  actions: {},
  modules: {},
});
