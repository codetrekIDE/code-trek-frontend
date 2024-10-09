import API from './api';

const url = '/api/project';

const projectList = async () => {
  // projectId 목록
  const res = await API.get(url + '/list');
  return res;
};

const projectDetail = async (projectId) => {
  // 코드
  const res = await API.get(url + '/'+ projectId);
  return res;
};

const projectCreate = async (params) => {
  // const data = JSON.stringify(params, ['title', 'description', 'createdAt']);
  const data = JSON.stringify(params, ['title', 'description']);

  // projectId
  const res = await API.post(url + '/create', data);
  return res;
};

// 메타 데이터 수정
const projectUpdate = async (params) => {
  const data = JSON.stringify(params, ['title', 'description']);

  const res = await API.patch(url + '/update', data);
  return res;
};

// 코드 수정
const projectSave = async (params) => {
  const data = JSON.stringify(params, ['projectId', 'code']);

  const res = await API.patch(url + '/save', data);
  return res;
};

const projectDelete = async (projectId) => {
  const res = await API.delete(url + '/delete/' + projectId);
  return res;
};

export { projectList, projectDetail, projectCreate, projectUpdate, projectSave, projectDelete };
