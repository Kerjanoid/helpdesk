<template>
  <div>
    <b-form class="form-layout" @submit="onSubmit">
      <b-form-textarea
        id="comment-input"
        placeholder="Enter comment text at least 6 characters"
        rows="2"
        no-resize
        v-model="comment"
        :state="comment.length >= 6"
        type="text"
        minlength=6
        maxlength=252
        required
      />

      <div class="buttons">
        <b-button type="submit" variant="outline-info">Send</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      comment: '',
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(this.comment));
    },
  },
};
</script>

<style scoped>
.form-layout {
  margin: 10px 0;
  display: flex;
}

.buttons {
  display: flex;
  white-space: nowrap;
  margin: 10px;
}

.file-label {
  width: 70%;
}

</style>
