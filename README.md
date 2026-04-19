# Vite React TypeScript Starter

A robust starter template for modern React applications, pre-configured with TypeScript, Tailwind CSS, and a suite of powerful libraries for animations, content rendering, and backend integration via Supabase.

## Features

*   **Supabase Integration**: Seamless backend services for authentication, database, and storage.
*   **Dynamic Animations**: Powered by Framer Motion for smooth UI transitions.
*   **Markdown Rendering**: Built-in support for rendering Markdown content with syntax highlighting via `react-markdown` and `remark-gfm`.
*   **Interactive UI Components**: Includes `react-compare-slider` for image/content comparisons and `lucide-react` for iconography.
*   **Tailwind CSS**: Utility-first styling for rapid and responsive development.
*   **Vite**: Optimized development server and lightning-fast build tooling.

## Tech Stack

*   **Framework**: React 18
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS, Autoprefixer
*   **Backend/DB**: Supabase
*   **Animations**: Framer Motion
*   **Utilities**: Lucide React, Mermaid, React Markdown

## Architecture

This project follows a standard Vite + React Single Page Application (SPA) structure. It is designed for scalability by modularizing UI components and leveraging the Supabase client for data fetching and state management, eliminating the need for a custom REST API layer.

## Installation

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## API Documentation

This project utilizes the **Supabase JavaScript Client SDK** to interact with backend resources. No custom REST API endpoints are exposed; instead, you interact directly with your Supabase project.

**Common Patterns:**
*   **Authentication**: `supabase.auth.signInWithPassword(...)`
*   **Data Fetching**: `supabase.from('table_name').select('*')`
*   **Data Insertion**: `supabase.from('table_name').insert({...})`

For detailed documentation on how to interact with your data, refer to the [Supabase Client Documentation](https://supabase.com/docs/reference/javascript/introduction).

## Project Structure

```text
src/
├── components/    # Reusable UI components
├── assets/        # Static files/images
├── hooks/         # Custom React hooks
├── lib/           # Third-party configurations
├── types/         # TypeScript definitions
└── App.tsx        # Main application entry
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.