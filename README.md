
# v0
v0 is a simple game project.

## Running the Project

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of the project and add the necessary environment variables. See `.env.example` for reference.

## Available Scripts

- `npm run dev`: Starts the development server for the Next.js app.
- `npm run build`: Builds the Next.js app for production.
- `npm run start`: Starts the production server for the Next.js app.
- `npm run lint`: Lints the code.
- `npm run ws`: Starts the WebSocket server.
- `npm run test-ws`: Runs a test script for the WebSocket server.

## Production

To run the project in a production-like environment, you will need to run both the Next.js app and the WebSocket server.

1. **Build the Next.js app:**
   ```bash
   npm run build
   ```
2. **Start the Next.js app:**
   ```bash
   npm run start
   ```
3. **Start the WebSocket server in a separate terminal:**
   ```bash
   npm run ws
   ```

Make sure your environment variables are configured correctly for the production environment.

# Triggering a new deploy for Railway
