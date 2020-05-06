<template>
  <div class="wrap">
    <label>{{label}}</label>
<!--    <input v-if="type==='currency'"-->
<!--           class="input"-->
<!--           type="text"-->
<!--           v-model="syncedValue"-->
<!--           v-money="money"/>-->
    <input class="input"
           type="text"
           v-model="syncedValue"/>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class LabeledInput extends Vue {
  @Prop() private label!: string;

  @Prop() private type!: string;

  @Prop() private value!: string;

  get syncedValue(): string {
    return this.value;
  }

  set syncedValue(value: string) {
    const newVal = parseFloat(value.replace('$', '').replace(/\s/g, '').replace(',', '.'));
    this.$emit('update:value', newVal);
  }

  money = {
    decimal: ',',
    thousands: ' ',
    prefix: '$ ',
    precision: 2,
  }
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
