from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/<path:path>')
def hello_world(path):
    return "hello"

if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0', debug=True)

