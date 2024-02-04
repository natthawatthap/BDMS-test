ทำ REST API โดยใช้ Node JS (JavaScript หรือ TypeScript) สำหรับโปรแกรม To do list โดยห้ามเชื่อมต่อกับ database

# Todo API

Install dependencies:
bash

npm install
Running the Application
Start the application using the following command:

bash

npm start
The application will run at http://localhost:3000 by default.


API Endpoints
Get All Todos
http

GET /api/todos
Retrieve a list of all todos.

Get Todo By ID
http

GET /api/todos/:id
Retrieve a todo by its ID.

Create Todo
http

POST /api/todos
Create a new todo. Provide the todo details in the request body in JSON format.

Update Todo
http

PUT /api/todos/:id
Update an existing todo by its ID. Provide the updated todo details in the request body in JSON format.

Delete Todo
http

DELETE /api/todos/:id
Delete a todo by its ID.

Postman Collection
A Postman collection is provided for testing the API. Import the collection file in Postman and set the baseURL variable.

todo_API_Test.postman_collection.json