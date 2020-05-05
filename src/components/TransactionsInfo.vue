<template>
  <div>
    Количество USD: {{sum}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TransactionsInfo extends Vue {
  @Prop() private sum!: number;
}
</script>

<style scoped lang="scss">

</style>
