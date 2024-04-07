from flask import Blueprint, request, session, jsonify, redirect, url_for, Response
from model.database_func import read_data
from model.User import User, get_user, to_json
from model.data_constants import *

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/api/login', methods=['POST'])
def login():
    if request.method == "POST":
        email = request.json.get('email')
        password = request.json.get('password')
        accounts = read_data(ACCOUNT_FILE)

        for acc in accounts:
            if acc['email'] == email and acc['password'] == password:
                user = get_user(email)
                session['username'] = user.username
                user_json = to_json(user)
                return jsonify(user_json), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401
        

@auth_blueprint.route('/api/logout', methods=['GET'])
def logout():
    session.pop('username', None)
    return jsonify({'message': 'Logged out successfully'}), 200


@auth_blueprint.route('/api/check_login', methods=['GET'])
def check_login():
    if 'username' in session:
        return jsonify({'logged_in': True, 'username': session['username']})
    else:
        return jsonify({'logged_in': False})




