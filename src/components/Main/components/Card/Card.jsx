export default function Card({ card, onImageClick }) {
  const { name, link } = card;

  return (
    <li className="elements__card">
      <img
        className="elements__delete-button"
        src="./images/delete-button.png"
        alt="Delete Button"
      />
      <img
        className="elements__image"
        src={link}
        alt={name}
        onClick={() => onImageClick(card)}
        style={{ cursor: "pointer" }}
      />
      <div className="elements__description">
        <h2 className="elements__text">{name}</h2>
        <img
          className="elements__like-button"
          src="./images/like-button.png"
          alt="Like Button"
        />
      </div>
    </li>
  );
}
