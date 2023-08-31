FROM node:18-buster

WORKDIR /app

# RUN yes | unminimize

# COPY app/ /docker/app

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install vim -y && \
    apt-get install git -y && \
    apt-get install sudo -y && \
    apt-get install procps -y
    # apt-get install python3-pip -y

# RUN python3 -m pip install -r requirements.txt

# Install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN npm i -g cowsay

RUN npm install html2canvas jspdf