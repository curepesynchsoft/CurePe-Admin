

<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <TopMenu />
      <router-view></router-view>
    </div>
    <!-- <vue-extend-layouts /> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import VueExtendLayouts from 'vue-extend-layout'
// import Sidebar from '../components/common/sidebar.vue'
import Sidebar from '../src/components/common/sidebar.vue'
import TopMenu from '../src/components/common/top_menu.vue'
export default {
  name: 'App',
  components: { Sidebar, TopMenu },
}
</script>

