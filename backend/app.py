import os, sys
import datetime
from flask import Flask, send_from_directory, jsonify, render_template, request
from routes.auth import auth_blueprint

app = Flask(__name__)
app.secret_key = os.urandom(24)

app.config["SESSION_COOKIE_SAMESITE"] = "None"
app.config["SESSION_COOKIE_SECURE"] = True

# Register
app.register_blueprint(auth_blueprint)

if __name__ == '__main__':
    app.run(debug=True)