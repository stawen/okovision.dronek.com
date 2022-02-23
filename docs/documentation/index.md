# Documentations

## Compatiblités

!!! important

        Okovision est compatible uniquement avec le Firmware Oekofen et Paradigma V2 et V3.

!!! warning

        [Okovision n'est plus developpé](index.md#pourquoi-pas-dokovision-v2-compatile-firmware-v4). Aucune compatibilité avec le Firmware V4 n'est possible 

## Le mot de l'auteur

### Qui suis je ?

Je suis un heureux possesseur d'une Oekofen Pellomatic.

### Histoire Okovision

j'ai immediatement relié ma chaudiere sur mon reseau. J'ai pu ainsi commencer à voir ce que je pouvais faire avec l'interface fournie par la chaudiere. J'ai d'abord fait des macro excel pour traiter les CSV, mais il me fallait quelque chose d'automatique. Je me suis donc lancé dans le developpement d'une application de type "Web"

J'ai passé de nombreuses heures à developper okovision pour mes besoins personnels. Le systeme d'okovision était, avant les Version V4, assez simple. J'ai pu ainsi developper une interface graphique pour mettre en forme toutes les données produites par la chaudiere via les exports CSV, mais aussi de pouvoir lui envoyer des commandes de configuration permettant ainsi d'historiser les configurations pour les régler aux petits oignons (je suis assez fière de cette fonctionnalité 😎)
Après de nombreux echanges avec des utilisateurs, j'ai rajouté des fonctionnalités diverses pour repondre à leurs besoins (comme l'apprentissage de chaque configuration via une matrice de correspondance)

### Le Bilan

Okovision a été un bon Use Case.

J'avais déjà fait de la programmation, mais ce n'est pas mon metier principale.

- Le PHP m'a permis de mettre en place facilement quelque chose
- Le code n'est basé sur aucun framework. C'était un choix car je voulais que cela soit simple et légé.
    - Ceci dit, nous avons atteind les limites de l'exercice, car si je voulais encore améliorer, il me faudra passer par un framework
- Avec le recul, la structure du code n'est pas optimale. Ceci est vrai pour tout code que l'on produit, on peut toujours faire mieux 😉
- il resterait encores quelques petites fonctionnalités à mettre en place (comme la purge des données journalière pour allerger la base de donnée)
- Maintenir un code qui doit toujours marcher n'est pas simple, car les versions php, mariadb, et autre evolue, donc il faut suivre pour que les nouveaux utilisateurs puissent en profiter. Cela demande du temps

## Pourquoi il n'y aura jamais d'okovision V2 compatile Firmware v4

Plusieurs raisons :

- Il n'est plus possible d'extraire le CSV directement depuis la chaudiere. Car les fichiers sont directement envoyés sur un stockage chez oekofen
- Il faut donc mettre en place une application web disponible sur internet que je gererai afin que les utilisateurs puissent s'inscrire  sans avoir a installer quoi que ce soit (Modele d'application de type SaaS)
    - J'ai fait un test technique et j'etait en capacité de recolté l'ensemble des données de ==toutes== les chaudières okofen connectés sur internet. Cela pose une question de sécurité du coté d'okofen je trouve.
- Pour comprendre comment les chaudieres fonctionnent a partir de la Version 4, j'ai été obligé de faire du Reverse Ingeniering. Cela veut dire decompiler le Firmware pour lire le code. Ce que j'ai fait. J'ai pu ainsi comprend l'ensemble de l'architecture qu'okofen a mis en place pour recueillir les données de toutes les chaudieres, et proposer leurs services aux travers de my.okofen .
    - En faisant cela, ==je me met dans l'illegalité==. Car je n'ai pas demandé l'accord d'oekofen de lire leur code source. Donc n'ayant aucun partenariat de developpement avec eux, je ne vais pas passer de mon temps personnel pour developper une plateforme SaaS qui se base sur un acte illegale au regard du droit de la propriété
    - De plus, comme je le disais, il faut que cela soit simple pour que tous utilisateurs puissent utiliser okovision. Et au regard des "connexions" qu'il faut faire avec le SI d'oekofen, cela n'est vraiment pas a la porter de tout le monde. D'où mon idée de depart de le proposer au travers d'une Plateforme / Application SaaS
- le modele Economique non viable : En effet, je porterai les coûts d'infrastructure, car il faut mettre en place pas mal de chose pour que cela fonctionne et puisse grandir avec des utilisateurs qui viendrait s'inscrire. Donc la question est : Les utilisateurs seront-ils pret a payer pour ce service ? je ne crois pas, ou très peu d'entre eux / pas suffissement pour que cela soit viable
    - Dois-je passer du temps a developper une toute nouvelle plateforme pour pouvoir inclure les Firmware V4 ? en sachant que le modele economique n'est pas viable et que tout repose sur ==un acte illegale au regard du droit de la propriété==

Au vu de toutes ces raisons, je ne vais pas me lancer dans Okovision V2 benevolement, car si Okofen decide de faire un developpement de leur coté equivalent à okovision, changer l'architecture logicielle, changer les mots de passe, plus rien de marchera. Donc que de temps perdu pour moi.

Pour toutes ces raisons, le developpement d'okovision est arretée dans la version actuelle, car il repond a mon besoin de suivre la consommation de granulée de ==ma== chaudière

Merci à tous ceux qui ont participé de prèt et de loin.
