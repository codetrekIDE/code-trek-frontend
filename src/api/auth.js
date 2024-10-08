import API from './api';

const url = '/auth/';

const signUp = async (params) => {
  const data = JSON.stringify(params, ['loginid', 'password', 'passwordcheck']);
  const res = await API.post(url + 'signup', data);
  return res;
};

const signIn = async (params) => {
  const data = JSON.stringify(params, ['loginId', 'password']);
  const res = await API.post(url + 'signin', data);
  return res;
}

export { signUp, signIn };