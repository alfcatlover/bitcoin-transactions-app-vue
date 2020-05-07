<template>
  <div class="tabs-wrap">
    <div class="tabs">
      <div class="tabs-head">
        <div
          v-bind:class="{active: transaction.type === transactionTypeEnum.Buy}"
          v-on:click="onChangeTransactionType(transactionTypeEnum.Buy)" class="tabs-head-btn">
          покупка
        </div>
        <div v-bind:class="{active: transaction.type === transactionTypeEnum.Sell}"
             v-on:click="onChangeTransactionType(transactionTypeEnum.Sell)" class="tabs-head-btn">
          продажа
        </div>
      </div>
      <div class="tabs-body">
        <div class="tabs-col">
          <LabeledInput type="text" label="Кол-во"
                        v-bind:maxValue="maxBtcToBuy"
                        v-bind:value.sync="transaction.quantityBtc"/>
          <LabeledInput type="currency" label="Цена" v-bind:value.sync="transaction.btcPrice"/>
        </div>
        <div class="tabs-col">
          <LabeledInput type="currency" label="Комиссия" v-bind:value.sync="transaction.feeUsd"/>
        </div>
      </div>
      <div>
        disabled: {{disabled}}
        maxBtcToBuy: {{maxBtcToBuy}}
      </div>
    </div>
    <Button v-bind:disabled="disabled" v-on:click="onAddTransaction">Добавить</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TransactionTypeEnum } from '@/enums';
import { TransactionModel } from '@/types';
import Button from '@/components/Button.vue';
import LabeledInput from '@/components/LabeledInput.vue';
import { Getter, Action } from 'vuex-class';

@Component({
  components: {
    Button,
    LabeledInput,
  },
})
export default class TransactionsForm extends Vue {
  readonly transactionTypeEnum = TransactionTypeEnum;

  transaction: TransactionModel = new TransactionModel();

  @Action('addTransaction') addTransaction: any;

  @Getter('totalUsd') totalUsd: number;

  @Getter('totalBtc') totalBtc: number;

  get disabled() {
    console.log('dis', this.transaction.btcPrice === 0 || this.transaction.quantityBtc === 0);
    return !this.transaction.btcPrice || !this.transaction.quantityBtc;
  }

  get maxBtcToBuy() {
    const {
      transaction: {
        type,
        btcPrice = 0,
        feeUsd = 0,
      },
    } = this;
    const isSelling = type === this.transactionTypeEnum.Sell;
    debugger;
    if (isSelling) {
      return this.totalBtc;
    }
    if (btcPrice === 0) {
      return Number.MAX_SAFE_INTEGER;
    }
    return (this.totalUsd / ((btcPrice || 1) + feeUsd)).toFixed(12);
  }

  onChangeTransactionType(transactionType: TransactionTypeEnum): void {
    this.transaction.type = transactionType;
    console.log(transactionType);
  }

  onAddTransaction() {
    this.addTransaction(this.transaction);
    this.transaction = new TransactionModel();
  }
}
</script>

<style scoped lang="scss">
  .tabs-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  .tabs{
    margin-bottom: 24px;
    width: 100%;
  }
  .tabs-head {
    background: #14202D;
    border-radius: 8px 8px 0 0;
    height: 36px;
    display: flex;
  }
  .tabs-head-btn {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 37px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    &.active {
      background: #1F2B37;
    }
  }
  .tabs-body {
    background: #1F2B37;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 0 0 8px 8px;
    padding: 28px;
    display: flex;
  }
  .tabs-col {
    width: 50%;
    &:first-child {
      padding-right: 30px;
    }
    &:last-child {
      padding-left: 30px;
    }
  }
</style>
