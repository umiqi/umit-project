from models.user_model import User

class UserService:
    @staticmethod
    def get_users():
        return User.query.all()

    @staticmethod
    def get_user(user_id):
        return User.query.get(user_id)