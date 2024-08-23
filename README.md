# Nest API - Products (mongo)

Microservice example using Nest.js and Mongo

## Stack

- Nest.js
- Mongo
- RabbitMQ

## Required

To works this project we need [micro-prod-pg](https://github.com/braulioaguilar/micro-prod-pg)

## RabbitMQ

```sh
## Building RabbitQM container

$ docker run -it --rm --name rabbitmq_nest -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```