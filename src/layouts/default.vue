<template>
  <Sidebar />
  <div class="container">
      <router-view />
  </div>
</template>

<script>
import Sidebar from '../components/common/sidebar.vue'
export default {
  components: { Sidebar },
  name: 'App',
}
</script>
