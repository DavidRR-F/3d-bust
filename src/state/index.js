import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "gold",
});
export default state;
