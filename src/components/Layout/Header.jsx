import classes from "./Header.module.css";

const { header, headerTitle, headerInput } =
  classes;

const Header = () => {
  return (
    <header className={header}>
      <h1 className={headerTitle}>Food City</h1>
      <input className={headerInput} type="text" placeholder="Search" />
    </header>
  );
};

export default Header;
