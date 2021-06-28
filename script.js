"use strict";

class Namas {
    constructor(miestas, pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius) {
        this.miestas = miestas;
        this.pastatymoData = pastatymoData;
        this.adresas = adresas;
        this.laiptiniuSkaicius = laiptiniuSkaicius;
        this.butuSkaicius = butuSkaicius;
    }

    static bendrasButuSkaicius(butuSkaicius) {
        let suma = 0;
        for (let i in butuSkaicius) {
            suma += butuSkaicius[i];
        }
        return suma;
    }
}

class Butas {
    constructor(numeris, kambariuSkaicius, gyventojuSkaiciusBute) {
        this.numeris = numeris;
        this.kambariuSkaicius = kambariuSkaicius;
        this.gyventojuSkaiciusBute = gyventojuSkaiciusBute;
    }

    info() {
        return "Buto numeris: " + this.numeris + ", kambarių skaičius: " + this.kambariuSkaicius + 
        ", gyventojų skaičius bute: " + this.gyventojuSkaiciusBute;
    }
}

let butas = new Butas(5, 8, 17);
console.log(butas.info());

let namai = [];

for (let i = 0; i < 5; i++) {
    let miestas = "Miestas" + (i + 1);
    let pastatymoData = new Date(2021 - i, 5 - i, 29 - i);
    let adresas = "Adresas" + (i + 1);
    let laiptiniuSkaicius = [];
    for (let j = 0; j <= i; j++) {
        laiptiniuSkaicius.push(j + 1);
    }
    let butuSkaicius = [];
    let min = 1;
    let max = 99;
    for (let j = 0; j <= i; j++) {
        butuSkaicius.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    namai.push(new Namas(miestas, pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius));
}

console.log(namai);

let namas = new Namas("Miestas", new Date(), "Adresas", [1, 2, 3, 4, 5, 6], [9, 8, 4, 5, 2, 1]);
console.log(Namas.bendrasButuSkaicius(namas.butuSkaicius));
let butoNr = 0;

for (let i = 0; i < namas.laiptiniuSkaicius.length; i++) {
    butoNr += namas.butuSkaicius[i];
    let butoNr1 = butoNr;
    let div = document.createElement("div");
    div.style.display = "inline-block";
    for (let j = 0; j < Math.max(...namas.butuSkaicius); j++) {
        let div1 = document.createElement("div");
        div1.style.height = "60px";
        div1.style.width = "60px";
        div1.style.textAlign = "center";
        div1.style.verticalAlign = "middle";
        div1.style.lineHeight = "60px";
        if (Math.max(...namas.butuSkaicius) - namas.butuSkaicius[i] - j <= 0) {
            div1.style.border = "2px solid";
            div1.innerHTML = butoNr1;
            butoNr1--;
        }
        div.appendChild(div1);
    }
    document.getElementById("body").appendChild(div);
}
