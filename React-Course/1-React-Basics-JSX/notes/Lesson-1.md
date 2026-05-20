![alt text](image.png)

[React_Cheatsheet_Zero_To_Mastery_V1.02.pdf](attachment:3567a192-5182-4dc4-a8c3-44b8c5411836:React_Cheatsheet_Zero_To_Mastery_V1.02.pdf)

## Lesson 1:

### What is React?

React is an external library that helps create websites easier.

What is External Library?

1. Code that is outside our computer.
2. Code that someone else wrote.

React is an External Library

1. It’s a bunch of code that is outside our computer.
2. We can load this code on our website, and use it.

React can be used in different places:

1. Websites
2. Mobile Apps

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

React = shared features

```html
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

ReactDOM = features specific to websites

Using React to create Websites:

= load React & ReactDOM

Using React to create mobile apps:

= load React & ReactNative

### What is Babel?

Babel = JavaScript Compiler, translates other languages into JavaScript

### What is JSX?

JSX = JavaScript XML

same as JavaScript, but we can directly write HTML in our JavaScript code.


React CDN

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Local Code:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Root</title>
  </head>
  <body>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <div id="root"></div>
    
    <script type="text/babel">
      const root = document.getElementById("root");
      ReactDOM.createRoot(root).render(<h1>Hello From React</h1>);
    </script>
  </body>
</html>
```