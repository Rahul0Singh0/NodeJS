# NodeJS - Runtime Environment for JS
* Node JS is a free, open source, cross-plateform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
![alt text](./Images/image.png)

## REPL Console
![alt text](./Images/image2.png)

## NPM
* npm is the package manager for JavaScript. It is the default package manager for the JavaScript runtime environment.
![alt text](./Images/image3.png)
![alt text](./Images/image4.png)

## Core Aspects
![alt text](./Images/image5.png)

# V8 Engine

![alt text](./Images/image6.png)

Note: Convert JS code into bytecode - search on google

## File System
* Node.js has a built-in file system module that allows you to interact with the file system.
* The file system module provides a way to read and write files, as well as create and delete.

### templating engine
* templating engine is a software component that separates presentation logic from application logic.
* it is used to generate dynamic web pages.
#### use case
1. generate dynamic web pages with data from a database.
2. server-side rendering

## Rendering
Two type of rendering - 
1. client-side rendering
2. server-side rendering: performance will be low for example: let assume you make todo app with server side rendering, you submit the data and refreshing the page then you will see new updated page.

## cron
cron is a robust tool for running jobs (functions or commands) on schedules defined using the cron syntax.
Perfect for tasks like data backups, notifications, and many more!
``` Bash
npm i cron
```
You can create a project - you server will send a motivational quote daily by mail to registered user by fixed time. 

## Networking / Server

## REST APIs
![alt text](./Images/image7.png)
[REST APIs - Microsoft](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)

## Backend Architecture (MVC)
MVC stands for model-view-controller. Here's what each of those components mean:
1. Model: The backend that contains all the data logic
2. View: The frontend or graphical user interface (GUI)
3. Controller: The brains of the application that controls how data is displayed

* Today the MVC pattern is used for modern web applications because it allows the application to be scalable, maintainable, and easy to expand.
* The MVC pattern helps you break up the frontend and backend code into separate components. This way, it's much easier to manage and make changes to either side without them interfering with each other.
* But this is easier said than done, especially when several developers need to update, modify, or debug a full-blown application simultaneously.
![alt text](./Images/image8.png)
Note: Segrigation and separation are different