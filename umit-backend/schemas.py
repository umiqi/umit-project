# schemas.py
from marshmallow import Schema, fields
from app import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'email')