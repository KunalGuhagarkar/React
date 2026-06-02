import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}

/*
  Installing Tailwind CSS

  Command:
    npm install tailwindcss @tailwindcss/vite
