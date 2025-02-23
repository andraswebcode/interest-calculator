FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8090

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "8090"]
