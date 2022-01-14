import axios from 'axios';

const commentsModule = {
  state: () => ({
    comments: [],
    postNumber: 0,
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
    setPage(state, postNumber) {
      state.postNumber = postNumber;
    },
  },
  actions: {
    async getComments() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        if (response.status === 200) {
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
  },
};

export default commentsModule;
