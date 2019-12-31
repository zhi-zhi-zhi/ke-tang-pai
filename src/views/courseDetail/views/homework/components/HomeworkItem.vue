<template>
  <div class="homework-list clearfix" data-id="MDAwMDAwMDAwMLOsz5eGqbev">
    <div class="homework-box">
      <div class="announce-cont-box">
        <div class="title clearfix">
          <div class="work-type fl" data-time="1536718898" data-fullscore="100">
            <span>个人作业</span>
            <span>{{ createTime }}</span>
            <span>{{ createTime2 }}</span>

          </div>
          <div class="opt">
            <a href="javascript:;" class="opt-btn">
              <a-icon type="ellipsis" size="large"/>
            </a>
          </div>
        </div>
        <div class="announce-cont clearfix" style="margin-bottom: 10px">
          <div class="work-new-r fr">

            <div class="total-cont" v-if="typeof homework.yiYue === 'number'">
              <p class="score">
                <a href="/Review/index/homeworkid/MDAwMDAwMDAwMLOsz5eGqbev.html?type=yp">{{ homework.yiYue }}</a>
                <a href="/Review/index/homeworkid/MDAwMDAwMDAwMLOsz5eGqbev.html?type=yp" class="green">已阅</a>
              </p>
              <p class="score">
                <a href="/Review/index/homeworkid/MDAwMDAwMDAwMLOsz5eGqbev.html?type=wp">{{ homework.weiPi }}</a>
                <a href="/Review/index/homeworkid/MDAwMDAwMDAwMLOsz5eGqbev.html?type=wp" class="grey">未批</a>
              </p>
              <p class="score">
                <a href="/Review/index/homeworkid/MDAwMDAwMDAwMLOsz5eGqbev.html?type=wj">{{ homework.weiJiao }}</a>
                <a href="/Review/index/homeworkid/MDAwMDAwMDAwMLOsz5eGqbev.html?type=wj" class="red">未交</a>
              </p>
            </div>

          </div>
          <div class="work-new-l" style="margin-right:340px;">

            <h3 class="work-title">
              <!-- todo: 路由-->
              <router-link :to="{name: 'homeworkDetail', params: {homeworkId: homework.id}}">
                {{ homework.title }}
              </router-link>
            </h3>

            <div class="word">
              <div class="p" v-html="homework.description"/>
            </div>

            <div class="annex">
              <ul class="clearfix" v-for="(annex, index) in homework.submitAnnex" :key="index">
                <li><a :href="annex.url">{{ annex.name }}</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div class="comment-new">
          <p data-time="1536546098">截止日期：<span>{{ deadline }}</span><b>{{ deadline1 }}</b></p>
          <a href="/Discuss/index/homeworkid/MDAwMDAwMDAwMLOsz5eGqbev.html">
            <span><b>3</b>条讨论</span>

          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  name: 'HomeworkItem',
  components: {
    moment,
  },
  computed: {
    createTime() {
      return moment(this.homework.createTime).format('YYYY-MM-DD');
    },
    createTime2() {
      return moment(this.homework.createTime).format('HH:mm:ss');
    },
    deadline() {
      return moment(this.homework.deadline).format('YYYY-MM-DD');
    },
    deadline1() {
      return moment(this.homework.deadline).format('HH:mm:ss');
    },
  },
  props: {
    homework: {
      type: Object,
      default: () => {
        return {
          weiJiao: null,
          yiYue: null,
          submit: false,
          createTime: new Date(),
          student_work_message: null,
          weiPi: null,
          description: null,
          id: null,
          title: null,
          deadline: new Date(),
          annex: null,
          fullGrade: null,
        };
      },
    },
  },
};
</script>
<style scoped>
  .annex {
    margin-top: 10px;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .homework-list .homework-box {
    padding: 0 20px 0 40px;
    border: 1px solid #E2E6ED;
    border-radius: 8px;
    background: #FFF;
    margin-top: 20px;
  }

  .homework-list .homework-box .announce-cont-box {
    padding: 0 0 20px;
  }

  .announce-cont-box .title .work-type {
    color: #AAA;
    font-size: 0;
    padding: 21px 0 10px;
    line-height: 30px;
  }

  .fl {
    float: left;
  }

  .announce-cont-box .title .work-type span:first-child {
    color: #5F6368;
    background: #F1F3F4;
    padding: 3px 5px;
    border-radius: 2px;
  }

  .announce-cont-box .title .work-type span {
    font-size: 14px;
    margin-right: 15px;
    color: #5F6368;
  }

  .announce-cont-box .title .opt {
    float: right;
    width: 34px;
    height: 34px;
    margin-top: 10px;
    position: relative;
  }

  .announce-cont-box .title .opt .opt-btn {
    display: block;
    width: 34px;
    height: 34px;
    /*background: url(/Public/Home/img/opt1.png) left center no-repeat;*/
    border-radius: 3px;
  }

  .fr {
    float: right;
  }

  .homework-list .work-new-r .total-cont {
    min-width: 290px;
    height: 66px;
    margin-top: 5px;
    margin-right: 0;
    border: none;
    background: #FFF;
    padding: 0;
  }

  .homework-list .work-new-r .total-cont p {
    font-size: 0;
    line-height: 20px;
    text-align: center;
    float: left;
  }

  .homework-list .total-cont p {
    font-size: 0;
    line-height: 20px;
  }

  .homework-list .work-new-r .total-cont p a:first-child {
    font-size: 30px;
    height: 44px;
    line-height: 44px;
  }

  .homework-list .work-new-r .total-cont p a:last-child {
    font-size: 14px;
    height: 26px;
    line-height: 26px;
  }

  .homework-list .work-new-r .total-cont p a {
    display: block;
    min-width: 80px;
    padding-left: 15px;
    color: #707070;
    padding-right: 15px;
  }

  .homework-list .homework-box .announce-cont-box .work-new-l {
    margin-right: 320px;
    height: auto;
  }

  .comment-new {
    height: 20px;
    line-height: 20px;
  }

  .comment-new p {
    padding-right: 10px;
  }

  .comment-new a, .comment-new p {
    float: left;
    margin-right: 20px;
    color: #A0A0A0;
  }

  .comment-new p b {
    font-weight: 400;
    margin-left: 10px;
  }

  .announce-cont-box .work-title a {
    display: inline-block;
    /*color: #3B3D45;*/
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    padding-bottom: 5px;
    word-break: break-all;
    word-wrap: break-word;
  }
</style>
