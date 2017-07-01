FROM centos
RUN yum install -y httpd
COPY dist/* /var/www/html/
CMD ["httpd","-D","FOREGROUND"]
