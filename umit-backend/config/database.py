from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Veritabanı URL'si ve diğer yapılandırma ayarları
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///umit.db'

# SQLAlchemy veritabanı nesnesini oluşturma
db = SQLAlchemy(app)

# Veritabanı bağlantısını başlatma
db.init_app(app)