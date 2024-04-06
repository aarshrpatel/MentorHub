from uuid import uuid4

class Student:
    def __init__(self, student_id, academic_level, interests, goals, status):
        self.student_id = self._setID(student_id)
        self.academic_level = academic_level
        self.interests = interests
        self.goals = goals
        self.status = status

    def _setID(self, id):
        if self.user_id:
            return
        if not id:
            return uuid4()
        return id