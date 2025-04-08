                        ArtiSpire Documentation
-About the application:
I have created this project being inspired from Pinterest and it is for painters, artists and idea or inspiration seekers. It not only allows users to look thorugh ideas which are created it aesthestically pleasing way, but to create one themselves. Additionally, they can edit or delete them if needed. 

-Step by step instructions on how to run the application:
   1) Clone the GitHub repository with this command: 
   git clone https://github.com/00017850/ArtiSpire1
   cd artispire 
   2) Install Project dependencies by "npm install"
   3) Start the server with running "node server.js"
   4) the application will be launched here: http://localhost:3000

-Dependencies Used in the application:
express – web application framework
pug – templating engine
uuid – to generate unique IDs for art entries
nodemon (dev dependency) – for live reloading during development
body-parser – for parsing form data

-Application links:
1) Github repository: https://github.com/00017850/ArtiSpire1
2) Hosted:

-Project structure:
ARTISPIRE/ -(root of my project)
 -server.js-entry point to start the app
 -package.json-Metadata and dependencies
 -.gitignore
 -validators.js (validation logic for form fields)

 /public
   /styles
    styles.css- static assets and design

 /routes (web and api routes)
   /api
     index.js
   /web
     web.js

 /views (pug templates for all pages)
   add.pug
   edit.pug
   error.pug
   index.pug
   layout.pug

 /controllers (logic for handling routes and data)
  index.js

 /db
  crud.js (handles the logic)
  db.json (keeps the data)


