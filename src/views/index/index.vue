<template>
  <div class="main">

    <div id="indextop" class="header header2 header-theme-none">
      <div class="logo fl">
        <a href="https://www.ketangpai.com/" class="active"></a>
      </div>
      <div class="nav fl">
        <a href="https://www.ketangpai.com/" class="active">首页</a>
        <a href="https://www.ketangpai.com/index/mobile.html">移动教学</a>
        <a href="https://www.ketangpai.com/ExcellentResources/indexmain.html?type=1">精品专区</a>
        <div id="solutiontop" style="float:left;" class="">
          <a target="_blank" style="cursor: pointer;">解决方案</a>
          <ul id="solutionul">
            <div style="height:10px;"></div>
            <li class="solutionli"><a href="https://www.ketangpai.com/index/aplus.html" class="nobg">申请机构版</a></li>
            <li class="solutionli"><a
              href="https://www.ketangpai.com/index/localprivate.html"
              class="nobg"
            >本地化部署</a></li>
            <div style="height:10px;"></div>
          </ul>
        </div>
        <a href="https://www.ketangpai.com/VipActivity/vipequitys" class="" target="_blank">会员权益</a>
        <a href="https://www.ketangpai.com/help/index.html">帮助中心</a>
        <a href="https://www.ketangpai.com/index/updateDynamics" class="">产品动态</a>
      </div>

      <div class="log-reg fr">
        <router-link class="login" to="/user/login" >登录</router-link>
        <router-link class="register" to="/user/register" >注册</router-link>
      </div>
    </div>
    <div class="home-page">
      <div class="section1">
        <div class="swiper-container swiper-container-horizontal swiper-container-fade">
          <div class="swiper-wrapper" style="width: 100% !important; transition-duration: 0ms;">
            <!-- <div class="swiper-slide s1"></div>  -->
            <div
              class="swiper-slide s3 swiper-slide-active"
              style="width: 1519px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            ></div>
            <div
              class="swiper-slide s2 swiper-slide-next"
              style="width: 1519px; opacity: 0; transform: translate3d(-1519px, 0px, 0px); transition-duration: 0ms;"
            >
              <a
                href="https://www.ketangpai.com/ExcellentResources/indexmain.html"
                style="display:inline-block;width: 100%;height:100%;"
              ></a></div>
            <!-- <div class="swiper-slide s4"></div> -->
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span
            class="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></span><span
            class="swiper-pagination-bullet"
          ></span></div>
        </div>
      </div>
      <div class="section2-1">
        <div class="cWidth">
          <div class="summaryBox">
            <ul>
              <li>
                <img src="@/assets/home/summary/1.png" alt="">
                <h2>极简教学主义</h2>
                <p>无安装，无插件，无需专门学习；掌握简单，三分钟上手；上传一个课件，即可开启精彩的课堂</p>
              </li>
              <li>
                <img src="@/assets/home/summary/2.png" alt="">
                <h2>精彩的课堂教学</h2>
                <p>提供更多课堂互动场景：课件讲解，手机遥控，标记疑问，评论，弹幕互动，同屏课件，语音直播...</p>
              </li>
              <li>
                <img src="@/assets/home/summary/3.png" alt="">
                <h2>有趣的课堂互动</h2>
                <p>抢答，点名和随机提问，多种表现奖励形式，记录混合教学过程，激发学生学习原动力，创造更精彩的课堂</p>
              </li>
              <li>
                <img src="@/assets/home/summary/4.png" alt="">
                <h2>实时随堂试题互动</h2>
                <p>上课讲解课件时，随时发起随堂试题互动：投票、评价、拍照、选择、简答等多种题型，实时作答，即时分析</p>
              </li>
              <li>
                <img src="@/assets/home/summary/5.png" alt="">
                <h2>精准的考勤签到</h2>
                <p>二维码，数字口令，GPS，传统考勤等多种考勤形式；杜绝代签，一键导出考勤记录</p>
              </li>
              <li>
                <img src="@/assets/home/summary/6.png" alt="">
                <h2>作业神器</h2>
                <p>81种文档格式作业在线展示和批阅，随时随地批改作业；实时查重，精准比对，避免学生抄袭；自动管理成绩，一键下载作业数据</p>
              </li>
              <li>
                <img src="@/assets/home/summary/7.png" alt="">
                <h2>智能成绩管理</h2>
                <p>汇总考勤、表现、作业、测试、平时成绩、期末成绩；自由调整成绩权重，汇总最终教学成绩，科学权威</p>
              </li>
              <li>
                <img src="@/assets/home/summary/8.png" alt="">
                <h2>教学全过程数据分析</h2>
                <p>教学全过程活动数据自动生成，实时查看课程和学生数据面板和报表，教学数据可留存，可追溯</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section3-1">
        <!-- <img src="/Public/Home/img/section3-1.jpg" alt=""> -->
      </div>
      <div class="section8" id="section-words">
        <h3>媒体报道</h3>
        <p>课堂派深耕教学管理，受到广泛认可</p>
        <div class="lt"></div>
        <div class="gt"></div>
        <ul class="mediareportul" style="margin-left: -1820.4px; transform: translateX(-2150px); width: 8600px;">
          <li class="mrli" index="4" len="6">
            <div class="mrtitle"><a
              target="_blank"
              href="http://news.ncepu.edu.cn/mthd/76621.htm"
            >【华北电力大学】“互联网+”让教育发现每一个学生</a>
            </div>
            <div class="mrinfo">
              “课堂上教师要及时了解学生对内容的掌握程度，课下学生也希望教师能对自己的学习困难进行及时的指导。”在以前，这些实现起来比较困难的事情，“课堂派”可以让这一切变得轻而易举。
            </div>
            <div class="mrbt">
              <div class="mrdate">2016/04/22</div>
              <div class="mrlogo"><img src="assert/huadian.png" alt=""></div>
            </div>
          </li>
          <li class="mrli" index="5" len="6">
            <div class="mrtitle"><a target="_blank" href="http://edu.163.com/15/0327/14/ALNHV72O00294MBF.html">【网易教育】课堂派：教师指向型在线教育平台新思路</a>
            </div>
            <div class="mrinfo">
              目前，教育资源渐趋雷同并竞相抢占市场份额，在线教育发展进入瓶颈期。可喜的是，课堂派的出现打破了这一随大流的现有局面，致力于教师指向型在线教育平台开发，为在线教育市场发展提出新思路。
            </div>
            <div class="mrbt">
              <div class="mrdate">2015/03/27</div>
              <div class="mrlogo"><img src="assert/wangyi.png" alt=""></div>
            </div>
          </li>
          <li class="mrli mainli" index="0" len="6">
            <div class="mrtitle"><a target="_blank" href="http://edu.qq.com/a/20180719/029331.htm">助力智慧课堂：课堂派成为腾讯微校生态战略伙伴
            </a></div>
            <div class="mrinfo">7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&amp;A的传统模式，现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。</div>
            <div class="mrbt">
              <div class="mrdate">2018/07/19</div>
              <div class="mrlogo"><img src="assert/tencent.jpg" alt=""></div>
            </div>
          </li>

          <li class="mrli mainli" index="1" len="6">
            <div class="mrtitle"><a target="_blank" href="https://www.sohu.com/a/228148312_429328">课堂派亮相2018中国“互联网+”数字经济峰会
            </a></div>
            <div class="mrinfo">
              4月12日下午教育分论坛，北京大学软件与微电子学院林院长分享了智慧课堂的建设经验：教学资源呈现多样化、课堂形式丰富、如何把学生从玩手机的屏幕聚焦到课堂互动环节等方面。林院长表示，课堂派在研发过程中，学院的一线教师主动参与，把很多丰富的实际教学经验融入研发当中，使整个智慧课堂的建设更具实用性和前瞻性。
            </div>
            <div class="mrbt">
              <div class="mrdate">2018/04/23</div>
              <div class="mrlogo"><img src="assert/sohu.jpg" alt=""></div>
            </div>
          </li>

          <li class="mrli mainli" index="2" len="6">
            <div class="mrtitle"><a target="_blank" href="http://edu.qq.com/a/20180627/034766.htm">新时代新青年
              课堂派创始人陈杰宾的创业梦
            </a></div>
            <div class="mrinfo">
              6月26日，中国共产主义青年团第十八次全国代表大会在人民大会堂开幕。共青团委对福建省驻京团工委点赞，CCTV新闻频道进行了同步报道。分享会上，课堂派创始人陈杰宾作为闽籍创业青年代表，向在京青年创业者分享了课堂派的发展模式以及创业历程。
            </div>
            <div class="mrbt">
              <div class="mrdate">2018/06/27</div>
              <div class="mrlogo"><img src="assert/tencent.jpg" alt=""></div>
            </div>
          </li>

          <li class="mrli mainli liactive" index="3" len="6">
            <div class="mrtitle"><a
              target="_blank"
              href="http://news.sina.com.cn/o/2015-08-19/doc-ifxfxrai2235429.shtml"
            >【新浪新闻】课堂派云管理颠覆高校传统实习模式</a>
            </div>
            <div class="mrinfo">
              用课堂派最大的好处就是在学习的过程中，随时跟老师进行沟通和分享，无论从知识和情感层面都需要倾诉，而课堂派不仅提供跟老师同学交流的机会，还能够获得别人的指导和鼓励，让整个学习过程更加轻松。
            </div>
            <div class="mrbt">
              <div class="mrdate">2015/08/19</div>
              <div class="mrlogo"><img src="@/assets/home/mediaLogo/sina.png" alt=""></div>
            </div>
          </li>

          <li class="mrli mainli" index="4" len="6">
            <div class="mrtitle"><a
              target="_blank"
              href="http://news.ncepu.edu.cn/mthd/76621.htm"
            >【华北电力大学】“互联网+”让教育发现每一个学生</a>
            </div>
            <div class="mrinfo">
              “课堂上教师要及时了解学生对内容的掌握程度，课下学生也希望教师能对自己的学习困难进行及时的指导。”在以前，这些实现起来比较困难的事情，“课堂派”可以让这一切变得轻而易举。
            </div>
            <div class="mrbt">
              <div class="mrdate">2016/04/22</div>
              <div class="mrlogo"><img src="@/assets/home/mediaLogo/huadian.png" alt=""></div>
            </div>
          </li>

          <li class="mrli mainli" index="5" len="6">
            <div class="mrtitle"><a target="_blank" href="http://edu.163.com/15/0327/14/ALNHV72O00294MBF.html">【网易教育】课堂派：教师指向型在线教育平台新思路</a>
            </div>
            <div class="mrinfo">
              目前，教育资源渐趋雷同并竞相抢占市场份额，在线教育发展进入瓶颈期。可喜的是，课堂派的出现打破了这一随大流的现有局面，致力于教师指向型在线教育平台开发，为在线教育市场发展提出新思路。
            </div>
            <div class="mrbt">
              <div class="mrdate">2015/03/27</div>
              <div class="mrlogo"><img src="@/assets/home/mediaLogo/wangyi.png" alt=""></div>
            </div>
          </li>
          <li class="mrli" index="0" len="6">
            <div class="mrtitle"><a target="_blank" href="http://edu.qq.com/a/20180719/029331.htm">助力智慧课堂：课堂派成为腾讯微校生态战略伙伴
            </a></div>
            <div class="mrinfo">7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&amp;A的传统模式，现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。</div>
            <div class="mrbt">
              <div class="mrdate">2018/07/19</div>
              <div class="mrlogo"><img src="@/assets/home/mediaLogo/tencent.jpg" alt=""></div>
            </div>
          </li>
          <li class="mrli" index="1" len="6">
            <div class="mrtitle"><a target="_blank" href="https://www.sohu.com/a/228148312_429328">课堂派亮相2018中国“互联网+”数字经济峰会
            </a></div>
            <div class="mrinfo">
              4月12日下午教育分论坛，北京大学软件与微电子学院林院长分享了智慧课堂的建设经验：教学资源呈现多样化、课堂形式丰富、如何把学生从玩手机的屏幕聚焦到课堂互动环节等方面。林院长表示，课堂派在研发过程中，学院的一线教师主动参与，把很多丰富的实际教学经验融入研发当中，使整个智慧课堂的建设更具实用性和前瞻性。
            </div>
            <div class="mrbt">
              <div class="mrdate">2018/04/23</div>
              <div class="mrlogo"><img src="@/assets/home/mediaLogo/sohu.jpg" alt=""></div>
            </div>
          </li>
        </ul>
        <ul class="mrdotul">

          <li class="dot" index="0" len="6">
          </li>

          <li class="dot" index="1" len="6">
          </li>

          <li class="dot" index="2" len="6">
          </li>

          <li class="dot dotactive" index="3" len="6">
          </li>

          <li class="dot" index="4" len="6">
          </li>

          <li class="dot" index="5" len="6">
          </li>

        </ul>
      </div>
      <div class="section7" id="section-cooperation">
        <div class="cWidth">
          <h3><span>6000+ </span>学校正在使用课堂派</h3>
          <!-- <p>目前有<span>1000+</span>个不同学科，<span>500+</span>所学校的教师加入课堂派，在这里管理他们的课堂和资料</p> -->
          <div class="all">
            <div class="onelogos">
              <img src="@/assets/home/slogo/1.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/2.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/3.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/4.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/5.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/6.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/7.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/8.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/9.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/10.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/11.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/12.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/13.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/14.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/15.png" alt="">
            </div>
            <div class="onelogos">
              <img src="@/assets/home/slogo/16.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="cWidth">
        <div class="nav-new clearfix">
          <a href="https://www.ketangpai.com/index/abouts.html">关于我们</a>
          <a href="https://www.ketangpai.com/index/contact.html">联系我们</a>
          <a href="https://www.ketangpai.com/index/service.html">服务条款</a>
          <a href="https://www.ketangpai.com/index/older.html" target="_blank">浏览器下载</a>
          <a href="https://www.ketangpai.com/index/updateDynamics">更新动态</a>
        </div>
        <p>Copyright © 2014 ketangpai.com All Rights Reserved. 京ICP备14023276号-4</p>
      </div>
    </div>
    <span style="display: none"></span>
  </div>
