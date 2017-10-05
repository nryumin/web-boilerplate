from flask import Flask, render_template, request
import sys

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

debug = "debug" in sys.argv
print("Mode:", debug)
app.run(port=5000, host='0.0.0.0', debug=debug)

