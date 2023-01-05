# Setup

![w-0080-oko](/assets/img/oko/w-0080-oko.png)

## Configuration / Connexion à la base de donnée

- Si vous êtes sous windows et que vous avez suivi le tuto, mettre localhost, root/root (comme dans l'image ci-dessous).
- Si vous êtes sous rpi/linux, localhost, pour usr / mot de passe, c'est vous qui savez.
- Si vous êtes sur Nas Synology, mettre localhost, user : root et pas de mot de passe (par default c'est comme cela)

![w-0090-oko](/assets/img/oko/w-0090-oko.png)

**Si tout est Ok** vous aurez ce petit bandeau :

![w-0100-oko](/assets/img/oko/w-0100-oko.png)

## Mode de recuperation des fichiers CSV

Si votre chaudière est connectée à votre réseau informatique, indiquer son ip (vous pourrez la changer plus tard via la menu de configuration)

!!! note

    Si vous avez utiliser un hebergement exterieur, voir le chapitre detaillé  [Configurer sa box pour rendre accessible la chaudiere depuis internet](/documentation/configuration/livebox.md)

    Sinon, choisissez USB, ainsi vous pourrez transferez manuellement les fichiers recuperés.

![w-0120-oko](/assets/img/oko/w-0120-oko.png)

![w-0110-oko](/assets/img/oko/w-0110-oko.png)

## **Paramétrage spécifique** à votre installation

![w-0130-oko](/assets/img/oko/w-0130-oko.png)

## Matrice de lecture

Note: Cette étape est primoridale et obligatoire

### Apprentissage de tous les capteurs présents sur votre chaudiere

Chaque installation de chaudière est differentes (ecs ou non, plancher chauffant ou non, ballon tampon ou non, solaire ou non, etc, etc etc).

!!! note

    **Okovision** peu tout gérer, mais il faut lui faire connaitre votre installation.

    Il faut lui fournir un fichier csv généré par la chaudiere. 

    Ainsi Okovison va l'analyser et fini de l'installation

Okovision dispose d'un dictionnaire, ainsi les noms des capteurs, circuits ont été traduit en Français

!!! important

    [Après vous etes identifié](/documentation/configuration/login.md), Rendez vous sur la page *Matrice de lecture CSV*

![w-0140-oko](/assets/img/oko/w-0140-oko.png)

Choix du fichier csv produit par votre chaudière que vous avez deposé sur votre PC

![w-0150-oko](/assets/img/oko/w-0150-oko.png)

Upload de votre fichier dans okovision

![w-0160-oko](/assets/img/oko/w-0160-oko.png)

## Apprentissage terminé

Quand okovision a terminé son analyse, la structure finale est affichée.

Vous retrouverez la liste de tous ces capteurs dans [Création / Gestion des graphiques journaliers](/documentation/configuration/manage-graphics.md)

![w-0170-ok](/assets/img/oko/w-0170-oko.png)
