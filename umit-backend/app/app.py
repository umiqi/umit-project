from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from config.database import db
from routes.auth import auth_blueprint
from routes.user import user_blueprint
from routes.project import project_blueprint

app = Flask(__name__)
app.config.from_object('config.env')

db.init_app(app)

app.register_blueprint(auth_blueprint)
app.register_blueprint(user_blueprint)
app.register_blueprint(project_blueprint)

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)