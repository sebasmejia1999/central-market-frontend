import api from '../clients/axios';

const resource = '/users';

export default {
  async getAll() {
    const response = await api.get(`${resource}`);
    return response.data;
  },

  async getUser(id) {
    const response = await api.get(`${resource}/${id}`);
    return response.data;
  },

  create(payload) {
    return api.post(`${resource}`, payload);
  },

  update(payload, id) {
    return api.put(`${resource}/${id}`, payload);
  },

  delete(id) {
    return api.delete(`${resource}/${id}`);
  },
};
