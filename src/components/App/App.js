import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as MainApi from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ImgError from "../../images/error.jpg";
import ImgSuccesfull from "../../images/succesfull.jpg";

function App() {
  //Переменная состояния для токена
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  //Переменная состояния проверки залогинен пользователь или нет
  const [loggedIn, setLoggedIn] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  // Модальное окно с информацией об ошибке/успехе
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState({
    message: "",
    image: "",
  });
  // Прелоудер и сообщение об ошибке
  const [preloader, setPreloader] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");

  // Переменные состояния для фильмов и поиска
  const [movie, setMovie] = useState([]);
  const [saveMovie, setSaveMovie] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [filterSaveMovie, setFilterSaveMovie] = useState([]);
  const [shortFilm, setShortFilm] = useState(false);
  const history = useHistory();
  const path = useLocation().pathname;

  // Открытие попапа редактирования данных пользователя
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  // Закрытие попапов
  function closePopups() {
    setIsEditProfilePopupOpen(false);
    setInfoModalOpen(false);
  };

  // Проверка токена
  useEffect(() => {
    function tokkenCheck() {
      if (localStorage.getItem("jwt")) {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
          setToken(jwt);
          return MainApi.getContent(jwt)
            .then((res) => {
              if (res) {
                setLoggedIn(true);
                history.push(path);
              }
            })
            .catch((err) => {
              console.log("Произошла ошибка:", err);
            });
        }
      }
    }
    tokkenCheck();
  }, []);

  // Регистрация
  function onRegister(name, email, password) {
    return MainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          setInfoModalOpen(true);
          setInfoModal({
            message: "Вы успешно зарегистрировались!",
            image: ImgSuccesfull,
          });
          onLogin(email, password);
        }
      })
      .catch((err) => {
        setInfoModalOpen(true);
        setInfoModal({
          message: err.message,
          image: ImgError,
        });
      });
  };

  // Авторизация
  function onLogin(email, password) {
    MainApi.autorize(email, password)
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          history.push("/movies");
          return res;
        }
      })
      .catch((err) => {
        setInfoModalOpen(true);
        setInfoModal({
          message: err.message,
          image: ImgError,
        });
      });
  };

  function autorize(email, password) {
    onLogin(email, password);
  };

  // Выход
  function onSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  };

  //Эффект совершает запрос в API за данными пользователя
  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserData(token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log("Произошла ошибка:", err);
        });
    }
  }, [loggedIn, token]);

  // Обновление данных
  function onUpdateUser(userData) {
    MainApi.patchUserData(userData, token)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        setInfoModalOpen(true);
        setInfoModal({
          message: "Что-то пошло не так! Попробуйте ещё раз.",
          image: ImgError,
        });
        console.log("Произошла ошибка:", err);
      })
      .finally(() => {
        closePopups();
        setInfoModalOpen(true);
        setInfoModal({
          message: "Данные успешно изменены!",
          image: ImgSuccesfull,
        });
      });
  };

  // Берем фильмы со стороннего API и сохраняем в localStorage
  function getMovie() {
    getMovies()
      .then((res) => {
        const movieArr = res.map((item) => {
          const img = item.image ? item.image.url : "";
          return {
            ...item,
            image: "https://api.nomoreparties.co" + img,
            trailer: item.trailerLink,
          };
        });
        localStorage.setItem("movie", JSON.stringify(movieArr));
        setMovie(movieArr);
      })
      .catch((err) => {
        setErrorMassage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        console.log("Произошла ошибка:", err);
      });
  };

  // Берем сохраненные фильмы и сохраняем в localStorage
  function getSaveMovie() {
    MainApi.getSavedMovie(token)
      .then((res) => {
        const saveMovieArr = res.map((item) => {
          return {
            ...item,
            id: item.movieId,
          };
        });
        localStorage.setItem("saveMovie", JSON.stringify(saveMovieArr));
        setSaveMovie(saveMovieArr);
      })
      .catch((err) => {
        setErrorMassage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        console.log("Произошла ошибка:", err);
      });
  };

  // Эффект проверяет есть ли фильмы в localStorage
  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("movie"));
    if (movie) {
      setMovie(movie);
    } else {
      getMovie();
    }

    const saveMovie = JSON.parse(localStorage.getItem("saveMovie"));
    if (saveMovie) {
      setSaveMovie(saveMovie);
    } else {
      getSaveMovie();
    }
  }, []);

  // Фильтрация фильмов
  function getfilterMovies(dataMovies, searchWord) {
    const filterData = dataMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (path === "/movies" && filterData.length === 0) {
      setErrorMassage("Не нашлось фильмов по поиску");
    } else {
      setErrorMassage("");
    }
    return filterData;
  }

  function onSearchMovie(searchWord) {
    setPreloader(true);
    setTimeout(() => {
      setFilterMovie(getfilterMovies(movie, searchWord));
      setPreloader(false);
    }, 500);
  };

  function onSearchSaveMovie(searchWord) {
    setPreloader(true);
    setTimeout(() => {
      setFilterSaveMovie(getfilterMovies(saveMovie, searchWord));
      setPreloader(false);
    }, 300);
  };

  function onShortFilmCheck(CheckOn) {
    setShortFilm(CheckOn);
  };

  function onFilterCheckBox(movie) {
    return movie.filter((item) => {
      return item.duration < 40;
    });
  };

  // Сохранение фильма
  function handleAddMovie(movieData) {
    MainApi.savedMovie(movieData, token)
      .then((res) => {
        setSaveMovie([...saveMovie, { ...res, id: res.movieId }]);
      })
      .catch((err) => {
        console.log("Произошла ошибка:", err);
      });
  };

  // Удаление фильма
  function handleDeleteMovie(movieData) {
    const movieId = saveMovie.find((item) => item.id === movieData.id)._id;
    MainApi.deleteMovie(movieId, token)
      .then(() => {
        const update = saveMovie.filter((item) => {
          return item._id !== movieId;
        });
        setFilterSaveMovie(update);
        setSaveMovie(update);
      })
      .catch((err) => {
        console.log("Произошла ошибка:", err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main isLogged={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLogged={loggedIn}
            onSearchMovie={onSearchMovie}
            onShortFilmCheck={onShortFilmCheck}
            onFilterCheckBox={onFilterCheckBox}
            shortFilm={shortFilm}
            movie={filterMovie}
            errorMassage={errorMassage}
            preloader={preloader}
            handleAddMovie={handleAddMovie}
            handleDeleteMovie={handleDeleteMovie}
            getSaveMovie={getSaveMovie}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLogged={loggedIn}
            onSearchMovie={onSearchSaveMovie}
            onShortFilmCheck={onShortFilmCheck}
            onFilterCheckBox={onFilterCheckBox}
            shortFilm={shortFilm}
            movie={filterSaveMovie}
            errorMassage={errorMassage}
            handleDeleteMovie={handleDeleteMovie}
            getSaveMovie={getSaveMovie}
            preloader={preloader}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLogged={loggedIn}
            isOpen={isEditProfilePopupOpen}
            onEditProfile={handleEditProfileClick}
            onClose={closePopups}
            onSignOut={onSignOut}
            onUpdateUser={onUpdateUser}
          />
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={autorize} />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={infoModalOpen}
          onClose={closePopups}
          InfoTool={infoModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
