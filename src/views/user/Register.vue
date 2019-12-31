<template>
  <div class="main user-layout-register">
    <h3><span>注册</span></h3>
    <a-form id="formRegister" ref="formRegister" :form="form" @submit="handleSubmit">

      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="账户"
          v-decorator="['account', {rules: [{required: true, message: '请输入账户'}], validateTrigger: ['change', 'blur']}]"
        />
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="用户名"
          v-decorator="['username', {rules: [{required: true, message: '请输入用户名'}], validateTrigger: ['change', 'blur']}]"
        />
      </a-form-item>

      <a-popover
        placement="rightTop"
        :trigger="['focus']"
        :getPopupContainer="(trigger) => trigger.parentElement"
        v-model="state.passwordLevelChecked"
      >
        <template slot="content">
          <div style="width: 240px">
            <div :class="['user-register', passwordLevelClass]">强度：<span>{{ passwordLevelName }}</span></div>
            <a-progress :percent="state.percent" :showInfo="false" :strokeColor=" passwordLevelColor "/>
            <div style="margin-top: 10px">
              <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
            </div>
          </div>
        </template>
        <a-form-item>
          <a-input
            size="large"
            type="password"
            @click="handlePasswordInputClick"
            autocomplete="false"
            placeholder="至少 6 位密码，区分大小写"
            v-decorator="['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"
          />
        </a-form-item>
      </a-popover>

      <a-form-item>
        <a-input
          size="large"
          type="password"
          autocomplete="false"
          placeholder="确认密码"
          v-decorator="['password2', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"
        />
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="text"
          autocomplete="false"
          placeholder="学校"
          v-decorator="['school', {rules: [{ required: true, message: '请输入学校' }], validateTrigger: ['change', 'blur']}]"
        />
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="text"
          autocomplete="false"
          placeholder="学号/工号"
          v-decorator="['studentId', {rules: [{ required: !!state.isStudent, message: '请输入学号' }], validateTrigger: ['change', 'blur']}]"
        >
          <a-select slot="addonBefore" size="large" defaultValue="1" @select="handleSelect">
            <a-select-option value="1">学生</a-select-option>
            <a-select-option value="0">教师</a-select-option>
          </a-select>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          placeholder="11 位手机号"
          v-decorator="['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"
        >
          <a-select slot="addonBefore" size="large" defaultValue="+86">
            <a-select-option value="+86">+86</a-select-option>
            <a-select-option value="+87">+87</a-select-option>
          </a-select>
        </a-input>
      </a-form-item>

      <a-row :gutter="16">
        <a-col class="gutter-row" :span="16">
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="验证码"
              v-decorator="['captcha', {rules: [{required: true, message: '请输入验证码'}], validateTrigger: 'blur'}]"
            >
              <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <a-button
            class="getCaptcha"
            size="large"
            :disabled="state.smsSendBtn"
            @click.stop.prevent="getCaptcha"
            v-text="!state.smsSendBtn && '获取验证码' ||(state.time+' s')"
          />
        </a-col>
      </a-row>

      <a-form-item>
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="register-button"
          :loading="registerBtn"
          :disabled="registerBtn"
        >注册
        </a-button>
        <router-link class="login" :to="{ name: 'login' }">使用已有帐户登录</router-link>
      </a-form-item>

    </a-form>
  </div>
</template>

<script>

import { getSmsCaptcha } from '@/api/auth';
import { register } from '@/api/user';

const levelNames = {
  0: '低',
  1: '低',
  2: '中',
  3: '强',
};
const levelClass = {
  0: 'error',
  1: 'error',
  2: 'warning',
  3: 'success',
};
const levelColor = {
  0: '#ff0000',
  1: '#ff0000',
  2: '#ff7e05',
  3: '#52c41a',
};

