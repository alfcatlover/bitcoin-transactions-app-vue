<template>
  <div class="wrap">
    <label class="label">{{label}}</label>
    <div class="input-wrap">
      <span v-if="type==='currency'" class="currency-sign">$</span>
      <imask-input v-if="type==='currency'"
                   class="input input-currency"
                   :mask="Number"
                   thousandsSeparator=" "
                   v-bind:scale="2"
                   padFractionalZeros
                   v-on:blur="onBlur"
                   v-model="syncedValue"/>
      <imask-input v-if="type==='text'"
                   class="input"
                   :mask="Number"
                   v-bind:scale="10"
                   v-on:blur="onBlur"
                   v-model="syncedValue"/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Watch,
  Vue,
} from 'vue-property-decorator';
import { IMaskComponent } from 'vue-imask';

@Component({
  components: {
    'imask-input': IMaskComponent,
  },
})
export default class LabeledInput extends Vue {
  @Prop() private label!: string;

  @Prop() private type!: string;

  @Prop() private value!: number;

  @Prop() private maxValue!: number;

  @Watch('maxValue') private watchMaxValue() {
    console.log('watcher', this);
    this.onBlur();
  }

  get syncedValue(): string {
    return this.value.toString();
  }

  set syncedValue(value: string) {
    const floatVal = parseFloat(value.replace('$', '').replace(/\s/g, '').replace(',', '.'));
    this.$emit('update:value', floatVal);
  }

  onBlur() {
    if (this.value > this.maxValue) {
      this.$emit('update:value', this.maxValue);
    }
  }
}
</script>

<style scoped lang="scss">
  .wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px;
  }
  .label {
    display: flex;
    align-items: center;
  }
  .input-wrap {
    position: relative;
  }
  .currency-sign {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0 11px;
    color: #1774FF;
    font-size: 13px;
  }
  .input {
    width: 188px;
    height: 32px;
    background: #0E1621;
    border-radius: 4px;
    border: 0;
    font-size: 13px;
    line-height: 16px;
    color: #7e7f7f;
    outline: none;
    padding: 0 11px;
    caret-color: #1774FF;
  }
  .input-currency{
    padding: 0 11px 0 20px;
  }
</style>
