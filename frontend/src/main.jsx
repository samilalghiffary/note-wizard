import React from 'react';
import './styles/index.css';
import App from './routes/App';
import ReactDOM from 'react-dom/client';
import { NotesProvider } from './utils/context/Notes';
import { TokenProvider } from './utils/context/Token';
import { ThemeProvider } from './utils/context/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TokenProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </TokenProvider>
    </ThemeProvider>
  </React.StrictMode>
);
