<template>
  <div>
    <b-form class="form-layout" @submit.prevent="onSubmit">
      <b-form-textarea
        id="comment-input"
        placeholder="Enter comment text at least 6 characters"
        rows="2"
        no-resize
        :state="comment.length >= 6"
        type="text"
        minlength=6
        maxlength=252
        :model-value="comment"
        @update="setComment"
        required
      />

      <div class="buttons">
        <b-button type="submit" variant="outline-info">Send</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import {
  mapState,
  // mapGetters,
  mapMutations,
  mapActions,
} from 'vuex';

export default {
  name: 'CommentForm',
  props: {
    ticketId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      'addComment',
    ]),
    ...mapMutations([
      'setComment',
    ]),
    onSubmit() {
      this.addComment();
    },
  },
  computed: {
    ...mapState({
      comment: (state) => state.comments.comment,
    }),
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
