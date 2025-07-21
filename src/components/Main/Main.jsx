import avatar from "../../../images/profile-photo.png";
import { useState } from "react";
import NewCard from "./components/Popup/components/Newcard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup";
import ImagePopup from "./components/ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardImageClick(card) {
    setSelectedCard(card);
    setPopup({
      title: "",
      children: <ImagePopup card={card} onClose={handleClosePopup} />,
    });
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__photo-container">
            <img src={avatar} alt="Foto de perfil" className="profile__photo" />
            <button
              className="profile__photo-edit-btn"
              type="button"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            >
              <img
                src="images/editPhoto-button.png"
                alt="Editar foto"
                className="profile__photo-edit-icon"
              />
            </button>
          </div>
          <div className="profile__info">
            <h2 className="profile__name">Jacques Cousteau</h2>
            <button
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img
                src="images/edit-button.png"
                className="profile__edit-button-image"
              />
            </button>
            <h3 className="profile__about">Explorador</h3>
          </div>
          <button
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img
              src="images/add-button.png"
              className="profile__add-button-image"
            />
          </button>
        </section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onImageClick={handleCardImageClick}
            />
          ))}
        </ul>
      </main>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}
