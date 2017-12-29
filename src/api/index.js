import config from '@/config'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
const parseJSON = (response) => response.json()

export default {
  login (params) {
    return fetch(`${config.api}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => error)
  },
  checkUserNameOrEmail (params) {
    return fetch(`${config.api}/checkuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => error)
  },
  register (params) {
    return fetch(`${config.api}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(error => error)
  }
}
