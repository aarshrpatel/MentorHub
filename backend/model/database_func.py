import csv, json, os
from .data_constants import *
from uuid import uuid4
import shutil

def read_data(file) -> list:
    if not os.path.isfile(file):
        raise ValueError(f"No file found {file}")
    
    result = []
    try:
        with open(file, 'r') as f:
            csv_reader = csv.DictReader(f)
            for row in csv_reader:
                result.append(dict(row))
        f.close()
    except Exception as e:
        print(f"Error reading data from {file}: {e}")
    return result


def write_data(file, data) -> bool:

    mode = 'a' if os.path.isfile(file) else 'w'
    try:
        with open(file, mode, newline='') as f:
            writer = csv.DictWriter(f, fieldnames=data.keys())
            if f.tell() == 0:  # if the file is empty or not
                writer.writeheader()  # write the key
            writer.writerow(data)
        f.close()
        return 1
    except Exception as e:
        print(f"Error appending data to {f}: {e}")
    return 0

def put_data(label, data, file):
    for d in data:
        user_data = dict(zip(label, d))
        write_data(file, user_data)

def clean_database():
    shutil.rmtree(database_path)
    os.makedirs(database_path)

def generate_database():
    clean_database()
    id = [uuid4() for _ in range(3)]
    email = ["aarsh@gmail.com", "max@gmail.com", "thien@gmail.com"]
    headerUser = ['id', 'email', 'username', 'firstName', 'lastName', 'dateOfBirth', 'phoneNumber', 'profilePicture', 'location']
    dataUser = [
        [id[0], email[0], 'aP','Aarsh', 'Patel', '09-19-2004', '000000000', "picture", 'location'],
        [id[1], email[1], 'mF', 'Maximus', 'Fernandeg', '10-22-2004', '000000000', "picture", 'location'],
        [id[2], email[2], 'tL', 'Thien', 'Le', '03-21-2003', '000000000', "picture", 'location']
    ]

    headerStudent = ['id', 'level', 'interests', 'goals', 'status']
    dataStudent = [
        [id[1], 'Freshman', 'Computer Science', 'I want to a Professional', 'active'],
        [id[2], 'Junior', 'Computer Science', 'I want to retire', 'almost retire']
    ]

    headerMentor = ['id', 'area', 'bio', 'hourlyRate', 'availability', 'rating', 'status']
    dataMentor = [
        [id[0], 'Computer Science', "I am Aarsh Patel", 100, '6pm - 8pm', 0, 'active']
    ]

    headerAccount = ["email", "password"]
    dataAccount = [
        [email[0], "123456"],
        [email[1], "1234567"],
        [email[2], "12345"]
    ]

    headerRelationship = ["id", "mentor_id", "student_id", "relationship", "startDate", "endDate"]
    dataRelationship = [
        [uuid4(), id[0], id[1], "CS", "04-06-2024", "04-08-2024"]
    ]

    put_data(headerUser, dataUser, USER_FILE)
    put_data(headerAccount, dataAccount, ACCOUNT_FILE)
    put_data(headerMentor, dataMentor, MENTOR_FILE)
    put_data(headerStudent, dataStudent, STUDENT_FILE)
    put_data(headerRelationship, dataRelationship, RELATIONSHIP_FILE)


def read_all_user_info() -> list:
    mentors = read_data(MENTOR_FILE)
    students = read_data(STUDENT_FILE)
    users = read_data(USER_FILE)

    mentors_hash = {mentor['id']: mentor for mentor in mentors}
    students_hash = {student['id']: student for student in students}

    for user in users:
        user_id = user['id']
        if user_id in mentors_hash:
            user.update(mentors_hash[user_id])
        elif user_id in students_hash:
            user.update(students_hash[user_id])
    return users

def read_all_student_info() -> list:
    students = read_data(STUDENT_FILE)
    users = read_data(USER_FILE)

    users_hash = {user['id']: user for user in users}

    for student in students:
        user_id = student['id']
        if user_id in users_hash:
            student.update(users_hash[user_id])
    return students

def read_all_mentor_info() -> list:
    mentors = read_data(MENTOR_FILE)
    users = read_data(USER_FILE)
    users_hash = {user['id']: user for user in users}

    for mentor in mentors:
        user_id = mentor['id']
        if user_id in users_hash:
            mentor.update(users_hash[user_id])
    return mentors
