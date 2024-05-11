from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Flask uygulamasını başlatma
app = Flask(__name__)

# Veritabanı URL'si ve diğer yapılandırma ayarları
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///umit.db'

# SQLAlchemy veritabanı nesnesini oluşturma ve veritabanı bağlantısını başlatma
db = SQLAlchemy(app)
