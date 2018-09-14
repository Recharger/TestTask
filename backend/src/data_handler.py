import logging

from flask import session, request, abort, Blueprint
from src.database import db
import src.models as models

data = Blueprint("auth", __name__)


@auth.before_request
def before_request():
    print('\n\n{}\n\n'.format(request.endpoint))
    print("username" not in session)
    if "username" not in session and not (request.endpoint == "auth.login" or request.endpoint == "auth.register"):
        logging.info("Access denied")
        abort(401)


@auth.route('/get_trends_data/<string:message>')
def echo(message):
    
    return message


