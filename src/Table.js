import React, { useState, useEffect } from "react";
import { View } from "./component/View";

const getDatafromStorage = () => {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const UserTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table style={{ padding: "20px", margin: "10px" }} class=" text-center">
      <caption class="alert alert-info text-center">
        (Click on the headers to sort.)
      </caption>
      <thead>
        <tr style={{ padding: "20px", margin: "10px" }}>
          <th style={{ padding: "20px" }}>
            <button
              type="button"
              onClick={() => requestSort("FirstName")}
              className={getClassNamesFor("FirstName")}
            >
              Name
            </button>
          </th>
          <th style={{ padding: "20px" }}>
            <button
              type="button"
              onClick={() => requestSort("Gender")}
              className={getClassNamesFor("Gender")}
            >
              Gender
            </button>
          </th>
          <th style={{ padding: "20px" }}>
            <button
              type="button"
              onClick={() => requestSort("DateOfBirth")}
              className={getClassNamesFor("DateOfBirth")}
            >
              DateOfBirth
            </button>
          </th>
          <th style={{ padding: "20px" }}>
            <button
              type="button"
              onClick={() => requestSort("Email")}
              className={getClassNamesFor("Email")}
            >
              Email
            </button>
          </th>
          <th style={{ padding: "20px" }}>
            <button
              type="button"
              onClick={() => requestSort("Phone")}
              className={getClassNamesFor("Phone")}
            >
              Phone
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td style={{ padding: "10px" }}>
              {item.FirstName + " " + item.LastName}
            </td>
            <td style={{ padding: "10px" }}>{item.Gender}</td>
            <td style={{ padding: "10px" }}>{item.DateOfBirth}</td>
            <td style={{ padding: "10px" }}>{item.Email}</td>
            <td style={{ padding: "10px" }}>{item.Phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Table() {
  const [users, setUser] = useState(getDatafromStorage());

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [City, setCity] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  //form submitting event
  const handleAddUserSubmit = (e) => {
    e.preventDefault();

    //object
    let user = {
      FirstName,
      LastName,
      Gender,
      DateOfBirth,
      City,
      Phone,
      Email,
    };
    setUser([...users, user]);
    setFirstName("");
    setLastName("");
    setGender("");
    setDateOfBirth("");
    setCity("");
    setPhone("");
    setEmail("");
  };

  //saving data to local storage.
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="Table text-center justify-content-center">
      <h4 class="alert alert-info text-center">Users List</h4>
      <p class="text-center">Click on the Table headers to Sort</p>
      <div class="table table-bordered table-striped text-center">
        <div
          class="table-success"
          style={{ marginLeft: "25%", marginBottom: "5%" }}
        >
          <UserTable products={users} />
        </div>
      </div>
    </div>
  );
}
