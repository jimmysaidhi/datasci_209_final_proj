from flask import Flask, render_template
import sqlite3
app = Flask(__name__)

@app.route('/')
def w209():
    file='about9.jpg'
    return render_template('w209.html',file=file)


@app.route('/api')
def getX():
    return {"x" : "2"}

@app.route('/players/count')
def getPlayerCount():
    count = getPlayerCount()
    return {"playerCount": count}

def getPlayerCount():
    conn = sqlite3.connect('players_20.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT COUNT(*) FROM players;")
    count = cursor.fetchone()[0]
    conn.close()
    return count

if __name__ == '__main__':
    app.run()