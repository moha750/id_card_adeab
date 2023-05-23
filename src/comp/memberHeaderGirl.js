const Header = ({leader}) => {
  return (
    <>
      <header id="members-header">
        <img id="logo" src="WhiteLogo.png" alt="شعار نادي أدِيب" />
        <img id="boy" src="girl.png" alt="العضو" />
        <span>
          <h1>{leader}</h1>
        </span>
      </header>
    </>
  );
}

export default Header;