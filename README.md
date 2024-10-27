# EduNova
Plateforme d'apprentissage en ligne soucieuse de son impact écologique.

## Unis par l’apprentissage autonome et accessible
Nous serons, en tant que futurs ingénieurs, intégrés à un environnement de travail en constante évolution. Nous avons besoin de pouvoir monter en compétences et de suivre les dernières tendances de notre secteur d’activités.

Nous sommes également, en tant que jeunes adultes, des personnes curieuses de se développer personnellement et de s’investir dans diverses loisirs.

L’apprentissage en ligne est représente pour nous une activité fréquente et indispensable. Au-delà de nos usages personnels, le marché du e-learning concerne également les entreprises, les salariés et les universités. C’est un marché en forte croissance (croissance d’environ 10% par an depuis 2020), et qui touche de plus en plus de catégories socio-économiques. C’est pourquoi il nous a semblé intéressant d’essayer de réduire son impact écologique.

## L’apprentissage en ligne pour favoriser l’éducation
L’éducation est un pilier de la société. Elle permet :
-	Le développement économique du territoire 💵
-	L’insertion des individus dans les activités de la société 🏢
-	D’améliorer la stabilité sociale (transmission de valeurs, esprit critique, individus plus responsables, …) 📈

L’éducation est une ressource qui peut s’avérer difficile d’accès. Néanmoins, 2/3 de la population mondiale à aujourd’hui accès à Internet. L’apprentissage en ligne s’impose alors comme un moyen naturel d’améliorer l’accessibilité et la diffusion du savoir à plus grande échelle, pour améliorer l’accès à l’éducation.

## Impact écologique de la numérisation de l’éducation
A première vue, la transition numérique de l’éducation et des formations tendraient à réduire :
-	L’empreinte carbone des formations / séminaires, en moyenne :
      - 50 g de CO2 par passager par km pour le transport ([Rapport ADEME](https://impactco2.fr/outils/transport)) :car: :monorail: ✈️
      - 10kg de CO2 par personne par nuit pour l’hébergement et la restauration ([Rapport ADEME](https://nosgestesclimat.fr/documentation/logement/vacances/empreinte-hotel-par-nuit)) 🏨 :fork_and_knife:
      - Utilisation de support (papier ou numériques) difficile à quantifier 📖 💻

-	L’utilisation des outils de divertissement numériques (réseaux sociaux, streaming, …) et leur impact fort sur l’écologie, substituées par des plateformes en ligne liées à l’éducation

Cependant, l’éducation en ligne créé un flux numérique qui est à considérer. De plus, son but intrinsèque est d’être le plus démocratisé possible, et ce projet peut-être soumis à un potentiel effet rebond. Pour limiter ces facteurs qui rendraient le projet moins impactant, il est important de réfléchir :
-	Au format utilisé
-	Au tradeoff entre élagage/épuration de fonctionnalités et utilisabilité pour rester concurrentiel
-	A proposer des solutions de téléchargement plutôt que de streaming, et héberger le contenu au plus près de l'utilisateur
-	A des pôles géographiques qui mutualisent les diffusions pour limiter l’effet rebond

## Impact d'un scénario sur deux plateformes de e-learning
Nous nous mettons ici à la place d'un étudiant, qui souhaite se forme sur un sujet en ligne. Le scénario consiste à :
1. Se rendre sur la page d'accueil
2. Se connecter
3. Aller sur la page de sélection des cours
4. Sélectionner le cours
5. Lancer la vidéo

Nous avons étudié l'impact d'un tel scénario sur deux plateformes connues dans le monde du e-learning, à savoir Coursera et OpenClassrooms. Ces 2 sites utilisent des CAPTCHAs afin de se connecter, nous avons donc du utiliser l'extension Chrome de Green IT pour réaliser notre étude. Les résultats sont disponibles [ici](https://github.com/UTT-GL03/EduNova/blob/main/benchmark.md).

## Interfaces et jeu de données

En parcourant les différents sites de e-learning, nous avons identifié trois interface principales qui permettent de rendre le site utilisable et fonctionnel : 
- Page pour le choix des cours
- Une fois le cours sélectionné, une page qui affiche toutes les vidéos composants le cours s'affiche
- Une fois la vidéo sélectionné, une nouvelle page s'affiche, permettant de lire la vidéo et d'afficher un transcript en temps réel

![Maquette page choix cours](./maquettes/page_choix_cours.png)
__Fig.1__: Maquette de l'interface pour le choix du cours

![Maquette page choix cours](./maquettes/page_choix_video.png)
__Fig.2__: Maquette de l'interface pour le choix des vidéos d'un cours

![Maquette page choix cours](./maquettes/page_video.png)
__Fig.3__: Maquette de l'interface pour regarder une vidéo sélectionnée
