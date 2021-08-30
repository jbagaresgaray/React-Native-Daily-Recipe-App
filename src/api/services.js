import API from '.';

const AppServices = {
  async listAllArea() {
    return await API.get('/list.php?a=list');
  },
  async listAllCategories() {
    return await API.get('/list.php?c=list');
  },
  async listAllIngredients() {
    return await API.get('/list.php?i=list');
  },
};

export default AppServices;
