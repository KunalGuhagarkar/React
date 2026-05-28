// Using children

export default function TabButton({children}) {
  return (
    <li>
      <button>{children}</button>
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
export default function TabButton({label}) {
  return (
    <li>
      <button>{label}</button>
    </li>
  )
}