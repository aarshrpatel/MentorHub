from uuid import uuid3

class Relationship:
    def __init__(self, relationship_id, mentor_id, student_id, relationship_type, start_date, end_date):
        self.relationship_id = self._setID(relationship_id)
        self.mentor_id = mentor_id
        self.student_id = student_id
        self.relationship_type = relationship_type
        self.start_date = start_date
        self.end_date = end_date

    def _setID(id):
        if not id:
            return uuid3()
        return id