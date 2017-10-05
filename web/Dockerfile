FROM python:3.6.2-slim
WORKDIR /code
ADD . /code
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python","app.py"]