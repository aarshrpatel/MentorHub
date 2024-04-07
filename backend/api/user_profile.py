from flask import Blueprint, jsonify, request, session
from model.User import get_user, update_user_profile
from model.database_func import *
from model.data_constants import *
from model.recommendation_algorithm import *

user_profile_blueprint = Blueprint('user_profile', __name__)

@user_profile_blueprint.route('/api/mentors', methods=['GET'])
def get_all_mentor_profile():
    all_mentor_data = read_all_mentor_info()
    return jsonify(all_mentor_data), 200

@user_profile_blueprint.route('/api/recommendations', methods=['GET'])
def get_recommendations():
    user_data = get_user(session['user_id'])
    mentors = read_all_mentor_info()
    recommended_mentors = top_matches(user_data, mentors)
    return jsonify(recommended_mentors), 200
# @user_profile_blueprint.route('/api/profileUpdate', methods=['PUT'])
# def update_user_profile():
#     user_data = request.json
#     up_profile = update_user_profile(user_data)
#     if not up_profile:
#         return jsonify({'error': 'User profile update failed'}), 400
#     return jsonify(up_profile.serialize())

# @user_profile_blueprint('/api/profileAll', methods=['GET'])
# def get_all_user_profile():
#     all_user_data = read_all_user_info()
#     return jsonify(all_user_data), 200
    

# @user_profile_blueprint.route('/api/recommendMentor', methods=['GET'])
# def get_mentors_list():
#     mentors = read_all_mentor_info()

