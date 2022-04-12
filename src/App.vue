

<template>
  <div id="app"> 
    <Sidebar v-if="$route.path!='/' "/>
    <!-- <Sidebar v-if="!['LoginPage'].includes()"/> -->
    <div class="content" v-if="$route.path!='/'">
      <TopMenu />
      <router-view></router-view>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
    <vue-extend-layouts />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'
import Sidebar from '../src/components/common/sidebar.vue'
import TopMenu from '../src/components/common/top_menu.vue'
export default {
  name: 'App',
  components: { VueExtendLayouts, Sidebar, TopMenu },
  
}
</script>

