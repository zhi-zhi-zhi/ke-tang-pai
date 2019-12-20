import Menu from 'ant-design-vue/es/menu';
import Icon from 'ant-design-vue/es/icon';

const { Item, SubMenu } = Menu;

export default {
  name: 'SMenu',
  props: {
    menu: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      required: false,
      default: 'inline',
    },
  },
  data() {
    return {};
  },
};
