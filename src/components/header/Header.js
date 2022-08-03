import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../stateProvider/StateProvider";
import { auth } from "firebase";
