/*
1. React.StrictMode
-------------------
React.StrictMode is a development tool that helps identify potential problems in a React application.
It checks for deprecated APIs, unsafe lifecycle methods, unexpected side effects, and other best-practice issues.
It is used only during development and does not affect the production build.

It is enabled in main.tsx like this:

<React.StrictMode>
  <App />
</React.StrictMode>
*/

/*
2. Controlled vs Uncontrolled Components
----------------------------------------
A controlled component stores its form data in React state and updates it using event handlers like onChange.
An uncontrolled component stores its own state in the DOM, and React accesses it using refs.
Controlled components are preferred because they provide better control and validation.
*/

/*
3. key Prop
-----------
The key prop helps React identify which list items have changed, been added, or removed.
Using the array index as a key is not recommended for dynamic lists because item positions can change,
causing incorrect UI updates.
Instead, use a unique and stable value such as a database ID.
*/

/*
4. Fragments
------------
Fragments (<>...</>) let you group multiple elements without creating an extra DOM node.

The short syntax <>...</> cannot accept props.

If you need to pass a key to a Fragment while rendering a list, use:

<React.Fragment key={item.id}>
  ...
</React.Fragment>
*/

function SelfLearning() {
  return (
    <div>
      <h2>Self Learning Notes</h2>
      <p>Completed all research tasks for Session 1.</p>
    </div>
  )
}

export default SelfLearning