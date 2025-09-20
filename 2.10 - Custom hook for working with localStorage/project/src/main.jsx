import './index.css';
import { createRoot } from 'react-dom/client';
import { TasksProvider } from './context/TasksContext';
import { App } from './App';

createRoot(document.getElementById('root')).render(
  <TasksProvider>
    <App />
  </TasksProvider>
);
