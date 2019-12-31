<template>
  <a-card :hoverable="true" style="width: 270px;">
    <div class="ktp-card-content" slot="cover">
      <strong class="ktp-card-bgstrong">
        <router-link :to="{name: 'course-detail', params: {courseId: course.id}}">
          <span class="ktp-card-course-title">{{ course.coursename }}</span>
        </router-link>
        <span class="ktp-card-course-class">{{ course.classname }}</span>
      </strong>

      <div class="ktp-card-course-code-wrapper">
        <div class="ktp-card-course-code">
          <a-icon type="qrcode"/>
          加课码：{{ course.code }}
        </div>
      </div>
      <span class="ktp-card-course-semester">
        {{ course.semesterYear }}
        <br>{{ course.semester === '1' ? '第一学期' : '第二学期' }}
      </span>

    </div>

    <a-card-meta>
      <a slot="title">近期作业</a>
      <div slot="avatar" style="text-align: center">
        <a-avatar class="card-avatar" :src="avatar" size="large"/>
        <br/>
        <span>{{ course.account }}</span>
      </div>

      <div class="meta-content" slot="description">
        <a-list rowKey="id" :data-source="course.homework">
          <a-list-item slot="renderItem" slot-scope="item">
            <template v-if="(item && item.id !== undefined)">
              <router-link :to="{name: course.owner?'studentHomework':'submitHomework', params:{courseId: course.id,homeworkId:item.id}}">
                <a-list-item-meta :description="item.title"/>
              </router-link>
            </template>
            <template v-else>
              <a-list-item-meta>
                <div slot="description">
                  {{ ((course.homework) && course.homework.length > 1) ?
                    '更多..': '无'
                  }}

                </div>
              </a-list-item-meta>
            </template>
          </a-list-item>
        </a-list>
      </div>
    </a-card-meta>

    <template class="ant-card-actions" slot="actions">
      <a @click="handleChangeTopStatus(course.id)">{{ this.isTopCourse ? '取消置顶' : '置顶' }}</a>
      <a @click="handleChangePigeonholeStatus(course.id)">归档</a>
      <a>
        <a-dropdown placement="topLeft">
          <a>更多</a>
          <a-menu v-if="isOwnerOfTheCourse" slot="overlay" class="user-dropdown-menu-wrapper">
            <a-menu-item>
              <a>编辑</a>
            </a-menu-item>
            <a-menu-item>
              <a>删除</a>
            </a-menu-item>
          </a-menu>
          <a-menu v-else slot="overlay" class="user-dropdown-menu-wrapper">
            <a-menu-item>
              <a>退课</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a>
    </template>

    <div class="ktp-card-course-identity-wrapper">
      <div
        class="ktp-card-course-identity-squr"
        :style="isOwnerOfTheCourse ?{borderColor: '#fff'} : {borderColor: '#32BAF0'}"
      />
      <div
        class="ktp-card-course-identity-content"
        :style="isOwnerOfTheCourse ?
          {background: '#fff',color: '#2C58AB'}
          : { background: '#32BAF0', color: '#fff'}"
      >
        {{ course.owner ? '教' : '学' }}
      </div>
    </div>
  </a-card>
</template>

<script>
import { mapActions } from 'vuex';
import { changePigeonholeStatus, changeTopStatus } from '@/api/user';

export default {
  name: 'Card',
  props: {
    course: {
      type: Object,
      default: () => {
        return {};
      },
    },
    isTopCourse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    avatar() {
      return this.course.avatar !== '' ? this.course.avatar : require('@/assets/avatarOfTq.jpg');
    },
    isOwnerOfTheCourse() {
      return !!this.course.owner;
    },
  },
  mounted() {
    this.course.homework.push({});
  },
  methods: {
    ...mapActions(['GetCourses']),
    async handleChangeTopStatus(courseId) {
      const result = await changeTopStatus(courseId);

      if (result.code === 1) {
        this.GetCourses().catch(() => {
          this.$message.error('获取课程信息失败，请联系运营人员');
        });
      }
    },
    handleChangePigeonholeStatus(courseId) {
      this.$confirm({
        title: '要归档此课程么？',
        content: '您可以在“课堂”-“归档管理”中查看此课程',
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
  },
};

</script>
<style lang="less" scoped>
  @import "~@/components/index.less";

  .ant-list-item-meta-description {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 120px;
  }

  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }

  .ant-card-actions {
    background: #f7f9fa;

    li {
      float: left;
      text-align: center;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      width: 50%;

      &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
      }

      a {
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
        display: inline-block;
        width: 100%;

        &:hover {
          color: @primary-color;
        }
      }
    }
  }

  .ktp-card-content {
    clear: both;
    background-image: url(//assets.ketangpai.com/theme/student/min/33.png);
    height: 130px;
    padding-top: 18px;
    padding-bottom: 14px;
    border-radius: 4px 4px 0 0;
    padding-left: 18px;

    .ktp-card-bgstrong {
      display: block;
      font-size: 20px;
      font-weight: lighter;
      color: #fff;
      height: 62px;
      margin-right: 48px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ktp-card-course-title {
      width: 500px;
      color: #fff;
      /*border-bottom: 1px solid #fff;   */
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .ktp-card-course-title:hover {
      text-decoration: underline;
    }

    .ktp-card-course-class {
      display: block;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 28px;
      overflow: hidden;
    }

    .ktp-card-course-code-wrapper {
      height: 22px;
      background: rgba(255, 255, 255, .2);
      border-radius: 2px;
      font-size: 12px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      text-align: center;
      padding-left: 2px;
      padding-right: 4px;
      margin-top: 13px;
      display: inline-block;

      .ktp-card-course-code {
        display: block;
        float: left;
        cursor: pointer;
      }
    }

    .ktp-card-course-semester {
      float: right;
      font-size: 12px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      padding-right: 14px;
      opacity: .5;
      display: flex;
      align-items: flex-end;
      height: 33px;
    }
  }

  .ktp-card-course-identity-wrapper {
    position: absolute;
    width: 24px;
    height: 28px;
    top: 0;
    right: 25px;

    .ktp-card-course-identity-squr {
      width: 0;
      height: 0;
      border-left: 10px solid;
      border-right: 10px solid;
      position: absolute;
      z-index: 1;
      top: 21px;
      left: 15px;

      border-bottom: 4px solid transparent;
    }

    .ktp-card-course-identity-content {
      width: 20px;

      line-height: 22px;
      left: 15px;
      font-size: 14px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      position: absolute;
    }
  }

</style>
