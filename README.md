#  Quiz JavaScript Interactif

Un petit projet de quiz interactif codé en JavaScript Vanilla, HTML5 et CSS3. Ce projet permet de répondre à une série de questions à choix multiples, de comptabiliser le score en temps réel et d'afficher un bilan à la fin.

##  Fonctionnalités

* **Génération dynamique :** Les questions et réponses sont injectées dynamiquement dans le DOM via JavaScript.
* **Validation instantanée :** Indication visuelle directe de la réponse (vert si correcte, rouge si incorrecte).
* **Affichage de la bonne réponse :** Si l'utilisateur se trompe, la bonne réponse est automatiquement mise en évidence.
* **Anti-triche :** Les boutons de réponse sont désactivés dès qu'un choix est effectué pour empêcher les clics multiples.
* **Calcul du score :** Compteur de points mis à jour au fur et à mesure du parcours.
* **Rejouabilité :** Bouton pour relancer une partie à la fin du quiz sans recharger la page.

##  Technologies utilisées

* **HTML5** : Structure de la page et conteneurs du quiz.
* **CSS3** : Style, mise en page et classes d'état (`.hide`, `.correct`, `.wrong`).
* **JavaScript (ES6+)** : Logique du jeu, manipulation du DOM et gestion des événements (`addEventListener`).

## 📁 Structure du projet

```text
├── index.html       # Structure HTML
├── style.css        # Styles CSS (gestion des couleurs et de l'affichage)
└── script.js        # Logique JavaScript du quiz