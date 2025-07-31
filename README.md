# Wanderlust Main

A modern travel planning web application that helps users discover and organize trips worldwide.

---

## 📝 Overview

**Wanderlust Main** is a full-stack web platform for browsing, creating, and reviewing travel listings. It features robust user authentication, cloud image management, and secure data storage, designed for seamless experiences across devices.

---

## 🚀 Features

- 🌍 Browse global travel listings
- ✍️ Create, edit, and delete your own listings
- 🖼️ Upload listing images to the cloud
- 🗺️ Geolocation support for destinations
- 📝 Add & manage reviews for listings
- 🔒 Authentication & authorization
- ⚡ Flash messaging for user feedback
- 📱 Responsive design using Bootstrap

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- **EJS**: Templating engine for server-side rendered views
- **Bootstrap 5**: Modern, responsive UI components
- **CSS**: Custom styling
- **Google Fonts**: Typography

### 🗄️ Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling for Node.js
- **Passport.js**: Local authentication strategy

### ☁️ Cloud & Storage
- **MongoDB Atlas**: Cloud-hosted database (via Mongoose)
- **Cloudinary**: Image upload, storage, and transformation
- **Multer**: Middleware for handling multipart/form-data

### 🛡️ Security
- **Session Management**: Using express-session and connect-mongo
- **Authorization**: Owner and author checks for listings/reviews
- **Input Validation**: JOI schemas for listings and reviews
- **Environment Variables**: Sensitive config via dotenv
- **Error Handling**: Custom ExpressError utility

---

## 🗂️ Project Structure

- `/models` — Data models (User, Listing, Review)
- `/routes` — API and page routes for listings, users, reviews
- `/controllers` — Business logic for each resource
- `/views` — EJS templates for frontend pages
- `/public` — Static assets (CSS, images)
- `/init` — Database seeding and initialization scripts

---

## 🛠️ Workflow

1. **Server Startup**  
   Runs on port `8080`, connects to MongoDB Atlas using environment variables.

2. **User Authentication**  
   Users sign up, log in, and log out using Passport.js local strategy.

3. **CRUD Operations**  
   Authenticated users can create, update, and delete listings and reviews.

4. **Image Uploads**  
   Images are uploaded directly to Cloudinary via Multer.

5. **Session & Flash Messages**  
   User sessions are stored in MongoDB, and feedback is given via flash messages.

---

## 💻 Installation

```bash
git clone https://github.com/Omchavan108/wanderlust_main.git
cd wanderlust_main
npm install
```

Create a `.env` file with:
```
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
ClOUD_NAME=your_cloudinary_cloudname
ClOUD_API_KEY=your_cloudinary_apikey
ClOUD_API_SECRET=your_cloudinary_apisecret
```

Start the server:

```bash
npm start
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

Currently unlicensed. Please add a license file for open source compliance.

---

## 📬 Contact

- GitHub: [Omchavan108](https://github.com/Omchavan108)

---

*Icons: [Font Awesome](https://fontawesome.com/) & [Bootstrap Icons](https://icons.getbootstrap.com/)*