export default {
  name: 'Register',
  data() {
    return {
      form: this.$form.createForm(this),

      state: {
        time: 60,
        smsSendBtn: false,
        passwordLevel: 0,
        passwordLevelChecked: false,
        percent: 10,
        progressColor: '#FF0000',
        isStudent: 1,
      },
      registerBtn: false,
    };
  },
  computed: {
    passwordLevelClass() {
      return levelClass[this.state.passwordLevel];
    },
    passwordLevelName() {
      return levelNames[this.state.passwordLevel];
    },
    passwordLevelColor() {
      return levelColor[this.state.passwordLevel];
    },
  },
  watch: {
    'state.passwordLevel'(val) {
      // console.log(val);
    },
  },
  methods: {
    handlePasswordLevel(rule, value, callback) {
      let level = 0;

      // 判断有无数字
      if (/[0-9]/.test(value)) {
        level++;
      }
      // 有无字母
      if (/[a-zA-Z]/.test(value)) {
        level++;
      }
      // 有无特殊符号
      if (/[^0-9a-zA-Z_]/.test(value)) {
        level++;
      }

      this.state.passwordLevel = level;
      this.state.percent = level * 30;
      if (level >= 2) {
        if (level >= 3) {
          this.state.percent = 100;
        }
        callback();
      } else {
        if (level === 0) {
          this.state.percent = 10;
        }
        callback(new Error('密码强度不够'));
      }
    },

    handlePasswordCheck(rule, value, callback) {
      const password = this.form.getFieldValue('password');
      if (value === undefined) {
        callback(new Error('请输入密码'));
      }
      if (value && password && value.trim() !== password.trim()) {
        callback(new Error('两次密码不一致'));
      }
      callback();
    },

    handlePhoneCheck(rule, value, callback) {
      console.log('handlePhoneCheck, rule:', rule);
      console.log('handlePhoneCheck, value', value);
      console.log('handlePhoneCheck, callback', callback);

      callback();
    },

    handlePasswordInputClick() {
      // 暂时不判断其他终端情况
      this.state.passwordLevelChecked = true;
    },

    handleSubmit(e) {
      e.preventDefault();
      const {
        form: { validateFields }, state,
        // $router,
      } = this;
      // force: true 暂时还不知道啥意思
      validateFields({ force: true }, async(err, values) => {
        if (!err) {
          state.passwordLevelChecked = false;
          console.log(values);
          const result = await register(values);

          if (result.code === 1) {
            this.$notification.success({ message: '注册成功！' });
          }
          // $router.push({ name: 'registerResult', params: { ...values } });
        } else {
          console.log(err);
        }
      });
    },

    handleSelect(value) {
      console.log(typeof value);
      this.state.isStudent = value === '1';
    },

    getCaptcha(e) {
      e.preventDefault();
      const { form: { validateFields }, state } = this;

      validateFields(['mobile'], { force: true },
        (err, values) => {
          if (!err) {
            state.smsSendBtn = true;

            const interval = window.setInterval(() => {
              if (state.time-- <= 0) {
                state.time = 60;
                state.smsSendBtn = false;
                window.clearInterval(interval);
              }
            }, 1000);

            const hide = this.$message.loading('验证码发送中..', 0);

            getSmsCaptcha({ mobile: values.mobile }).then(res => {
              setTimeout(hide, 2500);
              this.$notification.success({
                message: '提示',
                description: '验证码获取成功，您的验证码为：' + res.result.captcha,
                duration: 8,
              });
            }).catch(err => {
              setTimeout(hide, 1);
              clearInterval(interval);
              state.time = 60;
              state.smsSendBtn = false;
              this.requestFailed(err);
            });
          }
        },
      );
    },
    requestFailed(err) {
      this.$notification.error({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4,
      });
      this.registerBtn = false;
    },
  },
};
</script>

<style lang="less">
  .user-register {

    &.error {
      color: #ff0000;
    }

    &.warning {
      color: #ff7305;
    }

    &.success {
      color: #52c41a;
    }

  }

  .user-layout-register {
    // 手机输入框前面的那个 +86
    .ant-input-group-addon:first-child {
      background-color: #fff;
    }
  }
</style>

<style lang="less" scoped>
  .user-layout-register {
    & > h3 {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .getCaptcha {
      display: block;
      width: 100%;
      height: 40px;
    }

    .register-button {
      width: 50%;
    }

    .login {
      float: right;
      line-height: 40px;
    }
  }
</style>
