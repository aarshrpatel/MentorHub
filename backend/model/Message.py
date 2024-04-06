from uuid import uuid3

class Message:
    def __init__(self, message_id, sender_id, receiver_id, message_content, timestamp, status):
        self.message_id = self._setID(message_id)
        self.sender_id = sender_id
        self.receiver_id = receiver_id
        self.message_content = message_content
        self.timestamp = timestamp
        self.status = status

    def _setID(id):
        if not id:
            return uuid3()
        return id