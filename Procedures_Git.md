# Les procedures de base pour recuperer le projet

  1. Mise en place clef SSH pour autorisation securité

    ssh-keygen
      -valider le chemin par defaut (sauf autre...)
      -valider mdp et paraphrase sans rien

  2. Cloner le projet sur son poste de travail

    a. recuperer contenus distant
      Sur la page du projet, copier le lien de la case verte
      A la racine de votre proojet, dans le dossier Htdocs de Xampp, faire clic droit, git 'bash here'

      git clone (lien du projet)

  3. Creer une nouvelle branche

    Deux solutions :
      git branch (nom de la branche)
      git checkout (nom de la branche)
    ou
      git checkout -b (nom de la branche)

  4. Archiver son projet

    git add .
    git commit -am'[message de commit]'
    git push origin (nom de la branche)

  5. Recuperer le contenus d'une branche

    git pull origin (nom de la branche)

  6. lister les branches existantes

    git fetch (pour recuperer le nom des branches en local)
    git branch -a ( -a pour all /  ) 
