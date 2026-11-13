# Synology

Installez les paquets MariaDB et activez le serveur web.

![Nas-0010-inst](/assets/img/nas/Nas-0010-inst.png)

Ouvrez le dossier `web`.

![Nas-0020-inst](/assets/img/nas/Nas-0020-inst.png)

Créez un dossier nommé `okovision`.

![Nas-0030-inst](/assets/img/nas/Nas-0030-inst.png)
![Nas-0040-inst](/assets/img/nas/Nas-0040-inst.png)

Ouvrez l’archive des sources d’Okovision que vous venez de télécharger, puis **copiez son contenu dans le dossier** que vous venez de créer.

![Nas-0050-inst](/assets/img/nas/Nas-0050-inst.png)

Dans l’interface du NAS, **faites un clic droit sur le dossier `okovision`**, puis sélectionnez **Propriétés**.

![Nas-0060-inst](/assets/img/nas/Nas-0060-inst.png)

**Modifiez le propriétaire** et appliquez ce changement aux sous-dossiers.

![Nas-0070-inst](/assets/img/nas/Nas-0070-inst.png)

## Configuration de Web Station et de PHP

!!! note

    Vérifiez que les modules PHP nécessaires sont activés.

![Nas-0071-inst](/assets/img/nas/Nas-0071-inst.png)

La liste des modules figure ci-dessous.

![Nas-0072-inst](/assets/img/nas/Nas-0072-inst.png)
![Nas-0073-inst](/assets/img/nas/Nas-0073-inst.png)
![Nas-0074-inst](/assets/img/nas/Nas-0074-inst.png)
![Nas-0075-inst](/assets/img/nas/Nas-0075-inst.png)

## Accéder à l’application

Dans votre navigateur, **ouvrez Okovision à l’adresse `http://[ip]/okovision`**. Si la page de configuration s’affiche, l’installation s’est bien déroulée.

![Nas-0080-inst](/assets/img/nas/Nas-0080-inst.png)

## Tâche Cron sur un NAS Synology

Ouvrez le **Planificateur de tâches**.

![Nas-0090-inst.png](/assets/img/nas/Nas-0090-inst.png)

**Créez une nouvelle tâche** avec les informations ci-dessous (adaptez les chemins à votre installation).

![Nas-0100-inst.png](/assets/img/nas/Nas-0100-inst.png)

![Nas-0110-inst.png](/assets/img/nas/Nas-0110-inst.png)

Vous pouvez également utiliser la commande suivante :

```bash
wget http://127.0.0.1/okovision/cron.php 1>/dev/null 2>/dev/null;
```

### Fréquence d’exécution

!!! important

    Exécutez le script toutes les deux heures. Il n’est pas utile de le lancer plus fréquemment.

    ![Nas-0120-inst.png](/assets/img/nas/Nas-0120-inst.png)
