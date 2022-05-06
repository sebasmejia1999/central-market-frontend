import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
import Repository from '../../services/repositories/RepositoryFactory';

const UserRepository = Repository.service('users');

const ls = new SecureLS({ isCompression: false });

export default {
  namespaced: true,
  // ----------------------------------------------------------------------------------
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })],
  // ----------------------------------------------------------------------------------
  state: {
    user: {
      name: 'anderson',
      password: 'd1f1c1ld3d3sc1fr4r',
    },
    users: [],
  },
  // ----------------------------------------------------------------------------------
  getters: {
    auth: (state) => state.user,
  },
  // ----------------------------------------------------------------------------------
  mutations: {
    SET_USERS: (state, payload) => {
      Vue.set(state, 'users', payload);
    },
  },
  // ----------------------------------------------------------------------------------
  actions: {
    async getUsers({ commit }) {
      // commit("setLoading", true);
      try {
        const response = await UserRepository.getAll();
        const users = response;
        commit('SET_USERS', users);
        return response;
      } catch (error) {
        return error;
      } finally {
        // commit("setLoading", false);
      }
    },
  },
};
