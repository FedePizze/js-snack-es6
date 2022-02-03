/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e peso. Stampare a schermo la bici con peso minore utilizzando
destructuring e template literal
*/

const bici = [
    {
        nome: 'Bici1',
        peso: 30
    },

    {
        nome: 'Bici2',
        peso: 21
    },

    {
        nome: 'Bici3',
        peso: 24
    },

    {
        nome: 'Bici4',
        peso: 36
    },

    {
        nome: 'Bici5',
        peso: 16
    }
]



let kg = [];
    
for (let i = 0; i < bici.length; i++ ) {

    const {peso} = bici[i];
    kg.push(peso)
}

alert('la bici più leggera pesa ' + Math.min(...kg))
