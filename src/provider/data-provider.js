import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';
import { getAccessToken } from '../api/helper'
import configs from '../configs/env.config'

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getAccessToken()
    });
  }
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider(configs.API_BASE_FULL, fetchJson);

const myDataProvider = {
  ...dataProvider,
};

export default myDataProvider;
