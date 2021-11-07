import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './styles.module.css';
import { colors, gray } from './constants/colors';
import StationSelector from './resources/station/station.selector';

function TinyMap({ selectedByProductStations }) {
  let k = 0;
  let currentProduct = selectedByProductStations[0] ? selectedByProductStations[0].productName : '';

  return <YMaps>
    <Map className={styles.map} defaultState={{ center:[19.441468, 17.496825], zoom: 2 }}>
    { selectedByProductStations.map(station => {
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

const mapStateToProps = state => ({
  selectedByProductStations: StationSelector.setSelectedByProductStations(state),
});

export default connect(mapStateToProps)(TinyMap);