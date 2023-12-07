import React, { useEffect } from "react";
import './Home.css';
import axios from "axios";

function Home() {

    const [users, setUser] = React.useState([]);
    useEffect(() => {
        loadUsers();
    }, [] );

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUser(result.data);
    }


  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-light bg-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-teal mx-2">View</button>
                            <button className="btn btn-outline-teal mx-2">Edit</button>
                            <button className="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
