# ng build
# docker build -t pwta-client-image .
# docker run --name pwta-client-container -d -p 8080:80 pwta-client-image
# open browser and go to http://localhost:8080/
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/pwta-client /usr/share/nginx/html
