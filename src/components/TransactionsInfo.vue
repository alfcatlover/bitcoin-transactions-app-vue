<template>
  <div class="wrap">
    <div class="col">
      <p class="title">
        Количество USD: {{totalUsd}}
      </p>
      <p>Средняя цена покупки BTC: {{avg.buy}}</p>
      <p>Средняя цена продажи BTC: {{avg.sell}}</p>
    </div>
    <div class="col">
      <p class="title">
        Количество BTC: {{totalBtc}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class TransactionsInfo extends Vue {
  @Getter('totalUsd') totalUsd: number;

  @Getter('totalBtc') totalBtc: number;

  @Getter('avg') avg: number;
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
