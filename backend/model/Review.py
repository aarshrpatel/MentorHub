from uuid import uuid3

class Review:
    def __init__(self, review_id, session_id, reviewer_id, rating, comments, review_date):
        self.review_id = self._setID(review_id)
        self.session_id = session_id
        self.reviewer_id = reviewer_id
        self.rating = rating
        self.comments = comments
        self.review_date = review_date

    def _setID(id):
        if not id:
            return uuid3()
        return id