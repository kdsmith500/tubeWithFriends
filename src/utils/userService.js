import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function getAdmin() {
  return tokenService.getAdminFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function show() {
  return fetch(BASE_URL + 'show', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => {
    return res.json()
  })
  .catch(error => console.error('Error:', error))
}

function edit(profile) {
  return fetch(BASE_URL + 'profile/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(profile)
  })
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  // .then(({token}) => tokenService.getToken(token));
  .then(({token}) => tokenService.setToken(token));
}

function index() {
  return fetch(BASE_URL + 'index', {
    method: 'GET',
    headers: {
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => {
    return res.json()
  })
  .catch(error => console.error('Error:', error))
}

function remove() {
  return fetch(BASE_URL + 'profile/delete', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  });
}

function removeUser(email) {
  return fetch(BASE_URL + 'index/delete', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify({email})
  });
}

export default {
  signup, 
  getUser,
  getAdmin,
  logout,
  login,
  show,
  edit,
  remove,
  removeUser,
  index
};