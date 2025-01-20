import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    },
    
  },
  daisyui: {
    themes: [
      {
      mytheme: {
        "primary": "#F26419",
          
        "secondary": "#4A9F45",
                  
        "accent": "#00ff00",
                  
        "neutral": "#2D2D2D",
                  
        "base-100": "#f9f7f4",
                  
        "info": "#0000ff",
                  
        "success": "#00ff00",
                  
        "warning": "#00ff00",
          
      "error": "#ff0000",
      }
    }
    ]
  },
  plugins: [require('daisyui')],
};
export default config;
