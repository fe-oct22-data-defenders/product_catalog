// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { FullPhone } from '../types/FullPhone';
import { Phone } from '../types/Phone';
import { PhonesResponse } from '../types/PhonesResponse';

// eslint-disable-next-line max-len
axios.defaults.baseURL = 'https://data-defenders-product-catalog-api.up.railway.app';

export function getPhones(
  page: number,
  perPage: number,
  sortBy: string,
): Promise<PhonesResponse> {
  return axios
    .get(`/products?page=${page}&perPage=${perPage}&sortBy=${sortBy}`)
    .then((res) => res.data);
}

export function getAnotherData(
  page: number,
  perPage: number,
  sortBy: string,
  productType: string,
): Promise<PhonesResponse> {
  return axios
    .get(`/products?productType=${productType}&page=${page}&perPage=${perPage}&sortBy=${sortBy}`)
    .then((res) => res.data);
}

interface GetOneResult {
  longData: FullPhone,
  shortData: Phone,
}

export function getOne(phoneId: string): Promise<GetOneResult> {
  return axios.get(`/products/${phoneId}`).then((res) => res.data);
}

export function getNewestPhones(): Promise<PhonesResponse> {
  return axios
    .get('/products/new')
    .then((res) => res.data);
}

export function getCheapestPhones(): Promise<PhonesResponse> {
  return axios
    .get('/products/discount')
    .then((res) => res.data);
}
