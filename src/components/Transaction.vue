<template>
  <tr class="transaction">
    <td class="transactions-date">
      {{dateFormatted}}
      <span class="small-text">{{timeFormatted}}</span>
    </td>
    <td class="transaction-type">{{typeText}}</td>
    <td>{{transaction.quantityBtc}}</td>
    <td>{{btcPriceFormatted}}</td>
    <td>
      {{total}}
      <span class="small-text">Fee {{feeUsdFormatted}}</span>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TransactionModel } from '@/types';
import { TransactionTypeEnum } from '@/enums';

@Component
export default class Transaction extends Vue {
  readonly transactionTypeEnum = TransactionTypeEnum;

  @Prop() transaction: TransactionModel

  currencyFormat = (sum: number) => {
    const total = (sum).toFixed(2);
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(parseFloat(total)).replace(/,/g, ' ');
  }

  get dateFormatted() {
    return new Date(this.transaction.date).toLocaleDateString().replace(/\//g, '.');
  }

  get timeFormatted() {
    return new Date(this.transaction.date).toLocaleTimeString();
  }

  get total() {
    return this.currencyFormat(this.transaction.btcPrice * this.transaction.quantityBtc);
  }

  get btcPriceFormatted() {
    return this.currencyFormat(this.transaction.btcPrice);
  }

  get feeUsdFormatted() {
    return this.currencyFormat(this.transaction.feeUsd);
  }

  get typeText() {
    return this.transaction.type === this.transactionTypeEnum.Buy ? 'Покупка' : 'Продажа';
  }
}
</script>

<style scoped lang="scss">
.transaction {
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
.transaction-type{
  text-transform: uppercase;
}
</style>
