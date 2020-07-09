FROM nginx:1.15.2-alpine
COPY COPY build/ /usr/share/nginx/html/
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
