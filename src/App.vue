<!-- https://www.youtube.com/watch?v=_CdLj6ExjX0&list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&index=8 -->

<template lang="">
  <div class="container mx-auto">
      <h2 v-for="(name,index) in names" :key="name">Name: {{name}}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      names: ["sakil", "hasin", "sumit"]
    }
  }
}
</script>