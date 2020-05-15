PoC de la génération d'un identifiant aléatoire unique

Le test a été réalisé en JavaScript et utilise Node.js et npm.

L'installation du package permettant de générer l'UUID se fait par la commande npm install

Le test est défini dans le fichier identifiant.js et lancé avec le fichier index.html (test réalisé dans le navigateur).
Le package browserify a été utilisé pour créer le bundle utilisé et recompilé dynamiquement avec watchify.

Node.js : https://nodejs.org/en/
uuid : https://github.com/uuidjs/uuid
browserify : https://github.com/browserify/browserify
watchify : https://github.com/browserify/watchify