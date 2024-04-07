import re
from uuid import uuid4
from datetime import datetime, timedelta
from .database_func import read_data, write_data
from .data_constants import *

class User:
    def __init__(self, id, email, username, first_name, last_name, date_of_birth, profile_picture_url, github, linkedin, location):
        self.id = id
        self.email = email
        self.username = username
        self.first_name = first_name
        self.last_name = last_name
        self.date_of_birth = date_of_birth
        self.profile_picture_url = profile_picture_url
        self.github = github
        self.linkedin = linkedin
        self.location = location
        self.registration_date = datetime.now().date()
        self.last_login_date = datetime.now().date()

        # Condition for those init variable
        if id is None:
            self.id = self._generate_id()
        
        if username:
            self.username = username
        else:
            raise ValueError('Invalid username')

        # if email and re.match(r"[\w.]+\@[\w.]+", email):
        if email:
            self.email = email
        else:
            raise ValueError('Invalid email')

        # try:
        #     dob = datetime.strptime(date_of_birth, '%Y-%m-%d')
        #     if dob <= (datetime.now() - timedelta(days=12*365)):  # at least 12 year away
        #         return dob
        #     else:
        #         raise ValueError('User must be at least 12 years old')
        # except ValueError:
        #     raise ValueError('Invalid date of birth format')
        
    def setLastLoginDate(self):
        self.last_login_date = datetime.now().date()

    def _generate_id():
        return uuid4()
    
def to_user_json(user) -> dict:
    return {
        "id": user.id,
        "email": user.email,
        "username": user.username,
        "firstName": user.first_name,
        "lastName": user.last_name,
        "dateOfBirth": str(user.date_of_birth),
        "profilePicture": user.profile_picture_url,
        "location": user.location,
        "github": user.github,
        "linkedin": user.linkedin,
        "registrationDate": str(user.registration_date),
        "lastLoginDate": str(user.last_login_date)
    }


def get_user(email) -> User:
    all_user_info = read_data(USER_FILE)
    for user_info in all_user_info:
        if email == user_info['email']:
            user = User(user_info['id'],
                        user_info['email'], 
                        user_info['username'], 
                        user_info['firstName'], 
                        user_info['lastName'], 
                        user_info['dateOfBirth'], 
                        user_info['profilePicture'], 
                        user_info["github"],
                        user_info["linkedin"],
                        user_info['location'],
            )
            return user
    return 0


def update_user_profile(new_user_data:dict):
    all_users = read_data(USER_FILE)

    for user in all_users:
        if user.id == new_user_data.id:
            user.update(new_user_data)
            write_data(USER_FILE, all_users)
            return user
    return None