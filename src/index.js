import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom'; // Move this import statement to the top
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  
    <Provider store={store}>
      <ColorModeScript />
      <App />
    </Provider>
  
);

serviceWorker.unregister();
reportWebVitals();
