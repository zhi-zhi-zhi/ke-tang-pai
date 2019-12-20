import Vue from 'vue';

import {
  Checkbox,
  Button,
  Form,
  Row,
  Col,
  Icon,
  Input,
  InputNumber,
  Tabs,
  Alert,
  Popover,
  Progress,
  Select,
  Layout,
  Dropdown,
  Avatar,
  Menu,
  Badge,
  List,
  Spin,
  message,
  notification,
} from 'ant-design-vue';

Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Tabs);
Vue.use(Alert);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Select);
Vue.use(Layout);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Menu);
Vue.use(Badge);
Vue.use(List);
Vue.use(Spin);
Vue.use(message);
Vue.use(notification);

Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
