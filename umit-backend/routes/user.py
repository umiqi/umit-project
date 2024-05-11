from flask import Blueprint, request, jsonify
from services.user_service import UserService

user_blueprint = Blueprint('user', __name__)

@user_blueprint.route('/', methods=['GET'])
def get_users():
    try:
        users = UserService.get_users()
        return jsonify([user.to_dict() for user in users]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@user_blueprint.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = UserService.get_user(user_id)
        return jsonify(user.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500