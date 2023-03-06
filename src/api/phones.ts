import axios from 'axios';
import { PhonesResponse } from '../types/PhonesResponse';

// eslint-disable-next-line max-len
axios.defaults.baseURL = 'http://data-defenders-product-catalog-api.up.railway.app';

export function getPhones(
  page: number,
  perPage: number,
  sortBy: string,
): Promise<PhonesResponse> {
  return axios
    .get(`/products?page=${page}&perPage=${perPage}&sortBy=${sortBy}`)
    .then((res) => res.data);
}
