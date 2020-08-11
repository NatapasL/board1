import axios from 'axios'
import forEach from 'lodash/forEach'

import { API_URL } from './../constants/api'

export const getApi = async (path, params = {}) => {
  const url = new URL(path, API_URL)
  forEach(params, (val, key) => url.searchParams.set(key, val))
  console.log(url.toString())
  return axios
    .get(url.toString())
    .then(({ data }) => data)
}

export const postApi = () => {

}