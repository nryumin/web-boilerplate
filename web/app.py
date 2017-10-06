from flask import Flask, render_template, request
from flask_pymongo import PyMongo,ObjectId
from flask_login import LoginManager, login_user, login_required
from models.user import User
import sys

app = Flask(__name__)

app.config['MONGO_HOST'] = 'database'
app.config['MONGO_DBNAME'] = 'pitchme'
app.config['MONGO_USERNAME'] = 'writer'
app.config['MONGO_PASSWORD'] = 'writer'
mongo = PyMongo(app)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    user = User(mongo.db.users.find_one({'_id':ObjectId(user_id)}))
    return user

@app.route('/')
def hello_world():
    return "hello"

@app.route('/login')
def login():
    user = User(mongo.db.users.find_one({'username': "user"}))
    login_user(user)
    return "logined"

@app.route("/settings")
@login_required
def settings():
    return "settings"

debug = "debug" in sys.argv
if debug:
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'
app.run(port=5000, host='0.0.0.0', debug=debug)

