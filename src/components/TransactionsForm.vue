<template>
  <div class="tabs-wrap">
    <div class="tabs">
      <div class="tabs-head">
        <div
          v-bind:class="{active: transactionType === transactionTypeEnum.Buy}"
          v-on:click="onChangeTransactionType(transactionTypeEnum.Buy)" class="tabs-head-btn">
          покупка
        </div>
        <div v-bind:class="{active: transactionType === transactionTypeEnum.Sell}"
             v-on:click="onChangeTransactionType(transactionTypeEnum.Sell)" class="tabs-head-btn">
          продажа
        </div>
      </div>
      <div class="tabs-body">
        <div class="tabs-col">
          <LabeledInput type="text" label="Кол-во" v-bind:value.sync="countBtc"/>
          <LabeledInput type="currency" label="Цена" v-bind:value.sync="sumUsd"/>
        </div>
        <div class="tabs-col">
          <LabeledInput type="currency" label="Комиссия" v-bind:value.sync="feeUsd"/>
          {{feeUsd}}
          <button v-on:click="addTransaction({sumUsd, countBtc, feeUsd})">text</button>
        </div>
      </div>
    </div>
    <Button>Добавить</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TransactionTypeEnum } from '@/enums';
import Button from '@/components/Button.vue';
import LabeledInput from '@/components/LabeledInput.vue';
import { mapMutations } from 'vuex';

@Component({
  components: {
    Button,
    LabeledInput,
  },
  methods: {
    ...mapMutations(['addTransaction']),
  },
})
export default class TransactionsForm extends Vue {
  readonly transactionTypeEnum = TransactionTypeEnum;

  transactionType = TransactionTypeEnum.Buy;

  countBtc = null;

  sumUsd = null;

  public feeUsd = 0;

  onChangeTransactionType(transactionType: TransactionTypeEnum): void {
    this.transactionType = transactionType;
    console.log(transactionType);
  }

  onUpdate1(event: string): void{
    this.feeUsd = parseInt(event, 10);
    console.log(event, '1', this);
  }
}
</script>

<style scoped lang="scss">
  .tabs-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 0 8px 8px;
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
