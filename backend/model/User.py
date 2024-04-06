import re
from uuid import uuid3
from datetime import datetime, timedelta
from database_func import read_data

class User:
    def __init__(self, id, username, email, first_name, last_name, date_of_birth, profile_picture_url):
        self.user_id = self._setID(id)
        self.username = self.setName(username)
        self.email = self.setEmail(email)
        self.first_name = self.setName(first_name)
        self.last_name = self.setName(last_name)
        self.date_of_birth = self.setDateOfBirth(date_of_birth)
        self.profile_picture_url = profile_picture_url
        self.registration_date = datetime.now().date()
        self.last_login_date = datetime.now().date()

    def _setID(id):
        if not id:
            return uuid3()
        return id

    def setName(username):
        if username:
            return username
        else:
            raise ValueError('Invalid username')
        
    def setEmail(email):
        if email and re.match(r"[^@]+@[^@]+\.[^@]+", email):
            return email
        else:
            raise ValueError('Invalid email');
        
    def setDateOfBirth(date):
        try:
            dob = datetime.strptime(date, '%Y-%m-%d')
            if dob <= (datetime.now() - timedelta(days=12*365)):  # at least 12 year away
                return dob
            else:
                raise ValueError('User must be at least 12 years old')
        except ValueError:
            raise ValueError('Invalid date of birth format')
        
    def setLastLoginDate(self):
        self.last_login_date = datetime.now().date()


def get_user(email) -> User:
    all_user_info = read_data('../../database/user.csv')
    for user_info in all_user_info:
        if email == user_info.email:
            user = User(user_info['email'], 
                        user_info['username'], 
                        user_info['firstName'], 
                        user_info['lastName'], 
                        user_info['dateOfBirth'], 
                        user_info['phoneNumber'], 
                        user_info['profilePicture'], 
                        user_info['location']
            )
            return user
        
    return 0