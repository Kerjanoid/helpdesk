<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group
        class="align-left"
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          :state="title.length >= 6"
          type="text"
          placeholder="Enter at least 6 characters"
          minlength=6
          maxlength=50
          :value="title"
          :model-value="title"
          @update="setTitle"
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
          :state="description.length >= 20"
          rows="4"
          minlength=2
          maxlength=330
          no-resize
          :value="description"
          :model-value="description"
          @update="setDescription"
          required
        />
      </b-form-group>

      <b-form-file
        id="files"
        class="file-label"
        placeholder="Attach files (optional)"
        :state="Boolean(files)"
        multiple
        accept="image/jpeg"
        :file-name-formatter="formatNames"
        :model-value="files"
        @change="pickFiles"
      />

      <div class="buttons">
        <b-button type="submit" variant="primary">Submit form</b-button>
        <b-button type="reset" variant="danger">Reset form</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapActions,
} from 'vuex';

export default {
  name: 'Form',
  methods: {
    ...mapActions([
      'postTicket',
    ]),
    ...mapMutations([
      'setTitle',
      'setDescription',
      'setFiles',
    ]),
    formatNames(files) {
      return files.length === 1 ? files[0].name : `${files.length} files selected`;
    },
    pickFiles(event) {
      const pickedFiles = event.target.files;
      this.setFiles(pickedFiles);
    },
    onSubmit() {
      this.postTicket();
    },
    onReset() {
      this.setTitle('');
      this.setDescription('');
      this.setFiles({});
    },
  },
  computed: {
    ...mapState({
      title: (state) => state.newTicket.title,
      description: (state) => state.newTicket.description,
      files: (state) => state.newTicket.files,
    }),
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
