import React from "react";
import "./EntryList.css";

function EntryList() {
  return (
    <div className="entry-list-container">
      <h1>Total Entry List</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Amount</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EntryList;
