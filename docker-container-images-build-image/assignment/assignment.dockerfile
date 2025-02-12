FROM python:3.12.9-alpine3.21

WORKDIR /app

COPY ./sample.py ./sample.py

CMD [ "python", "sample.py" ]