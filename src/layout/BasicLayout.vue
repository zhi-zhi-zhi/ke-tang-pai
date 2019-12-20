<template>
  <a-layout :class="['layout', 'desktop']">
    <!-- layout header-->
    <a-layout :class="['topmenu', 'content-width-Fixed']" :style="{ paddingLeft: '80px', minHeight: '100vh' }">
<!--    <a-layout :class="['topmenu', 'content-width-Fluid']" :style="{ paddingLeft: '80px', minHeight: '100vh' }">-->
      <global-header/>

      <a-layout-content :style="{ height: '100%', margin: '24px 24px 0', paddingTop: '64px'}">
        <transition name="page-transition">
          <router-view/>
        </transition>
      </a-layout-content>
      <a-layout-footer>
        <global-footer/>
      </a-layout-footer>
    </a-layout>

  </a-layout>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

export default {
  name: 'BasicLayout',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>

<style lang="less">
  /*
   * The following styles are auto-applied to elements with
   * transition="page-transition" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the page transition by editing
   * these styles.
   */

  .page-transition-enter {
    opacity: 0;
  }

  .page-transition-leave-active {
    opacity: 0;
  }

  .page-transition-enter .page-transition-container,
  .page-transition-leave-active .page-transition-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
