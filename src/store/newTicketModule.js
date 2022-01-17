import axios from 'axios';

const newTicketModule = {
  state: () => ({
    title: '',
    description: '',
    isOpened: true,
    // files: {},
  }),
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setDescription(state, description) {
      state.description = description;
    },
    // setFiles(state, files) {
    //   state.files = files;
    // },
  },
  actions: {
    async createTicket({ state }) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: state.title,
          description: state.description,
          isOpened: state.isOpened,
          // files: state.files,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status < 300) {
          return response.data;
        } return Promise.reject(new Error(`Error ${response.status}.`));
      } catch (error) {
        return error;
      }
    },
    postTicket({ dispatch, commit }) {
      dispatch('createTicket').then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
        .finally(
          commit('setTitle', ''),
          commit('setDescription', ''),
        );
    },
  },
};

export default newTicketModule;
