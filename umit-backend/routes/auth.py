from flask import Blueprint, request, jsonify
from services.auth_service import AuthService

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        user = AuthService.register(data['name'], data['email'], data['password'])
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@auth_blueprint.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        token = AuthService.login(data['email'], data['password'])
        return jsonify({'token': token}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500