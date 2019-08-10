<template>
  <div id="app">
    <router-view class="app-wrapper" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/Footer/template.vue';

export default {
  name: 'App',

  components: {
    'app-footer': AppFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
</style>
