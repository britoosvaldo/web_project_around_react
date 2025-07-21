export default function NewCard() {
  return (
    <form className="add-popup__form">
      <fieldset className="popup__form-fieldset">
        <div className="popup__input-group">
          <input
            type="text"
            className="popup__input"
            id="name-title"
            name="name-title"
            placeholder="Título"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="popup__input-error" id="name-title-error"></span>
        </div>
        <div className="popup__input-group">
          <input
            type="url"
            className="popup__input"
            id="link"
            name="link"
            placeholder="URL"
            required
          />
          <span className="popup__input-error" id="link-error"></span>
        </div>
      </fieldset>
      <button id="create" type="submit" className="popup__create-button">
        Criar
      </button>
    </form>
  );
}
