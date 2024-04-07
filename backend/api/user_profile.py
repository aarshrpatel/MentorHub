from flask import Blueprint, jsonify, jsonnify, request, session
from model.User import get_user, update_user_profile
from model.database_func import read_data
from model.data_constants import *

user_profile_blueprint = Blueprint('user_profile', __name__)

@user_profile_blueprint.route('/api/profile', methods=['PUT'])
def update_user_profile():
    user_data = request.json
    up_profile = update_user_profile(user_data)
    if not up_profile:
        return jsonify({'error': 'User profile update failed'}), 400
    return jsonnify(up_profile.serialize())

@user_profile_blueprint('/profile', methods=['GET'])
def get_all_user_profile():
    all_user_data = read_data()
