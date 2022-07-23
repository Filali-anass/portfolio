import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Anass</span> Filali
      </h1>
      <p className={headerStyles.description}>
        Personal Portfolio, Blog and more
      </p>
    </div>
  );
};

export default Header;
