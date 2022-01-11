<template>
  <div></div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      form: {
        title: '',
        description: '',
        files: [],
      },
      show: true,
    };
  },
  methods: {
    formatNames(files) {
      return files.length === 1 ? files[0].name : `${files.length} files selected`;
    },
    handleFileUpload(event) {
      this.file = event.target.files;
    },
    onSubmit(event) {
      event.preventDefault();
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.title = '';
      this.form.description = '';
      this.form.files = [];
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>

</style>
