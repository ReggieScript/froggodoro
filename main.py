from flask import Flask, render_template, request
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm

app = Flask(__name__)

Bootstrap(app)

@app.route('/', methods=['GET', 'POST'])
def loadup():
    if request.method == 'POST':
        global focus_time
        global break_time
        focus_time = request.form.get('focus_time')
        break_time = request.form.get('break_time')
        return app.redirect("/home")
    return render_template("loadup.html")

@app.route("/home")
def home():
    return render_template("index.html", focus_time = focus_time, break_time = break_time)

if __name__ == '__main__':
    app.run(debug=True)
