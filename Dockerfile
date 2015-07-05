FROM nginx:1.9.2

COPY ./entrypoint.sh /entrypoint.sh

COPY ./index.html /usr/share/nginx/html/

COPY ./css/ /usr/share/nginx/html/css/

COPY ./templates/ /usr/share/nginx/html/templates/

COPY ./proxym-ui.js /usr/share/nginx/html/

ENTRYPOINT ["/entrypoint.sh"]
