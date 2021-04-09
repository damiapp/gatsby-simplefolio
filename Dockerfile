FROM nginx:1.19.9-alpine
COPY ./public /usr/share/nginx/html
COPY ./Nikola_Damjanovic_CV.pdf /usr/share/nginx/html/Nikola_Damjanovic_CV.pdf
COPY ./nginx/dami.conf /etc/nginx/conf.d/dami.conf
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
