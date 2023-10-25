<!-- https://www.youtube.com/watch?v=_CdLj6ExjX0&list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&index=8 -->

<script>
import Button from './ui/button/Button.vue';
export default {
  components: {
    appbutton: Button
  }
}
</script>

<template>
  <div class="container mx-auto py-10">
    <div class="space-x-5">
      <appbutton>primary </appbutton>
      <appbutton>secondary</appbutton>
      <appbutton>Warning</appbutton>
      <appbutton>info</appbutton>
      <appbutton>success</appbutton>
    </div>

  </div>
</template>
