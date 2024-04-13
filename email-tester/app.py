from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/send-email": {"origins": "http://localhost:5000"}})

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    email = data['email']

    sender_email = 'luispay0102@gmail.com'
    password = 'luis2318'

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = email
    message['Subject'] = 'Restablecer contraseña'
    body = 'Aquí va el mensaje de reestablecimiento de contraseña.'
    message.attach(MIMEText(body, 'plain'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, email, message.as_string())

    return jsonify({'message': 'Correo electrónico enviado con éxito'}), 200

if __name__ == '__main__':
    app.run(debug=True)
