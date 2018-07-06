import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import TodoList from "./TodoList"
import {Router, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
        <BrowserRouter>
            <TodoList />
        </BrowserRouter>
        // <div> <TodoList /> </div>
    ,
    document.querySelector("#container"));
