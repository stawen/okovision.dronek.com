# API - Interface de communication

Okovision dispose d’une API.

Elle vous permet d’interagir avec Okovision sans passer par son interface graphique. Vous pouvez également agir directement sur votre chaudière à l’aide de cette API.

## Fonctionnement

!!! important

    Les appels utilisent la méthode GET et l’API renvoie des données au format JSON.

!!! important

    Vous devez inclure votre jeton API dans la requête GET. Il est disponible sur la page « À propos ».

Exemple de requête :

```bash
curl http://okovision/api.php?token=sdjknrjkfndvjb&type=admin&action=getFileFromChaudiere
```

Réponse :

```json
{
  "response": true,
  "listefiles": [
    {
      "file": "touch_20160108.csv",
      "url": "http://boiler/logfiles/pelletronic/touch_20160108.csv"
    },
    {
      "file": "touch_20160109.csv",
      "url": "http://boiler/logfiles/pelletronic/touch_20160109.csv"
    },
    {
      "file": "touch_20160110.csv",
      "url": "http://boiler/logfiles/pelletronic/touch_20160110.csv"
    },
    {
      "file": "touch_20160111.csv",
      "url": "http://boiler/logfiles/pelletronic/touch_20160111.csv"
    }
  ]
}
```

Exemple de requête :

```bash
curl http://okovision/api.php?token=sdjknrjkfndvjb&type=rt&action=setBoilerMode&way=1&mode=2
```

Réponse :

```json
[
  {
    "status": "OK",
    "name": "CAPPL:LOCAL.hk[0].betriebsart[1]",
    "value": "2"
  }
]
```

Exemple de requête :

```bash
curl http://okovision/api.php?token=sdjknrjkfndvjb&type=rendu&action=getIndicByDay&day=2015-12-22
```

Réponse :

```json
{
  "consoPellet": 22.25,
  "tcExtMax": 12.8,
  "tcExtMin": 7.3
}
```

## Lecture de la documentation

Prenons l’exemple de `setBoilerMode` :

```txt
* rt :
  * setBoilerMode (permet de forcer le mode d’un circuit)
      * way : 0 / 1 / 2 / etc. (numéro du circuit)
      * mode : 0 - arrêt / 1 - Auto / 2 - Confort / 3 - Réduit
```

La requête doit donc contenir les paramètres suivants :

```txt
* type=rt
* action=setBoilerMode
* way=1 (si vous n’avez qu’un seul circuit de chauffage, utilisez 1 ; si vous en avez plusieurs, consultez l’interface web ÖkoFEN pour connaître le numéro du circuit)
* mode=2 (force ici le mode Confort)
```

!!! important

    N’oubliez pas d’inclure le jeton API, sinon la commande sera rejetée.

```txt
* token=sdjknrjkfndvjb  (utilisez celui qui figure sur la page « À propos » de votre instance Okovision)
```

Résultat :

```bash
curl http://okovision/api.php?TOKEN=sdjknrjkfndvjb&TYPE=rt&ACTION=setBoilerMode&WAY=1&MODE=2
```

## Liste des services disponibles

```txt
* admin : 
   * getFileFromChaudiere
   * getHeaderFromOkoCsv
   * getSaisons
   * checkUpdate
   * getVersion
   
* graphique :
   * getCapteurs
   * getGrapheAsso :
      * id : identifiant du graphique (rendu.getGraphe)
      
* rendu :
   * getGraphe
   * getGrapheData :
      * id : identifiant du graphique (rendu.getGraphe)
      * day : jour souhaité, au format YYYY-MM-DD
      
   *  getIndicByDay :
      * day : jour souhaité, au format YYYY-MM-DD
      
* rt :
   * getBoilerMode (permet de connaître le mode de fonctionnement d’un circuit de chauffage : Arrêt / Réduit / Confort / Auto) :
      * way : 0 / 1 / 2 / etc. (numéro du circuit)
      
   * setBoilerMode (permet de forcer le mode d’un circuit)
      * way : 0 / 1 / 2 / etc. (numéro du circuit)
      * mode : 0 - arrêt / 1 - Auto / 2 - Confort / 3 - Réduit
```
