<template>
  <table class="transaction-table">
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
      <tr>
        <td>
          04.05.19
          <time>16:31:28</time>
        </td>
        <td>Покупка</td>
        <td>10</td>
        <td>$2</td>
        <td>
          $2
          Fee $1
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TransactionsList extends Vue {
}
</script>

<style scoped lang="scss">
.transaction-table {
  th {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 14px;
    text-transform: uppercase;
  }
}
</style>
