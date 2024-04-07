from model.User import User
from model.database_func import read_all_student_info

class Student(User):
    def __init__(self, id, email, username, first_name, last_name, date_of_birth, profile_picture_url, github, linkedin, location, academic_level, interests, goals, status):
        super().__init__(id, email, username, first_name, last_name, date_of_birth, profile_picture_url, github, linkedin, location)
        self.academic_level = academic_level
        self.interests = interests
        self.goals = goals
        self.status = status


def to_student_json(user: Student) -> dict:
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
        "level": (user.academic_level),
        "interests": (user.interests),
        "bio": user.goals,
        "status": user.status
    }


def get_student(email) -> Student:
    all_user_info = read_all_student_info()
    for user_info in all_user_info:
        if email == user_info['email']:
            user = Student(user_info['id'],
                        user_info['email'], 
                        user_info['username'], 
                        user_info['firstName'], 
                        user_info['lastName'], 
                        user_info['dateOfBirth'], 
                        user_info['profilePicture'],
                        user_info["github"],
                        user_info["linkedin"],
                        user_info['location'],
                        user_info['level'],
                        user_info['interests'],
                        user_info['bio'],
                        user_info['status']
            )
            return user
    return 0