ARG BASE_IMAGE
FROM ${BASE_IMAGE}

WORKDIR /app

# Accept dynamic arg
ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}

ENV ENVIRONMENT=production

COPY ./sample.py ./sample.py

CMD [ "python", "sample.py" ]