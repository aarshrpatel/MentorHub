from uuid import uuid4

class Student:
    def __init__(self, id, academic_level, interests, goals, status):
        self.id = id
        self.academic_level = academic_level
        self.interests = interests
        self.goals = goals
        self.status = status

        if id is None:
            self.id = self._generate_id()

    def _generate_id():
        return uuid4()