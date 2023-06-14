import classes from "./Header.module.css";
import CardRounded from "../UI/CardRounded";

const { header, headerTitle, headerInput } = classes;

const Header = () => {
  return (
    <CardRounded>
      <header className={header}>
        <h1 className={headerTitle}>Food City</h1>
        {/* <input className={headerInput} type="text" placeholder="Search" /> */}
      </header>
    </CardRounded>
  );
};

export default Header;
