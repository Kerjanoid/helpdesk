import axios from 'axios';

const ticketModule = {
  state: () => ({
    tickets: [],
    searchQuery: '',
    currentPage: 1,
    limit: 12,
    totalPages: 0,
  }),
  getters: {
    searchedTickets(state) {
      return state.tickets.filter((item) => item.title.toLowerCase()
        .includes(state.searchQuery.toLowerCase()));
    },
    openedTickets(state, getters) {
      return getters.searchedTickets.filter((item) => item.isOpened);
    },
    closedTickets(state, getters) {
      return getters.searchedTickets.filter((item) => !item.isOpened);
    },
  },
  mutations: {
    setTickets(state, tickets) {
      state.tickets = tickets;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async getTickets({ state, commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.currentPage,
            _limit: state.limit,
          },
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        if (response.status < 300) {
          return response.data;
        } return Promise.reject(new Error(`Error ${response.status}.`));
      } catch (error) {
        return error;
      }
    },
    modifyTickets({ dispatch, commit }) {
      dispatch('getTickets').then((res) => {
        res.map((item) => {
          const random = Math.random() < 0.3;
          item.isOpened = random;
        });
        commit('setTickets', res);
      })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    },

    async getFile() {
      try {
        const response = await axios.get('https://source.unsplash.com/random', {
          responseType: 'blob',
        });
        if (response.status < 300) {
          return response.data;
        } return Promise.reject(new Error(`Error ${response.status}.`));
      } catch (error) {
        return error;
      }
    },
    downloadFile({ dispatch }) {
      dispatch('getFile').then((res) => {
        const url = URL.createObjectURL(new Blob([res], { type: 'image/jpeg' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    },
  },
};

export default ticketModule;
