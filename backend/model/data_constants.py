import os

database_path = os.path.join(os.getcwd(), '..', 'database', '')
USER_FILE = f"{database_path}user.csv"
MENTOR_FILE = f"{database_path}mentors.csv"
STUDENT_FILE = f"{database_path}student.csv"
RELATIONSHIP_FILE = f"{database_path}relationship.csv"
ACCOUNT_FILE = f"{database_path}account.csv"

MESSAGE_FILE = f"{database_path}messages.csv"
NOTIFICATION_FILE = f"{database_path}notification.csv"
SESSION_FILE = f"{database_path}session.csv"