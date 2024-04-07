from flask import Blueprint, request, session, jsonify, redirect, url_for, Response
from model.database_func import read_data, read_all_mentor_info
from model.User import User, get_user, to_user_json
from model.Student import get_student, to_student_json
from model.data_constants import *

auth_blueprint = Blueprint('api', __name__)

# for now only student login
@auth_blueprint.route('/api/login', methods=['POST'])
def login():
    if request.method == "POST":
        email = request.json.get('email')
        password = request.json.get('password')
        accounts = read_data(ACCOUNT_FILE)

        for acc in accounts:
            if acc['email'] == email and acc['password'] == password:
                user = get_student(email)
                session['email'] = user.email
                user_json = to_student_json(user)
                return jsonify(user_json), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401
        

@auth_blueprint.route('/api/logout', methods=['GET'])
def logout():
    session.pop('email', None)
    return jsonify({'message': 'Logged out successfully'}), 200


@auth_blueprint.route('/api/check_login', methods=['GET'])
def check_login():
    if 'email' in session:
        return jsonify({'logged_in': True, 'email': session['email']})
    else:
        return jsonify({'logged_in': False})




