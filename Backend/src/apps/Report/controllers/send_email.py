from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart

from src.config import emailConfig, rootPath

from ...Auth.models.user import User, db
from ..services.email import send_email


def create_message(data):
    message = MIMEMultipart()
    message["From"] = f'Security<{emailConfig["user"]}>'
    message["To"] = data["Email"]
    message["Subject"] = "Reporte de Seguridad"
    message.attach(attach_file())
    return message


def attach_file():
    file2attach = open(f"{rootPath}/tmp/report.pdf", "rb")
    mime2attach = MIMEBase("application", "octet-stream")
    mime2attach.set_payload((file2attach).read())
    encoders.encode_base64(mime2attach)
    mime2attach.add_header("Content-Disposition", "attachment", filename="report.pdf")
    return mime2attach


def request(data):
    message = create_message(data)
    Users = [email for email in db.session.query(User)]
    return send_email(message, to_Email=Users)
