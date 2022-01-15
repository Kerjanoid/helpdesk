import axios from 'axios';

const commentsModule = {
  state: () => ({
    comments: [],
    comment: '',
    postId: 0,
  }),
  getters: {
    sortedComments(state) {
      return state.comments.filter((item) => item.postId === state.postNumber);
    },
  },
  mutations: {
    setComments(state, comments) {
      state.comments = comments;
    },
    setComment(state, comment) {
      state.comment = comment;
    },
    setPostId(state, postId) {
      state.postId = postId;
    },
  },
  actions: {
    async getComments() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        if (response.status < 300) {
          return response.data;
        } return Promise.reject(new Error(`Error ${response.status}.`));
      } catch (error) {
        return error;
      }
    },
    saveComments({ dispatch, commit }) {
      dispatch('getComments').then((res) => {
        commit('setComments', res);
      })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    },
    async postComment({ state }) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
          postId: state.postId,
          body: state.comment,
        });
        if (response.status < 300) {
          return response.data;
        } return Promise.reject(new Error(`Error ${response.status}.`));
      } catch (error) {
        return error;
      }
    },
    addComment({ state, dispatch, commit }) {
      dispatch('postComment').then((res) => {
        console.log(res);
        commit('setComments', [...state.comments, res]);
      })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
        .finally(commit('setComment', ''));
    },
  },
};

export default commentsModule;
