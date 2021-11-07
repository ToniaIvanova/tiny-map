import baseApi from './base.api';

class StationApi {
  postNewStation = async newStationData => {
    return baseApi.post('/station', newStationData);
  };

  putStationDone = async ({ stationId, currentUser, done }) => {
    return (await baseApi.put(`/station/${stationId}/${currentUser._id}/done`, { done })).data.stationDone;
  };
}

export default new StationApi();