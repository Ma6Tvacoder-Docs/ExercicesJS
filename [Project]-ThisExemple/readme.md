# Utiliser le `this` en JS

Voici un exemple de l'utilisation du `this`.

On utilise le `this` pour faire appel à lélément directement concerné par l'action d'une fonction.

Dans ce cas precis une action est déclenché via un attribut `onclick` d'un bouton. Le this est placé en paramettre de la fonction dans l'attribut directement et permet de récuperer l'element une fois activé. Via un systeme d'arguement on peut donc récuperer l'attribut name de chaque element et le faire concorder avec d'autres objets ce qui nous permet de declencher des evenements dynamiquement sans avoir à definir des comportement sur tel ou tel objet.
