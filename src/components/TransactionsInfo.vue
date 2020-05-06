<template>
  <div class="wrap">
    <div class="col">
      <p class="title">
        Количество USD: {{totalUsd}}
      </p>
      <p>Средняя цена покупки BTC: {{avgBuy}}</p>
      <p>Средняя цена продажи BTC: {{avgSell}}</p>
    </div>
    <div class="col">
      <p class="title">
        Количество BTC: {{totalBtc}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, State } from 'vuex-class';

@Component
export default class TransactionsInfo extends Vue {
  @Prop() private sum!: number;

  @State('totalUsd') totalUsd: number;

  @State('totalBtc') totalBtc: number;

  @State('avgBuy') avgBuy: number;

  @State('avgSell') avgSell: number;
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  margin-bottom: 42px;
}
.col {
  width: 50%;
  p {
    padding-bottom: 13px;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
  }
}
.title {
  font-size: 24px;
  line-height: 30px;
}
</style>
