import axios from 'axios';

const createUser = async (name, email, password) => {
  return await axios.post('users', {
    name,
    email,
    password,
  });
};

const createUserAuthTokenJwt = async (email, password) => {
  return await axios
    .post('auth/jwt', {
      email,
      password,
    })
    .then((response) => {
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    });
};

const removeUserAuthTokenJwt = () => {
  localStorage.removeItem('token');
};

const getUserAuthToken = () => {
  return localStorage.getItem('token');
};

export default {
  createUser,
  createUserAuthTokenJwt,
  removeUserAuthTokenJwt,
  getUserAuthToken,
};
