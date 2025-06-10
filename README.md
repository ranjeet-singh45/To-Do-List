# 📝 Work To-Do List App

A full-stack To-Do List application built with **Node.js**, **Express.js**, **EJS**, and **PostgreSQL**. It allows users to add, modify, view, and delete their work tasks in a simple and responsive interface.

## 🚀 Features

- Add new tasks
- View all pending tasks
- Delete completed or unwanted tasks
- Edit task
- Server-rendered views using EJS
- Persistent storage with PostgreSQL
- Clean and responsive UI

![image](https://github.com/user-attachments/assets/fc58c515-9dc6-4747-94ef-de8ab5f21bfe)
  
  

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript Templates), CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL


## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ranjeet-singh45/to-do-list-app.git
   cd to-do-list-app
   ```
2. Install dependencies:
 ```
   npm install
   ```
3. Set up PostgreSQL:  
   create a table called items  
   See the queries.sql SQL code.

   
5. Before running the application, create a `.env` file in the root directory and add the following PostgreSQL database configuration:
    ```env
   DB_USER="postgres"
   DB_HOST="localhost"
   DB_NAME="name_of_db"
   DB_PASSWORD="your_db_password"
   DB_PORT="you_db_port"
   ```
6. Start the app:
   ```
   npmdev run
   ```
7. Go to: http://localhost:5173/


