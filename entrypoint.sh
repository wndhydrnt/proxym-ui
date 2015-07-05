#!/bin/bash

echo "window.proxymAppConfig = {server:\"$PROXYM_URL\"};" > /usr/share/nginx/html/config.js

nginx -g "daemon off;"
