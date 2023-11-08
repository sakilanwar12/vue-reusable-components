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
  <router-view />
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <div class="container mx-auto py-10">


  </div>
</template>
