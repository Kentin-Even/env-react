# ENV-APP

Ce projet est une application React 19 configurée avec Webpack et Babel. Il utilise **pnpm** comme gestionnaire de paquets, **Tailwind CSS** pour le style, **JsDoc** pour la documentation, **Commitizen** pour les commits, **Husky** pour les hooks Git, **Commitlint** pour le respect des conventions de commit, **ESLint** avec la configuration Airbnb pour le linting, et **Jest** pour les tests unitaires.

---

## 🚀 Installation et Démarrage

1. **Cloner le dépôt** :
   ```sh
   git clone https://github.com/Kentin-Even/env-react
   cd env-react
   ```

2. **Installer les dépendances** :
   ```sh
   pnpm install
   ```

3. **Lancer l'application en mode développement** :
   ```sh
   pnpm start
   ```

4. **Build pour la production** :
   ```sh
   pnpm build
   ```

---

## 🛠️ Outils et Configurations

### 📦 Dépendances principales :
- **React 19** et **React-DOM** pour le rendu des composants.
- **Webpack** pour la gestion des modules.
- **Babel** pour la transpilation du code.
- **Tailwind CSS** pour le design.
- **Dotenv** pour la gestion des variables d'environnement.

### 🛠️ Outils de développement :
- **Jest** pour les tests unitaires.
- **JsDoc** avec le thème **Docdash** pour générer la documentation.
- **ESLint** avec la configuration **Airbnb** pour le linting.
- **Prettier** pour le formatage du code.
- **Commitizen** pour une gestion standardisée des commits.
- **Husky** pour automatiser des hooks Git (ex. lint avant commit).
- **Commitlint** pour s'assurer que les messages de commit respectent la convention "Conventional Commits".

---

## 💜 Commandes Utiles

| Commande | Description |
|----------|-------------|
| `pnpm start` | Lance l'application en mode développement. |
| `pnpm build` | Build du projet pour la production. |
| `pnpm test` | Exécute les tests avec Jest. |
| `pnpm lint` | Analyse le code avec ESLint. |
| `pnpm doc` | Génère la documentation JsDoc. |
| `pnpm commit` | Lance un commit interactif avec Commitizen. |

---

## 🧪 Tests

Les tests sont écrits avec **Jest** et peuvent être lancés avec :
```sh
pnpm test
```

---

## 📚 Documentation

La documentation est générée via **JsDoc** et stockée dans le dossier `docs/`.  
Pour la régénérer :
```sh
pnpm doc
```

---

## 📂 Structure du Projet

```
/env-app
│── /dist           # Fichiers de build Webpack
│── /docs           # Documentation générée avec JsDoc
│── /node_modules   # Modules npm/pnpm
│── /src            # Code source React
│── .husky          # Hooks Git avec Husky
│── .babelrc        # Configuration Babel
│── .env            # Variables d’environnement
│── .gitignore      # Fichiers ignorés par Git
│── .prettierrc     # Configuration Prettier
│── commitlint.config.js # Règles de commitlint
│── eslint.config.js # Configuration ESLint
│── jest.config.js   # Configuration Jest
│── jsdoc.json      # Configuration JsDoc
│── package.json    # Dépendances et scripts
│── pnpm-lock.yaml  # Fichier de verrouillage pnpm
│── postcss.config.mjs # Configuration PostCSS
│── README.md       # Documentation du projet
│── webpack.config.js # Configuration Webpack
```

---

## 🔗 Conventions de Commit

Le projet suit les conventions **Conventional Commits**.  
Utilisez **Commitizen** pour des commits standardisés :
```sh
pnpm commit
```

---

## 🐝 Licence

Ce projet est sous licence [MIT](LICENSE).