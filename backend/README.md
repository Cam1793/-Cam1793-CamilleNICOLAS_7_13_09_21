## GROUPOMANIA ##

## PROJET 7 -- CRÉATION D'UN RÉSEAUX SOCIAL DANS UNE ENTREPRISE ##

## BACK-END ##

## Informations prérequis ##
Pour pouvoir lancer le back-end de l'application, vous avez besoin d'avoir Node.js et npm localement installés dans votre pc.

Pour tester le projet, vous devez créer 1 fichier DOTENV intitulé development.env .

Dans le fichier development.env, il faut intégrer les configurations de votre base de données MySQL, les configurations de votre localhost et du port ainsi que votre secret token. Cela ce présente comme ceci :
-  PORT= 3000 (le port sur lequel il écoute le serveur et écoute les appels reçues).
-  DB_USERNAME= Le nom d'utilisateur de la base de données.
-  DB_PASSWORD= Le mot de passe de la base de données.
-  DATA_BASE_NAME= Le nom de la base de données.
-  DB_HOST=localhost (la machine sur laquelle se trouve le serveur: donc localhaost c'est votre machine locale).
-  JWT_TOKEN_SECRET= Votre secret pour chiffrer et déchiffrer le token.

Afin de vous faciliter la tâche, les fichiers sont déjà intégré dans le dossier back-end. Il vous reste à les complèter.

## Création du dossier images ##
Pour pouvoir gérer les images dans les diférentes requêtes, il faut créer un dossier intitulé `images` dans la racine du dossier backend. C'est dans ce dossier que les images des requêtes seront transferées ou supprimées.

## Initialisation du back-end ##
Positionnez vous dans le dossier `backend` avec la commande : `cd backend`.

Ensuite, initialiser le back-end avec la commande : `npm install`.

Ensuite, lancer le back-end avec la commande : `npm start`.
Cela démarrera le serveur nodeJS sur le port 3000 et éxecutera le fichier development.env .

Le serveur doit être lancé sur un localhost avec par défaut un port 3000. 

## Initialisation de sequelize et MySQL ##
Ensuite dans le même dossier `backend`, saisisser la commande : `sequelize db:migrate`.
Cela permet de créer les différentes tables dans les migrations, dans la base de donnée MySQL.

Ensuite, saisisser la commande : `sequelize db:seed :all`.
Cela permet d'initialiser la table admin-user dans la base de donnée MySQL.