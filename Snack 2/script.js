/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi
contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


// Creo i team con i rispettivi dati
const team = [
    {
        nome: 'Manchester City',
        falliSubiti: 0,
        puntiFatti: 0,
    },

    {
        nome: 'Manchester United',
        falliSubiti: 0,
        puntiFatti: 0,
    },

    {
        nome: 'Tottenham Hotspur',
        falliSubiti: 0,
        puntiFatti: 0,
    },

    {
        nome: 'Chelsea',
        falliSubiti: 0,
        puntiFatti: 0,
    },

    {
        nome: 'Liverpool',
        falliSubiti: 0,
        puntiFatti: 0,
    }
]


// Cambio i valori dei falli e dei punti da 0 a un numero random. Ciclo la regola per tutti gli elementi
for (let i = 0; i < team.length; i++ ) {

    team[i].falliSubiti = Math.floor((Math.random() * 20) + 1)
    //console.log(team.falliSubiti)

    team[i].puntiFatti = Math.floor((Math.random() * 60) + 1)
    //console.log(team.puntiFatti)
}


// Creo un nuovo array che contenga solo gli elementi nome e falli di ogni squadra
const nuovoArray = []

for (let i = 0; i < team.length; i++ ) {

    const {nome, falliSubiti} = team[i];
    nuovoArray.push({nome, falliSubiti})
}

console.log(nuovoArray)