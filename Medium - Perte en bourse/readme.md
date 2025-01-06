# Objectif

Une entreprise spécialisée dans la finance réalise une étude sur les pires investissements en bourse et souhaite s'équiper pour cela d'un programme. Ce programme devra être capable d'analyser une série chronologique de valeurs d’actions pour afficher la plus grande perte qu'il est possible de réaliser en achetant une action à un instant t0 et en la revendant à une date ultérieure t1. La perte sera exprimée par la différence de valeur entre t0 et t1. S'il n'y a pas de perte, la perte vaudra alors 0.
 	Entrées du jeu

# Entrée
Ligne 1 : le nombre n de valeurs en bourse disponibles.

Ligne 2 : les valeurs ordonnées depuis l'introduction en bourse v1 jusqu'à la dernière valeur connue vn. Les valeurs sont des entiers.

Sortie
La perte maximale p, exprimée négativement s'il y a perte, sinon 0.
Contraintes
0 < n < 100000
0 < v < 2^31

# exemples
1 : 6 valeurs [3,2,4,2,1,5] - perte max -> -3
2 : 6 valeurs [5,3,4,2,3,1] - perte max -> -4
3 : 5 valeurs [1,2,4,4,5] - perte max -> 0