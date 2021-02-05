<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
  message: string = 'Hello!';

  onClick(): void {
    window.alert(this.message);
  }
}
</script>

<style scoped lang="scss"></style>
