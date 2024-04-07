import os, sys
import datetime
from flask import Flask, send_from_directory
from flask_cors import CORS
from model.database_func import generate_database
from api.auth import auth_blueprint

static_react = os.path.join(os.getcwd(), "frontend", "build")

app = Flask(__name__, static_folder=static_react)
app.secret_key = os.urandom(24)
CORS(app, supports_credentials=True)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Register
app.register_blueprint(auth_blueprint)

if __name__ == "__main__":
    generate_database()
    app.run()