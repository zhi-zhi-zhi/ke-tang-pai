<template>
  <div class="card-list" >
    <a-list
      rowKey="id"
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      :dataSource="courseList"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <template v-if="(item && item.id !== undefined)">
          <card :course="item" :isTopCourse="isTpoList"/>
        </template>
        <template v-else-if="isTpoList">
          <a-button class="new-btn" type="dashed">
            <a-icon type="plus"/>
            新增课程
          </a-button>
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

import Card from './Card';

export default {
  name: 'CardList',
  components: {
    Card,
  },
  props: {
    courseList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    isTpoList: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
};

</script>

<style lang="less" scoped>
  @import "~@/components/index.less";

  .card-list {
    /deep/ .ant-card-body:hover {
      .ant-card-meta-title > a {
        color: @primary-color;
      }
    }

    /deep/ .ant-card-meta-title {
      margin-bottom: 12px;

      & > a {
        display: inline-block;
        max-width: 100%;
        color: rgba(0, 0, 0, .85);
      }
    }

    /deep/ .meta-content {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      height: 96px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      margin-bottom: 1em;
    }
  }

  .new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 270px;
    height: 364px;
  }
</style>
