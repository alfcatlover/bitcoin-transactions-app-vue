<template>
  <div class="wrap">
    <label>{{label}}</label>
    <input class="input" type="text" value="10000"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LabeledInput extends Vue {
  @Prop() private label!: string;
}
</script>

<style scoped lang="scss">
  .wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px;
  }
  .input {
    width: 188px;
    height: 32px;
    background: #0E1621;
    border-radius: 4px;
    border: 0;
    font-size: 13px;
    line-height: 16px;
    color: #1774FF;
    outline: none;
    padding: 0 11px;
  }
</style>
