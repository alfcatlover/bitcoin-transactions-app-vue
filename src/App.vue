<template>
    <div class="app">
      <Transactions/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Transactions from '@/components/Transactions.vue';

@Component({
  components: {
    Transactions,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  *{ box-sizing: border-box}
  html {
    height: 100%;
  }
  body {
    background: #0E1621;
    color: #999999;
    font-family: 'Source Sans Pro', sans-serif;
    height: 100%;
    margin: 0;
  }
  .app {
    height: 100%;
    display: flex;
    justify-content: center;
  }
</style>
