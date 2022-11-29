import { sum } from "./modules/sum";
console.log(42);
const root = document.querySelector("#root");
root.textContent = sum(6, -1).toString();