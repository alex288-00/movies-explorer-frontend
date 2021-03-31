export const getMovies = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        headers: {
            "Content-type": "application/json",
        },
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
};