from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from app import db
from app.models import Product
from app.schemas import ProductSchema

product_api = Blueprint('product_api', __name__)

product_schema = ProductSchema()

@product_api.route('/products', methods=['GET'])
@jwt_required
def get_products():
    products = Product.query.all()
    return jsonify(product_schema.dump(products, many=True))

@product_api.route('/products', methods=['POST'])
@jwt_required
def create_product():
    data = request.get_json()
    product = Product(name=data['name'], description=data['description'], price=data['price'])
    db.session.add(product)
    db.session.commit()
    return jsonify({'message': 'Product created successfully'})

@product_api.route('/products/<int:product_id>', methods=['GET'])
@jwt_required
def get_product(product_id):
    product = Product.query.get(product_id)
    if product is None:
        return jsonify({'message': 'Product not found'}), 404
    return jsonify(product_schema.dump(product))

@product_api.route('/products/<int:product_id>', methods=['PUT'])
@jwt_required
def update_product(product_id):
    product = Product.query.get(product_id)
    if product is None:
        return jsonify({'message': 'Product not found'}), 404
    data = request.get_json()
    product.name = data['name']
    product.description = data['description']
    product.price = data['price']
    db.session.commit()
    return jsonify({'message': 'Product updated successfully'})

@product_api.route('/products/<int:product_id>', methods=['DELETE'])
@jwt_required
def delete_product(product_id):
    product = Product.query.get(product_id)
    if product is None:
        return jsonify({'message': 'Product not found'}), 404
    db.session.delete(product)
    db.session.commit()
    return jsonify({'message': 'Product deleted successfully'})