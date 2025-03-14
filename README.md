# Event-Driven Architecture in Node.js

This project demonstrates a **scalable event-driven architecture** using Node.js and `EventEmitter`. It follows **separation of concerns** to keep the code maintainable and professional.

## 📂 Folder Structure
```
event-driven-app/
│── events/               # Defines event names
│   ├── userEvents.js
│── listeners/            # Listeners for various events
│   ├── userListeners.js
│── publishers/           # Triggers events
│   ├── userPublisher.js
│── services/             # Business logic
│   ├── userService.js
│── logs/                 # Stores logs
│   ├── eventLogs.txt
│── utils/                # Utility functions
│   ├── logger.js
│── index.js              # Entry point
│── package.json
│── README.md
```

## Installation & Usage

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/event-driven-app.git
cd event-driven-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Application
```sh
node index.js
```

## 🔧 How It Works
- **Events (`events/`)** define different user actions.
- **Services (`services/`)** handle business logic and emit events.
- **Listeners (`listeners/`)** listen for events and execute additional logic.
- **Publishers (`publishers/`)** trigger events when users perform actions.
- **Utils (`utils/`)** contain logging functions to record events.
- **Logs (`logs/`)** store event details in a text file.

## 📝 Example Output
```sh
🚀 Event-Driven Application Started
Registering user: Malik
📢 Event Triggered: User Registered - Malik
Logging in user: Malik
📢 Event Triggered: User Logged In - Malik
```

## Features
- **Separation of Concerns** for clean architecture
- **Scalable & Maintainable** project structure
- **Logging system** to track events
- **Reusability & Extensibility** for future enhancements

## Next Steps
- Integrate **database (MongoDB, PostgreSQL)** for persistent storage
- Implement **message queues (RabbitMQ, Kafka)** for distributed events
- Add **unit tests with Jest**

## 📜 License
This project is licensed under the MIT License.

