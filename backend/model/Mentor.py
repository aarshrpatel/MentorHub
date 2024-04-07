from uuid import uuid4

class Mentor:
    def __init__(self, mentor_id, expertise, bio, hourly_rate, availability, rating, status):
        self.id = mentor_id
        self.expertise = expertise
        self.bio = bio
        self.hourly_rate = hourly_rate
        self.availability = availability
        self.rating = rating
        self.status = status

        if id is None:
            self.id = self._generate_id()
            
    def _generate_id():
        return uuid4()
