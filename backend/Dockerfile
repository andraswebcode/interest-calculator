FROM php:8.2-fpm

WORKDIR /var/www

COPY . .

RUN docker-php-ext-install pdo pdo_mysql zip unzip php-zip

CMD ["php-fpm"]
