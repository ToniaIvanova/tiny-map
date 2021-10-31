import baseApi from './base.api';

class StationApi {
  getStationsByProductId = async ({ productId, productName, currentUser }) => {
    const stationsData = await baseApi.get(`/station/product/${productId}`);
  
    const stationsForTable = await Promise.all(stationsData.data.map(async station => {
      const stationDone = await this.getStationDone({ stationId: station._id, currentUser });
      const done = stationDone ? stationDone.done : false;
  
      return {
        stationId: station._id,
        key: station.name,
        productName,
        stationName: station.name,
        place: station.place,
        needCount: station.needCount,
        done,
        region: station.region,
      }
    }));
    return stationsForTable;
  };

  postNewStation = async newStationData => {
    return baseApi.post('/station', newStationData);
  };

  putStationDone = async ({ stationId, currentUser, done }) => {
    return (await baseApi.put(`/station/${stationId}/${currentUser._id}/done`, { done })).data.stationDone;
  };

  getStationDone = async ({ stationId, currentUser }) => {
    return (await baseApi.get(`/station/${stationId}/${currentUser._id}/done`)).data.stationDone;
  }
}

export default new StationApi();