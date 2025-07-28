# Weyoco Campaign Sample API

This is a simple Node.js + Express + MongoDB CRUD API for managing campaign posts as part of the Weyoco technical assessment.

## 🚀 Setup Instructions

1. Clone this repo
2. Install dependencies:
3. Add your `.env` file using `.env.example` as reference
4. Run the server:

## 📌 API Endpoints

- `GET /campaigns`
- `POST /campaigns`
- `PUT /campaigns/:id`
- `DELETE /campaigns/:id`

## 🧪 Postman

Import `weyoco.postman_collection.json` into Postman to test all endpoints.

## ⚙️ Tech Stack

- Node.js + Express
- MongoDB (via Mongoose)
- Postman for testing


Server is running on http://localhost:3001

### Payload Post
{
  "title": "New Campaign",
  "description": "Promotional launch for product X",
  "photo": "https://image-url.com/photo.jpg",
  "additionalInfo": "This includes TikTok KOLs and Instagram ads"
}

