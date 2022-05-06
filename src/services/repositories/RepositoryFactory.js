import UserRepository from './UserRepository';

const repositories = {
  users: UserRepository,
};

export default {
  service: (name) => repositories[name],
};
