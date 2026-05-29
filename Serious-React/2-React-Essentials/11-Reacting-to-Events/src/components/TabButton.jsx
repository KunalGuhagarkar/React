// Using children
export default function TabButton({children, onSelect}) {
  
  // function handleClick() {
  //   console.log("Hello World!");
  // }
  
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

// Alternatives

// export default function TabButton(props) {
//   return (
//     <li>
//       <button>
//         {props.children}
//       </button>
//     </li>
//   );
// }

// Using Attributes
// export default function TabButton({label}) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   )
// }