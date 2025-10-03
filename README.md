# Bisa-Mart

Bisa-Mart is a modern e-commerce web application built with Next.js and TypeScript. It features a complete user authentication system and a clean, responsive user interface.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** Custom-built with React
- **Icons:** [Lucide React](https://lucide.dev/guide/react) & [Heroicons](https://heroicons.com/)
- **State Management:** React Hooks
- **Linting:** [ESLint](https://eslint.org/)

## Project Structure

The project is organized into the following directories:

-   `app/`: Contains the core application logic, including pages and layouts.
    -   `app/profile/`: User profile page.
    -   `app/user-accounts/`: Pages for user authentication (sign in, sign up, forgot password, etc.).
-   `components/`: Reusable React components.
    -   `components/forms/`: Form components for login, signup, etc.
    -   `components/ui/`: Basic UI elements like buttons, inputs, etc.
-   `constants/`: Global constants.
-   `hooks/`: Custom React hooks.
-   `lib/`: Utility functions and libraries.
-   `public/`: Static assets like images and icons.

## Features

-   **User Authentication:**
    -   Sign up with email and password.
    -   Sign in and sign out.
    -   Account verification.
    -   Password reset functionality.
-   **User Profile:** View and manage user profile information.
-   **Responsive Design:** The application is designed to work on all screen sizes.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.