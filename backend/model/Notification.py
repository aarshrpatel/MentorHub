from uuid import uuid4

class Notification:
    def __init__(self, notification_id, receiver_id, message, timestamp, status):
        self.id = notification_id
        self.receiver_id = receiver_id
        self.message = message
        self.timestamp = timestamp
        self.status = status

        if id is None:
            self.id = self._generate_id()
            
    def _generate_id():
        return uuid4()