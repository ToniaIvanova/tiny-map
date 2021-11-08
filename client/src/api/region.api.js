import baseApi from './base.api';

class RegionApi {
  getAllRegions = async () => {
    return baseApi.get('/region');
  };
}

export default new RegionApi();