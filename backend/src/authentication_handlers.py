import logging

from flask import session, request, abort, Blueprint
from src.database import db
import src.models as models

auth = Blueprint("auth", __name__)


@auth.before_request
def before_request():
    print('\n\n{}\n\n'.format(request.endpoint))
    print("username" not in session)
    if "username" not in session and not (request.endpoint == "auth.login" or request.endpoint == "auth.register"):
        logging.info("Access denied")
        abort(401)


@auth.route('/echo/<string:message>')
def echo(message):
    
    return message


@auth.route("/register", methods=["POST"])
def register():
    username = request.form["username"]
    user = models.User.query.filter(models.User.username == username).first()
    if user is not None: 
        logging.info("Trying to register existed user = {}".format(username))
        return "Already exists", 409, {"Access-Control-Allow-Credentials": "true"}
    else:
        user = models.User(
                username=username,
                password=request.form["password"],
                first_name=request.form["firstName"],
                last_name=request.form["lastName"])
        db.session.add(user) 
        db.session.commit() 
        logging.info("New user registered = {}".format(username))
        return "Created", 201, {"Access-Control-Allow-Credentials": "true"}


@auth.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    user = models.User.query.filter(models.User.username == username).first()
    if user is not None and user.check_password(request.form["password"]):
        session["username"] = username
        logging.info("Login by user = {}".format(username))
        return "OK", 200, {"Access-Control-Allow-Credentials": "true"}
    else:
        logging.info("Login denied for user = {}".format(username))
        abort(401)


@auth.route("/logout", methods=["POST"])
def logout():
    logging.info("Logout by user = {}".format(session.get("username")))
    session.pop("username", None)
    return "Logged out"
