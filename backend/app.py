import os, sys
import datetime
from flask import Flask, request
from routes.auth import auth_blueprint

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Register
app.register_blueprint(auth_blueprint)

if __name__ == '__main__':
    app.run(debug=True)