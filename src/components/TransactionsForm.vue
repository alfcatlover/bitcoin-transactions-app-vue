<template>
  <div class="tabs-wrap">
    <div class="tabs">
      <div class="tabs-head">
        <div class="tabs-head-btn active">покупка</div>
        <div class="tabs-head-btn">продажа</div>
      </div>
      <div class="tabs-body">
        bidy
      </div>
    </div>
    <Button>Добавить</Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class TransactionsForm extends Vue {

}
</script>

<style scoped lang="scss">
.tabs-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabs{
  margin-bottom: 24px;
  width: 100%;
}
.tabs-head {
  background: #14202D;
  border-radius: 8px 8px 0 0;
  height: 36px;
  display: flex;
}
.tabs-head-btn {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 37px;
  border-radius: 8px 8px 0 0;
  &.active {
    background: #1F2B37;
  }
}
.tabs-body {
  background: #1F2B37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 0 8px 8px;
  padding: 28px;
}
</style>
