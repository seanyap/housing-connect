# Housing Connect

###### Contributors: Aysenur Davulcu, Miriam Alyeshmerni, Sean Yap

## Motivations

Housing Connect is a full stack web application platform we created to help solve
the time-consuming process for people who are looking for a place to live. In
particular, they not only have to look for places that meet all their requirements,
but they also have to make sure that they also match the conditions specified by
the homeowners, such as having at least a certain credit score/history, and income
etc. This might not seem like a huge deal because you can easily call them and ask,
but imagine having to do that multiple times, asking the same exact questions, which
can certainly suck the fun out of this process.

Therefore, we decided to build this application platform to provide a more efficient
way of connecting both parties by automating all the tedious work of manually calling
and verifying the requirements that should have been easily available on the website.
This way both the people who are looking for a place and the homeowners will have
a peace of mind knowing that there is one less thing to keep track of.

We also believe that our application would be very helpful for homeowners who are
looking to rent or sell their property as well because they are likely experiencing
a similar time-consuming process, where they have to repeatedly host house visits
and tours to interested renters/buyers. It would certainly be very disappointing
if they find out later that the person they are pitching to does not meet all the
requirements they are looking for and it is because they forgot to mention them
in the beginning.

## Setting up the environment

- Install postgreSQL if you don't have it already and create a database
- `git clone https://github.com/seanyap/housing-connect.git`
- Create an empty .env file in /api, copy /api/.env.example contents into it, and fill in your database username and password.
- Run `npm install` in both the root `/` path and server '/api' path
- Create an empty `.env` file in `/api`, copy `/api/.env.example` contents into it, and fill in your database username and password
- Run `npm start` in both root and server path
- React application should be running on localhost:3000; Server should be running on localhost:8080

## What's missing?

There are features missing from this showcase product which should exist in a real product:

### User authentication system

We were trying to setup the authentication but due to not having much experience
with working the encyption and user sessions, we had many errors and issues along
the way. Ultimately, we decided that we would be better off focusing on the other
tasks that we had planned just so we could be able to deliver a prototype by
our demo presentation date. This is a feature that we will definitely need to
continue working on.
