import { useState, useEffect } from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";

export default function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleOpenPopup(popupContent) {
    setPopup(popupContent);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo(name, about)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setPopup(null);
      })
      .catch((err) => console.error("Erro ao atualizar perfil:", err));
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .profilePhotoUpdate(avatar)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setPopup(null);
      })
      .catch((err) => console.error("Erro ao atualizar avatar:", err));
  }

  function handleCardLike(card) {
    const isLiked = card.isLiked;
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        console.log("API devolveu card:", newCard);
        console.log("Usuário logado:", currentUser);
        const updatedCard = {
          ...newCard,
          isLiked:
            typeof newCard.isLiked === "boolean"
              ? newCard.isLiked
              : Array.isArray(newCard.likes) &&
                newCard.likes.some((like) => like._id === currentUser._id),
        };
        setCards((state) =>
          state.map((c) => (c._id === card._id ? updatedCard : c))
        );
      })
      .catch((error) => console.error("Erro ao curtir/descurtir:", error));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.error("Erro ao deletar o card:", error));
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addNewCard(name, link)
      .then((newCard) => {
        console.log("API respondeu:", newCard);

        const enrichedCard = {
          ...newCard,
          isLiked:
            Array.isArray(newCard.likes) &&
            newCard.likes.some((like) => like._id === currentUser._id),
        };
        setCards((prevCards) => [enrichedCard, ...prevCards]);
        setPopup(null);
      })
      .catch((err) => console.error("Erro ao adicionar card:", err));
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => setCurrentUser(userData))
      .catch((err) => console.error("Erro ao carregar usuário:", err));

    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => console.error("Erro ao buscar os cards:", err));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup} // <-- aqui!
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
