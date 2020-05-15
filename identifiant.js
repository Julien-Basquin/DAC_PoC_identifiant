const { v4: uuidv4 } = require('uuid');

var ids = [];

//Indique le début de la génération
console.log("BEGIN");

//Génération des identifiants
for (let i = 0; i < 1000000; i++) {
    let uuid = uuidv4();
    ids.push(uuid.substring(0,8) + uuid.substring(28));
}

//Comparaison des identifiants
for (let i = 0; i < ids.length - 1; i++) {
    for (let j = i + 1; j < ids.length; j++) {
        if (ids[i] == ids[j]) {
            document.write(ids[i] + "<br/>");
        }
    }
}

//Indique la fin de la génération
console.log("END");
