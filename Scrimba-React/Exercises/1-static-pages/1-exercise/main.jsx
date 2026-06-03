// Challenge: Re-write the first lines of react code we just had.
// You can render anything you want to the screen, doesn't have to be an h1 element

// importing createRoot from react
import {createRoot} from 'react-dom/client';

// getting hold of "root" element
const root = createRoot(document.getElementById("root"));

// rendering h1 Hello, World!
root.render(<h1>Hello, World!</h1>);