FROM node:10

COPY ./app.js ./

EXPOSE 8080
CMD [ "node", "app.js" ] 
