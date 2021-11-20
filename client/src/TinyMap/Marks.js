import React from "react";
import { Placemark } from 'react-yandex-maps';
import { gray } from '../common/constants/colors';
import { PRODUCT_TAB } from "../common/constants/tabs";
import { getColor } from '../common/getColor';

function Mark({ selectedStations, selectedIds, tab }) {
  return <div>
    { selectedStations.map(station => {
      const idForColor = tab === PRODUCT_TAB ? station.productId : station.regionId;
      const color = station.done ? gray : getColor(selectedIds, idForColor);

      return <Placemark
        key={station.key}
        geometry={station.place}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        properties={{
          balloonContentHeader: `${station.stationName}`,
          balloonContent: `Продукт: ${station.productName} --- ${station.done ? 'Выполнено!' : `Надо: ${station.needCount}`}`,
          balloonContentFooter: station.region,
        }}
        options={{
          preset: 'islands#circleIcon',
          iconColor: color,
        }}
      /> })}
  </div>
}

export default Mark;
