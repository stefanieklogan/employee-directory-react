import React from "react";

function TableHtml() {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Moira</td>
            <td>Rose</td>
            <td>Moira@email.com</td>
            <td>407-828-1000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Alexis</td>
            <td>Rose</td>
            <td>Alexis@email.com</td>
            <td>407-828-1000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>David</td>
            <td>Rose</td>
            <td>David@email.com</td>
            <td>407-828-1000</td>
          </tr>
        </tbody>
      </table>
  );
}
export default TableHtml;