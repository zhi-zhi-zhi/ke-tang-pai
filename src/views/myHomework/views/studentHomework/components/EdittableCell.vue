<template>
  <div class="editable-cell">
    <div v-if="editable" class="editable-cell-input-wrapper">
      <a-input-number
        :value="value"
        :min="0"
        :max="fullGrade"
        @change="handleChange"
        @pressEnter="check"
        style=" width: 60px;"
      />
      {{ ' / ' + $attrs.fullgrade }}
      <a-icon
        type="check"
        class="editable-cell-icon-check"
        @click="check"
      />
    </div>
    <div v-else class="editable-cell-text-wrapper" @click="edit">
      {{ value || ' 未批阅 ' }}
      <a-icon type="edit" class="editable-cell-icon"/>
      {{ '/ ' + $attrs.fullgrade }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    fullGrade() {
      return this.$attrs.fullgrade;
    },
  },
  data() {
    return {
      value: this.text,
      editable: false,
    };
  },
  methods: {
    handleChange(value) {
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    },
    edit() {
      this.editable = true;
    },
  },
};
</script>
