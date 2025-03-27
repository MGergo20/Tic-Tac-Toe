export default class Info {
    #kovJatekos;
    #szuloElem;
    constructor(kovJatekos, szuloElem) {
      this.#kovJatekos= kovJatekos;
      this.#szuloElem = szuloElem;
      this.kiir()
    }
  
    kiir() {
      this.#szuloElem.innerHTML+=`<p>${this.#kovJatekos} következik</p>`
    }
  }