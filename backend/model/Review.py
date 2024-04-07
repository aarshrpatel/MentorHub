from uuid import uuid4

class Review:
    def __init__(self, review_id, session_id, reviewer_id, rating, comments, review_date):
        self.id = review_id
        self.session_id = session_id
        self.reviewer_id = reviewer_id
        self.rating = rating
        self.comments = comments
        self.review_date = review_date

        if id is None:
            self.id = self._generate_id()
    def _generate_id():
        return uuid4()