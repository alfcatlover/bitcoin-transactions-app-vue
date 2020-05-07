<template>
  <div class="wrap">
    <TransactionsInfo/>
    <TransactionsForm/>
    <TransactionsList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransactionsInfo from '@/components/TransactionsInfo.vue';
import TransactionsList from '@/components/TransactionsList.vue';
import TransactionsForm from '@/components/TransactionsForm.vue';

@Component({
  components: {
    TransactionsInfo,
    TransactionsList,
    TransactionsForm,
  },
})
export default class Transactions extends Vue {}
</script>

<style lang="scss">
  .wrap{
    width: 717px;
  }
</style>
