  
FROM alpine:latest

COPY .

RUN apt-get install node
RUN apt-get install npm
RUN npm i

EXPOSE 80

CMD ["npm", "start"]
