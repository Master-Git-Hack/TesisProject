from smtplib import SMTP

from src.config import emailConfig


def send_email(message, to_Email):
    try:
        # Start server conecction
        smtp_session = SMTP("smtp.gmail.com", 587)
        # Encryt the connection
        smtp_session.starttls()

        # Sign In at server
        smtp_session.login(emailConfig["user"], emailConfig["pwd"])

        # Send email
        smtp_session.sendmail(emailConfig["user"], to_Email, message.as_string())

        # Finish server connection
        smtp_session.quit()
        return True
    except Exception as e:
        print(f"An error occurred at Email Service: {e}")
        return False
