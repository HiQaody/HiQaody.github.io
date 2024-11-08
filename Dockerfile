# Utiliser l'image officielle de Node.js comme image de base
FROM node:20

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application React.js
RUN npm run build

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3001

# Démarrer l'application React.js
CMD ["npm", "start"]
