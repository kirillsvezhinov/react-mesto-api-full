class Api {
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

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include'
    }).then(this._checkPromise);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(this._checkPromise);
  }

  setUserAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(this._checkPromise);
  }

  getCardList() {
    return fetch(`${this._baseUrl}cards`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include'
    }).then(this._checkPromise);
  }

  _setLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
        credentials: 'include'
    }).then(this._checkPromise);
  }

  _removeLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include'
    }).then(this._checkPromise);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this._removeLike(cardId) : this._setLike(cardId);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(this._checkPromise);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include'
    }).then(this._checkPromise);
  }
}

const api = new Api({
  baseUrl: 'https://apimesto.thirtyseven.nomoredomains.sbs/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
