from models.user_model import User
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from services import db  # Replace 'your_app' with the actual name of your Flask application module/package

bcrypt = Bcrypt()
jwt = JWTManager()

class AuthService:
    @staticmethod
    def register(name, email, password):
        user = User(name=name, email=email)
        user.password = bcrypt.generate_password_hash(password).decode('utf-8')
        db.session.add(user)
        db.session.commit()
        return user

    @staticmethod
    def login(email, password):
        user = User.query.filter_by(email=email).first()
        if not user:
            raise Exception('Invalid email or password')
        if not bcrypt.check_password_hash(user.password, password):
            raise Exception('Invalid email or password')
        token = create_access_token(identity=user.id)
        return token
