from models.project_model import Project

class ProjectService:
    @staticmethod
    def get_projects():
        return Project.query.all()

    @staticmethod
    def get_project(project_id):
        return Project.query.get(project_id)