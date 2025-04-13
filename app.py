from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')  # Serve the frontend

# Real-time communication via WebSockets
@socketio.on('message')
def handle_message(message):
    print('Received message: ' + message)
    send(message, broadcast=True)  # Broadcast message to all connected users

if __name__ == '__main__':
    socketio.run(app, debug=True)
