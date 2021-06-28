import React from 'react';

function IdCard(props) {
  let lastName = props.lastName;
  let firstName = props.firstName;
  let gender = props.gender;
  let height = props.height;
  let birth = props.birth;
  let picture = props.picture;
  return (
    <div className="idCard">
      <div>
        <img src={picture} alt="student" />
      </div>
      <ul>
        <li>
          <strong>First name:</strong> {firstName}
        </li>
        <li>
          <strong>Last name:</strong> {lastName}
        </li>
        <li>
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Height:</strong> {height}
        </li>
        <li>
          <strong>Birth:</strong> {birth.toDateString()}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
