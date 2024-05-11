from flask import Blueprint, request, jsonify
from services.project_service import ProjectService

project_blueprint = Blueprint('project', __name__)

@project_blueprint.route('/', methods=['GET'])
def get_projects():
    try:
        projects = ProjectService.get_projects()
        return jsonify([project.to_dict() for project in projects]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@project_blueprint.route('/<int:project_id>', methods=['GET'])
def get_project(project_id):
    try:
        project = ProjectService.get_project(project_id)
        return jsonify(project.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500