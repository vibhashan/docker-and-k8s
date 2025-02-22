FROM python:3.9.21-alpine3.21

WORKDIR /app

COPY ./app.py .

COPY ./requirements.txt .

RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 5000

ENV NAME=World

CMD ["python", "app.py"]