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
function saluer(prenom = "Anonyme"): string {
    return '${prenom}';
}
console.log("Bonjour", saluer(),"!");
console.log("Bonjour", saluer("toto"),"!");

// J'ai un problème: 
// la réponse retournée est: Bonjour  ${prenom} !
// et non Anonyme même quand je mets "toto"

function prixTTC(prixHT: number, tauxTVA: number = 0.2): number {
    return prixHT+(prixHT*tauxTVA);
}
console.log("Prix TTC:", prixTTC(10));

function ajouterPourboire(total: number, tip?: number): number {
    const pourboire = tip !== undefined ? tip : 0;
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