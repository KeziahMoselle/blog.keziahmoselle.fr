---
title: Installation de Visual Studio Code et son utilisation
date: "2019-09-03T23:54:40.245Z"
---

# Installation de Visual Studio Code Portable

> **Remarque** : Si vous n'êtes pas contraint d'utiliser la version portable préférez la version User ou System installer.

Il est possible d'installer la version portable officiel depuis : [https://code.visualstudio.com/download](https://code.visualstudio.com/Download)

- Télécharger Visual Studio Code en .zip (version 64 bits)

![](Untitled-0b33541a-d34e-4b3a-b398-3eb11d7b631d.png)

- Extraire le .zip dans un dossier (avec l'aide de 7zip ou Winrar...)

![](Untitled-c6ed9460-84be-4c0c-84f2-129c35e8b718.png)

- dans le cadre de l'IUT il faut l'extraire dans votre disque S:\\ pour qu'il soit accessible depuis n'importe quel poste.
    - Vous pouvez également mettre votre dossier sur une clé USB pour le lancer depuis celle-ci

Maintenant, vous avez un dossier du style : 

![](Untitled-1d40b0de-021d-4e9b-b76f-31087b1085a2.png)

- Créer un dossier "data"

![](Untitled-1d7b198a-e633-480d-a5b0-fa6084215885.png)

- Voilà ! Maintenant il suffit de lancer :

![](Untitled-b614a8bb-77fc-4e22-a32c-fe210a8d2b05.png)

Pour plus d'informations sur la version portable : 

[Portable Mode in Visual Studio Code](https://code.visualstudio.com/docs/editor/portable)

---

# Comment utiliser Visual Studio Code ?

## Présentation

Après l'installation si nous ouvrons VSCode nous arrivons sur :

![](Untitled-b9e0237d-aa37-4c50-b017-4199e662c544.png)

- Tout d'abord nous allons ouvrir un projet :

![](Untitled-b46f7832-5f38-449e-b627-d8e829103a16.png)

- Différents onglets sont disposés à gauche :
    - Explorer : C'est votre dossier

    ![](Untitled-bc309cae-f8cf-4371-af8a-93c426594344.png)

    - Search : C'est comme un CTRL+F (Rechercher dans une page ...) ou CTRL + H sur Powerpoint !

    ![](Untitled-9c448a89-6855-42c4-b21b-f27784f73811.png)

    - Extensions :

    ![](Untitled-f0250b55-1a8d-4397-9719-caf35f0cdecd.png)

Je ne parlerais pas des deux autres onglets car ils ne sont pas pertinent pour le moment

---

## Comment changer de langue ?

Vous n'êtes pas à l'aise avec tous les termes du développement et vous voulez changer de langue ? Pas de soucis, rendez-vous sur l'onglet **Extensions** et rechercher : 

![](Untitled-90a80fcd-e5a9-4fa7-be92-161106926147.png)

L'éditeur détecte que vous voulez changer de langue et vous demande si vous voulez changer de langue immédiatement

![](Untitled-b2bb2c45-6a0d-4c11-b5d7-8ede038f9794.png)

et voilà, votre éditeur est en français

---

## Installation d'un thème de couleur et d'icônes

Bon, c'est bien on a installé notre éditeur, mais il est possible que vous souhaitez changer l'apparence de votre éditeur pour être plus à l'aise avec

- Rendez vous sur l'onglet **Extensions**
- Rechercher : @category:themes
- Maintenant, une liste de thèmes est apparu, cliquer sur chacun d'eux, vous avez un aperçu du thème à droite comme par exemple :

![](Untitled-11abcb01-e67f-4ae7-bfa9-efc61906129e.png)

- Cliquer sur Installer
- VSCode va maintenant appliquer votre thème automatiquement

- Si vous souhaitez changer de thème plus tard vous pouvez accéder au menu ici :
  
![](Untitled-cffbf9cb-2cab-4d53-8661-cb88a39e91a2.png)


> **Remarque** : Il existe des thèmes préinstallé, si l'un d'eux vous correspond il n'est pas nécessaire d'installer des thèmes supplémentaire

![](Untitled-f38395cc-71f9-4876-be66-e97fe02caea8.png)

- Installer un pack d'icônes :

![](Untitled-b543c7a6-195b-4932-bd22-99d30576659e.png)

- Installer le comme un thème

- Avant / Après

![](Untitled-970e507e-36f8-40d4-b7e2-4b3bbf2595bc.png)

![](Untitled-ffdb5578-f4be-4447-8ff8-885fff38787c.png)

---

## Observer les changements en temps réel avec un site statique (Live Server)

- Aller sur l'onglet Extensions et télécharger Live Server

![](Untitled-e1a12fe1-43e6-4f00-8288-18eed3a9d66b.png)

- OUVRIR UN DOSSIER est primordial pour pouvoir lancer Live Server, car il va prendre le chemin vers ce dossier pour l'ouvrir dans votre navigateur !
- Cliquer sur "Go Live"

![](Untitled-d6d1a10e-c746-4c68-a080-9eef1aa2c466.png)

- S'il n'apparaît pas, vous pouvez ouvrir la palette de commandes : CTRL+Shift+P ou F1

![](Untitled-f8ebb3cf-8a37-49d3-9fd3-03872eeb23fc.png)

> **Remarque** : Si vous souhaitez utiliser Live Server avec de la génération côté serveur : [https://github.com/ritwickdey/live-server-web-extension](https://github.com/ritwickdey/live-server-web-extension)

---

## Enregistrement automatique des fichiers après modification

- Les paramètres se situe ici :

![](Untitled-6f806f35-eb60-422e-ac04-ca7770492a1b.png)

- Passer le Files: Auto Save à afterDelay

- Fichier > Enregistrement Automatique

![](Untitled-ee2b95d6-c985-4f98-a0e1-515f6a38fe53.png)

![](Untitled-6c0930a4-48ec-4797-b002-7e54b92ad3c8.png)

- Maintenant l'éditeur va automatiquement sauvegarder après 1 seconde (1000ms par défaut)
- Cela peut paraître un peu lent lorsque vous utilisez Live Server en parallèle :

    Vous pouvez alors modifier la valeur en millisecondes :

![](Untitled-1e2d7f4f-0a75-4fe5-88ea-6c86e9bccc26.png)

> **Remarque**:  Plus vous baissez les ms, plus votre éditeur risque d'être lent (Surtout en version portable !)
> Vous pouvez également choisir onFocusChange ou onWindowChange si un délai ne vous correspond pas.

---

## Agrandir la police d'écriture

La taille de police par défaut est à 14px, ce qui peut être désagréable à lire.

Il suffit de changer la taille (en pixels donc)

![](Untitled-ccf61d85-d29e-4e09-8867-8712c3b2ea6a.png)

> **Remarque** : Il est possible d'agrandir la police d'écriture directement depuis l'éditeur, ouvrer un fichier de votre choix, puis appuyer sur CTRL et + (du pavé numérique) ou CTRL et - (du pavé numérique)

---

## Comment utiliser une extension de FTP/SFTP ?

**DESACTIVER L'ENREGISTREMENT AUTOMATIQUE PENDANT LA CONFIGURATION QUI SUIT :**

- Installer une extension FTP/SFTP : (En loccurence ici SFTP, mais le principe est le même)

![](Untitled-826e1436-1eed-47dd-9d4e-0f314ef2fa62.png)

- Ouvrer la palette de commandes (F1 ou CTRL+Shift+P)

![](Untitled-b3f3f1a5-42ad-4ba2-99a7-f0984c39ce84.png)

- Il va créer un dossier caché : .vscode et créer un fichier sftp.json

```json
{
    "protocol": "sftp",
    "host": "localhost",
    "port": 22,
    "username": "username",
    "remotePath": "/"
}
```

- Il nous demande plusieurs champs à remplir :
    - protocol : c'est le protocole donc SFTP, FTP... (Utiliser SFTP de préférence car sécurisé)
    - host : c'est l'adresse IP ou le nom de domaine
    - port : SFTP utilise le port : 22 (SSH) et FTP : 21
    - username : ça sera votre nom d'utilisateur de l'IUT
    - remotePath : ça sera l'endroit par défaut où vous allez être après la connexion
- Dans le cadre de l'IUT (Et notamment se connecter au serveur TP) il faudra remplir de cette manière :

```json
{
    "protocol": "sftp",
    "host": "tp.iha.unistra.fr",
    "port": 22,
    "username": "TonNomDeFamille",
    "remotePath": "/iut/users/nomDeFamille/public_html/"
}
```

- Petit problème, il va nous demander notre mot de passe à chaque fois ! Nous devons donc rajouter notre mot de passe :

```json
    {
        "protocol": "sftp",
        "host": "tp.iha.unistra.fr",
        "port": 22,
        "username": "TonNomDeFamille",
        "password": "votreSuperMotDePasse",
        "remotePath": "/iut/users/nomDeFamille/public_html/"
    }
```

- Mais, nous ne voulons pas mettre notre mot de passe sur le serveur TP ! Nous allons demander à l'extension d'ignorer certains fichiers ou dossiers :

```json
    {
        "protocol": "sftp",
        "host": "tp.iha.unistra.fr",
        "port": 22,
        "username": "TonNomDeFamille",
        "password": "votreSuperMotDePasse",
        "remotePath": "/iut/users/nomDeFamille/public_html/",
        "ignore": [
            ".vscode"
        ]
    }
```

- Version MacOS :

```json
    {
        "protocol": "sftp",
        "host": "tp.iha.unistra.fr",
        "port": 22,
        "username": "TonNomDeFamille",
        "password": "votreSuperMotDePasse",
        "remotePath": "/iut/users/nomDeFamille/public_html/",
        "ignore": [
            ".vscode",
    		".DS_Store"
        ]
    }
```

> **Remarque** : Rajoutez .DS_Store seulement si vous êtes sous MacOS, c'est un fichier uniquement présent sur ce système d'exploitation (est un fichier caché), il ne sert à rien de le mettre sur le serveur, nous pouvons donc l'ignorer.

- Maintenant il faut dire à l'extension : Dès que je sauvegarde, remplace le fichier sur le serveur !

```json
    {
        "protocol": "sftp",
        "host": "tp.iha.unistra.fr",
        "port": 22,
        "username": "TonNomDeFamille",
        "password": "votreSuperMotDePasse",
        "remotePath": "/iut/users/nomDeFamille/public_html/",
        "ignore": [
            ".vscode",
    		".DS_Store"
        ],
    	"uploadOnSave": true
    }
```

- Si maintenant vous effectuez des modifications sur un fichier et que vous l'enregistrez, si l'extension fonctionne il devrait vous afficher "done nomDuFichier.ext"

![](Untitled-f988cf02-29de-46c6-9b69-207efbf9ee6a.png)

**VOUS POUVEZ REACTIVER L'ENREGISTREMENT AUTOMATIQUE**

RAPPEL : l'adresse pour accéder à votre serveur est : [https://tp.iha.unistra.fr/~NOMDEFAMILLE/](https://tp.iha.unistra.fr/~nomdefamille/)