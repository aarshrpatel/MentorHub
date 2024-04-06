from uuid import uuid3

class Notification:
    def __init__(self, notification_id, receiver_id, message, timestamp, status):
        self.notification_id = self._setID(notification_id)
        self.receiver_id = receiver_id
        self.message = message
        self.timestamp = timestamp
        self.status = status

    def _setID(self, id):
        if self.user_id:
            return
        if not id:
            return uuid3()
        return id