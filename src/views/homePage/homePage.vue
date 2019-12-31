<template>

  <page-view title="所有课程" logo="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png">

    <!-- actions -->
    <template slot="action">
      <a-button-group style="margin-right: 4px;">
        <a-button type="link" @click="handleOpenSortAndPigeonholeModal('1')">
          <a-icon type="down-square"/>
          课程排序
        </a-button>
        <a-button type="link" @click="handleOpenSortAndPigeonholeModal('2')">
          <a-icon type="pic-center"/>
          归档管理
        </a-button>

        <a-button @click="handleCreateModal">创建课程</a-button>
        <a-button @click="handleJoinModal">加入课程</a-button>
      </a-button-group>
    </template>

    <div>
      <a-card v-if="topList.length > 0 " class="card" title="置顶课程" :bordered="false">
        <card-list :course-list="topList" :is-tpo-list="true"/>
      </a-card>
      <a-card class="card" :title="topList.length > 0 ? '其他课程' : '全部课程'" :bordered="false">
        <card-list :course-list="list"/>
      </a-card>
    </div>

    <a-modal
      :footer="null"
      v-model="sortAndPigeonholeVisible"
    >
      <a-tabs :active-key="modalKey">
        <a-tab-pane key="1">
          <span slot="tab" @click="() => this.modalKey='1'">排序管理</span>
          <SlickList lockAxis="y" v-model="sortList" @input="handleSortEnd">
            <SlickItem v-for="(course, index) in sortList" :index="index" :key="index" class="sort-item">
              {{ course.coursename + ' ' + course.classname }}
            </SlickItem>
          </SlickList>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab" @click="() => this.modalKey='2'">归档管理</span>
          <a-list>
            <a-list-item :key="index" v-for="(course, index) in pigeonholeList">
              <a-list-item-meta :description="course.owner ? '角色: 老师' : `角色：学生，老师：${course.account}`">
                <a-avatar slot="avatar" size="large" shape="square" :src="course.avatar"/>
                <a slot="title">{{ course.coursename }}</a>
              </a-list-item-meta>
              <div slot="actions">
                <a @click="handleRevertPigeonhole(course.id)">恢复</a>
              </div>
              <div slot="actions">
                <a>删除</a>
              </div>
            </a-list-item>
          </a-list>
        </a-tab-pane>
      </a-tabs>
    </a-modal>

    <a-modal
      title="创建课程"
      v-model="createVisible"
      :footer="null"
    >
      <a-form :form="createForm" @submit="handleCreateFormSubmit">
        <a-form-item label="课程名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            placeholder="请输入课程名称"
            v-decorator="['coursename', { rules: [{ required: true, message: '请输入课程名称' }] }]"
          />
        </a-form-item>
        <a-form-item label="班级名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            placeholder="请输入班级名称（选填）"
            v-decorator="['classname', { rules: [] }]"
          />
        </a-form-item>
        <a-form-item label="选择学年" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
              'semesterYear',
              { initialValue: '2015-2016',rules: [{ required: true, message: '选择学年' }] },
            ]"
          >
            <a-select-option value="2015-2016">
              2015-2016
            </a-select-option>
            <a-select-option value="2016-2017">
              2016-2017
            </a-select-option>
            <a-select-option value="2017-2018">
              2017-2018
            </a-select-option>
            <a-select-option value="2018-2019">
              2018-2019
            </a-select-option>
            <a-select-option value="2019-2020">
              2019-2020
            </a-select-option>
            <a-select-option value="2020-2021">
              2020-2021
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="选择学期" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
              'semester',
              { initialValue: 0,
                rules: [{ required: true, message: '选择学年' }] },
            ]"
          >
            <a-select-option :value="0">
              不限
            </a-select-option>
            <a-select-option :value="1">
              第一学期
            </a-select-option>
            <a-select-option :value="2">
              第二学期
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>

    </a-modal>

    <a-modal
      title="加入课程"
      v-model="joinVisible"
      width="400px"
      centered
      :footer="null"
    >
      <a-form :form="joinForm" @submit="handleJoinFormSubmit">
        <a-form-item label="加课码:" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            placeholder="请输入加课码"
            v-decorator="['code', { rules: [{ required: true, pattern: /^[a-zA-Z0-9]{6}$/ ,message: '请输入六位字母+数字加课码！' }] }]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </a-modal>

  </page-view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { SlickList, SlickItem } from 'vue-slicksort';

