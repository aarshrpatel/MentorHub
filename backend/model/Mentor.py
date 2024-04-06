from uuid import uuid3

class Mentor:
    def __init__(self, mentor_id, expertise, bio, hourly_rate, availability, rating, status):
            self.mentor_id = self._setID(mentor_id)
            self.expertise = expertise
            self.bio = bio
            self.hourly_rate = hourly_rate
            self.availability = availability
            self.rating = rating
            self.status = status

    def _setID(id):
        if not id:
            return uuid3()
        return id