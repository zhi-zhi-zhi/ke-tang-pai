<template>
  <div class="homework">
    <div class="homework-publish">
      <a-button size="large" style="margin-right: 20px;">
        发布个人作业
      </a-button>
      <a-button size="large">
        发布小组作业
      </a-button>
      <a-button type="link" style="float:right" size="large":>
        <a-icon type="download"/>
        下载所有作业
      </a-button>
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
</template>
<script>

</script>
<style lang="less">
  .homework {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;

    .homework-publish {
      padding-top: 40px;
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
