nodurl
==================
Quick and dirty Nodejs and Redis powered URL shortener and file-sharing app. Input sanization missing.

### Instructions
http://127.0.0.1/olympus - Administration area (default is olympus, customizable by NODURL_ADMINTAG)

Nodurl supports redirects and file downloads (aKa url shortener and file-sharing)

### Installation

* Install Nodejs and Redis
* git clone https://github.com/ptisp/nodurl
* npm install
* npm start

### Env variables
* NODURL_USER - admin username
* NODURL_PASSWORD - admin password
* NODURL_HOME - where to redirect when accessing /
* NODURL_PORT - listening port
* NODURL_REDIS_IP - redis daemon ip address
* NODURL_REDIS_PORT - redis daemon port
* NODURL_ADMINTAG - administration area tag, default is 'olympus'