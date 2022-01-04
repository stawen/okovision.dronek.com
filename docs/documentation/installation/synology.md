# Synology

Installer les packages MariaDb et activer le serveur web

![Nas-0010-inst](/assets/img/nas/Nas-0010-inst.png)

Allez dans le repertoire Web

![Nas-0020-inst](/assets/img/nas/Nas-0020-inst.png)

Creez un dossier "okovision"

![Nas-0030-inst](/assets/img/nas/Nas-0030-inst.png)
![Nas-0040-inst](/assets/img/nas/Nas-0040-inst.png)

Ouvrez l'archive de source d'okovision que vous venez de télécharger et **copiez les dans le repertoire** que vous venez de creer precedement

![Nas-0050-inst](/assets/img/nas/Nas-0050-inst.png)

Dans le NAS, **faites clic droit sur le repertoire "okovision"**, puis propriétés

![Nas-0060-inst](/assets/img/nas/Nas-0060-inst.png)

**Changez le propriétaire** et appliquez pour les sous-repertoires

![Nas-0070-inst](/assets/img/nas/Nas-0070-inst.png)

## Configuration de Web Station et de PHP

Note: Vous devez verifier que les modules PHP sont bien activés.

![Nas-0071-inst](/assets/img/nas/Nas-0071-inst.png)

Ci-dessous, le liste des modules.

![Nas-0072-inst](/assets/img/nas/Nas-0072-inst.png)
![Nas-0073-inst](/assets/img/nas/Nas-0073-inst.png)
![Nas-0074-inst](/assets/img/nas/Nas-0074-inst.png)
![Nas-0075-inst](/assets/img/nas/Nas-0075-inst.png)

## Acces à l'application

Avec votre navigateur, **accedez à okovision `http://[ip]/okovision`** (si vous avez la page de setup c'est tout bon)

![Nas-0080-inst](/assets/img/nas/Nas-0080-inst.png)

## Cron sous Nas synology

Aller dans le **plannificateur de taches**

![Nas-0090-inst.png](/assets/img/nas/Nas-0090-inst.png)

**Creez une nouvelle entrée** avec les informations suivantes (a adapter pour les chemins)

![Nas-0100-inst.png](/assets/img/nas/Nas-0100-inst.png)

![Nas-0110-inst.png](/assets/img/nas/Nas-0110-inst.png)

ou

```bash
wget http://127.0.0.1/okovision/cron.php 1>/dev/null 2>/dev/null;
```

### Récurrence de l'execution

!!! important

    Vous devez faire executer votre script tous les 2 heures minimum. En dessous cela ne sert à rien

    ![Nas-0120-inst.png](/assets/img/nas/Nas-0120-inst.png)
