import Elem from "./Elem.js";
import Info from "./Info.js";

export default class JatekTer {
  #lista = ["", "", "", "", "", "", "", "", ""];
  #lepes = 0;
  constructor(szuloElem, asideElem) {
    this.szuloElem = szuloElem;
    this.asideElem=asideElem
    this.#megjelenit();
    this.#esemenykezelo();
  }

  #esemenykezelo() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      if (this.#lepes%2===0) {
        this.#lista[event.detail] = "X";
        var kovJatekos ="⭕"
      }else{
        this.#lista[event.detail] = "O";
        var kovJatekos="❌"
      }
      this.szuloElem.innerHTML = "";
      this.#megjelenit();
      this.#lepes++
      new Info(kovJatekos, this.asideElem)
    });
  }

  #megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      new Elem(this.#lista[index], index, this.szuloElem);
    }
  }

  getLepes(){
    return this.#lepes;
  }

}