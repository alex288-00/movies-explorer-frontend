export const BASE_URL = "https://api.alexus.students.nomoredomains.monster";

function checkResponse(res) {
  try {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      throw new Error(err.message);
    });
  } catch (err) {
    throw err;
  }
}
// res.ok ? res.json() : Promise.reject("Ошибка на сервере");

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse)
    .then((res) => {
      return res;
    });
};

export const autorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkResponse)
    .then((data) => {
      return data;
    });
};

export const getUserData = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: "Bearer " + token,
    },
  }).then(checkResponse);
};

export const patchUserData = (userData, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
    }),
  }).then(checkResponse);
};

export const savedMovie = (movieData, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      country: movieData.country,
      director: movieData.director,
      duration: movieData.duration,
      year: movieData.year,
      description: movieData.description,
      image: movieData.image,
      trailer: movieData.trailer,
      thumbnail: movieData.image,
      movieId: movieData.id,
      nameRU: movieData.nameRU,
      nameEN: movieData.nameEN,
    }),
  }).then(checkResponse);
};

export const getSavedMovie = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: "Bearer " + token,
    },
  }).then(checkResponse);
};

export const deleteMovie = (cardId, token) => {
  return fetch(`${BASE_URL}/movies/` + cardId, {
    method: "DELETE",
    headers: {
      authorization: "Bearer " + token,
    },
  }).then(checkResponse);
};
