from flask import Blueprint, request, session, jsonify
from model.database_func import read_data
from model.User import User, get_user

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    if request.methods == "POST":
        email = request.json.get('email')
        password = request.json.get('password')
        accounts = read_data('../../database/account.csv')
        identify = {email: password}

        if identify in accounts:
            user = get_user(email)
            session['username'] = user.username
            return jsonify(user)
        else:
            return jsonify({'error': 'Invalid username or password'}), 401
        

@auth_blueprint.route('/logout', methods=['GET'])
def logout():
    session.pop('username', None)
    return jsonify({'message': 'Logged out successfully'})


@auth_blueprint.route('/check_login', methods=['GET'])
def check_login():
    if 'username' in session:
        return jsonify({'logged_in': True, 'username': session['username']})
    else:
        return jsonify({'logged_in': False})




