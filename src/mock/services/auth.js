import Mock from 'mockjs2';
import { builder } from '@/mock/util';

const smsCaptcha = () => {
  const result = builder({ captcha: Mock.mock('@integer(10000, 99999)') });
  return result;
};

Mock.mock(/\/account\/sms/, 'post', smsCaptcha);
