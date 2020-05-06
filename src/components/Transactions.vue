<template>
  <div class="wrap">
    <button v-on:click="increment(2000)"></button>
    <TransactionsInfo sum="100000"/>
    <TransactionsList/>
    <TransactionsForm/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapMutations, mapState } from 'vuex';
import TransactionsInfo from '@/components/TransactionsInfo.vue';
import TransactionsList from '@/components/TransactionsList.vue';
import TransactionsForm from '@/components/TransactionsForm.vue';

@Component({
  components: {
    TransactionsInfo,
    TransactionsList,
    TransactionsForm,
  },
  methods: {
    ...mapMutations(['increment', 'addFunds']),
  },
  computed: mapState({
    count: (state: any): number => state.count,
  }),
})
export default class Transactions extends Vue {}
</script>

<style lang="scss">
  .wrap{
    width: 717px;
  }
</style>
