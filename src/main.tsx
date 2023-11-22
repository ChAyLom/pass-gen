import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles.css';
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
