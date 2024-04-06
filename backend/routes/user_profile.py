from flask import Blueprint, jsonify, jsonnify, request, session
from model.User import get_user, update_user_profile

user_profile_blueprint = Blueprint('user_profile', __name__)

@user_profile_blueprint.route('/profile', methods=['PUT'])
def update_user_profile():
    if 'username' in session:
        username = session['username']
        user_data = request.json

        up_profile = update_user_profile(user_data)
        if up_profile:
            return jsonnify(up_profile.serialize())
    return jsonify({'error': 'User profile update failed'}), 400

@user_profile_blueprint('/profile', methods=['GET'])
