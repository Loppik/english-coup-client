  
FROM alpine:latest

COPY . .

RUN apk add nodejs
RUN apk add npm
RUN npm i

EXPOSE 3005

CMD ["npm", "start"]
