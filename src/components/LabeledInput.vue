<template>
  <div class="wrap">
    <label>{{label}}</label>
    <imask-input v-if="type==='currency'"
                 class="input"
                 :mask="Number"
                 thousandsSeparator=" "
                 v-bind:scale="2"
                 padFractionalZeros
                 v-model="syncedValue"/>
    <imask-input v-if="type==='text'"
                 class="input"
                 :mask="Number"
                 v-model="syncedValue"/>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { VMoney } from 'v-money';
import { IMaskDirective, IMaskComponent } from 'vue-imask';

@Component({
  components: {
    VMoney,
    'imask-input': IMaskComponent,
  },
  directives: {
    imask: IMaskDirective,
  },
})
export default class LabeledInput extends Vue {
  @Prop() private label!: string;

  @Prop() private type!: string;

  @Prop() private value!: number;

  get syncedValue(): string {
    return this.value.toString();
  }

  set syncedValue(value: string) {
    const floatVal = parseFloat(value.replace('$', '').replace(/\s/g, '').replace(',', '.'));
    this.$emit('update:value', floatVal);
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
