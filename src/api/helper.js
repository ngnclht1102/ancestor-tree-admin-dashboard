import fetchToCurl from 'fetch-to-curl'
import Config from '../configs/env.config'
import { loadAccessToken } from '../utils/storage'

const showRequestAndResponse = true
var accessToken = ''

const getUrl = (urlPath) => {
  return urlPath ? `${Config.API_BASE}${urlPath}` : Config.API_BASE
}

export const getAccessToken = () => {
  if (accessToken) return accessToken
  accessToken = loadAccessToken()
  return accessToken
}

export const setAccessToken = (token) => {
  accessToken = token
}

export const buildGetQuery = (params) => {
  const query_array = Object.keys(params)
  let query = []
  for (let i = 0; i < query_array.length; i++) {
    const key = query_array[i]
    if (params[key])
      query.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
      )
  }
  return query.length ? query.join('&') : ''
}

export const authenticatedPost = async (
  urlPath,
  params,
  jsonStringifyParams
) => {
  const requestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': await getAccessToken()
    },
    // @ts-ignore
    body: jsonStringifyParams ? JSON.stringify(params) : params
  }
  const url = getUrl(urlPath)
  showRequestAndResponse &&
    console.log('request curl: ', fetchToCurl(url, requestInit))
  const res = await fetch(url, requestInit)
  return await handleResponse(res, url, requestInit)
}
export const unauthenticatedGet = async (urlPath, external) => {
  const requestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const url = external ? urlPath : getUrl(urlPath)
  const res = await fetch(url, requestInit)
  return await handleResponse(res, url, requestInit)
}
export const authenticatedPut = async (
  urlPath,
  params,
  jsonStringifyParams
) => {
  const requestInit = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': await getAccessToken()
    },
    // @ts-ignore
    body: jsonStringifyParams ? JSON.stringify(params) : params
  }
  const url = getUrl(urlPath)
  showRequestAndResponse &&
    console.log('request curl: ', fetchToCurl(url, requestInit))
  const res = await fetch(url, requestInit)
  return await handleResponse(res, url, requestInit)
}
export const authenticatedGet = async (urlPath, params, extraPath) => {
  const requestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': await getAccessToken()
    }
  }
  const query = params ? buildGetQuery(params) : null
  const url = `${getUrl(urlPath)}?${query ? query : ''}${
    extraPath ? extraPath : ''
  }`
  showRequestAndResponse &&
    console.log('request curl: ', fetchToCurl(url, requestInit))
  const res = await fetch(url, requestInit)
  return await handleResponse(res, url, requestInit)
}
export const authenticatedDelete = async (
  urlPath,
  params,
  jsonStringifyParams
) => {
  const requestInit = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': await getAccessToken()
    },
    // @ts-ignore
    body: jsonStringifyParams ? JSON.stringify(params) : params
  }
  const url = getUrl(urlPath)
  showRequestAndResponse &&
    console.log('request curl: ', fetchToCurl(url, requestInit))
  const res = await fetch(url, requestInit)
  return await handleResponse(res, url, requestInit)
}
// using fetch atm, we might consider using axios
export const unauthenticatedPost = async (
  urlPath,
  params,
  jsonStringifyParams
) => {
  const requestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    // @ts-ignore
    body: jsonStringifyParams ? JSON.stringify(params) : params
  }
  const url = getUrl(urlPath)
  showRequestAndResponse &&
    console.log('request curl: ', fetchToCurl(url, requestInit))
  const res = await fetch(url, requestInit)
  return await handleResponse(res, url, requestInit)
}
const handleResponse = async (res, url, params) => {
  const isProduction = Config.IS_PRODUCTION == '1'
  const resJson = await res.json()
  if (res.status >= 400) {
    const rejectError = new Error()
    if (typeof resJson.error_message !== 'string') {
      showRequestAndResponse && console.log('API Response: ', resJson)
      if (resJson.error_message instanceof Array) {
        const status = isProduction
          ? '' // not show for production
          : '. Status: ' + res.status
        rejectError.message = resJson.error_message.join(', ') + status
      } else {
        rejectError.message = isProduction
          ? `Unexpected Error \nOps, we encountered an unexpected error. Please try again or contact us! `
          : ' server error with detail ' + JSON.stringify(res) // undefined or something even more weird...
      }
    } else {
      rejectError.message = resJson.error_message
    }
    // @ts-ignore
    rejectError.status = res.status
    throw rejectError
  }
  return resJson
}
export const authenticatedPostMultipart = async (urlPath, params) => {
  let options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'x-access-token': await getAccessToken()
    }
  }
  options.body = new FormData()
  for (let name in params) {
    options.body.append(name, params[name])
  }
  const url = getUrl(urlPath)
  showRequestAndResponse &&
    console.log('request curl: ', fetchToCurl(url, options))
  const res = await fetch(url, options)
  return await handleResponse(res, url, {})
}
export const authenticatedPutMultipart = async (urlPath, params) => {
  let options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'x-access-token': await getAccessToken()
    }
  }
  options.body = new FormData()
  for (let name in params) {
    options.body.append(name, params[name])
  }
  const url = getUrl(urlPath)
  showRequestAndResponse &&
    console.log('request curl: ', fetchToCurl(url, options))
  const res = await fetch(url, options)
  return await handleResponse(res, url, {})
}
