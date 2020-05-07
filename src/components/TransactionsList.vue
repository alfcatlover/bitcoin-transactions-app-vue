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
      <Transaction v-for="transaction in transactions"
                   v-bind:key="transaction.id"
                   v-bind:transaction="transaction"/>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Transaction from '@/components/Transaction.vue';
import { TransactionModel } from '@/types';

@Component({
  components: {
    Transaction,
  },
})
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
}

</style>
