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
          <LabeledInput label="Кол-во"/>
          <LabeledInput label="Цена"/>
        </div>
        <div class="tabs-col">
          <LabeledInput label="Комиссия"/>
          <LabeledInput label="Цена"/>
        </div>
      </div>
    </div>
    <Button>Добавить</Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TransactionTypeEnum } from '@/enums';
import Button from '@/components/Button.vue';
import LabeledInput from '@/components/LabeledInput.vue';

@Component({
  components: {
    Button,
    LabeledInput,
  },
})
export default class TransactionsForm extends Vue {
  readonly transactionTypeEnum = TransactionTypeEnum;

  transactionType = TransactionTypeEnum.Buy;

  onChangeTransactionType(transactionType: TransactionTypeEnum): void {
    this.transactionType = transactionType;
    console.log(transactionType);
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
