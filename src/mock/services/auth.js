import Mock from 'mockjs2';
import { builder } from '@/mock/util';

const smsCaptcha = () => {
  return builder({ captcha: Mock.mock('@integer(10000, 99999') });
};

Mock.mock(/\/auth\/sms/, 'get', smsCaptcha);
