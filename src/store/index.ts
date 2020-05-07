import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import uniqid from 'uniqid';
import { AppState, TransactionModel } from '@/types';
import { TransactionTypeEnum } from '@/enums';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    startUsd: 100,
    transactions: [],
  } as AppState,
  mutations: {
    addTransaction(state: AppState, transaction: TransactionModel) {
      state.transactions.push(transaction);
    },
  },
  getters: {
    totalUsd(state) {
      const total = state.transactions.reduce((acc, trans) => {
        const isBuying = trans.type === TransactionTypeEnum.Buy;
        const sumUsd = trans.quantityBtc * trans.btcPrice;
        if (isBuying) {
          return acc - sumUsd - trans.feeUsd;
        }
        return acc + sumUsd - trans.feeUsd;
      }, 0);
      return (state.startUsd + total).toFixed(2);
    },
    totalBtc(state) {
      const total = state.transactions.reduce((acc, trans) => {
        const isBuying = trans.type === TransactionTypeEnum.Buy;
        if (isBuying) {
          return acc + trans.quantityBtc;
        }
        return acc - trans.quantityBtc;
      }, 0);
      return total.toFixed(12);
    },
    avg(state) {
      const total = state.transactions.reduce((acc, trans) => {
        const sum = (trans.btcPrice * trans.quantityBtc) + trans.feeUsd;
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

      return {
        buy: parseFloat((total.buy / (total.buyQuantity || 1)).toFixed(2)),
        sell: parseFloat((total.sell / (total.sellQuantity || 1)).toFixed(2)),
      };
    },
  },
  actions: {
    addTransaction({ commit }, transaction: TransactionModel): void {
      commit('addTransaction', {
        ...transaction,
        id: uniqid(),
        date: new Date(),
      });
    },
  },
  plugins: [createPersistedState()],
});
