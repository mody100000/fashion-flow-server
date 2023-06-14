FROM ubuntu:20.04


WORKDIR /app


# Update APT packages - Base Layer
RUN apt-get update \
    && apt-get upgrade --yes \
    && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends --yes wget curl


RUN curl --silent --show-error --location https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add - \
  && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list \
  && wget --no-check-certificate --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
  && curl --silent --show-error --location https://deb.nodesource.com/setup_16.x | bash - \
  && apt update \
  && apt-get install --no-install-recommends --yes mongodb-org=5.0.14 nodejs \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*


  # Clean up cache file - Service tech@appsmith.comlayer
RUN rm -rf \
    /root/.cache \
    /root/.npm \
    /root/.pip \
    /usr/local/share/doc \
    /usr/share/doc \
    /usr/share/man \
    /var/lib/apt/lists/* \
    /tmp/*


# Define volumes - Service Layer
VOLUME [ "/stacks" ]

COPY package*.json ./

RUN npm install --legacy-peer-deps

EXPOSE 8000

CMD ["npm" ,"start"]
