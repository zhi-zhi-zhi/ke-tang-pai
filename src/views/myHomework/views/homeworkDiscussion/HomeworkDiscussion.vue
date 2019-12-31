<template>
  <div>
    <a-card>
      <div class="announce-cont-box">
        <div class="title clearfix"><h2 title="清大家完成火车票购票系统分析与设计，并补充（学生出教师确认，学生领票的用例规约，顺序图，活动图）">
          {{ homeworkInfo.title }}</h2></div>
        <div class="time" data-time="1577635140">
          <div class="lefttime">
            截至：<span class="dates">{{ deadline }}</span>&nbsp;&nbsp;<span class="times">{{ deadline1 }}</span>
          </div>
          <div class="fr">
            <div class="dldiscusschart fl">下载讨论内容</div>
            <div class="getWordCloud fl">展示词云</div>
          </div>
        </div>
        <div v-html=" homeworkInfo.description ">
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
import { getHomeworkInfo } from '@/api/user';
import moment from 'moment';

export default {
  name: 'HomeworkDiscussion',
  data() {
    return {
      homeworkInfo: null,
      homeworkId: null,
      courseId: null,
    };
  },
  computed: {
    deadline() {
      return moment(this.homeworkInfo.deadline).format('YYYY-MM-DD');
    },
    deadline1() {
      return moment(this.homeworkInfo.deadline).format('HH:mm:ss');
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
        this.homeworkInfo = { ...result.data };
        console.log(this.homeworkInfo);
      }
    },
  },
};
</script>

<style scoped>
  .announce-cont-box {
    padding-bottom: 10px;
    padding-right: 37px;
  }

  .announce-cont-box {
    padding: 0 20px 10px 30px;
    position: relative;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .announce-cont-box .title h2 {
    padding-top: 10px;
    float: left;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 400;
    width: 100%;
  }

  .announce-cont-box .title h2, span.peopleaccount, span.peoplename {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .announce-cont-box .time {
    height: 34px;
    padding-top: 7px;
    line-height: 34px;
  }

  .announce-cont-box .time {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #A0A0A0;
    margin-bottom: 6px;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .announce-cont-box .announce-cont .word {
    height: auto;
    overflow: auto;
    max-height: inherit;
  }

  .announce-cont-box .announce-cont .word {
    line-height: 30px;
    max-height: 100px;
    overflow: hidden;
    font-size: 14px;
    word-wrap: break-word;
    word-break: break-all;
  }

  .announce-cont-box .announce-cont .word .p, .announce-cont-box .announce-cont .work-time {
    color: #707070;
    overflow: hidden;
    line-height: 1.8;
  }

  .announce-cont-box .announce-cont .annex, .homework-page .announce-cont-box .announce-cont .word {
    height: auto;
    overflow: auto;
    max-height: inherit;
  }

  .announce-cont-box .announce-cont .annex {
    max-height: 110px;
    margin-top: 10px;
    overflow: hidden;
  }

  .announce-cont-box .announce-cont .annex li {
    width: 92px;
    float: left;
    text-align: center;
    height: 110px;
    margin-right: 40px;
    margin-bottom: 10px;
  }

  li {
    list-style: none;
  }
</style>