</template>

<script></script>

<style scoped>
  .home-page {
    letter-spacing: 2px
  }

  .home-page .section1 {
    height: 520px
  }

  .home-page .section1 .swiper-container {
    height: 520px;
    width: 100%
  }

  .home-page .section1 .swiper-container .s2 {
    background: url(~@/assets/home/swiper/8.png) center top repeat-x
  }

  .home-page .section1 .swiper-container .s3 {
    background: url(~@/assets/home/swiper/6.png) center top repeat-x
  }

  .home-page .section1 .swiper-container .swiper-pagination-bullet {
    width: 34px;
    height: 4px;
    display: inline-block;
    background: rgba(255, 255, 255, .5);
    margin: 0 6px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(44, 87, 161, .25);
    border-radius: 0
  }

  .home-page .section1 .swiper-container .my-bullet-active {
    background: rgba(255, 255, 255, 1)
  }

  .logo a {
    display: block;
    height: 32px;
    margin-top: 12px;
    background: url("~@/assets/home/logo.png");
    width: 127px;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 93px
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 30px
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 30px
  }

  .home-page .section1 .banner_logo {
    text-align: center;
    font-size: 50px;
    color: #fff;
    margin-top: 190px;
    letter-spacing: 5px;
    font-weight: lighter
  }

  .home-page .section1 .cWidth {
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -490px;
    text-align: center
  }

  .home-page .section1 .page_container {
    position: absolute;
    left: 0;
    top: 0
  }

  .home-page .section1 .reg-btn {
    display: none;
    width: 240px;
    height: 60px;
    margin-top: 0;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .1);
    background: #357ae8;
    color: #fff;
    text-align: center;
    font-size: 25px;
    line-height: 60px;
    padding-left: 10px;
    padding-right: 10px
  }

  .home-page .section1 .cWidth {
    margin-top: 280px;
    font-size: 0
  }

  .home-page .section1 .reg-btn:hover {
    background-color: #4D90FE
  }

  .home-page .section1 .reg-btn:active {
    background-color: #4D90FE;
    width: 238px;
    height: 58px;
    border: 1px solid #FFF;
    box-shadow: 0 0 0 1px #4D90FE
  }

  .word h3 {
    padding-bottom: 60px;
    font-size: 30px;
    font-weight: 400
  }

  .word p {
    line-height: 34px;
    font-size: 18px
  }

  .word p:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: middle
  }

  .home-page .section2-1 {
    height: 540px;
    position: relative;
    background-color: #fff
  }

  .home-page .section2-1 .summaryBox {
    position: absolute;
    top: -80px;
    z-index: 2;
    width: 980px
  }

  .home-page .section2-1 ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap
  }

  .home-page .section2-1 ul li {
    width: 222px;
    height: 260px;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(4, 0, 0, .1);
    border-radius: 4px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box
  }

  .home-page .section2-1 ul li:not(:nth-child(4n)) {
    margin-right: 30px
  }

  .home-page .section2-1 ul li img {
    margin-top: 25px;
    width: 72px;
    height: 72px
  }

  .home-page .section2-1 ul li h2 {
    color: #1F2023;
    font-size: 18px;
    margin-top: 16px
  }

  .home-page .section2-1 ul li p {
    color: #AAB5C2;
    margin-top: 16px;
    font-size: 13px;
    width: 100%;
    word-break: break-all
  }

  .home-page .section3-1 {
    width: 100%;
    min-height: 1781px;
    background: url(~@/assets/home/section3-1.png) 50% 0 no-repeat;
    background-size: cover
  }

  .home-page .section2 {

  }

  .home-page .section2 .word {
    text-align: center;
    padding-top: 65px
  }

  .home-page .section2 .word h3 {
    padding-bottom: 30px
  }

  .home-page .section2 .word p {
    font-size: 18px;
    color: #5b5b5b
  }

  .home-page .section2 .sx-box {

  }

  .home-page .section2 .sx-box .sx-bg {
    width: 861px;
    height: 500px;
    background: #000;
    position: absolute;
    left: 63px;
    top: 42px;
    opacity: .3;
    filter: alpha(opacity:30);
    display: none
  }

  .home-page .section2 .sx-box .fk1 {
    position: absolute;
    width: 0;
    height: 0;
    border: 2px solid #dcdcdc;
    left: 150px;
    top: 47px;
    display: none;
    overflow: hidden
  }

  .home-page .section2 .sx-box .fk2 {

  }

  .home-page .section2 .sx-box .fk3 {
    position: absolute;
    width: 99px;
    height: 0;
    overflow: hidden;
    border: 2px solid #dcdcdc;
    left: 137px;
    top: 203px;
    display: none
  }

  .home-page .section4, .home-page .section6, .home-page .section7 {
    border-bottom: 1px solid #c9c9c9
  }

  .home-page .section2 .sx-box .fk4 {

  }

  .home-page .section3 {
    background: #ececec;
    height: 580px;
    border-top: 1px solid #c9c9c9
  }

  .home-page .section3 .word {
    float: right;
    padding-top: 130px;
    color: #fff
  }

  .home-page .section3 .word p:before {
    background-color: #fff
  }

  .home-page .section4 {
    height: 580px;
    background: #fcfcfc
  }

  .home-page .section4 .word {
    float: left;
    padding-top: 158px;
    padding-left: 14px;
    color: #2d2d2d
  }

  .home-page .section4 .word p {
    color: #595959
  }

  .home-page .section4 .word p:before {
    background-color: #595959
  }

  .home-page .section4 .lang {
    float: right;
    margin-top: 58px;
    padding-right: 10px
  }

  .home-page .section5 {
    background: #c7d3e3;
    height: 580px;
    position: relative
  }

  .home-page .section5 .word {
    float: right;
    padding-top: 158px;
    z-index: 1;
    position: relative
  }

  .home-page .section5 .word h3 {
    color: #192338
  }

  .home-page .section5 .word p {
    color: #274271
  }

  .home-page .section5 .word p:before {
    background-color: #556888
  }

  .home-page .section5 .lang {
    position: absolute;
    left: 50%;
    margin-left: -590px;
    bottom: 0
  }

  .home-page .section5 .lang img {
    display: block
  }

  .home-page .section6 {
    background: #fcfcfc;
    height: 580px
  }

  .home-page .section6 h3 {
    text-align: center;
    font-size: 30px;
    padding-top: 70px;
    font-weight: 400
  }

  .home-page .section6 .all {
    margin-top: 90px
  }

  .home-page .section7 {
    background: #fff
  }

  .home-page .section7 h3 {
    text-align: center;
    font-size: 24px;
    padding-top: 70px;
    font-weight: 700;
    color: #333
  }

  .home-page .section7 h3 span {
    color: #32BAF0
  }

  .home-page .section7 p {
    margin-top: 30px;
    text-align: center;
    font-size: 18px;
    color: #595959
  }

  .home-page .section7 p span {
    color: #e71f19
  }

  .home-page .section7 .all {
    margin-top: 75px;
    text-align: center
  }

  .home-page .section7 .all::after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  .home-page .section8 {
    background: #fff;
    height: 580px;
    overflow-x: hidden;
    position: relative;
    width: 100%
  }

  .home-page .section8 h3 {
    text-align: center;
    font-size: 30px;
    padding-top: 70px;
    font-weight: 400
  }

  .home-page .section8 p {
    color: #BFBFBF;
    font-size: 14px;
    text-align: center;
    margin-top: 20px
  }

  .home-page .section8 .TVsayswrap {
    width: 985px;
    margin: 90px auto 0
  }

  .home-page .section8 .TVsayswrap .item {
    display: inline-block;
    vertical-align: top;
    letter-spacing: 0
  }

  .home-page .section8 .left-yin, .home-page .section8 .right-yin
  .home-page .section8 .left-yin {
    background-position: left center
  }

  .home-page .section8 .right-yin {
    background-position: right center
  }

  .home-page .section8 .center-cont {
    width: 870px;
    padding: 0 10px
  }

  .home-page .section8 .center-cont p {
    font-size: 24px;
    padding-bottom: 40px;
    color: #595959
  }

  .home-page .section8 .center-cont span {
    font-size: 16px;
    color: #2B98F0
  }

  .home-page .section8 .center-cont a {
    color: #2B98F0
  }

  .home-page .section8 .center-cont a:hover {
    text-decoration: underline
  }

  .home-page .section8 .TVsaysmenu
  .home-page .section8 .TVsaysmenu a {
    display: inline-block;
    margin-right: 30px;
    border: 3px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 54px;
    width: 54px;
    height: 54px;
    position: relative;
    overflow: hidden
  }

  .home-page .section8 .TVsaysmenu a:last-child {
    margin-right: 0
  }

  .home-page .section8 .TVsaysmenu a img {
    width: 54px;
    height: 54px
  }

  .home-page .section8 .TVsaysmenu a:hover {
    border-radius: 50%
  }

  .home-page .section8 .TVsaysmenu a:before {
    content: '';
    display: block;
    position: absolute;
    left: -3px;
    width: 100%;
    top: -3px;
    height: 100%;
    background-color: rgba(230, 230, 230, .85);
    border: 3px solid #ccc;
    border-radius: 50%;
    -webkit-transition: opacity .5s;
    -moz-transition: opacity .5s;
    -ms-transition: opacity .5s;
    -o-transition: opacity .5s;
    transition: opacity .5s
  }

  .home-page .section8 .TVsaysmenu a.active:before, .home-page .section8 .TVsaysmenu a:hover:before {
    opacity: 0
  }

  .fullSlide {
    width: 100%;
    position: relative;
    height: 540px
  }

  .fullSlide .bd li, .fullSlide .bd ul {
    width: 100% !important
  }

  .fullSlide .bd {
    margin: 0 auto;
    position: relative;
    z-index: 0;
    overflow: hidden
  }

  .fullSlide .bd li {
    height: 540px;
    overflow: hidden;
    text-align: center
  }

  .fullSlide .hd {
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    height: 30px;
    line-height: 30px
  }

  .fullSlide .hd ul {
    text-align: center
  }

  .fullSlide .hd ul li {
    cursor: pointer;
    display: inline-block;
    zoom: 1;
    width: 42px;
    height: 11px;
    margin: 1px;
    overflow: hidden;
    background: #000;
    filter: alpha(opacity=50);
    opacity: .5;
    line-height: 999px
  }

  .fullSlide .next, .fullSlide .prev {
    position: absolute;
    top: 50%;
    margin-top: -50px;
    z-index: 1;
    width: 40px;
    height: 100px;
    cursor: pointer;
    display: none
  }

  .fullSlide .hd ul .on {
    background: red
  }

  .fullSlide .prev
  .fullSlide .next
  .fullSlide .reg-btn {
    display: inline-block;
    width: 220px;
    height: 54px;
    background: #a7b92f;
    margin-top: 387px;
    margin-left: 210px;
    color: #FFF;
    line-height: 52px;
    text-align: center;
    font-size: 30px;
    border: 1px solid #000
  }

  .fullSlide .reg-btn:hover {
    background: #7d8e0c
  }

  .index-banner-vip-text
  .fullSlide .cWidth {
    text-align: left;
    margin-top: 395px;
    font-size: 0
  }

  .fullSlide .cWidth a {
    display: inline-block;
    width: 232px;
    height: 66px;
    border-radius: 50px;
    border: 2px solid #FFF;
    line-height: 66px;
    text-align: center;
    font-size: 28px;
    color: #FFF;
    margin-right: 16px
  }

  .fullSlide .free-reg-btn {
    display: inline-block;
    width: 240px;
    height: 60px;
    background: #4d00ff;
    margin-top: 463px;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .1);
    font-size: 24px;
    color: #fff;
    line-height: 60px;
    margin-left: 12px;
    text-align: center
  }

  .fullSlide .free-reg-btn:hover {
    background-color: #7a41ff
  }

  .fullSlide .free-reg-btn:active {
    background-color: #7a41ff;
    width: 238px;
    height: 58px;
    border: 1px solid #FFF;
    box-shadow: 0 0 0 1px #4D90FE;
    margin-top: 462px
  }

  .fullSlide .free-vip-btn {
    display: inline-block;
    width: 240px;
    height: 60px;
    background: #f62d61;
    margin-top: 463px;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .1);
    font-size: 24px;
    color: #fff;
    line-height: 60px;
    margin-right: 12px;
    text-align: center
  }

  .fullSlide .free-vip-btn:hover {
    background-color: #ff658d
  }

  .fullSlide .free-vip-btn:active {
    background-color: #ff658d;
    width: 238px;
    height: 58px;
    border: 1px solid #FFF;
    box-shadow: 0 0 0 1px #4D90FE;
    margin-top: 462px
  }

  .teachersDay-image
  .teachersDay-image a {
    position: absolute;
    display: block;
    top: 210px;
    z-index: 99;
    width: 180px;
    height: 40px
  }

  .teachersDay-text
  .btn-inActivity
  .btn-inActivity:hover {
    background-position: -4px -89px
  }

  .btn-teacherDay-reg
  .btn-teacherDay-reg:hover {
    background-position: -206px -88px
  }

  .btn-teacherDay-reg-big
  .btn-teacherDay-reg-big:hover {
    background-position: -11px -71px
  }

  .home-page .section1-chongyang
  .home-page .section1-chongyang .cWidth {
    text-align: center;
    height: 600px
  }

  .home-page .section1-chongyang .reg-btn {

  }

  .home-page .section1-chongyang .reg-btn:hover {
    background-position: -3px -59px
  }

  .home-page .section1-chongyang .reg-btn:active {
    background-position: -3px -114px
  }

  .home-page .section1-wansheng
  .home-page .section1-wansheng .cWidth {
    text-align: center;
    height: 600px
  }

  .home-page .section1-wansheng .reg-btn {

  }

  .home-page .section1-wansheng .reg-btn:hover {
    background-position: -12px -90px
  }

  .home-page .section1-wansheng .reg-btn:active {
    background-position: -12px -169px
  }

  .home-page .section1-2017teacherday
  .home-page .section1-2017teacherday .cWidth {
    text-align: center;
    height: 600px
  }

  .home-page .section1-2017teacherday .reg-btn {

  }

  .home-page .section1-ganen
  .home-page .section1-ganen .cWidth {
    text-align: center;
    height: 600px
  }

  .home-page .section1-ganen .reg-btn {

  }

  .home-page .section1-ganen .reg-btn:hover {
    background-position: -7px -96px
  }

  .home-page .section1-ganen .reg-btn:active {
    background-position: -7px -177px
  }

  .home-page .section1-yuandan {

  }

  .home-page .section1-yuandan .cWidth {
    height: 675px;
    position: relative;
    text-align: right
  }

  .home-page .section1-yuandan .page_container {
    position: absolute;
    left: 0;
    top: 0
  }

  .home-page .section1-yuandan .reg-btn {

  }

  .home-page .section1-yuandan .reg-btn:hover {
    background-position: center -60px
  }

  .home-page .section1-yuandan .reg-btn:active {
    background-position: center -118px
  }

  .home-page .section1-2018-yuandan {

  }

  .home-page .section1-2018-yuandan .cWidth {
    height: 675px;
    position: relative;
    text-align: right
  }

  .home-page .section1-2018-yuandan .page_container {
    position: absolute;
    left: 0;
    top: 0
  }

  .home-page .section1-2018-yuandan .reg-btn {

  }

  .home-page .section1-2018-yuandan .reg-btn:hover {
    background-position: center -60px
  }

  .home-page .section1-2018-yuandan .reg-btn:active {
    background-position: center -118px
  }

  .home-page .section1-newyear {
    height: 540px;
    position: relative
  }

  .home-page .section1-newyear .div1
  .home-page .section1-newyear .div2
  .home-page .section1-newyear .cWidth {
    height: 540px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -490px;
    text-align: center
  }

  .home-page .section1-newyear .page_container {
    position: absolute;
    left: 0;
    top: 0
  }

  .home-page .section1-newyear .reg-btn {

  }

  .home-page .section1-newyear .reg-btn:hover {
    background-position: center bottom
  }

  .home-page .section1-teacherday
  .home-page .section1-teacherday .index-banner-vip-text
  .home-page .section1-teacherday .cWidth {
    text-align: center
  }

  .home-page .section1-teacherday .reg-btn {

  }

  .home-page .section1-teacherday .reg-btn:hover {
    background-color: #4D90FE
  }

  .home-page .section1-teacherday .reg-btn:active {
    background-color: #4D90FE;
    width: 238px;
    height: 58px;
    border: 1px solid #FFF;
    box-shadow: 0 0 0 1px #4D90FE
  }

  .home-page .section1-teacherday .free-reg-btn {
    display: inline-block;
    width: 240px;
    height: 60px;
    background: #4d00ff;
    margin-top: 90px;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .1);
    font-size: 24px;
    color: #fff;
    line-height: 60px;
    margin-left: 12px
  }

  .home-page .section1-teacherday .free-reg-btn:hover {
    background-color: #7a41ff
  }

  .home-page .section1-teacherday .free-reg-btn:active {
    background-color: #7a41ff;
    width: 238px;
    height: 58px;
    border: 1px solid #FFF;
    box-shadow: 0 0 0 1px #4D90FE;
    margin-top: 89px
  }

  .home-page .section1-teacherday .free-vip-btn {
    display: inline-block;
    width: 240px;
    height: 60px;
    background: #f62d61;
    margin-top: 90px;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .1);
    font-size: 24px;
    color: #fff;
    line-height: 60px;
    margin-right: 12px
  }

  .home-page .section1-teacherday .free-vip-btn:hover {
    background-color: #ff658d
  }

  .home-page .section1-teacherday .free-vip-btn:active {
    background-color: #ff658d;
    width: 238px;
    height: 58px;
    border: 1px solid #FFF;
    box-shadow: 0 0 0 1px #4D90FE;
    margin-top: 89px
  }

  .home-page .section1-1111 .reg-btn, .home-page .section1-hezi .reg-btn {
    width: 240px;
    margin-top: 430px;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .1);
    display: inline-block
  }

  .home-page .section1-hezi
  .home-page .section1-hezi .cWidth {
    text-align: center;
    height: 600px
  }

  .home-page .section1-hezi .reg-btn
  .home-page .section1-1111
  .home-page .section1-1111 .cWidth {
    text-align: center;
    height: 600px
  }

  .home-page .section1-1111 .reg-btn
  .header-theme-newyear2018 {
    width: 100%;
    background: 0 0;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9
  }

  .header-theme-newyear2018 .nav a {
    float: left;
    color: #cc1e29;
    font-size: 16px;
    padding: 0 20px;
    margin-right: 32px
  }

  .header-theme-newyear2018 .nav a.active, .header-theme-newyear2018 .nav a:hover {
    background: #f2e8e8
  }

  .header-theme-newyear2018 .jr-ktp span {
    font-size: 16px;
    color: #cc1e29;
    line-height: 24px;
    vertical-align: middle;
    margin-left: 14px;
    margin-right: 10px
  }

  .header-theme-newyear2018 .jr-ktp a:hover i {
    background-position: left center
  }

  .header-theme-newyear2018 .jr-ktp a:hover span {
    color: #cc1e29
  }

  .header-theme-newyear2018 .log-reg a {
    display: inline-block;
    width: 76px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    color: #cc1e29;
    font-size: 16px
  }

  .header-theme-newyear2018 .log-reg a.login:hover {
    color: #cc1e29
  }

  .header-theme-newyear2018 .log-reg a.regist, .header-theme-newyear2018 a.regist:hover {
    background: #f2e8e8
  }

  .home-page .section1-newyear-2018 {
    height: 540px;
    position: relative;
    padding-top: 60px;
    background: #fff
  }

  .home-page .section1-newyear-2018 .divall
  .home-page .section1-newyear-2018 .cWidth {
    height: 540px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -490px;
    text-align: center;
    padding-top: 60px
  }

  .home-page .section1-newyear-2018 .page_container {
    position: absolute;
    left: 0;
    top: 0
  }

  .home-page .section1-newyear-2018 .reg-btn {

  }

  .home-page .section1-newyear-2018 .reg-btn:hover {
    background-position: center bottom
  }

  .toplogo
  .bottext {
    text-align: center;
    height: 18px;
    font-size: 18px;
    line-height: 18px
  }

  .mrbt, .mrtitle {
    height: 30px;
    line-height: 30px
  }

  .onelogo {
    width: 101px;
    margin-left: 72px;
    margin-right: 72px;
    float: left;
    user-select: none
  }

  #zaixiankaoqin .toplogo {
    background-position: -95px 0
  }

  #jilubiaoxian .toplogo {
    background-position: -335px 0
  }

  #zuoyetongji .toplogo {
    background-position: -582px 0
  }

  #kejiangongxiang .toplogo {
    background-position: -825px 0
  }

  #chengjihuizong .toplogo {
    background-position: -95px -184px
  }

  #kechengtaolun .toplogo {
    background-position: -335px -184px
  }

  #banjigonggao .toplogo {
    background-position: -582px -184px
  }

  #zhujiaoxiezhu .toplogo {
    background-position: -825px -184px
  }

  #banjigonggao, #chengjihuizong, #kechengtaolun, #zhujiaoxiezhu {
    margin-top: 60px
  }

  li.mrli {
    width: 700px;
    margin-left: 40px;
    margin-right: 40px;
    padding: 40px;
    float: left;
    opacity: .4;
    transition: opacity 1s;
    -moz-transition: opacity 1s;
    -webkit-transition: opacity 1s;
    -o-transition: opacity 1s;
    box-shadow: 0 5px 20px 0 rgba(204, 204, 204, .5), 0 -5px 20px 0 rgba(204, 204, 204, .5), 5px 0 20px 0 rgba(204, 204, 204, .5), -5px 0 20px 0 rgba(204, 204, 204, .5)
  }

  .mrtitle {
    font-size: 26px
  }

  .mrtitle a {
    color: #333
  }

  ul.mediareportul {
    overflow: hidden;
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative
  }

  .mrlogo img {
    max-height: 30px
  }

  .mrdate {
    float: left;
    font-size: 16px
  }

  .mrlogo {
    float: right
  }

  .mrinfo {
    height: 100px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 25px;
    overflow: hidden
  }

  .gt, .lt {
    height: 320px;
    position: absolute;
    top: 150px;
    width: 2000px;
    z-index: 10;
    cursor: pointer
  }

  .liactive {
    opacity: 1 !important
  }

  .lt {
    background: url(~@/assets/home/toprev.png) right no-repeat;
    right: 50%;
    transform: translateX(-430px)
  }

  .gt {
    background: url(~@/assets/home/tonext.png) left no-repeat;
    left: 50%;
    transform: translateX(430px)
  }

  ul.mrdotul {
    width: 980px;
    margin: 0 auto;
    height: 20px;
    text-align: center;
    letter-spacing: 10px
  }

  li.dot {
    display: inline-block;
    margin: 0;
    padding: 0;
    height: 10px;
    width: 10px;
    background: #bbb;
    border-radius: 10px;
    transition: width 1s;
    -moz-transition: width 1s;
    -webkit-transition: width 1s;
    -o-transition: width 1s
  }

  .dotactive {
    width: 40px !important
  }

  .onelogos {
    width: 25%;
    height: 120px;
    text-align: center;
    float: left;
    user-select: none
  }

  @media screen and (max-width: 800px) {
    .home-page .section3-1 {
      min-height: 1000px
    }
  }

  @media screen and (max-width: 1024px) {
    .home-page .section3-1 {
      min-height: 1000px
    }
  }
