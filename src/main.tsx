import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles.css';
import { FocusStyleManager } from '@blueprintjs/core';
import { Provider } from 'react-redux';
import { store } from './store/store';

FocusStyleManager.onlyShowFocusOnTabs();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
