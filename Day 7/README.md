### Recap
___

* [ ] `Array.prototype.forEach`
* [ ] `Array.prototype.map`
* [ ] `Array.prototype.filter`
* [ ] Intro to express
* [ ] Routes
  - `app.get(url, callback)`
  - `app.post(url, callback)`
  - `app.put(url, callback)`
  - `app.delete(url, callback)`
* [ ] Response types
  - `response.send()`
  - `response.sendFile()`
  - `response.render()`
* [ ] Express Middleware
    - Middleware is an array of functions run one after another.
    - `app.use()` is used to register middleware
    - Middleware examples:
      - `app.use(express.static(${path}))`
      - `app.use(express.json())`
      - `app.use(express.urlencoded())`
      - `app.use(methodOverride("_method"))`
* [ ] What is MVC architecture ?
* [ ] Templating
  - The mechanism used to create dynamic `html` pages
  - `ejs`, `hbs`, `pug` etc...
* [ ] Request object
  - `request.params` for routes like `/todos/:id`
  - `request.body` for `POST`, `PUT` and `DELETE` requests
  - `request.query` to read query parameters like `/todos?id=1&completed=false`.
* [ ] Create a Todo application (CRUD) that:
  - Lists all Todos (Read)
  - Adds Todos to the list of Todos (Create)
  - Updated a Todo item (Update)
  - Remove a Todo item from the list (Delete)

### Agenda
___

* [ ] Move route handlers to controllers and reference relevant functions
* [ ] Make use of `app.use()` to route request to controllers without manual mapping of functions
* [ ] Move to persistent data store.
  - Types - SQL & NoSQL databases.
* [ ] Setup MongoDB on Ubuntu / Windows
  - **Note**: If that is a problem, you can use MongoDB atlas with a free plan.
* [ ] Create a `Todo` model in the `models` directory
* [ ] Update controller methods to use the `Todo` model for CRUD
