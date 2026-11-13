# Linux

!!! information

    Okovision est compatible avec PHP 5 et PHP 7.

Si vous disposez d’un `rpi` ou d’un `serveur Linux`, vous savez probablement déjà installer Apache, MariaDB (ou MySQL) et PHP, ainsi que configurer un site Apache.

Vous trouverez ci-dessous les étapes correspondant à une configuration type. Cet exemple concerne un Raspberry Pi dédié à Okovision.

## Installation des composants

### Installation de la base de données

```bash
sudo apt-get -y install mariadb-server
```

### Configuration de la base de données

Créez l’utilisateur `okouser` avec le mot de passe `okopass` :

```bash
sudo mysql -e "CREATE USER 'okouser'@'localhost' IDENTIFIED BY 'okopass';"
sudo mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'okouser'@'localhost' ;"
```

### Installation d’Apache

```bash
sudo apt-get -y install apache2
systemctl enable apache2
```

### Installation de PHP

```bash
sudo apt-get -y install software-properties-common python-software-properties
sudo add-apt-repository -y ppa:ondrej/php
sudo apt-get update
sudo apt-get -y install php7.2 php7.2-cli php7.2-common
sudo apt-get -y install php7.2-curl php7.2-gd php7.2-json php7.2-mbstring php7.2-intl php7.2-mysql php7.2-xml php7.2-zip
```

## Installation des sources d’Okovision

```bash
cd /var/www/
wget https://github.com/stawen/okovision/archive/master.zip
unzip master.zip
mv okovision-master/ okovision/
rm master.zip
chown www-data:www-data -R okovision/
```

### Configuration d’Apache

```bash
cp /var/www/okovision/install/099-okovision.conf /etc/apache2/sites-available/.
a2ensite 099-okovision.conf
a2dissite 000-default
service apache2 reload
```

### Configuration d’Okovision

Ouvrez l’adresse IP de votre serveur Linux ou de votre Raspberry Pi dans un navigateur, puis suivez la procédure de configuration d’Okovision.

## Tâche Cron sous Linux

Ouvrez l’éditeur des tâches planifiées. Lors du premier lancement, sélectionnez Nano comme éditeur.

```bash
crontab -e
```

Ajoutez la ligne suivante à la fin du fichier :

```bash
22      */2     *       *       *       cd /var/www/okovision; /usr/bin/php -f cron.php 
```

Appuyez sur `CTRL + X`, puis confirmez l’enregistrement avec `Y`.
