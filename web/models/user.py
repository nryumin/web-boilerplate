from flask_login import UserMixin


class User(UserMixin):
    def __init__(self, data):
        self._id = data['_id']
        self.username = data['username']

    def get_id(self):
        return self._id
