// import React, { useState, useContext } from "react";
// import TextField from "@mui/material/TextField";
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Autocomplete from "@mui/material/Autocomplete";
// import { GlobalContext } from "./context/GlobalState";

// export const AddTransaction = () => {
//   const [text, setText] = useState("");
//   const [amount, setAmount] = useState(0);
//   const [type, setType] = useState("income"); // State for income/expense type
//   //   const [value, setValue] = React.useState(null);

//   const { addTransaction } = useContext(GlobalContext);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const newTransaction = {
//       id: Math.floor(Math.random() * 100000000),
//       text,
//       amount: type === "income" ? +amount : -amount,
//       date: new Date().toISOString().split("T")[0], // Add date here
//     };

//     addTransaction(newTransaction);

//     setText("");
//     setAmount(0);
//     setType("income"); // Reset to default
//   };

//   return (
//     <>
//       <h3>Add New Item</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-control">
//         {/* <FormControl sx={{ m: 1, minWidth: 120 }}fullWidth> */}
//         <Select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           required
//           fullWidth
//         >
//           <MenuItem value="income">Income</MenuItem>
//           <MenuItem value="expense">Expense</MenuItem>
//         </Select>
//       {/* </FormControl> */}
//           {/* <label htmlFor="type">Type</label> */}
//           {/* <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             required
//           >
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//           </select> */}
//         </div>
//         <div className="form-control">
//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={["Food", "Shopping", "Entertainment", "Travel", "Other"]}
//             getOptionLabel={(option) => option}
//             value={text}
//             //   onChange={(event, newValue) => {
//             //     setValue(newValue);
//             //   }}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter category..."
//             required
//             renderInput={(params) => (
//               <TextField {...params} label="Category" fullWidth />
//             )}
//           />
//           {/* <label htmlFor="text">Category</label>
//           <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter category..." required /> */}
//         </div>
//         <div className="form-control">
//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={["100", "200", "300", "500", "1000", "2000", "5000"]}
//             getOptionLabel={(option) => option}
//             //   value={value}
//             //   onChange={(event, newValue) => {
//             //     setValue(newValue);
//             //   }}
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount..."
//             required
//             renderInput={(params) => (
//               <TextField {...params} label="Amount" fullWidth />
//             )}
//           />
//           {/* <label htmlFor="amount">Amount</label>
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required /> */}
//         </div>
//         <div className="form-control">
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             value={new Date().toISOString().split("T")[0]}
//             disabled
//           />
//         </div>
//         <button className="btn">Add New Item</button>
//       </form>
//     </>
//   );
// };
import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import { GlobalContext } from "./context/GlobalState";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income"); // State for income/expense type
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type === "income" ? +amount : -amount,
      date: selectedDate.toISOString().split("T")[0],
    };

    addTransaction(newTransaction);

    setText("");
    setAmount(0);
    setType("income");
    setSelectedDate(new Date());
  };

  return (
    <>
      <h3>Add New Item</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <FormControl fullWidth>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-control">
          <Autocomplete
            disablePortal
            options={["Food", "Shopping", "Entertainment", "Travel", "Other"]}
            getOptionLabel={(option) => option}
            value={text}
            onChange={(e, newValue) => setText(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Category" fullWidth required />
            )}
          />
        </div>
        <div className="form-control">
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
            fullWidth
            required
          />
        </div>
        <div className="form-control">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </div>
        <button className="btn" type="submit">
          Add New Item
        </button>
      </form>
    </>
  );
};
