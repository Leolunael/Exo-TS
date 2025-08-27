// EXERCICE 1
function additionDepenses(cafe: number, sandwich: number) : number{
    return cafe+sandwich;
}
console.log("cafe+sandwich: ", additionDepenses(2,5));

function toKilometers(v:number | string): string{
        if (typeof v === 'number') {
        return `${v}km`;
    } else {
        return v;
    }
}
console.log("kilometres:", toKilometers(5));
console.log("kilometres:", toKilometers("5km"));

function totalPanier(...prix: number[]): number {
    return prix.reduce((total, prix) => total + prix, 0);
}
console.log("Panier vide", totalPanier());
console.log("Total panier", totalPanier(5,85,16,7,6));
// Peut-on faire cet exercice en utilisant .push pour agrémenter le tableau au fur est à mesure?
// Cela ne fonctionne pas pour moi, mais je n'ai peut-être pas la bonne façon de faire.

// EXERCICE 2
function saluer(prenom: string = "Anonyme"): string {
    return `${prenom}`;
}
console.log("Bonjour", saluer(),"!");
console.log("Bonjour", saluer("toto"),"!");

// J'ai un problème: 
// la réponse retournée est: Bonjour  ${prenom} !
// et non Anonyme même quand je mets "toto"

function prixTTC(prixHT: number, tauxTVA: number = 0.2): number {
    return prixHT+(prixHT*tauxTVA); // on peut rajouter .toFixed(chiffre après la virgule) ex .toFixed(2) = 1.11 
}
console.log("Prix TTC:", prixTTC(10));

function ajouterPourboire(total: number, tip?: number): number {
    const pourboire = tip !== undefined ? tip : 0; //const pourboire = tip ?? 0
    return total + pourboire;
}
console.log("Total sans pourboire:", ajouterPourboire(50, 0));
console.log("Total avec pourboire 10:", ajouterPourboire(50, 10));


function formatContact(opts: { nom?: string; ville?: string }): string {
    const { nom = "Inconnu", ville = "N/A" } = opts;
    return `${nom} — ${ville}`;
}
console.log("Contact :", formatContact({ nom: "Toto", ville: "Lyon" }));
console.log("Contact :", formatContact({nom: "Toto"}));

// EXERCICE 3

const arrondirAuCentime = function (n: number): number { 
    return Math.round(n * 100) / 100;
}
console.log("Arrondir à 2 décimal:", arrondirAuCentime(3.141592653589793));

const appliquerReduction = (prix: number): number => prix * 0.5;
console.log("Prix 50€ avec réduction:", appliquerReduction(50));

const upperProduits = (liste: string[]): string[] => liste.map(produit => produit.toUpperCase());
const list = ["panier", "math", "kilometre", "centimes"]
console.log("Liste uppercase:", upperProduits(list));

    //Exo 3 4ème question creerContact => pas compris comment faire

// EXERCICE 4
// Je n'ai pas compris ce qui fallait faire

// EXERCICE 5

function logAction(message: string): void{
    console.log(`${message}`);
}
logAction("Courrir");

function erreurFatale(message: string): never {
    throw new Error(message);
}

async function getMeteo(ville: string): Promise<{ ville: string; degres: number }>{
    return Promise.resolve({ ville, degres: 21 });
}
console.log("ville de", getMeteo("Lyon"));

// EXERCICE 6

type Critere<T> = (v: T) => boolean;

function filtrer<T>(arr: T[], crit: Critere<T>): T[] {
    const filtre: T[] = [];
        for (const v of arr) {
        if (crit(v)) {
            filtre.push(v);
        }
    }
    return filtre;
}
console.log(filtrer([1,2,3,4], x => x > 2));

function depenseEstGrande(n: number): boolean{
    return n>= 100;
}
console.log(filtrer([50, 120, 30], depenseEstGrande));

function minLongueur(min: number): (s: string) => boolean{
    return (s: string) => s.length >= min;
}
console.log(filtrer(["café", "épicerie"], minLongueur(7)));