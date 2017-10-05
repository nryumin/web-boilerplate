from flask import Flask, render_template, request
import time
import sys

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def hello_world(path):
    return render_template("index.html")

@app.route('/contact',methods=["POST"])
def contact():
    file = open("output/contacts.txt","a")
    file.write("=====new item=====\n")
    data = request.get_json()
    for key in data:
        file.write(key + '-' + data[key])
        file.write('\n')
    file.write('\n')
    return "success"


debug = "debug" in sys.argv
print("Mode:", debug)
app.run(port=5000, host='0.0.0.0', debug=debug)

