FROM python:3.9
WORKDIR /usr/src/app
COPY requirements.txt .
COPY entrypoint.sh .
COPY wait-for-it.sh .

RUN pip install -r requirements.txt
RUN chmod +x entrypoint.sh
RUN chmod +x wait-for-it.sh
COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]