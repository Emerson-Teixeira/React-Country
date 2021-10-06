import { Container, ThemeChanger, Logo } from "./styles/Header.styled";
import { BsMoon, BsSunFill } from "react-icons/bs";
export default function Header({ setTheme, theme }) {
  return (
    <Container>
      <Logo>Where in the world?</Logo>
      <ThemeChanger
        onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <BsSunFill  /> : <BsMoon />}
        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </ThemeChanger>
    </Container>
  );
}
