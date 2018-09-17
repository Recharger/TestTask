import logging

from flask import session, request, abort, Blueprint
from src.database import db
import src.models as models
data = Blueprint("data", __name__)

@data.before_request
def before_request():
    if "username" not in session:
        logging.info("Access denied")
        abort(401)



