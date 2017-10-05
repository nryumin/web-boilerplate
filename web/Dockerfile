FROM python:3.6.2-slim
#RUN apt-get update
#RUN apt-get install -y curl
#RUN curl -sL https://deb.nodesource.com/setup_7.x | bash
#RUN apt-get install -y nodejs
WORKDIR /code
ADD . /code
RUN pip install -r requirements.txt
#RUN npm install
#RUN npm run build
EXPOSE 5000
CMD ["python","app.py"]