# PlaywrightBDD

Framework de tests automatisés E2E basé sur **Playwright**, **BDD (Cucumber/Gherkin)** via `playwright-bdd`, et **Allure Report** pour la génération de rapports enrichis.

---

## Prérequis

Avant d'installer le projet, assurez-vous d'avoir les outils suivants installés sur votre machine :

| Outil | Version minimale | Vérification |
|---|---|---|
| [Node.js](https://nodejs.org/) | 18+ | `node -v` |
| [npm](https://www.npmjs.com/) | 9+ | `npm -v` |
| [Java JRE/JDK](https://www.java.com/) | 8+ (requis par Allure CLI) | `java -version` |

> **Java** est nécessaire pour exécuter la commande `allure` en ligne de commande.

---

## Installation

### 1. Cloner le dépôt

```bash
git clone <url-du-dépôt>
cd PlaywrightBDD
```

### 2. Installer les dépendances npm

```bash
npm install
```

### 3. Installer les navigateurs Playwright

```bash
npx playwright install
```

> Cela télécharge Chromium, Firefox et WebKit utilisés par les tests.

### 4. Configurer les variables d'environnement

Les fichiers de configuration se trouvent dans le dossier `env/`. Un fichier d'exemple est fourni :

```
env/
├── .env.example   ← modèle à copier
├── .env.local
├── .env.recette
└── .env.prod
```

Copiez le fichier d'exemple et adaptez les valeurs :

```bash
# Windows (PowerShell)
Copy-Item env\.env.example env\.env.local
```

```bash
# Linux / macOS
cp env/.env.example env/.env.local
```

Contenu type d'un fichier `.env` :

```env
BASE_URL=https://www.saucedemo.com/
USER_NAME=standard_user
PASSWORD=secret_sauce
ENV=local
```

---

## Exécution des tests

### Environnement par défaut (`local`)

```bash
npm test
```

### Par environnement spécifique

```bash
# Environnement local
npm run test:local

# Environnement recette
npm run test:recette

# Environnement production
npm run test:prod
```

### Sur un navigateur spécifique

```bash
# Chromium uniquement
npx playwright test --project=chromium

# Firefox uniquement
npx playwright test --project=firefox

# WebKit (Safari) uniquement
npx playwright test --project=webkit
```

### En mode interface graphique (UI)

```bash
npx playwright test --ui
```

### En mode debug

```bash
npx playwright test --debug
```

---

## Rapports

### Rapport Playwright (HTML natif)

Généré automatiquement après chaque exécution. Pour l'ouvrir :

```bash
npx playwright show-report
```

### Rapport Cucumber (HTML / JSON)

Généré dans le dossier `cucumber-report/` après chaque exécution :

```
cucumber-report/
├── report.html
└── report.json
```

Ouvrez `cucumber-report/report.html` directement dans un navigateur.

### Rapport Allure

#### Générer le rapport

```bash
npm run report:generate
```

> Les résultats bruts (`allure-results/`) sont produits lors de l'exécution des tests. Cette commande les compile en rapport HTML dans `allure-report/`.

#### Ouvrir le rapport

```bash
npm run report:open
```

#### Tout en une commande (tests + génération + ouverture)

```bash
npm run test:full
```

---

## Structure du projet

```
PlaywrightBDD/
├── config/
│   └── env.ts              # Chargement des variables d'environnement
├── env/
│   ├── .env.example        # Modèle de configuration
│   ├── .env.local
│   ├── .env.recette
│   └── .env.prod
├── features/
│   └── login.feature       # Scénarios BDD (Gherkin)
├── fixtures/
│   └── fixtures.ts         # Fixtures Playwright personnalisées
├── hooks/
│   └── hooks.ts            # Hooks BDD (Before / After)
├── pages/
│   ├── HomePage.ts         # Page Object - Page d'accueil
│   └── LoginPage.ts        # Page Object - Page de connexion
├── steps/
│   ├── home.steps.ts       # Step definitions - accueil
│   └── login.steps.ts      # Step definitions - connexion
├── playwright.config.ts    # Configuration Playwright
├── package.json
└── tsconfig.js
```

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm test` | Génère les tests BDD et les exécute (ENV par défaut) |
| `npm run test:local` | Exécute les tests sur l'environnement `local` |
| `npm run test:recette` | Exécute les tests sur l'environnement `recette` |
| `npm run test:prod` | Exécute les tests sur l'environnement `prod` |
| `npm run report:generate` | Génère le rapport Allure depuis `allure-results/` |
| `npm run report:open` | Ouvre le rapport Allure dans le navigateur |
| `npm run test:full` | Exécute les tests, génère et ouvre le rapport Allure |
