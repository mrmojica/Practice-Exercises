*Node

* What is Node? Is how we run javascript on the server side.
* Why are we learning it? It's popular! Great libraries / Npm / open source / great community / great for realtime apps/ high-performance / great for api / asynchronous / number one reason it is JavaScript!
* (it doesn't matter(long term))

#Using Node

* Interact with Node Console
* Run a file with node

* node <filename>

* NPM

* Framework vs Library? When we use a framwork we have less control and goal is to make things faster / library we have more control
* What is Express? One framework  for node
* Why are we using Express popular/ great documentation/ good first framework to learn

* use res.render() to render HTML(from an EJS file) example: res.render("filename.ejs", {}); 

* Pass variables to EJS templates : data (including array vallues) can be sent to the ejs file by passing it into the object to use js in ejs file use the following syntax... <%= ejs %>
* Explain what EJS is and why we use it? Npm install ejs

* EJS tags <%= %> (values to display on html)  and <% %> (use if doing logic just evaluating code but not affecting the html)

* you can link a style sheet to the ejs file

* to have express serve other directories: app.use(express.static("directoyName"));
* app.set("view engine", "ejs"); // shortcut to remove .ejs text from the render

* views/partials (can add header.ejs (containing the header of the normal HTML structure) // footer.ejs (containing the closing tags for HMTL structure) to include the partials add <% include partials/header %>  at top and <% include partials/footer %> at bottom of ejs file. check that style sheets are connected correctly /root directory/etc


# RESTful Routing

* REST - a mapping between HTTP routes and CRUD (Create/Read/Update/Delete or Destory)

* CRUD - a parttern to help structure your routes

# Associations

* one:one, one:many, many:many relationships

# Embedding Data

# Referencing Data