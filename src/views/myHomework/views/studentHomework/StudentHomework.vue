<template>
  <div>
    <a-card>
      <student-homework-table/>
    </a-card>
  </div>
</template>
<script>
import StudentHomeworkTable from './components/Table';
export default {
  name: 'StudentHomework',
  components: {
    StudentHomeworkTable,
  },
  mounted() {
    console.log(this.props);
  },
  data() {
    return {

    };
  },
};
</script>
