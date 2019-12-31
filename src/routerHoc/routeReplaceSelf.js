/**
 * 嵌套路由中，匹配到子路由时不渲染自己，详细的先不解释了
 * @param component
 * @returns {boolean|{computed: {showChild(): boolean}, name: string, render(*): *}|*}
 */
export function courseDetailUse(component) {
  return {
    name: 'CourseDetailUse',
    computed: {
      showMe() {
        const deepestMatchedRoute = this.$route.matched[this.$route.matched.length - 1];
        const theSecondDeepestMatchedRoute = this.$route.matched[this.$route.matched.length - 2];
        // 如果当前最佳匹配路由是 课程详情 or  课程详情.作业列表 ，就渲染课程详情组件，
        // 若最佳匹配路由是 课程详情.作业列表.作业详情，就不渲染自己，直接渲染子组件
        const result = (deepestMatchedRoute.instances.default === this) || (
          theSecondDeepestMatchedRoute && theSecondDeepestMatchedRoute.instances.default === this);
        return result;
      },
    },
    render(h) {
      const shouldShow = this.showMe ? h(component) : h('router-view');

      return h('keep-alive', [shouldShow]);
    },
  };
}

export function courseHomeworkListUse(component) {
  return {
    name: 'CourseHomeworkListUse',
    computed: {
      showMe() {
        const deepestMatchedRoute = this.$route.matched[this.$route.matched.length - 1];
        // 如果当前最佳匹配路由是 作业列表 就渲染作业列表组件，
        // 若最佳匹配路由是 作业列表.作业详情，就不渲染自己，直接渲染子组件
        const result = (deepestMatchedRoute.instances.default === this);
        return result;
      },
    },
    render(h) {
      const shouldShow = this.showMe ? h(component) : h('router-view');

      return h('keep-alive', [shouldShow]);
    },
  };
}
