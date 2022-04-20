import React, { useState } from "react";

function Form() {
  let [userName, setUserName] = useState("");
  let [userDept, setUserDept] = useState("");
  let [userRating, setUserRating] = useState("");
  let [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    data.push({
      name: userName,
      dept: userDept,
      rating: userRating
    });
    setData(data);
    setUserName("");
    setUserDept("");
    setUserRating("");
  };

  return (
    <>
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form onSubmit={submitHandler}>
          <label className="label-text" htmlFor="name">
            Name:
          </label>
          <input
            className="blanks"
            type="text"
            id="name"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <br />
          <label className="label-text" htmlFor="department">
            Department:
          </label>
          <input
            className="blanks"
            type="text"
            value={userDept}
            name="department"
            id="department"
            onChange={(e) => setUserDept(e.target.value)}
          />
          <br />
          <br />
          <br />
          <label className="label-text" htmlFor="rating">
            Rating :
          </label>
          <input
            className="blanks"
            type="number"
            value={userRating}
            onChange={(e) => setUserRating(e.target.value)}
          />
          <br />
          <br />
          <br />
          <br />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="user-data">
        <div className="user-info-container">
          {data.map((info, index) => {
            return (
              <div key={index} className="user-info">
                Name: {info.name} | Department: {info.dept} | Rating:{" "}
                {info.rating}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Form;