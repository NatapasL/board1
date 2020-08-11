import axios from 'axios'
import forEach from 'lodash/forEach'

import { API_URL } from '../../constants/api'

export default async (req, res) => {
  const { path, ...rest } = req.body
  const url = new URL(path, API_URL)

  forEach(rest, (val, key) => url.searchParams.set(key, val))
  const { data } = await axios.get(url.toString())

  res.end(JSON.stringify(data))
}