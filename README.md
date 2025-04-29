# Expense Tracker - Bixpense

An expense tracker web application built with Next.js. This project allows users to track their expenses and manage their finances efficiently.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a [Clerk](https://clerk.dev) account.
- You have a Neon database URL. Sign up at [Neon](https://neon.tech) to get your database URL.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-api-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_DATABASE_URL=<your-neon-database-url>
```

## Getting Started

To get a local copy up and running, follow these simple example steps.

### Installation

1. Clone the repo

```sh
git clone https://github.com/Alansaji2003/expense-tracker.git
```

2. Navigate to the project directory

```sh
cd expense-tracker
```

3. Install NPM packages

```sh
npm install
```

### Running the App

1. Run the development server

```sh
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
