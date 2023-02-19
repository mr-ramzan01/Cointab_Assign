import React, { useEffect, useState } from "react";

export const UserDetails = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/userdetails?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setData(res.data);
          setTotalUsers(res.totalUsers);
        }
      })
      .catch((err) => {
        console.log(err, "error");
        alert("Something went wrong");
      });
  }, [page]);

  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '30px 0'}}>
      <div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        {data.map((user) => (
          <tr key={user._id}>
            <td>{user.email}</td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.gender}</td>
            <td>{user.dob.age}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div>
        <button disabled={page===1} onClick={() => setPage((prev) => prev-1)}>Prev</button>
        <button disabled={page === totalUsers/10} onClick={() => setPage((prev) => prev+1)}>Next</button>
      </div>
      </div>
    </div>
  );
};
