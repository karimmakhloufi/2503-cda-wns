FROM node:lts-alpine
WORKDIR /app

COPY *.json .
RUN npm i

COPY vite.config.ts . 
COPY index.html .
COPY codegen.ts .
COPY public public 
COPY src src

CMD npm run dev
