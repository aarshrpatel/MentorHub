import os, sys
from flask import Flask
sys.path.append('.')
from routes.auth import auth_blueprint

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Register
app.register_blueprint(auth_blueprint)

if __name__ == '__main__':
    print(sys.path)
    app.run(debug=True)