import CardList from '@/views/homePage/compoments/CardList';
import PageView from '@/layout/PageView';
// eslint-disable-next-line no-unused-vars
import { changeCoursesPriority, changePigeonholeStatus, createCourse, joinCourse } from '@/api/user';

export default {
  name: 'HomePage',
  components: {
    CardList,
    PageView,
    SlickList,
    SlickItem,
  },
  data() {
    return {
      sortAndPigeonholeVisible: false,
      createVisible: false,
      joinVisible: false,
      sortList: [],
      modalKey: '1',
      createForm: this.$form.createForm(this, { name: 'createForm' }),
      joinForm: this.$form.createForm(this, { name: 'joinForm' }),
    };
  },
  computed: {
    ...mapGetters(['topList', 'list', 'pigeonholeList']),
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    ...mapActions(['GetCourses']),
    getCourses() {
      this.GetCourses()
        .catch(() => {
          this.$message.error('获取课程信息失败，请联系运营人员');
        });
    },
    async handleSortEnd(courses) {
      const courseIds = courses.map(course => course.id);
      console.log(courseIds);
      const result = await changeCoursesPriority(courseIds);
      if (result.code === 1) {
        this.GetCourses().catch(() => {
          this.$message.error('获取课程信息失败，请联系运营人员');
        });
      }
    },
    handleOpenSortAndPigeonholeModal(key) {
      this.modalKey = key;
      // 只能放这里，不能放在mounted里，mounted时getters可能尚未加载
      this.sortList = this.$store.getters.list;
      this.sortAndPigeonholeVisible = !this.sortAndPigeonholeVisible;
    },
    handleRevertPigeonhole(courseId) {
      this.$confirm({
        title: '要恢复此课程吗！',
        content: '您和您的学生将可以重新在此课程中互动。\n' +
          '此课程会在课堂页上显示。',
        onOk: async() => {
          const result = await changePigeonholeStatus(courseId);

          if (result.code === 1) {
            this.GetCourses().catch(() => {
              this.$message.error('获取课程信息失败，请联系运营人员');
            });
          }
        },
        onCancel: () => {
        },
      });
    },
    handleCreateModal() {
      this.createVisible = !this.createVisible;
    },
    handleJoinModal() {
      this.joinVisible = !this.joinVisible;
    },
    handleJoinFormSubmit(e) {
      e.preventDefault();
      this.joinForm.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          joinCourse(values.code)
            .then(() => {
              this.$notification.success({ message: '加入课程成功！' });
              this.handleCreateModal();
            }).catch(err => {
              this.$notification.error({ message: `加入课程失败！ ${err.response.data.message}` });
            }).finally(() => {
              this.getCourses();
            });
        }
      });
    },
    handleCreateFormSubmit(e) {
      e.preventDefault();
      this.createForm.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const { coursename, classname, semesterYear, semester } = values;
          createCourse(coursename, classname, semesterYear, semester)
            .then(() => {
              this.$notification.success({ message: '创建课程成功！' });
              this.handleCreateModal();
            }).catch(err => {
              this.$notification.error({ message: `创建课程失败！ ${err.response.data.message}` });
            }).finally(() => {
              this.getCourses();
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .card {
    margin-bottom: 24px;
  }

  .sort-item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
    user-select: none;
    color: #333;
    font-weight: 400;
    z-index: 1001;
  }
</style>
