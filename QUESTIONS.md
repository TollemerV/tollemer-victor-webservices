## Quelle est la différence entre un PUT un PATCH
PUT remplace entièrement une ressource existante par une nouvelle version. Elle est déjà concu pour écraser avec un nouveau contenu la donnée
PATCH applique partiellement des modifications à une ressource existante


## Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?
Cela est souvent du à un problème de CORS. Si l'API ne renvoie pas les bons en-têtes CORS pour autoriser la requête, le navigateur bloquera la réponse et affichera une erreur en console.


## Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?

Cela peut permettre la mise en cache, le reverse proxy et la gestion des certificats SSL.


## Citez 3 axes pour améliorer les performance d'une api Rest

1. Utiliser la mise en cache
2. Optimiser les requêtes de base de données (3) implémenter la compression des données pour réduire la taille des réponses.
3. Utiliser des requetes asynchrones