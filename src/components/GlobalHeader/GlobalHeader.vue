<template>
  <transition name="showHeader">
    <div class="header-animat">
      <a-layout-header
        :class="['ant-header-fixedHeader', 'ant-header-side-opened', ]"
        :style="{ padding: '0' }"
      >
        <div :class="['top-nav-header-index', 'light']">
          <div class="header-index-wide">
            <div class="header-index-left">
              <logo class="top-nav-header"/>
              <s-menu/>
            </div>
            <user-menu class="header-index-right"/>
          </div>
        </div>
      </a-layout-header>
    </div>
  </transition>
</template>

<script>
import Logo from '@/components/tools/Logo';
import SMenu from '@/components/Menu/SMenu';
import UserMenu from '@/components/tools/UserMenu';

export default {
  name: 'GlobalHeader',
  components: {
    Logo,
    SMenu,
    UserMenu,
  },
  data() {
    return {
      visible: true,
      oldScrollTop: 0,
    };
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  methods: {
    handleScroll() {
      const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
      if (!this.ticking) {
        this.ticking = true;
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.visible = true;
          } else if (scrollTop > 300 && this.visible) {
            this.visible = false;
          } else if (scrollTop < 300 && !this.visible) {
            this.visible = true;
          }
          this.oldScrollTop = scrollTop;
          this.ticking = false;
        });
      }
    },
  },
  beforeDestroy() {
    document.body.removeEventListener('scroll', this.handleScroll, true);
  },
};
</script>

<style lang="less">
  @import '../index.less';

  .header-animat {
    position: relative;
    z-index: @ant-global-header-zindex;
  }

  .showHeader-enter-active {
    transition: all 0.25s ease;
  }

  .showHeader-leave-active {
    transition: all 0.5s ease;
  }

  .showHeader-enter, .showHeader-leave-to {
    opacity: 0;
  }
</style>
