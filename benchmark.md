Nous nous mettons ici à la place d'un étudiant, qui souhaite se former au deep learning sur internet. Le scénario consiste à accéder à une vidéo avec les étapes suivantes:
1. Se rendre sur la page d'accueil
2. Se connecter
3. Aller sur la page de sélection des cours
4. Sélectionner le cours
5. Lancer la vidéo

Coursera : https://www.coursera.org/

| Scénario                                | Nombre requêtes | Taille (ko) | Taille du dom | GES (gCO2e) | ecoIndex | Note              |
| --------------------------------------- | --------------- | ----------- | ------------- | ---- | -------- | ----              |
| Chargement de la page d’accueil         | 188             | 3 416       | 4 056         | 2,8 | 10,0     | :red_circle: G    |
| Connexion et retour à la page d'accueil | 98              | 2 932       | 2 170         | 2,6 | 20,6    | :orange_circle: F |
| Choisir un cours                        | 166             | 5 382       | 4 952         | 2,8 | 9,5    | :red_circle: G    |
| Choisir une vidéo                       | 148             | 5 069       | 816           | 2,5 | 26,7    | :yellow_circle: E |
| Visionnage du cours                     | 316             | 15 105      | 1 474         | 2,8 | 9,9     | :red_circle: G    |
| Total                                   | **916**         | **31 904**  | **13 468**    |  **13,5**  |      |          |     

Openclassrooms : https://openclassrooms.com/fr/

| Scénario                                | Nombre requêtes | Taille (ko) | Taille du dom | GES (g) | ecoIndex | Note |
| --------------------------------------- | --------------- | ----------- | ------------- | ---- | -------- | ---- |
| Chargement de la page d’accueil         | 162             | 4 755       | 666           | 2,4 | 30,5   | :yellow_circle: E |
| Connexion et retour à la page d'accueil | 167             | 13 251      | 667           | 2,4 | 28,8   | :yellow_circle: E |
| Choisir un cours                        | 224             | 15 230      | 1 242         | 2,7 | 13,7   | :orange_circle: F |
| Visionnage cours                        | 252             | 81 139      | 1 044         | 2,7 | 16,1   | :orange_circle: F |
| Total                                   | **805**         | **114 375** | **3 619**     |  **10,2**  |      |          |      |
