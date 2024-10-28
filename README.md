# Get Notify

Get Notify is an advanced message reminder bot designed to send reminders via WhatsApp, Telegram, and Instagram. It offers users an easy and efficient way to schedule reminders, manage reminder history, and receive notifications ahead of time.

## Features

- **WhatsApp Reminders**: Schedule reminders that are sent directly to your WhatsApp.
- **Multiple Reminders**: Create multiple reminders in a month.
- **Reminder Frequency**: Get notifications ahead of the reminder time (e.g., 5 minutes, 1 hour in advance).
- **Custom Messages**: Send personalized reminder messages.
- **Email Notifications**: Option to receive reminders via email.
- **Customer Support**: Get help whenever needed.

## Folder Structure

```
Get-Notify/
├── frontend/       # Contains the ReactJS frontend code
└── backend/        # Contains the Node.js with Express backend code
```

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Hosting**: Render for backend, Cloudflare for frontend

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sandeep-rajputt/Get-Notify.git
   cd Get-Notify
   ```

2. **Navigate to the frontend** and **backend** directories and install dependencies:

   ```bash
   # In the frontend directory
   cd frontend
   npm install

   # In the backend directory
   cd ../backend
   npm install
   ```

3. **Environment Variables**:

   - In both `frontend` and `backend` directories, create a `.env` file according to the `.env.sample` provided in each directory.
   - Add the necessary keys, such as API keys, database URLs, and other configuration options as per your setup.

4. **Configure Vite Proxy**:

   - In the `frontend/vite.config.js`, replace `YOUR_BACKEND_URL` with your actual backend URL:

     ```javascript
     ...
         proxy: {
           "/api": "YOUR_BACKEND_URL", // Replace with your backend URL
         },
     ...
     ```

5. **Run the application**:

   - Start the frontend server:

     ```bash
     cd frontend
     npm start
     ```

   - Start the backend server:

     ```bash
     cd ../backend
     npm run dev
     ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
