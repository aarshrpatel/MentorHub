from uuid import uuid3

class Session:
    def __init__(self, session_id, mentor_id, student_id, start_time, end_time, duration, notes, feedback, status):
        self.session_id = self._setID(session_id)
        self.mentor_id = mentor_id
        self.student_id = student_id
        self.start_time = start_time
        self.end_time = end_time
        self.duration = duration
        self.notes = notes
        self.feedback = feedback
        self.status = status

    def _setID(self, id):
        if self.user_id:
            return
        if not id:
            return uuid3()
        return id