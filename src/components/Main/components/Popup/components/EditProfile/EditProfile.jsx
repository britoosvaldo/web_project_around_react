export default function EditProfile() {
  return (
    <form className="popup__form" novalidate>
      <fieldset className="popup__form-fieldset">
        <div className="popup__input-group">
          <input
            type="text"
            className="popup__input"
            id="name"
            name="name"
            placeholder="Jacques Cousteau"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="popup__input-error" id="name-error"></span>
        </div>

        <div className="popup__input-group">
          <input
            type="text"
            className="popup__input"
            id="about"
            name="about"
            placeholder="Explorador"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__input-error" id="about-error"></span>
        </div>
      </fieldset>
      <button type="submit" className="popup__save-button" disabled>
        Salvar
      </button>
    </form>
  );
}
