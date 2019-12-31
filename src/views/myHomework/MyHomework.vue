<template>
  <div>
    <page-header
      v-if="!$route.meta.hiddenHeaderContent"
      :title="this.courseInfo.title"
      style="    margin: -24px -24px 0px;"
    >
      <div slot="pageMenu" v-if="show">
        <div class="page-menu-tabs">
          <!-- @change="callback" :activeKey="activeKey" -->
          <a-tabs :tabBarStyle="{margin: 0}" :activeKey="tabs.active()" @change="tabs.callback">
            <a-tab-pane v-if="owner" tab="学生作业" key="1"/>
            <a-tab-pane v-else tab="提交作业" key="1"/>
            <a-tab-pane tab="作业讨论" key="2"/>
          </a-tabs>
        </div>
      </div>
    </page-header>

    <div class="content">
      <div class="page-header-index-wide">
        <router-view :homeworkInfo="homeworkInfo"/>
      </div>
    </div>

  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader';
import { getHomeworkInfo } from '@/api/user';

export default {
  name: 'MyHomework',
  components: {
    PageHeader,
  },
  data() {
    return {
      show: false,
      role: 1,
      homeworkId: null,
      courseId: null,
      courseInfo: {},
      tabs: {
        active: () => {
          const path = this.$route.path;
          if (path.includes('submitHomework') || path.includes('studentHomework')) {
            return '1';
          } else if (path.includes('homeworkDiscussion')) {
            return '2';
          } else {
            return '1';
          }
        },
        callback: (key) => {
          const courseId = this.$router.currentRoute.params.courseId;
          console.log(courseId);
          const path = this.owner ? 'studentHomework' : 'submitHomework';
          switch (key) {
            case '1':
              this.$router.push(path);
              break;
            case '2':
              this.$router.push('homeworkDiscussion');
              break;
            default:
              this.$router.push('/classroom');
          }
        },
      },
    };
  },
  computed: {
    homeworkInfo() {
      return { ...this.courseInfo, courseId: this.courseId, homeworkId: this.homeworkId };
    },
    owner() {
      return !!this.courseInfo.owner;
    },
  },
  mounted() {
    this.homeworkId = this.$route.params.homeworkId;
    this.courseId = this.$route.params.courseId;
    this.getHomeworkInfo();
  },
  methods: {
    async getHomeworkInfo() {
      const result = await getHomeworkInfo(this.courseId, this.homeworkId);

      if (result.code === 1) {
        this.courseInfo = { ...result.data };
        this.show = true;
      }
    },
  },
};
</script>
<style lang="less" scoped>
  .content {
    margin: 24px 24px 0;
  }

</style>
