## GROUPOMANIA ##

## PROJET 7 -- CRÉATION D'UN RÉSEAUX SOCIAL DANS UNE ENTREPRISE ##

## BACK-END ##

## Informations prérequis ##
Pour pouvoir lancer le back-end de l'application, vous avez besoin d'avoir Node.js et npm localement installés dans votre pc.

Pour tester le projet, vous devez créer 2 fichier DOTENV intitulés : development.env et production.env. 

Dans le fichier development.env, il faut intégrer la variable environnement utilisée, les configurations de votre base de données MongoDB, les configurations de votre localhost et du port ainsi que votre token. Cela ce présente comme ceci :
-  PORT= 8080 (le port sur lequel il écoute le serveur et écoute les appels reçues).
-  DB_USERNAME= Le nom d'utilisateur de la base de données.
-  DB_PASSWORD= Le mot de passe de la base de données.
-  DATA_BASE_NAME= Le nom de la base de données.
-  DB_HOST=localhost (la machine sur laquelle se trouve le serveur: donc localhaost c'est votre machine locale).
-  JWT_TOKEN_SECRET= Votre secret pour chiffrer et déchiffrer le token.

Afin de vous faciliter la tâche, les fichiers sont déjà intégré dans le dossier back-end. Il vous reste à les complèter.

## Création du dossier images ##
Pour pouvoir gérer les images dans les diférentes requêtes, il faut créer un dossier intitulé `images` dans la racine du dossier backend. C'est dans ce dossier que les images des requêtes seront transferées ou supprimées.

## Initialisation du back-end ##
Dans votre terminal, à l'intérieur de ce dossier, lancer le back-end avec la commande : `npm start`.

Le serveur doit être lancé sur un localhost avec par défaut un port 3000. 

## Initialisation de sequelize et MySQL##
Dans un nouveau terminal, à l'intérieur de ce dossier, saisisser la commande : `sequelize db:migrate`.
Cela permet d'initialiser la connexion avec la base de donnée du serveur MySQL et la création des tables.

Ensuite, saisisser la commande : `sequelize db:seed :all`.
Cela permet d'initialiser la connexion avec la base de donnée du serveur MySQL et la création des tables administrateur et user.