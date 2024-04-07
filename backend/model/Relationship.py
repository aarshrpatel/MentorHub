from uuid import uuid4

class Relationship:
    def __init__(self, relationship_id, mentor_id, student_id, subject, start_date, end_date):
        self.id = relationship_id
        self.mentor_id = mentor_id
        self.student_id = student_id
        self.subject = subject
        self.start_date = start_date
        self.end_date = end_date

        if id is None:
            self.id = self._generate_id()
    def _generate_id():
        return uuid4()