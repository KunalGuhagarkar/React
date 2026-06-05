/* 
Challenge (Part 1):
  - Create a custom "Page" Component
  - It should return an ordered list with the reasons why you're excited to be learning React :)
  - Render the Page Component.
*/

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <ol>
      <li>Getting a Job</li>
      <li>Earning Money</li>
      <li>Getting Independent</li>
    </ol>
  );
}

root.render(<Page />);