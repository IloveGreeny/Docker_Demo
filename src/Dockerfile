FROM node:16

WORKDIR /src

COPY package*json ./

RUN npm i

COPY . .

ENV PORT=3030

EXPOSE 3030

CMD [ "npm", "dev" ]