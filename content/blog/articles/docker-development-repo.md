---
title: Docker development repo
description: If you have ever dealt with a larger infrastructure that contains multiple applications you probably experienced some issues with local development. There is a lot of options on how to configure the dev environment. The option ranges from running the whole infrastructure in developer's machines to "Yes, we are developing on production DB, but we are careful". I would like to show you an approach that works well in my day-to-day job on a large project and also on my small 1 person side project.
cover: /images/blog/docker-development-repo/cover.png
preview: /images/blog/docker-development-repo/cover.png
category: Coding
layout: article
createdAt: 9.1.2022
---

## Intro
This article is trying to explain the philosophy behind the development repo.
I've also written a practical step-by-step guide on how to implement a development repo.
[Building development repo article](/blog/articles/building-development-repo).

## Goal
Providing an easy development experience where a developer has to take care only of his application and doesn't have to care about the rest of the infrastructure.

## Why
In this section, I would like to show you the thought process behind the decisions that lead to the development repo.

### Local development
During development, it is important to be able to develop our applications independently of the rest of the infrastructure.
This applies both to the production and also staging environment. The reason is simple If there is an outage
you are not able to continue with your work. If I work on a FE application that calls BE API which runs on staging
and the staging is down I'm blocked. In general, as infrastructure grows the surface for such an error also grows.
As the staging is considered a "testing" platform where people iterate and do test integrations of their combined affords
in a safe environment these iterations will result in lots of bugs. That is ok, but we have to bear in mind that testing
and feature previews can't block the rest of our team.

Independence from staging could be achieved in two ways:
##### Mocking
Mocks are often a nice and easy solution that works well on some types of applications. If the API is smaller and stable then mocks are
probably the right way. The issue with mocking is that we have to update the mock data and the bigger API is the more updates we have to do.
We can automate this task and save request responses. After I've written 2 automated mocking solutions I have to say it is an option, but
sometimes you hit edge cases, and you have to cover these cases manually. This is fine from time to time but this complexity can grow quickly,
and you can find yourselves in a spot where you still have to put a lot of afford to keep mocks up to date.

##### Running infrastructure locally
Locally running infrastructure gives us a lot of benefits in terms of stability. We can pick which commit of which applications we want to use.
If there is a bug in the latest commit in our API project we can just check out one commit back and continue our work.
We also don't have to maintain mock files, but there is also a cost we have to invest time into a setup of either parts or whole infrastructure.
This could be very costly and the same rules are applied here the bigger infrastructure is the more setup time is needed. Luckily there is a way
how to reduce this cost significantly.

### Docker
As I said having functional local infrastructure has its changes.
Just to mention a few:
- configuration time
- keeping a version of dependencies consistent (Node, PHP, Python, etc...)
- different OS has their specificities

We can partially mitigate these challenges by containerizing our applications. I don't want to get deep into a discussion
about Docker and how it works in the background. As there is plenty of blogs and videos on this topic. Long story short
Docker gives the capability to virtualize our environment with very low overhead. We can write Dockerfile where we configure
runtime for our application (things like versions of programs, OS, etc...).then we can run it on any platform.
By doing this we greatly reduce configuration time, and we also keep our environment consistent across our team.
Developers have to install Docker, but after that, they don't need to deal with the setup of specific apps.

### Development repo
After we have Dockerized our individual applications we will probably start facing another problem, and
that problem is infrastructure configuration and composition. We probably want to share our local
development configuration across the team. In an ideal scenario, we want to be able to start the whole infrastructure
from one point and without any complicated configuration. Luckily there is a tool that allows us to do such a
thing it is called docker-compose. Docker-compose allows us to configure and run multiple containers in one place.
We can create a configuration for running the whole company's infrastructure locally in one `docker-compose.yml`.
This is extremely convenient and also flexible as we can override the default setting and define some specific
rules if our local setup needs such a thing. We can override these configs with `docker-compose.override.yml`.

After creating this compose file we have to put it somewhere and here comes the development repo.
A development repo is just a repo that includes configuration for running infrastructure locally. That's it nothing
more nothing less. But in practice, it makes life much easier. In this combination with docker-compose, we can
clone development repo type `docker-compose pull` and pull application images and then `docker-compose up`
and our whole infrastructure is running. Now you are probably asking how does it work if I haven't pulled the source code
of any application just the overall configuration. This part is in my opinion the best. You don't have even have to pull
all the code to make infrastructure run. You will pull code only for this application that you are actually going to
work on. So If I'm working on the FE app I will pull docker images for the whole infrastructure and then pull actual code for my
FE application and mount FE code from my host machine into a docker container.

I've created a functional showcase. You can take a look on [github example repository](https://github.com/Mporuben/dev-repo).
In this approach, we can run the whole infrastructure with very little afford
and actually clone only code that we are working on.

## Dev repo vs Monorepo
If you really think about it development repo seems to be a little similar to Monorepo.
I've decided to compare these approaches a bit and share some of my thoughts.
Actually, the difference between those two is kind of obvious. Monorepo is a single git repository that includes code for the whole infrastructure.
A development repo is a repo that includes only configuration for running the whole infrastructure.
In practice with Development repo can be split into X number of repositories that are independent of each other.

Here are some pros and cons of using Dev repo over Monorepo
### Pros
#### Flexibility
In my mind, this is the biggest benefit. If we keep our application repos independent we can use them
even without a Dev repo. Dev repo is a convenient feature, and it's not a requirement to run those apps.
#### Performance
This applies mostly to extra large Monorepos. But If you really think about it a company the size of Google
has a lot of code. If all the code is in one repo then the repo is huge. On that scale you start to face some unpleasant
issues like indexing of IDEs are really slow just because there is a lot of code. The pipelines start to be really slow
because you have to run tests for the whole infrastructure not only for isolated parts. Yes, I know there is a lot of ways how
to optimize Monorepo and they could be fast even on large scale. There is a lot of huge companies that use Monorepos
Google is probably the most famous for it. But you have to bear in mind that this performance issue will come, and you will
have to deal with them.

### Cons
#### Fragmentation
Fragmentation could be beneficial sometimes, but it could unnecessarily complicate stuff. Management of multiple repositories
could cause some extra maintenance costs. For example, re-usability of code could be more complex in the Dev repo because
we can't just point into our `libs` folder at the root of a project we have to install our dependencies either by package manager
or git submodule.

## Conclusion
Development repo is a convenient way of managing & configuring our infrastructure for local development.
It is a very flexible system that reduces the cost of setups and provides a consistent development experience across our team.
We can consider it as an alternative to a Monorepo. Before we pick one over the other we should carefully think about
our use case and our tech stack. I hope this article enjoyed this article and that it brought you some value.
If you want to try to build your Dev repo you can read [building development repo](/blog/articles/building-development-repo) step-by-step guide 



  


