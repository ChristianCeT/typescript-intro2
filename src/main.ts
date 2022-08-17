import "./style.css";
import { setupCounter } from "./counter";
import { charmander } from "./bases/06-decorators2";
/* import { charmander } from "./bases/04-inyections"; */
/* import { name, age } from "./bases/01-types"; 
import { bulbasor } from "./bases/02-objets";
 import { charmander } from "./bases/03-classes"; */

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>${charmander.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
