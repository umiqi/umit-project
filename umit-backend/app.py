from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from config import Config
from api.user import user_api
from api.product import product_api


app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
ma = Marshmallow(app)
jwt = JWTManager(app)

from api import user_api, product_api
app.register_blueprint(user_api)
app.register_blueprint(product_api)

@app.route('/')
def index():
    return 'Umit Flask Backend'

if __name__ == '__main__':
    app.run(debug=True)