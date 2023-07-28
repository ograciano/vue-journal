<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entrada">
    </div>
    <div class="entry-scrollarea">
      <h2 v-for="item in 100" :key="item"> <Entry /> </h2>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    name: 'entry-list',
    components: {
      Entry: defineAsyncComponent(() => import(/* webpackChunkName: "daybook-entry" */ './Entry'))
    }
}
</script>

<style lang="scss" scoped>
.entry-list-container{
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

// que sea scrollable pero que no tenga la sintilla de scroll y pero que si aparezca el scroll
.entry-scrollarea {

  height: calc(100vh - 100px);
  overflow-y: scroll;
}
</style>