FROM python:3.8.2-alpine
LABEL version="1.0.0"
LABEL description="Backend Server's Image"
LABEL mantenier="Einar Jhordany Serna Valdivia<einar.serna@cimat.mx>"
WORKDIR /usr/src/Backend
COPY . /usr/src/Backend
RUN apk --update add bash nano
RUN apk add --no-cache wkhtmltopdf xvfb ttf-dejavu ttf-droid ttf-freefont ttf-liberation gcc python3-dev jpeg-dev zlib-dev git freetype-dev libffi-dev
RUN apk add --no-cache --virtual .build-deps build-base linux-headers 
RUN echo "http://dl-8.alpinelinux.org/alpine/edge/testing" >> etc/apk/repositories && apk update && apk add py3-numpy py3-pandas
RUN ln -s /usr/bin/wkhtmltopdf /usr/local/bin/wkhtmltopdf
RUN chmod +x /usr/local/bin/wkhtmltopdf
RUN python -m pip install --upgrade pip
RUN pip install psycopg2-binary
RUN pip install reportlab
RUN pip install --no-cache-dir -r /usr/src/Backend/requirements.txt

EXPOSE 5001
CMD ["flask", "run"]