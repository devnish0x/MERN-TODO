# MERN Todo App 

A simple Todo List built with the **MERN stack** (MongoDB, Express, React with Vite, Node.js). This project is created for learning purposes and demonstrates **CRUD operations** (Create, Read, Update, Delete).

---

## Features 

- Add new tasks 
- Mark tasks as done
- Delete tasks   
- Simple UI built with React  
- Local MongoDB for storing tasks  

---

## Tech Stack 

- **Frontend:** React (Vite)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local)  
- **HTTP Client:** Axios  

---
## Note
- This project uses local MongoDB, not a cloud database.
- It is intended for learning and practice.
---

## Installation 

1. **Clone the repo**

```bash
git clone https://github.com/devnish0x/MERN-TODO.git
cd MERN-TODO
```

2. **Backend Setup**
```bash
cd server
npm install
```
Create a .env file inside the server folder:
```
MONGO_URI=mongodb://localhost:27017/todo
PORT=3001
```
Start the backend server:
```
npm start

```
3. **Frontend Setup**
```
cd Frontend
npm install
npm run dev
```
Frontend runs on:
```
http://localhost:5173
```
## Author
Nishan — [GitHub](https://github.com/devnish0x)

## License
This project is for learning purposes and free to use.

## Acknowledgements
This project was made following a YouTube tutorial for learning purposes. Thanks to the creator for the guidance!
