/* 
  To include prop-types
    Command:
      npm i prop-types
*/
// import
import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student-container">
      <p>Name: {props.name}</p> {/* Output: Name: Sample_Name */}
      <p>Age: {props.age}</p> {/* Output: Age: 22 */}
      <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
      {/* Output: Yes/No (depends on true or false) */}
    </div>
  );
}
// PropTypes
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
