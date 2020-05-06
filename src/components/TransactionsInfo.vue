<template>
  <div class="wrap">
    <div class="col">
      <p class="title">
        Количество USD: {{sum}}
      </p>
      <p>Средняя цена покупки BTC: 0</p>
      <p>Средняя цена продажи BTC: 0</p>
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
import { mapGetters, mapMutations, mapState } from 'vuex';

@Component({
  computed: mapState({
    totalBtc: (state: any): number => state.totalBtc,
  }),
})
export default class TransactionsInfo extends Vue {
  @Prop() private sum!: number;
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
