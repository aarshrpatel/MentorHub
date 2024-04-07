from uuid import uuid4

class Session:
    def __init__(self, session_id, mentor_id, student_id, start_time, end_time, duration, notes, feedback, status):
        self.id = session_id
        self.mentor_id = mentor_id
        self.student_id = student_id
        self.start_time = start_time
        self.end_time = end_time
        self.duration = duration
        self.notes = notes
        self.feedback = feedback
        self.status = status

        if id is None:
            self.id = self._generate_id()
    def _generate_id():
        return uuid4()