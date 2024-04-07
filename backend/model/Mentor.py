from uuid import uuid4
from model.User import User
from model.database_func import read_all_mentor_info
class Mentor:
    def __init__(self, id, email, username, first_name, last_name, date_of_birth, profile_picture_url, github, linkedin, location, expertise, bio, hourly_rate, availability, rating, status):
        super().__init__(id, email, username, first_name, last_name, date_of_birth, profile_picture_url, github, linkedin, location)
        self.expertise = expertise
        self.bio = bio
        self.hourly_rate = hourly_rate
        self.availability = availability
        self.rating = rating
        self.status = status

def to_student_json(user: Mentor) -> dict:
    return {
        "id": user.id,
        "email": user.email,
        "username": user.username,
        "firstName": user.first_name,
        "lastName": user.last_name,
        "dateOfBirth": str(user.date_of_birth),
        "profilePicture": user.profile_picture_url,
        "github": user.github,
        "linkedin": user.linkedin,
        "location": user.location,
        "registrationDate": str(user.registration_date),
        "lastLoginDate": str(user.last_login_date),
        "area": (user.expertise),
        "hourlyRate": (user.hourly_rate),
        "availability": user.availability,
        "rating": user.rating,
        "status": user.status
    }


def get_mentor(email) -> Mentor:
    all_user_info = read_all_mentor_info()
    for user_info in all_user_info:
        if email == user_info['email']:
            user = Mentor(user_info['id'],
                        user_info['email'], 
                        user_info['username'], 
                        user_info['firstName'], 
                        user_info['lastName'], 
                        user_info['dateOfBirth'], 
                        user_info['profilePicture'],
                        user_info["github"],
                        user_info["linkedin"],
                        user_info['location'],
                        user_info['area'],
                        user_info['hourlyRate'],
                        user_info['availability'],
                        user_info['rating'],
                        user_info['status']
            )
            return user
    return 0
