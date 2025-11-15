// Classe

// In programmazione orientata agli oggetti, una classe è un modello / stampino che descrive:

// quali dati avrà un certo tipo di cosa (proprietà, es: nome, eta)

// quali azioni può fare (metodi, es: saluta(), cammina())

// Puoi pensarla come il progetto di una casa: dice quanti piani, quante stanze, dove stanno le porte… ma non è una casa vera, è solo il progetto.

// Oggetto

// Un oggetto è una istanza di una classe:
// cioè un “pezzo reale” creato a partire da quel modello.

// Continuando l’analogia: se la classe è il progetto della casa, l’oggetto è la casa costruita davvero in mattoni.

class Persona {
   
    constructor (nome, cognome, eta, mestiere) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.mestiere = mestiere
    }
}

let simone = new Persona("pluto", "bianchi", 22, "programmatore");
console.log(simone.nome);
console.log(simone.mestiere);
let pincopallino = new Persona("giovanni", "rossi", 22, "programmatore");
console.log(pincopallino.nome);

class Animale {
    constructor (nome, eta, specie) {
        this.nome = nome;
        this.eta = eta;
        this.specie = specie;
    }
    dimmilaspecie () {
       console.log(this.specie);
    }
    stampafirmanimale () {
        console.log(this.nome, this.eta, this.specie);
    }
}

let gatto = new Animale("pippo", 5, "cammello");
console.log(gatto.specie);
gatto.dimmilaspecie(); 
let maialino = new Animale("gatto", 5, "maiale");       
maialino.dimmilaspecie();
console.log(simone.eta);
simone.eta = 23;
console.log(simone.eta);
console.log(simone.nome);
maialino.stampafirmanimale();
gatto.stampafirmanimale();
simone.nome = 144.22;
console.log(simone.nome);

class Cane extends Animale {
    constructor (nome, eta, specie, razza) {
        super (nome, eta, specie);
        this.razza = razza;
    }
}
let bobby = new Cane ("bobby", 5, "cane", "labrador");
console.log(bobby.razza);
bobby.dimmilaspecie();
bobby.stampafirmanimale();