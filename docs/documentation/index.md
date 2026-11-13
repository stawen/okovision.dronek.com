# Documentation

## Compatibilité

!!! important

        Okovision est uniquement compatible avec les firmwares ÖkoFEN et Paradigma V2 et V3.

!!! warning

        [Okovision n’est plus développé](index.md#pourquoi-il-ny-aura-pas-dokovision-v2-compatible-avec-le-firmware-v4). Aucune compatibilité avec le firmware V4 n’est possible.

## Le mot de l’auteur

### Qui suis-je ?

Je suis l’heureux propriétaire d’une ÖkoFEN Pellematic.

### Histoire d’Okovision

La chaudière le permettait, alors je l’ai immédiatement reliée à mon réseau domestique. J’ai ainsi pu explorer les possibilités qu’elle offrait. Dans un premier temps, pour m’aider à régler ses paramètres et à mesurer leur impact sur les courbes et la gestion de la puissance, j’ai écrit des macros Excel pour traiter les fichiers CSV.

Très vite, j’ai eu besoin d’un outil automatisé qui ne nécessite presque aucune intervention.

Je me suis donc lancé dans le développement d’une application web (back-end : PHP ; front-end : Bootstrap et jQuery).

J’ai consacré de nombreuses heures au développement d’`Okovision` pour répondre à mes besoins personnels. Avant le firmware V4, le fonctionnement d’Okovision était assez simple. J’ai ainsi pu créer une interface graphique qui met en forme les données de la chaudière exportées au format CSV. L’application permet également de lui envoyer des commandes de configuration et d’en conserver un historique, afin de faciliter les réglages (je suis assez fier de cette fonctionnalité 😎).

Après de nombreux échanges avec des utilisateurs sur des forums, j’ai ajouté plusieurs fonctionnalités pour répondre à leurs besoins, comme l’apprentissage de chaque configuration à l’aide d’une matrice de correspondance.

### Bilan

`Okovision` a été un bon cas d’usage.

J’ai commencé ma carrière professionnelle comme développeur, mais ce n’est plus mon métier principal.

- PHP m’a permis de mettre rapidement en place une solution, malgré les défauts que peut avoir ce langage.
    - Le code devait pouvoir être hébergé chez des hébergeurs grand public (1&1, OVH, etc.). PHP était alors le langage le plus répandu.
- Le code ne repose sur aucun framework. C’était un choix délibéré : je voulais que l’installation soit simple et ne nécessite pas de connaissances particulières.
    - Cela dit, nous avons atteint les limites de cette approche. Pour continuer à faire évoluer l’application, il faudrait utiliser un framework.
- Avec le recul, la structure du code pourrait être améliorée. C’est le cas de tout projet : il est toujours possible de faire mieux 😉
- Il reste quelques fonctionnalités à développer, comme la purge des données journalières pour alléger la base de données.
- Maintenir une application fonctionnelle dans la durée n’est pas simple. PHP, MariaDB et les autres technologies évoluent ; il faut donc régulièrement mettre le projet à jour pour que les nouveaux utilisateurs puissent en profiter. Cela demande beaucoup de temps.

## Pourquoi il n’y aura pas d’Okovision V2 compatible avec le firmware V4

Plusieurs raisons expliquent ce choix :

- Il n’est plus possible d’extraire les fichiers CSV directement depuis la chaudière. Ils sont désormais envoyés vers un stockage externe géré par ÖkoFEN ou par un prestataire.
- Il faudrait donc créer une application web accessible sur Internet, à laquelle les utilisateurs pourraient s’inscrire sans rien avoir à installer (un modèle d’application de type SaaS).
    - Après une étude de faisabilité (POC), j’ai constaté qu’il était possible de récupérer les données de ==toutes== les chaudières ÖkoFEN connectées à Internet, sans l’accord de leurs propriétaires ni celui du constructeur. Cela soulève une question de sécurité pour ÖkoFEN.
- Pour comprendre le fonctionnement des chaudières à partir du firmware V4, j’ai dû procéder à de la rétro-ingénierie, c’est-à-dire décompiler le firmware pour en lire le code. J’ai ainsi pu comprendre l’architecture mise en place par ÖkoFEN pour recueillir les données des chaudières et proposer ses services via my.okofen.info.
    - En procédant ainsi, ==je me placerais dans l’illégalité==, car je n’ai pas demandé à ÖkoFEN l’autorisation d’examiner son code source. En l’absence de partenariat de développement avec le constructeur, je ne souhaite pas consacrer de temps personnel à la création d’une plateforme SaaS reposant sur une démarche qui pourrait contrevenir au droit de la propriété intellectuelle.
    - De plus, comme indiqué précédemment, `Okovision` doit rester simple d’utilisation. Or, les « connexions » nécessaires avec le système d’information d’ÖkoFEN ne sont pas accessibles à tous. C’est pourquoi j’envisageais de proposer le service sous la forme d’une plateforme ou d’une application SaaS.
- Le modèle économique ne serait pas viable. Je devrais assumer les coûts d’infrastructure nécessaires au fonctionnement et à l’évolution du service, y compris avec un hébergement cloud comme Azure ou AWS. Les utilisateurs seraient-ils prêts à payer pour ce service ? Je ne le pense pas, ou pas en nombre suffisant.
    - Cela vaut-il la peine de développer une toute nouvelle plateforme compatible avec le firmware V4, alors que le modèle économique n’est pas viable et que le projet repose sur ==une démarche potentiellement contraire au droit de la propriété intellectuelle== ?

Pour toutes ces raisons, je ne souhaite pas développer bénévolement Okovision V2. Si ÖkoFEN créait une solution équivalente, modifiait son architecture logicielle ou changeait les mots de passe, Okovision cesserait de fonctionner. Ce serait alors beaucoup de temps investi en vain.

Le développement d’Okovision s’arrête donc à la version actuelle, qui répond à mon besoin de suivre la consommation de granulés de ==ma== chaudière.

Merci à toutes celles et ceux qui ont contribué au projet, de près ou de loin.
