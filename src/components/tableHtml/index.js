import React from "react";
import TableData from "../TableData"
import API from "../../../utils";

class TableHtml extends Component {
    state = {
        result: {},
        search: ""
    };

componentDidMount() {
    this.searchEmployees()

searchEmployees = query => {
    API.search(query)
    .then(res => this.setState({ result: res.data}))
    .catch(err => console.log(err));
}
}    
}



// function TableHtml() {
//     return (
//         <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">First name</th>
//             <th scope="col">Last name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Moira</td>
//             <td>Rose</td>
//             <td>Moira@email.com</td>
//             <td>407-828-1000</td>
//           </tr>
//         </tbody>
//       </table>
//   );
// }
// export default TableHtml;
