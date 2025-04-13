# Mock Interview Platform

A comprehensive platform for conducting and participating in mock technical interviews, designed to help users practice their interviewing skills in a realistic environment.

## Overview

This platform enables users to engage in mock interviews with real-time feedback and AI-powered assessment capabilities. Users can practice both as interviewers and interviewees, covering various technical domains including coding challenges, system design discussions, and behavioral questions.

## Features

- **User Authentication**: Secure sign-up and login functionality
- **Interview Scheduling**: Book and manage mock interview sessions
- **Real-time Video/Audio Communication**: Conduct face-to-face interviews
- **Collaborative Coding Environment**: Interactive code editor with syntax highlighting
- **System Design Whiteboard**: Visual tools for system design interviews
- **AI-Powered Assessment**: Automated feedback on interview performance
- **Interview Recording**: Save interviews for future reference and improvement
- **Role Switching**: Practice as both interviewer and interviewee
- **Comprehensive Question Bank**: Access to a wide range of technical interview questions

## Technology Stack

- **Frontend**: React.js, Redux, WebRTC
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Authentication**: JWT
- **Code Editor**: Monaco Editor
- **AI Assessment**: Natural Language Processing APIs

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mock-interview-platform.git
   cd mock-interview-platform
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

```
mock_interview_platform/
├── client/             # Frontend React application
├── server/             # Backend Node.js/Express application
├── shared/             # Shared utilities and types
├── .env                # Environment variables
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All contributors who have helped build and improve this platform
- Open-source libraries and tools that made this project possible