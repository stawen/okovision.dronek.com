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

La chaudière en était capable, je l'ai immediatement relié à mon réseau domestique. J'ai ainsi pu commencer à explorer tout ce que je pouvais faire avec. Dans un premier temps, afin de mieux me permettre de régler tous les paramètres de la chaudière et de mesurer leurs impacts sur les courbes, la gestion de la puissance, etc, j'ai écris des macro excel pour traiter les CSV. 

Très vite, il me fallait quelque chose d'automatisé et qui allait me demander quasi aucune intervention. 

Je me suis donc lancé dans le developpement d'une application de type "Web" (backend : PHP, et frontend : Boostrap + Jquery)

J'ai passé de nombreuses heures à developper `okovision` pour mes besoins personnels. Le systeme d'okovision était, avant les Version V4, assez simple. J'ai pu ainsi developper une interface graphique pour mettre en forme toutes les données produites par la chaudière via les exports CSV, mais aussi de pouvoir lui envoyer des commandes de configuration permettant ainsi d'historiser les configurations pour la régler aux petits oignons (je suis assez fière de cette fonctionnalité 😎)
Après de nombreux echanges avec des utilisateurs via des forums, j'ai rajouté des fonctionnalités diverses pour repondre à leurs besoins (comme l'apprentissage de chaque configuration via une matrice de correspondance)

### Le Bilan

`Okovision` a été un bon Use Case.

J'ai été au debut de ma vie professionnel developpeur, mais ce n'est plus mon metier principale.

- Le PHP m'a permis de mettre en place facilement quelque chose
    - meme avec tous les defauts que ce langage peut avoir.
    - Mon code devait pouvoir etre hébergé sur des hébergeurs grand public (1and1, ovh, etc), PHP etait le language le plus repandu.
- Le code n'est basé sur aucun framework. C'était un choix car je voulais que cela soit simple et légé a installé sans avoir de connaissance particulière
    - Ceci dit, nous avons atteint les limites de l'exercice, car si je veux encore l'améliorer, il me faudra passer par un framework
- Avec le recul, la structure du code n'est pas optimale. Ceci est vrai pour tout code que l'on produit, on peut toujours faire mieux 😉
- il reste encores quelques petites fonctionnalités à mettre en place (comme la purge des données journalière pour allerger la base de donnée)
- Maintenir un code qui doit toujours marcher n'est pas simple, car les versions php, mariadb, et autre evoluent, il faut toujours mettre à jour afin que les nouveaux utilisateurs puissent en profiter. Cela demande du temps, beaucoup de temps

## Pourquoi il n'y aura jamais d'okovision V2 compatile Firmware v4

Plusieurs raisons :

- Il n'est plus possible d'extraire le CSV directement depuis la chaudière. Les fichiers sont maintenant directement envoyés sur un stockage externe géré oekofen (ou un préstataire)
- Il faut donc mettre en place une application web disponible sur internet afin que les utilisateurs puissent s'inscrire sans avoir à installer quoi que ce soit (Modele d'application de type SaaS)
    - Suite a un POC, je pu constaté que j'etait en capacité de recolté l'ensemble des données de ==toutes== les chaudières okofen connectés sur internet sans avoir besoin de l'accord des propriétaire ni du constructeur. Cela pose une question de sécurité du coté d'okofen.
- Pour comprendre comment les chaudières fonctionnent à partir de la Version 4, j'ai été obligé de faire du Reverse Ingeniering. Cela veut dire decompiler le Firmware pour lire le code. Ce que j'ai fait. J'ai pu ainsi comprend l'ensemble de l'architecture qu'okofen a mis en place pour recueillir les données de toutes les chaudières, et proposer leurs services aux travers de my.okofen.info
    - En faisant cela, ==je me met dans l'illegalité==. Car je n'ai pas demandé l'accord d'oekofen de lire leur code source. Donc n'ayant aucun partenariat de developpement avec eux, je ne vais pas passer de du temps personnel pour developper une plateforme SaaS qui se base sur un acte illégale au regard du droit de la propriété
    - De plus, comme je le disais, il faut que cela soit simple pour que tous les utilisateurs puissent utiliser `Okovision`. Et au regard des "connexions" qu'il faut faire avec le SI d'oekofen, cela n'est vraiment pas à la porter de tout le monde. D'où mon idée de départ : de le proposer au travers d'une Plateforme / Application SaaS
- le modele économique n'est pas viable : En effet, je porterai les coûts d'infrastructure, car il faut mettre en place pas mal de chose pour que cela fonctionne et puisse grandir avec des utilisateurs qui viendrait s'inscrire (même avec un hebergement Cloud type Azure ou AWS). Donc la question est : Les utilisateurs seront-ils pret à payer pour ce service ? je ne crois pas, ou très peu d'entre eux / pas suffissement pour que cela soit viable
    - Dois-je passer du temps a developper une toute nouvelle plateforme pour pouvoir inclure les Firmware V4 ? en sachant que le modele économique n'est pas viable et que tout repose sur ==un acte illegale au regard du droit de la propriété==

Au vu de toutes ces raisons, je ne vais pas me lancer dans Okovision V2 bénévolement, car si Okofen décide de faire un developpement de leur coté equivalent à okovision, changer l'architecture logicielle, changer les mots de passe, plus rien de marchera. Donc que de temps perdu pour moi.

Pour toutes ces raisons, le developpement d'okovision est arreté dans la version actuelle, car il repond à mon besoin de suivre la consommation de granulée de ==ma== chaudière

Merci à tous ceux qui ont participé de prèt et de loin.
