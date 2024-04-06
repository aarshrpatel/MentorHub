from uuid import uuid3

class Notification:
    def __init__(self, notification_id, receiver_id, message, timestamp, status):
        self.notification_id = self._setID(notification_id)
        self.receiver_id = receiver_id
        self.message = message
        self.timestamp = timestamp
        self.status = status

    def _setID(id):
        if not id:
            return uuid3()
        return id