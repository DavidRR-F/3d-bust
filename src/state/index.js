import { proxy } from "valtio";

const state = proxy({
  intro: true,
  darkMode: false,
  color: "gold",
  colorDark: "gold",
  colorLight: "white",
});
export default state;
