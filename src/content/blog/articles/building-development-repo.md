---
title: Building docker development repo
description: 'Docker-based development repo helps to reduce setup time for our apps in a local environment.
It also allows us to manage multiple services from one place and emulate the production environment.   
This article serves as a step-by-step guide for creating a development repo.'
cover: /images/blog/building-development-repo/cover.png
preview: /images/blog/building-development-repo/preview.png
category: Coding
layout: article
---

## Intro
There is a lot of buzz around Docker, and its ecosystem. Sometimes it's hard to get to the real reasoning behind all of these technologies.
Lots of people are talking about Kubernetes, Docker, etc... But they don't talk about WHY to use it. From the outside perspective it sometimes
appears like a lot of buzzwords.
This is why I wrote another article about WHY you should or should not use Docker development repo. You can find it
[here](blog/acticles/docker-development-repo)

So what is a Docker development repo?

It's a repo that includes all of your applications that are considered as one infrastructure.
For example, if I'm building an e-shop my infrastructure could consist of these 3 apps.
- FE web application
- BE API
- DB

Development repo makes local setup of these 3 services easy as 3 commands.
```bash
git clone {DEVELOPMENT_REPO_URL}
```
```bash
docker-compose pull
```
```bash
docker-compose up -d
```
This guide will show you an example with Nest.js, Vue.js, and PostgreSQL, but the same strategy applies to any type of
application written in any language or framework. In fact the bigger the application is the bigger benefits it can bring to your
team. As the number of "services" in your application grows the setup and maintenance complexity follows.

## Overview
I've created a functional repo for example that we are going to work on. You can find it [here](https://github.com/Mporuben/dev-repo).
Just to give a bit perspective folder structure looks like this.
```
dev-repo
│   ...
│   docker.compose.overider.yml  
│   docker.compose.yml
│
└───apps
   │   web
   │   web-api
```
It root level you have docker-compose configurations. In app folder you will clone your code of your applications, and then you will mount
it to containers.

## Requirements
This guide assumes that you have already installed
- Docker
- docker-compose

So let's build a development repo.

## Devstack repo
We start with creating a new repository.
1. create a folder
2. Initialize git in the folder
    ```bash
    git init
    ```
## Composing apps
Now we have to define our docker-compose services.
We have 3 services:
- `web` - custom FE app written in vue
- `web-api` - custom node js BE API written in Nest js
- `db` - generic PostgreSQL DB

1. create `docker-compose.yml` with
```yml
version: '3.2'
services:
  web:
    container_name: web
    depends_on:
      - "web-api"
    ports:
      - '3030:3030'
    image: ghcr.io/mporuben/web:latest
    command: npm run dev
  web-api:
    container_name: web-api
    image: ghcr.io/mporuben/web-api:latest
    depends_on:
      - "db"
    environment:
      # DB
      DATABASE_HOST: 'gateway.docker.internal'
      DATABASE_PORT: '5432'
      DATABASE_NAME: 'main'
      DATABASE_USER: 'postgres'
      DATABASE_PASSWORD: 'root'
    ports:
      - '3000:3000'
    command: npm run start:prod
  db:
    container_name: web-db
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: 'root'
      POSTGRES_DB: 'main'
    ports:
      - '5432:5432'
    expose:
      - '5432'
    volumes:
      - web-db:/var/lib/postgres:delegated
volumes:
  web-db:
```
## Mounting source code
Now we can run our application from one place, but we don't have source code available for editing in our host machine.
We need to mount code from our host machine into the docker container.

1. create `apps` folder in the root of project
2. add `/apps/*/` to `.gitignore`
3. clone application into the apps folder
4. create `docker.compose.override.yml`
5. add `docker.compose.override.yml` to `.gitignore`

## Tips for improving Devex
- write good `README.md` explaining how this repo works.
- add another `README.md` into `/apps` explaining what purpose this folder serves and how to mount apps. This will give better inside for purpose of the folder, and it will also create the folder automatically during cloning  😉
- create `docker.compose.override.example.yml` and add a functional example of how to mount code. Devs will only have to copy a part that they need and paste it into a real override file.


## FAQ
Why do we have only some applications mounted and others run only from containers?

- Because we wanted to keep developers option to mount only the code that they are going to work on. This result in less clutter in their machines and easy updates of all application by
  ```bash
  docker-compose pull
  ```
Why we haven't used git submodules and we "git ignored" the /apps folder?
- This relates to the previous question. We want to keep updating all apps as easy as one command (this does not include apps that we have mounted to local code obviously, because it would rewrite our changes in the project).
