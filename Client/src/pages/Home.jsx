import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const handleFetchUsers = () => {
    fetch('https://cointab-byhq.onrender.com/fetchUsers')
    .then(res => res.json())
    .then(res => {
      if(res.status === 'success') {
        alert(res.message);
      }
      else {
        alert("Something went wrong");
      }
    })
    .catch(err => {
      console.log(err, 'error');
      alert("Something went wrong");
    })
  }

  const handleDeleteUsers = () => {
    fetch('https://cointab-byhq.onrender.com/deleteUsers', {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === 'success') {
        alert(res.message);
      }
      else {
        alert("Something went wrong");
      }
    })
    .catch(err => {
      console.log(err, 'error');
      alert("Something went wrong");
    })
  }

  const handleUserDetails = () => {
    navigate('/userdetails')
  }

  return (
    <div
      style={{
        border: "1px solid red",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <button
        style={{
          background: "black",
          color: "orange",
          height: "40px",
          border: "none",
          borderRadius: "10px",
          padding: "0 10px",
          cursor: 'pointer'
        }}
        onClick={handleFetchUsers}
      >
        Fetch User
      </button>
      <button
        style={{
          background: "black",
          color: "orange",
          height: "40px",
          border: "none",
          borderRadius: "10px",
          padding: "0 10px",
          cursor: 'pointer'
        }}
        onClick={handleDeleteUsers}
      >
        Delete User
      </button>
      <button
        style={{
          background: "black",
          color: "orange",
          height: "40px",
          border: "none",
          borderRadius: "10px",
          padding: "0 10px",
          cursor: 'pointer'
        }}
        onClick={handleUserDetails}
      >
        User Details
      </button>
    </div>
  );
};
