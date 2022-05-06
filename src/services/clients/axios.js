import axios from 'axios';

const responseMock = {
  data: {
    access_token: 'xxxxsssssddededededede',
  },
};

console.log(process.env.VUE_APP_API);

const api = axios.create({
  baseURL: process.env.VUE_APP_API,
});

const injectToken = async (config) => {
  try {
    // const response = await UserRepository.getUser(1);
    const newConfig = config;
    newConfig.headers.authorization = `Bearer ${responseMock.data.access_token}`;
    return newConfig;
  } catch (error) {
    throw new Error('Unauthorized');
  }
};

api.interceptors.request.use(injectToken);

export {
  api as default,
};
