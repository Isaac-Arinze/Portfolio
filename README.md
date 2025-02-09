# 🌟 My Portfolio Project

Welcome to my portfolio! This project showcases my expertise in **HTML, CSS, JavaScript, and PHP**, focusing on seamless frontend-backend integration, efficient data handling, and a sleek, responsive design.

## 🚀 Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP
- **Database:** MySQL (Managed via **phpMyAdmin**)
- **IDE:** Developed in **VS Code**, but any IDE (e.g., IntelliJ, PhpStorm) can be used

## ✨ Key Features
✅ Smooth frontend-backend communication  
✅ Efficient and scalable data handling  
✅ Fully responsive UI for an optimal user experience

## 🎯 Why This Stack?
While **Java, Spring Boot, and relational databases** (PostgreSQL, MySQL) are my primary expertise, this project reinforced the importance of choosing the right tools based on system requirements.

## 📂 Project Structure  


/project-root │
── index.html # Main landing page 
│ ── styles.css # Custom styles 
│── script.js # Frontend interactivity 
│ ── backend/ 
│ ├── config.php # Database configuration 
│ ├── api.php # Handles backend logic 
│── assets/ # Images, icons, and other static files 
│── README.md # Project documentation


## 🔧 Installation & Setup
### **1️⃣ Clone the repository**
```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo

###backend/config.php

$host = "localhost";
$username = "root";  // Change if you use a different MySQL user
$password = "";      // Default is empty for XAMPP, set if different
$database = "portfolio_db";
$conn = new mysqli($host, $username, $password, $database);

php -S localhost:8000


