import { colors } from './constants/colors';

export const getColor = (arr, value) => {
  for (const item of arr) {
    if(item.regionId === value) {
      return item.color;
    }
    if(item.productId === value) {
      return item.color;
    }
  }
  return colors[0];
}