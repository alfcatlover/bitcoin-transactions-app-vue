import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import uniqid from 'uniqid';
import { AppState, TransactionModel } from '@/types';
import { TransactionTypeEnum } from '@/enums';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalUsd: 1000000,
    totalBtc: 0,
    avgBuy: 0,
    avgSell: 0,
    transactions: [],
  } as AppState,
  mutations: {
    addTransaction(state: AppState, transaction: TransactionModel) {
      state.transactions.push({
        ...transaction,
        id: uniqid(),
        date: new Date(),
      });
    },
    calcTotalBtc(state) {
      state.totalBtc = state.transactions.reduce((acc, trans) => {
        const isBuying = trans.type === TransactionTypeEnum.Buy;
        if (isBuying) {
          return acc + trans.quantityBtc;
        }
        return acc - trans.quantityBtc;
      }, 0);
    },
    calcTotalUsd(state) {
      state.totalUsd += state.transactions.reduce((acc, trans) => {
        debugger;
        const isBuying = trans.type === TransactionTypeEnum.Buy;
        const sumUsd = trans.quantityBtc * trans.btcPrice - trans.feeUsd;
        if (isBuying) {
          return acc - sumUsd;
        }
        return acc + sumUsd;
      }, 0);
    },
    calcAvg(state) {
      const total = state.transactions.reduce((acc, trans) => {
        const sum = (trans.btcPrice * trans.quantityBtc);
        if (trans.type === TransactionTypeEnum.Buy) {
          acc.buy += sum;
          acc.buyQuantity += 1;
        } else {
          acc.sell += sum;
          acc.sellQuantity += 1;
        }
        return acc;
      }, {
        buy: 0,
        sell: 0,
        buyQuantity: 0,
        sellQuantity: 0,
      });

      state.avgBuy = parseFloat((total.buy / (total.buyQuantity || 1)).toFixed(2));
      state.avgSell = parseFloat((total.sell / (total.sellQuantity || 1)).toFixed(2));
    },
  },
  getters: {},
  actions: {
    addTransaction({ commit }, transaction: TransactionModel) {
      commit('addTransaction', transaction);
      commit('calcTotalBtc');
      commit('calcTotalUsd');
      commit('calcAvg');
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
