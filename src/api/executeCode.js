import API from './api';

const url = '/api/execute';

const executeCode = async (code) => {
  const res = await API.post(url, {
    'code': code,
  });
  return res;
};

export default executeCode;
