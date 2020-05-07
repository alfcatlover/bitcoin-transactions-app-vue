<template>
  <table class="transactions">
    <thead>
      <tr>
        <th>Дата</th>
        <th>Действие</th>
        <th>Количество</th>
        <th>Цена</th>
        <th>Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactions" v-bind:key="transaction.id">
        <td class="transactions-date">
          04.05.19
          <span class="small-text">16:31:28</span>
        </td>
        <td>{{transaction.type}}</td>
        <td>{{transaction.quantityBtc}}</td>
        <td>${{transaction.btcPrice}} </td>
        <td>
          ${{transaction.btcPrice * transaction.quantityBtc}}
          <span class="small-text">Fee ${{transaction.feeUsd}}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { TransactionModel } from '@/types';

@Component
export default class TransactionsList extends Vue {
  @State('transactions') transactions: Array<TransactionModel>
}
</script>

<style scoped lang="scss">
.transactions {
  width: 100%;
  th {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 14px;
    text-align: left;
    text-transform: uppercase;
    padding-bottom: 25px;
  }
  td {
    font-size: 16px;
    padding-bottom: 24px;
  }
  tr:last-child {
    td {
      padding-bottom: 18px;
    }
  }
}
.transactions-date{
  line-height: 1;
}
.small-text{
  display: block;
  font-size: 11px;
  line-height: 14px;
}
</style>
