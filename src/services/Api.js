import axios from 'axios';

//https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=QoU3MqibOznUxA2yzF4Ey6haZnhPVRHFPkqiKysp
const API_KEY = 'QoU3MqibOznUxA2yzF4Ey6haZnhPVRHFPkqiKysp';

const api = axios.create({
  baseURL: 'https://api.nal.usda.gov/fdc/v1',
});

api.interceptors.request.use((config) => {
  config.params = { api_key: API_KEY, ...config.params };
  return config;
});

export const getRecipesByRegionAndIngredient = async (region, ingredient) => {
    try {
      const response = await api.get('/search', {
        params: {
          generalSearchInput: ingredient,
          dataType: 'Found',
          includeDataTypes: {
            'Branded': true,
            'Found': true,
          },
          sortField: 'dataType',
          sortDirection: 'desc',
          pageNumber: 1,
          pageSize: 20,
          ingredient: ingredient,
          region: region,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };  

export default api;