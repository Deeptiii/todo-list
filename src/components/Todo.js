import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { data } from "../data";
import "./Todo.css";
import TodoRow from "./TodoRow";

const Todo = () => {
    const [completed, setCompleted] = useState(
        data.filter((item) => {
            if (item.completed) {
                return item;
            }
        })
    );
    const [incomplete, setIncomplete] = useState(
        data
            .filter((item) => {
                if (!item.completed) {
                    return item;
                }
            })
            .sort(
                (a, b) =>
                    new Date(...b.finishedOn.split("/").reverse()) -
                    new Date(...a.finishedOn.split("/").reverse())
            )
    );

    const updateTodo = (id) => {
        let a = completed.find((item) => item.id === id);
        if (a) {
            a.completed = false;
            a.finishedOn = "";
            let comp = completed.filter((item) => item.id !== id);
            let incomp = [...incomplete, a];
            setCompleted(comp);
            setIncomplete(incomp);
        } else {
            a = incomplete.find((item) => item.id === id);
            a.completed = true;
            a.finishedOn = new Date().toISOString().split("T")[0];
            let incomp = incomplete.filter((item) => item.id !== id);
            let comp = [...completed, a].sort(
                (a, b) =>
                    new Date(...b.finishedOn.split("/").reverse()) -
                    new Date(...a.finishedOn.split("/").reverse())
            );
            setCompleted(comp);
            setIncomplete(incomp);
        }
    };

    return (
        <div style={{ padding: "10px 30px" }}>
            <div className='d-flex align-items-center justify-content-between header-main'>
                <h3>To Do List</h3>
                <Button variant='primary'>Add to do</Button>{" "}
            </div>
            <div className='search'>
                <input type='search' placeholder='Search To do' />
            </div>

            <div className='container list-container'>
                <h5 className='d-flex align-items-center justify-content-start header'>
                    {" "}
                    To Do
                </h5>
                <hr />
                {incomplete &&
                    incomplete.map((item) => {
                        return (
                            <TodoRow
                                key={item.id}
                                item={item}
                                updateTodo={updateTodo}
                            />
                        );
                    })}
            </div>
            <hr />
            <div className='container list-container'>
                <h5 className='d-flex align-items-center justify-content-start header'>
                    Completed
                </h5>
                <hr />
                {completed &&
                    completed.map((item) => {
                        return (
                            <TodoRow
                                key={item.id}
                                item={item}
                                updateTodo={updateTodo}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Todo;
