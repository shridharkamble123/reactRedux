import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from './redux/actionTypes'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken")
  useSelector
  const dispatch=useDispatch()
  useEffect(()=>{
  },[query]);

  //Search button handler
  const searchHandler = (e) => {
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <h2>Recipe App</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "80px", height: "50px" }}
          type="submit"
          onClick={searchHandler}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default App;
