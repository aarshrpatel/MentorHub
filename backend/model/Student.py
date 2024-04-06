from uuid import uuid3

class Student:
    def __init__(self, student_id, academic_level, interests, goals, enrolled_courses, status):
        self.student_id = self._setID(student_id)
        self.academic_level = academic_level
        self.interests = interests
        self.goals = goals
        self.enrolled_courses = enrolled_courses
        self.status = status

    def _setID(id):
        if not id:
            return uuid3()
        return id