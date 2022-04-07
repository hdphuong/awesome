from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hello World!</h1>'

@app.route('/api', methods=['GET'])
def api():
    return {
        'userId': 1,
        'title': 'Flask React API',
        'completed': False,
    }


if __name__ == "__main__":
    app.run(debug=True, port=8000)