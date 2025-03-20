export default class Elem{
    #adat=" ";
    #index = 0;
    #szuloElem;

    constructor(adat, index, szuloElem,){
        this.#adat=adat;
        this.#index=index;
        this.#szuloElem=szuloElem;
        this.megjelenit()
        this.elem = document.querySelector(".elem:last-child");
        console.log(this.elem)
        this.elem.addEventListener("click", ()=> {
            if (this.#adat === " "){
            const esemeny = new CustomEvent("kivalaszt",{detail:this.#index});
            window.dispatchEvent(esemeny);
            }
        });
       
           
           
    }
    megjelenit() {
        let html=`<div class="elem">
                    ${this.#adat}
                    </div>`
        this.#szuloElem.insertAdjacentHTML("beforeend",html);
}

   

}