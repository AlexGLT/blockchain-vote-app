import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {DApp} from './components/dapp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <DApp />
);
