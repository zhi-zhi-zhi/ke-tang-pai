<template>
  <div>
    <div class="homework">
      <div class="homework-publish">
        <a-button size="large" style="margin-right: 20px;" type="primary" @click="handlePersonalHomeworkVisible(true)">
          发布个人作业
        </a-button>
        <a-button size="large" @click="handlePersonalHomeworkVisible(true)">
          发布小组作业
        </a-button>
        <a-button type="link" style="float:right" size="large">
          <a-icon type="download"/>
          下载所有作业
        </a-button>
      </div>

      <div class="homework-publish-content" :style="personalHomeworkVisible? {}: {display: 'none'}">
        <a-card>
          <a-form :form="personalHomeworkForm">
            <a-form-item>
              <a-input
                placeholder="请输入作业标题"
                v-decorator="['title', { rules: [{ required: true, message: 'Please input your note!' }] }]"
              />
            </a-form-item>
            <a-form-item>
              <tinymce-editor
                ref="homeworkEditor"
                v-model="description"
              />
            </a-form-item>
            <a-form-item>
              <a-upload
                action="http://localhost:8080/system/user/file"
                :multiple="true"
                :fileList="fileList"
                @change="handleChange"
              >
                <a-button>
                  <a-icon type="upload"/>
                  Upload
                </a-button>
              </a-upload>
            </a-form-item>
            <a-form-item label="截至日期" :label-col="{span: 2} " :label-wapper="{span: 6}">
              <a-date-picker
                :disabledDate="disabledEndDate"
                placeholder="请选择截至日期"
                v-decorator="[
                  'deadline',
                  {
                    rules: [
                      { required: true, message: '请选择作业提交截止日期' }
                    ],
                  }
                ]"
              />
            </a-form-item>
            <a-form-item
              label="满分值"
              :label-col="{span: 2} "
              :label-wapper="{span: 6}"
            >
              <a-input-number
                :min="1"
                v-decorator="[
                  'fullGrade',
                  {
                    rules: [
                      { required: true, message: '请输入满分值' }
                    ],
                  }
                ]"
              />
            </a-form-item>
            <a-form-item label="是否查重" :label-col="{span: 2} " :label-wapper="{span: 6}">
              <a-switch
                v-decorator="[
                  'check',
                  {
                    initialValue: false
                  }
                ]"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="handlePublishHomework">确认发布</a-button>
              <a-button style="margin-left: 20px" @click="handlePersonalHomeworkVisible(false)">取消</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </div>

      <div v-for="homework in homeworkList" :key="homework.id">
        <homework-item :homework="homework"/>
      </div>

      <div class="course-footer" style="display: block;">
        <div class="box fr">
          <h3>欢迎开课！</h3>
          <p>快速发布、收集学生作业，支持50多种文档在线批阅。</p>
          <p>多维度（全班查重、作业字数等）统计学生作业情况。（点击<a
            href="javascript:;"
            class="fileext previewVideo"
            data-isvideo="1"
            data-url="//assets.ketangpai.com/help2019/h8.mp4"
          >播放视频</a>，查看使用详情）</p>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import TinymceEditor from '@/components/tinymce/tinymce-editor';
import Editor from '@tinymce/tinymce-vue';
import moment from 'moment';
import HomeworkItem from '@/views/courseDetail/views/homework/components/HomeworkItem';
import { getHomeworkList, publishHomework } from '@/api/user';

const homework = [
  {},
];

export default {
  name: 'Homework',
  components: {
    HomeworkItem,
    TinymceEditor,
    Editor,
    homework,
  },
  data() {
    return {
      personalHomeworkForm: this.$form.createForm(this, { name: '发布个人作业' }),
      personalHomeworkVisible: false,
      description: '',
      courseId: null,
      homeworkList: [],
      fileList: [],
    };
  },
  mounted() {
    this.courseId = this.$route.params.courseId;
    this.getHomeworkList();
  },
  methods: {
    handleChange(info) {
      let fileList = [...info.fileList];

      // 2. read from response and show file link
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      this.fileList = fileList;
    },
    async getHomeworkList() {
      const result = await getHomeworkList(this.courseId);

      if (result.code === 1) {
        result.data.forEach(item => {
          item.submitAnnex = item.submitAnnex.split(';');
          item.submitAnnex.pop();
          item.submitAnnex = item.submitAnnex.map(annex => {
            return {
              name: annex,
              url: 'http://file.com/image/' + annex,
            };
          });
        });
        console.log(result.data);
        this.homeworkList = result.data;
      }
    },
    disabledEndDate(current) {
      return current && current < moment().endOf('day');
    },
    handlePersonalHomeworkVisible(visible) {
      this.personalHomeworkForm.resetFields();
      this.description = '';
      this.personalHomeworkVisible = visible;
    },
    handlePublishHomework(e) {
      e.preventDefault();
      this.personalHomeworkForm.validateFields(async(err, homework) => {
        if (!err) {
          homework.deadline = homework.deadline.format('YYYY-MM-DD HH:mm:ss');
          homework.description = this.description;

          homework.annex = this.fileList.reduce((str, file) => {
            return str + file.name + ';';
          }, '');
          const result = await publishHomework(this.courseId, homework);

          if (result.code === 1) {
            this.$notification.success({ message: '发布作业成功！' });
            this.handlePersonalHomeworkVisible(false);
            this.getHomeworkList();
          }
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
  .homework {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;

    .homework-publish {
      padding-top: 40px;
    }

    .homework-publish-content {
      padding-top: 20px;
    }

    .course-footer {

      height: auto;
      background: #fff;
      border-radius: 4px;
      margin-top: 42px;
      text-align: center;
      padding: 35px 0;

      h3 {
        font-size: 14px;
        color: #707070;
        font-weight: 400;
        margin-bottom: 5px;
      }

      p {
        color: #A0A0A0;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 0;
      }
    }
  }

</style>
