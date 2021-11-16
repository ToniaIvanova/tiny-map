import React from "react";
import { Placemark } from 'react-yandex-maps';
import { colors, gray } from '../common/constants/colors';

function Mark({ selectedStations }) {
  return <div>
    { selectedStations.map(station => {
      const color = station.done ? gray : colors[station.colorForMap];

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