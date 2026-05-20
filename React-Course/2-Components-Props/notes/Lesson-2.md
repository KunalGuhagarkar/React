## Lesson 2

## Components and Props

### What is a Component?

A Component is a piece of the website

When Building Websites:
1. It's better to split up the website into pieces.
2. So we can work on a small piece of website at a time.

I React the Component must start with a Capital Letter
PascalCase = Each word starts with a capital letter: ChatInput

### Main Idea of React
We can create our own HTML elements.

Example:
```Javascript
function ChatInput() {
  return (
    <>
      <input type="text" placeholder="Enter Your Input" />
      <button>Send</button>
    </>
  );
}

const div = (
  <div>
    {ChatInput()} 
    <ChatInput></ChatInput>
    <ChatInput />  
  </div>
)

ReactDOM.createRoot(root).render(div);
```

### Fragment(<></>)
Allows to group elements together without creating an extra <div>

