from flask import Flask, request, jsonify

app = Flask(__name__)

# Örnek veri
data = [
    {'id': 1, 'name': 'John'},
    {'id': 2, 'name': 'Jane'}
]

# Örnek rota: Ana sayfa
@app.route('/')
def index():
    return 'Merhaba, Umit Project!'

# Örnek rota: Veri getirme
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data)

# Örnek rota: Kullanıcı ekleme
@app.route('/user', methods=['POST'])
def add_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')

    # Veritabanına kullanıcı ekleme mantığı buraya gelecek

    return jsonify({'message': 'Kullanıcı başarıyla eklendi'}), 201

# Diğer rotalar ve kodlar buraya gelecek

if __name__ == '__main__':
    app.run(debug=True)
