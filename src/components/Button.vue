<template>
  <button class="button" v-bind:disabled="disabled" v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private disabled!: boolean;

  onClick() {
    this.$emit('click');
  }
}
</script>

<style scoped lang="scss">
  .button {
    display: flex;
    padding: 5px 45px;
    height: 28px;
    background: #1774FF;
    border-radius: 4px;
    border: 0;
    outline: none;
    color: #D2D2D2;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    transition: background-color .25s ease-in-out;
    &:hover {
      background: darken(#1774FF, 10);
    }
    &:disabled {
      cursor: default;
      background: #1F2B37;
    }
  }
</style>