</style>

<style scoped>
  body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,img,input,li,ol,p,table,td,ul{margin:0;padding:0}body{font-size:14px;font-family:'PingFang SC',tahoma,arial,'helvetica neue','hiragino sans gb','microsoft yahei ui','microsoft yahei',simsun,sans-serif;background:#ECECEC;color:#2d2d2d}img{border:none}li{list-style:none}input,select,textarea{outline:0;border:none;background:0 0;font-family:"微软雅黑"}textarea{resize:none}a{text-decoration:none;outline:0;blr:expression(this.onFocus=this.blur())}a:active{background:0 0}.link{color:#2D2D2D}.link:hover{text-decoration:underline}input[type=text]::-ms-clear{display:none}input[type=text]::-ms-reveal{display:none}.fl{float:left}.fr{float:right}.clearfix:after{content:"";display:block;clear:both}.clearfix{zoom:1}.cWidth{width:980px;margin-left:auto;margin-right:auto}.show{display:block}.hide{display:none;}.header{width:100%;background:#484848;height:60px}.header2{background:#272e38;height:60px}.header .logo{padding-left:60px;height:60px;margin-right:52px}.header .logo a{display:block;height:32px;margin-top:12px;background:url(/Public/Home/img/logo.png);width:127px;}.header .nav{height:60px;line-height:60px}.header .nav a{float:left;color:#FFF;font-size:16px;padding:0 20px;margin-right:32px}.header .nav a.active:not(.nobg){background:#2C58AB}.header .nav a:hover,.header2 .nav a:hover{background:rgba(0,0,0,.15)}.header2 .nav a.active{background:#2C58AB}.header .log-reg{padding-right:60px;margin-top:10px;font-size:0}.header .log-reg a{display:inline-block;width:76px;height:36px;text-align:center;line-height:36px;color:#FFF;font-size:16px}.header .log-reg a.login{margin-right:20px;border:1px solid}.header .log-reg a.regist{background:#357ae8}.header .log-reg a.login:hover{color:#4D90FE}.header .log-reg a.regist:hover{background:#4D90FE}.header .log-reg a.regist:active{width:74px;height:34px;line-height:34px;border:1px solid #fff;box-shadow:0 0 0 1px #4D90FE}.header .jr-ktp{float:right;margin-top:18px;margin-right:42px;width:120px;height:30px;line-height:30px;background:rgba(44,88,171,1);border-radius:15px;box-sizing:border-box;text-align:center}.footer .img-box,.footer p{margin-top:20px;text-align:center}.header .jr-ktp a{display:block}.header .jr-ktp i{display:inline-block;width:22px;height:14px;background:url(/Public/Common/img/jr-new-new.png) left top no-repeat;vertical-align:middle}.header .jr-ktp span{font-size:16px;color:#FFF;line-height:28px;vertical-align:middle;margin-left:14px;margin-right:10px}.header .jr-ktp a:hover i{background-position:left center}.header .jr-ktp a:hover span{color:#edf3fd}.footer{height:150px;background:#ececec}.footer .nav-new{padding-top:36px;text-align:center}.footer .nav-new a{color:#2d2d2d;margin-right:60px}.footer .nav-new a:hover{color:#4d90fe}.footer p{color:#5b5b5b;font-size:12px}.footer .img-box{font-size:0}.footer .img-box a:first-child{margin-right:28px}.gTips{width:100%;position:fixed;bottom:50px;text-align:center;z-index:99999999}.gTips span{height:42px;line-height:42px;padding:0 30px;color:#FFF;display:inline-block;box-shadow:0 3px 10px rgba(0,0,0,.5)}#show-tip span{background:rgba(0,0,0,.85)}#error-tip span{background:rgba(255,0,0,.85)}.sq-progress-lqinfo{position:relative;padding-top:85px;text-align:center}.sq-progress-lqinfo .close{position:absolute;right:20px;top:0;width:30px;height:30px;margin-top:14px;background:url(/Public/Home/img/close.png) left top no-repeat;border-radius:3px}.sq-progress-lqinfo .close:hover{background:url(/Public/Home/img/close.png) left bottom no-repeat}.sq-progress-lqinfo .close:active{background:url(/Public/Home/img/close.png) left bottom no-repeat #dcdcdc}.sq-progress-lqinfo h3{font-size:24px;font-weight:400;color:#95AC4D;line-height:2}.sq-progress-lqinfo p{font-size:14px;color:#2d2d2d;line-height:2;padding:15px 0}.sq-progress-lqinfo.success{background:url(/Public/Home/img/vip-progress-lqright.png) 105px 82px no-repeat;text-align:left;padding-left:230px}.hide2{display:none!important}@media screen and (max-width:1370px){.header .nav a{margin-right:0;padding:0 22px}}@media screen and (max-width:1190px){#indextop{min-width:980px}.header .logo{margin-right:40px;padding-left:50px}.header .log-reg{padding-right:10px}.header .nav a{margin-right:0;padding:0 13px}}@media screen and (max-width:800px){.header .logo{display:none}#indextop{min-width:780px}}
</style>

<style scoped>
  .swiper-slide,.swiper-wrapper{width:100%;height:100%;position:relative}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E")}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:"";width:100%;height:100%;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}
</style>
