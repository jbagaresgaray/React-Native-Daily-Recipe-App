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
  async listAllMealsByFirstLetter(params) {
    return await API.get(`/search.php?f=${params}`);
  },
};

export default AppServices;
