<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="classroom">
        <router-link :to="{name:'home-page'}">
          <span><a-icon type="home"/>课堂</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="reparation-area">
        <router-link :to="{name:'home-page'}">
          <span><a-icon type="home"/>备课区</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="boutique-area">
        <router-link :to="{name:'home-page'}">
          <span><a-icon type="home"/>精品专区</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="my-boutique">
        <router-link :to="{name:'home-page'}">
          <span><a-icon type="home"/>我的精品</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'SMenu',
  data() {
    return {
      current: ['classroom'],
    };
  },
};
</script>
