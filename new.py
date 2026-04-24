from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# ===== DB CONFIG =====
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "root123",   # put your password if any
    "database": "indore_unlocked"
}

# ===== CONNECT DB =====
def get_connection():
    return mysql.connector.connect(**DB_CONFIG)

# ===== CONVERT TO DICT =====
def fetch_data(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

# ===== ROUTES =====

@app.route("/cafes")
def cafes():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM cafes")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/restaurants")
def restaurants():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM restaurant")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/temples")
def temples():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM temples")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/malls")
def malls():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM malls")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/shopping_places")
def shopping_places():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM shopping_places")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/street_markets")
def street_markets():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM street_markets")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/streetfood")
def streetfood():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM street_food")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/fun")
def fun():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM fun")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

@app.route("/explore")
def explore():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM explore_places")
    data = fetch_data(cur)
    conn.close()
    return jsonify(data)

# ===== SINGLE PLACE =====



@app.route("/place/<table>/<int:id>")
def place(table, id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM {table} WHERE id=%s", (id,))
    row = cur.fetchone()
    conn.close()

    if row:
        columns = [col[0] for col in cur.description]
        return jsonify(dict(zip(columns, row)))
    return jsonify({"error": "Not found"})

# ===== SEARCH =====
@app.route("/search/<keyword>")
def search(keyword):
    conn = get_connection()
    cur = conn.cursor()

    query = f"""
    SELECT *,'cafes' as category FROM cafes WHERE name LIKE %s OR area LIKE %s
    UNION
    SELECT *,'restaurant' FROM restaurant WHERE name LIKE %s OR area LIKE %s
    UNION
    SELECT *,'temples' FROM temples WHERE name LIKE %s OR area LIKE %s
    """

    k = f"%{keyword}%"
    cur.execute(query, (k,k,k,k,k,k))

    data = fetch_data(cur)
    conn.close()

    return jsonify(data)

# ===== CONTACT =====
@app.route("/contact", methods=["POST"])
def contact():
    data = request.json

    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        "INSERT INTO contact (name,email,message) VALUES (%s,%s,%s)",
        (data["name"], data["email"], data["message"])
    )

    conn.commit()
    conn.close()

    return jsonify({"message": "Saved"})

# ===== RUN =====


print("🔥 Starting Flask manually...")
app.run(host="127.0.0.1", port=5000, debug=True)