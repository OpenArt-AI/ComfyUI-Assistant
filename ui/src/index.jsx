import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ComfyAssistantOverlay from "./ComfyAssistantOverlay";

const rootDomNode = document.createElement('div');
document.body.appendChild(rootDomNode);
const root = ReactDOM.createRoot(rootDomNode);
root.render(<ComfyAssistantOverlay />);
