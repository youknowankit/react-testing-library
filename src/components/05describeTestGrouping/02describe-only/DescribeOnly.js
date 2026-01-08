import React from "react";

function DescribeOnly() {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        value="Ankit"
        readOnly
      />
      <br />
    </div>
  );
}

export default DescribeOnly;
