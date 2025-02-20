ARG BASE_IMAGE
FROM ${BASE_IMAGE}

WORKDIR /app

# Accept dynamic arg
ARG APP_NAME
ENV APP_NAME=${APP_NAME}

ENV ENVIRONMENT=development

COPY ./sample.js ./sample.js

CMD [ "node", "sample.js" ]