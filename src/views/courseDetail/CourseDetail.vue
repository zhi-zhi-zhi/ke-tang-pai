<template>
  <div class="course">
    <div class="course-header">
      <a class="course-header-select-theme" href="javascript:void(0);">
        <a-icon type="skin"/>
        更改背景
      </a>
      <div class="course-header-content">
        <h1 data-semester="2019-2020" data-term="1" style="padding-top: 0;padding-bottom: 5px">测试课堂<i></i></h1>
        <h2>我想我还是怀念React+antd的日子</h2>
        <!--             <div class="codetip">使用以下邀请码邀请学生加课</div> -->
        <div class="course-header-content-box">
          <div class="course-header-content-box-item">
            <div class="course-header-content-box-code">
              <a-icon type="qrcode"/>
              加课码：{{ 'TY94UW' }}
            </div>
          </div>

          <router-link :to="{name:''}">
            <div class="course-header-content-box-item">
              <div class="course-header-content-box-code">
                <a-icon type="user"/>
                成员：{{ '1' }}
              </div>
            </div>
          </router-link>

          <router-link :to="{name:''}">
            <div class="course-header-content-box-item">
              <div class="course-header-content-box-code">
                <a-icon type="pie-chart"/>
                数据分析
              </div>
            </div>
          </router-link>

          <router-link :to="{name: ''}">
            <div class="course-header-content-box-item">
              <div class="course-header-content-box-code">
                <a-icon type="check"/>
                成绩
              </div>
            </div>
          </router-link>

          <div class="course-header-content-box-data" style="float: right">
            <ul>
              <li style="display:block">0</li>
              <li>互动个数</li>
            </ul>
            <ul>
              <li style="display:block">0</li>
              <li>发布作业</li>
            </ul>
            <ul>
              <li style="display:block">0</li>
              <li>发布测试</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div class="course-banner">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="class-interaction">
          <router-link :to="{name:'classroom-index'}">
            <span>课堂互动</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="homework">
          <router-link :to="{name:'classroom-index'}">
            <span>作业</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="topic">
          <router-link :to="{name:'classroom-index'}">
            <span>话题</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="datum">
          <router-link :to="{name:'classroom-index'}">
            <span>资料</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="test">
          <router-link :to="{name:'classroom-index'}">
            <span>测试</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="announcement">
          <router-link :to="{name:'classroom-index'}">
            <span>公告</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </div>

    <router-view />

  </div>
</template>
<script>
export default {
  name: 'CourseDetail',
  data() {
    return {
      current: 'homework',
    };
  },
};
</script>
<style lang="less" scoped>
  .course {

    .course-header {
      position: relative;
      margin: 20px auto 0;
      background: url(//assets.ketangpai.com/theme/teacher/big/22.png) 0 center no-repeat;
      width: 1200px;
      background-size: cover;
      height: 200px;
      border-radius: 8px 8px 0 0;
      padding: 48px 0 0 40px;
      box-sizing: border-box;

      .course-header-select-theme {
        color: #FFF;
        position: absolute;
        top: 15px;
        right: 15px;
        padding-left: 30px;
        cursor: pointer;
      }
    ;

      .course-header-content {
        h1 {
          padding-top: 22px;
          font-size: 36px;
          color: #fff;
        }
      ;

        h2 {
          font-size: 20px;
          font-family: PingFang SC;
          color: rgba(255, 255, 255, 1);
          line-height: 28px;
          width: 600px;
        }
      ;

        h1, h2 {
          font-weight: 500;
          white-space: nowrap;
          /* overflow: hidden; */
          text-overflow: ellipsis;
          margin: 0;
        }

        .course-header-content-box {
          position: relative;
          height: 35px;
          margin: 20px auto 0;

          .course-header-content-box-item {
            display: inline-block;
            position: relative;
            font-size: 12px;
            color: #fff;
            text-align: left;
            height: 24px;
            line-height: 24px;
            background-position: 100px 10px;
            background-size: 14px auto;
            cursor: pointer;
            user-select: none;
            background: rgba(255, 255, 255, .4);
            border-radius: 2px;
            padding-left: 10px;
            padding-right: 10px;
            margin-right: 15px;
          }

          .course-header-content-box-data {
            float: right;
            margin-right: 30px;

            ul {
              display: inline-block;
              margin-top: -50px;

              li {
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                margin-left: 10px;
                position: relative;
                text-align: center;
                padding-left: 10px;
                padding-right: 10px;
                display: inline-block;
                height: 24px;
              }

              li:first-of-type {
                font-size: 40px;
                line-height: 48px;
                height: 50px;
              }

              li + li {
                font-size: 12px;
                line-height: 16px;
                width: 80px;
              }
            }
          }
        }
      }
    }

    .course-banner {
      width: 1200px;
      height: 72px;
      overflow: hidden;
      border-radius: 0 0 8px 8px;

      background: #fff;
      margin: 0 auto;

      ul {
        height: 72px;
        line-height:  68px;
        padding-left: 30px;
        span {

          min-width: 80px;
          height: 67px;
          position: relative;
          padding-left: 10px;
          padding-right: 10px;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }

    .course-footer {
      width: 1200px;
      margin-left: auto;
      margin-right: auto;

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
