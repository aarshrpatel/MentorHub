from uuid import uuid4

class Message:
    def __init__(self, message_id, sender_id, receiver_id, message_content, timestamp, status):
        self.id = message_id
        self.sender_id = sender_id
        self.receiver_id = receiver_id
        self.message_content = message_content
        self.timestamp = timestamp
        self.status = status

        if id is None:
            self.id = self._generate_id()
            
    def _generate_id():
        return uuid4()