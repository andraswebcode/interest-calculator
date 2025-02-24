FROM php:8.2-fpm

WORKDIR /var/www

COPY . .

RUN apt-get update && apt-get install -y zip libzip-dev \
    && docker-php-ext-install zip \
    && docker-php-ext-install pdo pdo_mysql

CMD ["php-fpm"]
