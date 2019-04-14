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
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token));
  // The above could have been written as
  //.then((token) => token.token);
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
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  // return fetch(BASE_URL, options).then(res => res.json());
}

function edit(profile) {
  console.log(profile);
  return fetch(BASE_URL + 'edit', {
    method: 'PUT',
    // headers: new Headers({'Content-Type': 'application/json'}),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(profile)
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}

//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(profile)
//   };
//   // return fetch(BASE_URL, options).then(res => res.json());
// }

// function index() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     }
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

// function remove(user) {
//   const options = {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json',
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(user)
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

export default {
  signup, 
  getUser,
  getAdmin,
  logout,
  login,
  show,
  edit,
  // index,
  // remove
};