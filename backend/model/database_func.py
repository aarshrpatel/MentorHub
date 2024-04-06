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

def generate_database():
    headerUser = ['id', 'email', 'username', 'firstName', 'lastName', 'dateOfBirth', 'phoneNumber', 'profilePicture', 'location']
    headerStudent = ['id', 'interests', 'level', 'goals', 'status']
    headerMentor = ['id', 'area', 'bio', 'hourlyRate', 'availability', 'rating', 'status']
    id = [uuid4() for _ in range(3)]
    
    dataUser = [
        [id[0], 'max@gmail', 'mF', 'Maximus', 'Fernandeg', '10-22-2004', '000000000', "picture", 'location'],
        [id[1], 'aarsh@gmail', 'aP','Aarsh', 'Patel', '09-19-2004', '000000000', "picture", 'location'],
        [id[2], 'thien@gmail', 'tL', 'Thien', 'Le', '03-21-2003', '000000000', "picture", 'location']
    ]

    dataMentor = [
        [id[1], 'CS', "I am Aarsh Patel", 100, '6pm - 8pm', 0, 'active']
    ]

    dataStudent = [
        [id[0], 'Sophomore', 'CS', 'I want to a Professional', 'active'],
        [id[2], 'Junior', 'CS', 'I want to retire', 'almost retire']
    ]

    for d in dataUser:
        user_data = dict(zip(headerUser, d))
        write_data(USER_FILE, user_data)

    for d in dataStudent:
        user_data = dict(zip(headerStudent, d))
        write_data(STUDENT_FILE, user_data)

    for d in dataMentor:
        user_data = dict(zip(headerMentor, d))
        write_data(MENTOR_FILE, user_data)

def clean_database():
    shutil.rmtree(database_path)



if __name__ == "__main__":
    generate_database()