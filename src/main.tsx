import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthProvider from './state/context/AuthContext.tsx';
import PostsProvider from './state/context/PostsContext.tsx';
import TaskProvider from './state/context/TaskContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <PostsProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </PostsProvider>
    </AuthProvider>
  </React.StrictMode>
);
