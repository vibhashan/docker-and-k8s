FROM ubuntu:latest

# Define maintainer info
LABEL \ 
    version="0.0.1" \
    maintainer="vibhashana"

# Update the image to the latest packages
# Install Nginx and clear cache
RUN \
    apt-get update; \
    apt-get -y upgrade; \
    apt-get install nginx -y; \
    apt-get clean;

WORKDIR /usr/share/nginx/html

# Replace index.html with custom file
COPY ./index.html ./

# Expose port 80
EXPOSE 80

# Startup Nginx in the container
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]

