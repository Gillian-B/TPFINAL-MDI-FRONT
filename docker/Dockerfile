FROM ubuntu:18.04 as front

RUN apt-get update --fix-missing
RUN apt-get install -y git
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN git clone https://github.com/Gillian-B/TPFINAL-MDI-FRONT

WORKDIR TPFINAL-MDI-FRONT
RUN npm i

CMD ["npm", "start"]
