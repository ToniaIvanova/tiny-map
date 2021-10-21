function stationFieldsValidation(stationData){
  try {
    if(!stationData.productName){
      throw('Product name is required');
    }
    if(!stationData.stationName){
      throw('Station name is required');
    }
    if(!stationData.place){
      throw('Station place is required');
    }
    if(!Array.isArray(stationData.place.split(', '))){
      throw('Station place should be an array of 2 elements');
    }
    if(!stationData.needCount){
      throw('Need count is required');
    }
    if(!stationData.region){
      throw('Region is required');
    }
    return true;
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  stationFieldsValidation,
}