
## Choix Techniques 

- **NestJs**: NestJS est utilisé pour sa structure modulaire et son intégration facile avec MongoDB

## Structure

-  users: IncLes utilisateurs ont des compétences, représentées par des références MongoDB
-  skills: Chaque compétence est unique et elle peut être associée à plusieurs utilisateurs
- projects : Les projets sont constitués d'équipes de plusieurs "users"

## Points Clés

- **Modularité**: Chaque entité est gérée dans son propre module : c'est plus simple à gérer
- **Relations**: Les relations entre utilisateurs et compétences, ainsi qu'entre utilisateurs et projets, sont gérées avec des références MongoDB
- **Validation**:  Utilisation de DTOs avec "class-validator" pour valider les données entrantes

## Installation et Exécution

1. Avoir Node.js et MongoDb
2. Clonez puis "npm i"
3. Ajouter le ".env"
4. Lancez la commande "npm run start"
