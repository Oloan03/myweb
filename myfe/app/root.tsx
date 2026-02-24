import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { ThemeProvider } from "./context/ThemeContext";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
  },
  // Favicon
  { rel: "icon", href: "/favicon.ico", sizes: "any" },
  { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // Ganti dengan domain Anda setelah deploy
  const siteUrl = "https://oloan.vercel.app"; // Contoh, sesuaikan nanti

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="C2hxWh0IUj312oatvyz-iOVvaaqHr1Z6c2emEk50YF8" />

        {/* Primary Meta Tags */}
        <title>Oloan Napitupulu - Data Scientist Portfolio</title>
        <meta name="title" content="Oloan Napitupulu - Data Scientist Portfolio" />
        <meta 
          name="description" 
          content="Portfolio of Oloan Napitupulu, aspiring Data Scientist specializing in Machine Learning, Data Visualization, and AI. Explore my projects and get in touch." 
        />
        <meta name="keywords" content="Data Scientist, Machine Learning, AI, Python, Portfolio, React" />
        <meta name="author" content="Oloan Napitupulu" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Oloan Napitupulu - Data Scientist Portfolio" />
        <meta 
          property="og:description" 
          content="Portfolio of Oloan Napitupulu, aspiring Data Scientist specializing in Machine Learning, Data Visualization, and AI." 
        />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content="Oloan Napitupulu - Data Scientist Portfolio" />
        <meta 
          property="twitter:description" 
          content="Portfolio of Oloan Napitupulu, aspiring Data Scientist specializing in Machine Learning, Data Visualization, and AI." 
        />
        <meta property="twitter:image" content={`${siteUrl}/twitter-image.jpg`} />

        {/*<!-- Google tag (gtag.js) -->*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G29MS0BH54"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G29MS0BH54');
            `,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}