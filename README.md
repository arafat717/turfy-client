# Turfy

Turfy is a football turf booking and community web app. It provides a sports-focused landing page, account flows, booking-related API integrations, and a blog with paginated mock articles.

## Tech stack

- [Next.js](https://nextjs.org/) App Router and React
- TypeScript
- Tailwind CSS
- Redux Toolkit and RTK Query
- React Hook Form
- Radix UI and Lucide icons
- Google OAuth and NextAuth (GitHub provider)

## Requirements

- Node.js 20.9 or newer
- npm
- Access to the API configured by `NEXT_PUBLIC_BASE_URL`
- A Google OAuth client ID for the Google sign-in provider

## Run locally

1. Clone the repository and move into the project directory:

   ```bash
   git clone https://github.com/arafat717/turfy-client.git
   cd turfy-client
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Create a `.env.local` file in the project root and configure the required variables:

   ```env
   NEXT_PUBLIC_BASE_URL=https://your-api-url
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-oauth-client-id
   ```

   Replace the example values with your own environment-specific configuration. `NEXT_PUBLIC_BASE_URL` is the API base URL used by RTK Query. `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is required by the Google OAuth provider.

   GitHub OAuth is only needed if you use the NextAuth GitHub provider. Add the credentials provided by your GitHub OAuth app:

   ```env
   GITHUB_ID=your-github-oauth-client-id
   GITHUB_SECRET=your-github-oauth-client-secret
   ```

   Never commit real credentials or secrets. Local `.env*` files are ignored by Git; `.env.example` can be used for a safe template containing placeholder values only.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

Restart the development server after changing environment variables.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server (run `npm run build` first) |
| `npm run lint` | Run ESLint |

## Main routes

| Route | Description |
| --- | --- |
| `/` | Turfy home page |
| `/blog` | Blog listing with paginated mock posts |
| `/blog/[id]` | Individual blog article |
| `/contact-us` | Contact details and contact form |
| `/login` | Sign-in |
| `/register` | Account registration |
| `/admin/dashboard` | Admin dashboard |
| `/user` | User area |

Blog articles are currently provided by local mock data. The contact form prepares an email in the visitor's email application; it does not submit to a server.

## Project structure

```text
components/       Shared UI and page components
redux/            Redux store and RTK Query API definitions
src/app/          Next.js routes and layouts
src/data/         Local data, including mock blog articles
src/schema/       Form validation schemas
public/           Static assets
```
