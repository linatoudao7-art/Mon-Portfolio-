// Toutes les informations du portfolio sont ici. Modifiez ce fichier, pas les composants.
// Une valeur vide ('' ou []) = l’élément n’est pas affiché.

export const profile = {
  firstName: 'Linatou',
  lastName: 'Dao',
  title: 'Développeuse web junior | React.js & Laravel',
  intro:
    'Étudiante en 3e année de génie logiciel à l’UTM, je conçois des interfaces web avec React et je développe des applications de gestion avec Laravel.',
  email: 'linatoudao7@gmail.com',
  github: 'https://github.com/linatoudao7-art',
  linkedin: '', // À compléter : https://www.linkedin.com/in/...
  cvUrl: '', // À compléter : déposer le PDF dans /public puis écrire '/cv-linatou-dao.pdf'
  photoUrl: '', // À compléter : '/photo.jpg' (dans /public)
  formEndpoint: '', // À compléter : lien Formspree 'https://formspree.io/f/xxxxxxxx'. Vide = le formulaire ouvre l’application e-mail.
}

export const about = [
  'Je suis en troisième année du cycle Ingénieur des Travaux en Génie Logiciel à l’Université de Technologies et de Management (UTM). Le développement web, la création d’interfaces et les applications de gestion sont ce qui m’intéresse le plus.',
  'Pendant mon stage chez Switch Maker, à Ouagadougou, j’ai travaillé sur des applications avec React côté frontend et Laravel côté backend. J’y ai appris à lire du code existant, à relier une interface à une API et à résoudre des erreurs concrètes. Je veux continuer à progresser sur des projets utiles.',
]

const F = 'formation', S = 'stage', N = 'notions'
export const skills = [
  { title: 'Développement frontend', items: [
    { name: 'HTML5', desc: 'Structurer les pages web.', origin: F },
    { name: 'CSS3', desc: 'Mise en forme et responsive design.', origin: F },
    { name: 'JavaScript', desc: 'Interactions et logique côté client.', origin: F },
    { name: 'React.js', desc: 'Composants réutilisables ; pages, formulaires et tableaux de gestion.', origin: S },
    { name: 'Bootstrap', desc: 'Interfaces adaptatives.', origin: F },
    { name: 'Ant Design', desc: 'Composants d’interface dans GESCO.', origin: S },
  ]},
  { title: 'Développement backend', items: [
    { name: 'Laravel et PHP', desc: 'Backend d’applications web et intégration avec le frontend.', origin: S },
    { name: 'API REST et Axios', desc: 'Échanges de données entre frontend et backend.', origin: S },
    { name: 'CRUD', desc: 'Créer, consulter, modifier et supprimer des données.', origin: S },
    { name: 'Authentification, rôles et permissions', desc: 'Gestion des accès dans une application de gestion.', origin: S },
  ]},
  { title: 'Bases de données', items: [
    { name: 'MySQL', desc: 'Bases relationnelles et requêtes SQL.', origin: F },
    { name: 'PostgreSQL', desc: 'Base utilisée dans la configuration locale de GESCO.', origin: S },
  ]},
  { title: 'Outils de développement', items: [
    { name: 'Git et GitHub', desc: 'Suivi des versions et du code source.', origin: F },
    { name: 'Visual Studio Code', desc: 'Environnement de développement.', origin: F },
  ]},
  { title: 'Méthodes de travail', items: [
    { name: 'Scrum', desc: 'Notions de méthode agile et de travail en équipe.', origin: F },
    { name: 'Débogage', desc: 'Comprendre et corriger des erreurs techniques.', origin: S },
  ]},
  { title: 'Notions académiques et apprentissages en cours', items: [
    { name: 'Java et C', desc: 'Bases de la programmation et de l’algorithmique.', origin: N },
    { name: 'Python', desc: 'Étudié à l’école, notions seulement.', origin: N },
  ]},
]
export const originLabel = { formation: 'Formation', stage: 'Stage', notions: 'Notions' }

export const journey = [
  { period: '3e année', title: 'Cycle Ingénieur des Travaux en Génie Logiciel', place: 'Université de Technologies et de Management (UTM)',
    points: ['Bases en programmation, frontend, bases de données et outils de développement.'] },
  { period: '15 juin – 4 septembre 2026', title: 'Stage en développement web', place: 'Switch Maker, Ouagadougou',
    points: [
      'Développement et amélioration d’interfaces frontend avec React.',
      'Intégration avec le backend Laravel et utilisation d’API.',
      'Participation au développement d’applications de gestion.',
      'Résolution d’erreurs et de problèmes techniques.',
    ] },
]

export const projects = [
  {
    id: 'stock', name: 'Application de gestion de stock',
    short: 'Application web pour faciliter la gestion des stocks, développée pendant mon stage chez Switch Maker, avant GESCO.',
    image: '/images/stock.png',
    tech: ['React.js', 'Laravel'],
    need: 'Faciliter la gestion des stocks au moyen d’une application web.',
    features: [], // À compléter avec les fonctionnalités réellement réalisées
    role: '', // À compléter
    learnings: [],
    github: '', demo: '',
  },
  {
    id: 'gesco', name: 'GESCO — Gestion des consultants', featured: true,
    short: 'Application web de gestion de consultants : informations, contrats, documents, utilisateurs et indicateurs.',
    image: '/images/gesco.png',
    tech: ['React.js', 'Laravel', 'PHP', 'API REST', 'Axios', 'Ant Design', 'PostgreSQL', 'Git et GitHub'],
    need: 'Faciliter la gestion des consultants, de leurs informations professionnelles, de leurs documents et des éléments administratifs associés.',
    features: [
      'Gestion, consultation, recherche et filtrage des consultants',
      'Informations professionnelles : spécialité, niveau, honoraires, statut',
      'Gestion des contrats',
      'Gestion des documents, des CV originaux et des modèles de CV',
      'Archivage et restauration de certains éléments',
      'Gestion des utilisateurs, des rôles et des permissions',
      'Tableau de bord avec indicateurs de gestion',
      'Consultation des journaux d’activité',
      'Export de listes de consultants au format PDF',
    ],
    role: [
      { label: 'Développé par moi', text: 'Le frontend React et l’intégration des fonctionnalités de l’application.' },
      { label: 'En collaboration', text: 'Au départ, mon binôme s’occupait du backend et de la base de données pendant que je travaillais sur le frontend.' },
      { label: 'Repris par la suite', text: 'J’ai repris le backend pour poursuivre le développement et configurer l’application dans mon environnement local.' },
    ],
    difficulties: [], // À compléter uniquement avec des difficultés réelles
    learnings: [
      'Travailler en binôme sur un même projet, puis reprendre un backend existant.',
      'Relier un frontend React à une API Laravel.',
    ],
    github: '', demo: '', // L’application n’est pas encore hébergée : laisser demo vide
  },
]

export const value = [
  { title: 'Capacité d’apprentissage', text: 'Je m’approprie de nouvelles technologies en les pratiquant sur des projets concrets.' },
  { title: 'Résolution de problèmes', text: 'Je cherche l’origine d’une erreur avant de la corriger.' },
  { title: 'Expérience utilisateur', text: 'Je fais attention à la clarté des interfaces et des formulaires.' },
  { title: 'Travail en équipe', text: 'J’ai travaillé en binôme et je sais partager le code avec Git.' },
  { title: 'Code existant', text: 'Je suis capable de lire, améliorer et maintenir du code que je n’ai pas écrit.' },
  { title: 'Applications utiles', text: 'J’aime construire des outils de gestion qui simplifient le travail des utilisateurs.' },
]
