class ApiAuth {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(data) {
    return fetch(`${this._baseUrl}signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data),
    }).then(this._checkPromise);
  }

  authorize(data) {
    return fetch(`${this._baseUrl}signin`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(this._checkPromise);
  }

  logout() {
    return fetch(`${this._baseUrl}signout`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include'
    }).then(this._checkPromise);
  }

  checkToken() {
    return fetch(`${this._baseUrl}auth`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include'
    });
  }

}

const apiAuth = new ApiAuth({
  baseUrl: '/api/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiAuth;
