<template>
  <a-breadcrumb class="breadcrumb">
    <a-breadcrumb-item v-for="(item) in breadList" :key="item.name">
      <router-link
        v-if="item.name != name "
        :to="{ name: item.name}"
      >{{ item.meta.title || 'hello' }}
      </router-link>
      <span v-else>{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      breadList: [],
      params: {},
    };
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      this.breadList = [];
      // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})

      this.name = this.$route.name;
      this.params = this.$router.currentRoute.params;
      this.$route.matched.forEach(item => {
        // item.name !== 'index' && this.breadList.push(item)
        this.breadList.push(item);
      });
      console.log(this.params);
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
};
</script>

<style scoped>
</style>
