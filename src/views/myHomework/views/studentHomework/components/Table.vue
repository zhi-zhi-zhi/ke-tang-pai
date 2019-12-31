<template>
  <div>
    <a-table bordered :columns="columns" :dataSource="dataSource" :loading="loading" rowKey="id">
      <template slot="grade" slot-scope="text, record">
        <editable-cell :fullgrade="record.fullGrade" :text="text" @change="onCellChange(record.id, 'grade', $event)"/>
      </template>

      <template slot="submit" slot-scope="submit">
        <a-tag :color="submit ? 'green':'red'"> {{ submit ? '已交': '未交' }}</a-tag>
      </template>

      <template slot="submitAnnex" slot-scope="submitAnnex">
        <!--        <a-tag :color="index ? 'green':'red'" v-for="(annex, index) in submitAnnex"></a-tag>-->
        <div v-for="(annex, index) in submitAnnex" :key="index">
          <a :href="annex.url">{{ annex.name }}111</a>
        </div>
      </template>

      <a slot="name" slot-scope="text" href="javascript:;">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :color="tag==='loser' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
          :key="tag"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;">Invite 一 {{ record.name }}</a>
        <a-divider type="vertical"/>
        <a href="javascript:;">Delete</a>
        <a-divider type="vertical"/>
        <a href="javascript:;" class="ant-dropdown-link"> More actions <a-icon type="down"/> </a>
      </span>
    </a-table>

  </div>
</template>
<script>
import EditableCell from '@/views/myHomework/views/studentHomework/components/EdittableCell';
import { getHomeworkSubmitList, updateHomework } from '@/api/user';

const columns = [
  {
    title: '学号',
    dataIndex: 'sno',
  }, {
    title: '姓名',
    dataIndex: 'account',
    scopedSlots: { customRender: 'account' },
  }, {
    title: '成绩',
    dataIndex: 'grade',
    scopedSlots: { customRender: 'grade' },
  }, {
    title: '相似度',
    dataIndex: 'xiangSiDu',
  }, {
    title: '提交状态',
    dataIndex: 'submit',
    scopedSlots: { customRender: 'submit' },
  }, {
    title: '提交作业',
    dataIndex: 'submitAnnex',
    scopedSlots: { customRender: 'submitAnnex' },
  }, {
    title: '批改次数',
    dataIndex: 'pigaiCount',
  },
];

// const annexColor = []

export default {
  name: 'StudentHomeworkTable',
  components: { EditableCell },
  data() {
    return {
      dataSource: [],
      columns,
      loading: true,
    };
  },
  mounted() {
    this.homeworkId = this.$route.params.homeworkId;
    this.courseId = this.$route.params.courseId;
    this.getHomeworkSubmitList();
  },
  methods: {
    onCellChange(id, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.id === id);
      if (target) {
        target[dataIndex] = value;
        this.loading = true;
        // this.dataSource = dataSource;
        target.homeworkId = this.homeworkId;
        target.userId = target.id;
        updateHomework(this.courseId, target).then(result => {
          if (result.code === 1) {
            this.getHomeworkSubmitList();
          }
        });
      }
    },
    async getHomeworkSubmitList() {
      const result = await getHomeworkSubmitList(this.courseId, this.homeworkId);

      // debugger;
      if (result.code === 1) {
        result.data.forEach(item => {
          item.submitAnnex = item.submitAnnex.split(';');
          item.submitAnnex.pop();
          item.submitAnnex = item.submitAnnex.map(annex => {
            return {
              name: annex,
              url: 'http://file.com/image/' + annex,
            };
          });
        });

        this.dataSource = result.data;
        console.log(this.dataSource);
        this.loading = false;
      }
    },
  },
};
</script>
<style>
  .editable-cell {
    position: relative;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    /*display: none;*/
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
</style>
