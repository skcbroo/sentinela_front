/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F5871",       // azul profundo (marca)
        primarydark: "#1D3557",   // azul mais escuro
        accent: "#2B6CB0",        // para CTAs/botões
        success: "#3C6E71",       // “ok”, confiança/cuidado
        alert: "#DAA520",         // atenção/escalas
        textmain: "#2D3748",      // cinza-escuro para textos
        fog: "#F7FAFC",           // fundo claro
      },
    },
  },
  plugins: [],
};
