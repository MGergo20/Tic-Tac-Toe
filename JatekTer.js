import Elem from "./Elem.js";
import  Info  from "./Info.js";

export default class Jatekter {
  #korszamlalo = 0;
  #lista = ["O", " ", " ", " ", " ", " ", " ", " ", "X"];
  #szuloElem;
  
  
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    this.#megjelenit();
    this.#esemenykezelo();
  }

  #esemenykezelo() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      if (this.#korszamlalo % 2 === 0) {
        this.#lista[event.detail] = "X";
      } else {
        this.#lista[event.detail] = "O";
      }
      this.#korszamlalo++;
      this.#szuloElem.innerHTML = "";
      this.#megjelenit();
    });
  }

  #megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      new Elem(this.#lista[index], index, this.#szuloElem);
    }
  }
}
