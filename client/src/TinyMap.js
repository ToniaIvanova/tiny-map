import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './styles.module.css';
import { colors, gray } from './constants/colors';

export default function TinyMap({ selectedStations }) {
  let k = 0;
  let currentProduct = selectedStations[0] ? selectedStations[0].productName : '';

  return <YMaps>
    <Map className={styles.map} defaultState={{ center:[19.441468, 17.496825], zoom: 2 }}>
    { selectedStations.map(station => {
      const color = station.done ? gray : colors[k % colors.length];
      if (station.productName !== currentProduct) {
        k += 1;
        currentProduct = station.productName;
      }
      
      return <Placemark
        key={station.stationName}
        geometry={station.place}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        properties={{
          balloonContentHeader: station.stationName,
          balloonContent: `${station.done ? 'Выполнено!' : `Надо: ${station.needCount}`}`,
          balloonContentFooter: `Продукт: ${station.productName}`
        }}
        options={{
          preset: 'islands#circleIcon',
          iconColor: color,
        }}
      /> 
    }) } 
      
    </Map>
  </YMaps>
}