# app.py
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_restx import Api, doc
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:////tmp/test.db'
app.config['JWT_SECRET_KEY'] ='secret-key'

db = SQLAlchemy(app)
ma = Marshmallow(app)
api = Api(app)
jwt = JWTManager(app)
CORS(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'email')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route('/users', methods=['GET'])
@api.doc(
    summary='Get all users',
    responses={200: 'List of users'}
)
def get_users():
    users = User.query.all()
    return users_schema.jsonify(users)

@app.route('/users', methods=['POST'])
@api.doc(
    summary='Create a new user',
    responses={201: 'User created successfully'}
)
def create_user():
    try:
        data = request.json
        user = User(**data)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/login', methods=['POST'])
@api.doc(
    summary='Login',
    responses={200: 'Login successful'}
)
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    user = User.query.filter_by(name=username).first()
    if user and user.email == password:
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200
    return jsonify({'error': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)