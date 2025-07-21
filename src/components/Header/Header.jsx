import logo from "../../../images/logo.png";

function Header() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav">
          <img src={logo} alt="logotipo" className="nav__logo" />
        </nav>
      </header>
    </>
  );
}

export default Header;
