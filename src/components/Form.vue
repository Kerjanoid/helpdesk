<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        class="align-left"
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          :state="form.title.length >= 6"
          type="text"
          placeholder="Enter at least 6 characters"
          minlength=6
          maxlength=50
          required
        />
      </b-form-group>

      <b-form-group
        class="align-left"
        id="input-group-2"
        label="Description:"
        label-for="input-2"
      >
        <b-form-textarea
          id="input-2"
          placeholder="Enter at least 20 characters"
          v-model="form.description"
          :state="form.description.length >= 20"
          rows="4"
          minlength=2
          maxlength=330
          no-resize
        />
      </b-form-group>

      <b-form-file
        id="files"
        class="file-label"
        placeholder="Attach files (optional)"
        v-model="form.files"
        :state="Boolean(form.files)"
        multiple
        :file-name-formatter="formatNames"
        accept="image/*"
        @change="handleFileUpload($event)"
      />

      <div class="buttons">
        <b-button type="submit" variant="primary">Submit form</b-button>
        <b-button type="reset" variant="danger">Reset form</b-button>
      </div>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
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
.buttons {
  margin: 20px;
  display: grid;
  gap:20px;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
}

.file-label {
  width: 70%;
}

.align-left {
  text-align: left;
  font-weight: 600;
}
</style>
