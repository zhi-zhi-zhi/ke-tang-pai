<template>
  <a-card>
    <div>
      <h2>{{ $attrs.homeworkInfo.title }}</h2>
      <div>
        <span style="margin-right: 10px;">截止日期：{{ deadline }}</span>
        <span style="margin-right: 10px;">{{ homeworkInfo.type }}</span>
        <span style="margin-right: 10px;" v-if="homeworkInfo.check">需要查重</span>
      </div>

      <div style="padding-top: 20px">
        <template v-if="homeworkInfo.submit">
          <div style="display: flex;justify-content: space-between">
            <div>
              <a-button type="primary" disabled>没有作业批注</a-button>
              <a-button type="link">重交作业
                <a-icon type="question-circle"/>
              </a-button>
            </div>
            <div style="line-height: 36px">
              <span>成绩</span>
              <span :class="homeworkInfo.grade ? ['grade']: ['unSubmit']">{{ homeworkInfo.grade ?homeworkInfo.grade : '分数未公布' }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div style="display: flex;justify-content: space-between">
            <a-button type="primary" @click="handleSubmitHomework(courseId, homeworkId, studentWorkMessage)">提交作业
            </a-button>
            <div>
              <span>未提交</span>
            </div>
          </div>
        </template>
      </div>

      <!--      <div style="padding-top: 20px" v-if="!homeworkInfo.submit">-->
      <div style="padding-top: 20px" v-if="true">
        <a-upload-dragger
          :fileList="fileList"
          name="file"
          :multiple="true"
          action="http://localhost:8080/system/user/file"
          @change="handleChange"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox"/>
          </p>
          <p class="ant-upload-text">点击或拖拽添加作业文件</p>
          <p class="ant-upload-hint">
            支持单次或批量上传。
          </p>
        </a-upload-dragger>
        <a-input placeholder="留言" style="margin-top: 20px" v-model="studentWorkMessage"/>
      </div>

    </div>
  </a-card>
</template>
<script>

import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import { getHomeworkInfo, uploadHomework } from '@/api/user';

export default {
  name: 'SubmitHomework',
  computed: {
    deadline() {
      return moment(this.homeworkInfo.deadline).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  data() {
    return {
      homeworkId: null,
      courseId: null,
      homeworkInfo: {},
      studentWorkMessage: '',
      fileList: [],
    };
  },
  mounted() {
    this.homeworkId = this.$route.params.homeworkId;
    this.courseId = this.$route.params.courseId;
    this.getHomeworkInfo();
  },
  methods: {
    handleChange(info) {
      let fileList = [...info.fileList];
      debugger;

      // 2. read from response and show file link
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      this.fileList = fileList;
      console.log(fileList);
    },
    async getHomeworkInfo() {
      const result = await getHomeworkInfo(this.courseId, this.homeworkId);

      if (result.code === 1) {
        this.homeworkInfo = { ...result.data };
        const annexList = result.data.submitAnnex.split(';');
        annexList.pop();
        let uid = -1;
        this.fileList = annexList.map(annex => {
          return {
            uid: uid--,
            name: annex,
            status: 'done',
            url: 'http://file.com/image/' + annex,
            linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
          };
        });
      }
    },
    async handleSubmitHomework(courseId, homeworkId, studentWorkMessage) {
      const annex = this.fileList.reduce((str, file) => {
        return str + file.name + ';';
      }, '');
      const result = await uploadHomework(courseId, { homeworkId, studentWorkMessage, annex });

      if (result.code === 1) {
        this.getHomeworkInfo();
      }
    },
  },
};
</script>
<style>
  .grade {
    font-size: 30px;
    color: red;
    vertical-align: top;
    padding-left: 8px;
  }
</style>
