export default function EditAvatar() {
  return (
    <form className="avatar-popup__form" novalidate>
      <fieldset className="popup__form-fieldset">
        <div className="popup__input-group">
          <input
            type="url"
            className="popup__input"
            id="avatar-link"
            name="avatar-link"
            placeholder="URL da nova foto"
            required
          />
          <span className="popup__input-error" id="avatar-link-error"></span>
        </div>
      </fieldset>
      <button type="submit" className="popup__save-button" disabled>
        Salvar
      </button>
    </form>
  );
}
