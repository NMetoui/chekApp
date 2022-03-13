import React from "react";
import { Table } from "react-bootstrap";
const UserList = ({ userlists }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userlists.map((list) => (
            <tr>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.username}</td>
              <td>{list.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
