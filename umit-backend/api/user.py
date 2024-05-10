from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, create_access_token
from app import db
from app.models import User
from app.schemas import UserSchema

user_api = Blueprint('user_api', __name__)

user_schema = UserSchema()

@user_api.route('/users', methods=['GET'])
@jwt_required
def get_users():
    users = User.query.all()
    return jsonify(user_schema.dump(users, many=True))

@user_api.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(username=data['username'], email=data['email'], password=data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'})

@user_api.route('/users/<int:user_id>', methods=['GET'])
@jwt_required
def get_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    return jsonify(user_schema.dump(user))

@user_api.route('/users/<int:user_id>', methods=['PUT'])
@jwt_required
def update_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    data = request.get_json()
    user.username = data['username']
    user.email = data['email']
    db.session.commit()
    return jsonify({'message': 'User updated successfully'})

@user_api.route('/users/<int:user_id>', methods=['DELETE'])
@jwt_required
def delete_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})

@user_api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and user.password == data['password']:
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token})
    return jsonify({'message': 'Invalid credentials'}), 401