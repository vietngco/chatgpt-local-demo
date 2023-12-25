from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder='../ui/files', template_folder='../ui')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/files/<path:path>')
def send_js(path):
    print("this is path", path)
    return send_from_directory('..ui/files', path)

if __name__ == "__main__":
    app.run(port=5000)