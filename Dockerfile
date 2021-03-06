FROM node:9

ADD . /app

RUN cd /app && npm install

EXPOSE 3000

# Start app
CMD ["node", "/app/src/index.js"]
