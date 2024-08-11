import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthProvider from './state/context/AuthContext.tsx';
import PostsProvider from './state/context/PostsContext.tsx';
import { SelectPostProvider } from './state/context/SelectPostContext.tsx';
import { FormsOpenProvider } from './state/context/FormsOpenContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <PostsProvider>
        <SelectPostProvider>
          <FormsOpenProvider>
            <App />
          </FormsOpenProvider>
        </SelectPostProvider>
      </PostsProvider>
    </AuthProvider>
  </React.StrictMode>
);
