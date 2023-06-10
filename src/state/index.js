import { proxy } from "valtio";

const storedTheme = localStorage.getItem("theme");
const initialDarkMode = storedTheme === "dark";

const state = proxy({
  intro: true,
  darkMode: initialDarkMode,
  color: "gold",
  colorDark: "gold",
  colorLight: "white",
});
export default state;
