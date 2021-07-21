import React from "react";
import DropdownBtn from "./Dropdown";

const DotsSvg = () => {
    return (
        <svg
            style={{ paddingRight: "10px" }}
            xmlns='https://www.w3.org/2000/svg'
            width='20'
            height='30'
            viewBox='0 0 8 15'
            fill='none'>
            <circle cx='1.5' cy='1.5' r='1.5' fill='#D6D6D6'></circle>
            <circle cx='6.5' cy='1.5' r='1.5' fill='#D6D6D6'></circle>
            <circle cx='1.5' cy='7.5' r='1.5' fill='#D6D6D6'></circle>
            <circle cx='6.5' cy='7.5' r='1.5' fill='#D6D6D6'></circle>
            <circle cx='1.5' cy='13.5' r='1.5' fill='#D6D6D6'></circle>
            <circle cx='6.5' cy='13.5' r='1.5' fill='#D6D6D6'></circle>
        </svg>
    );
};

const TodoRow = ({ item, updateTodo }) => {
    return (
        <div className='d-flex'>
            <DotsSvg />
            <input
                className='checkbox'
                type='checkbox'
                checked={item.completed}
                onChange={() => updateTodo(item.id)}
            />
            <div
                className={`task-deatils ${
                    item.completed ? "isCompletedTask" : ""
                }`}>
                <h5 className={`${item.completed ? "isCompleted" : ""}`}>
                    {item.title}
                </h5>{" "}
                {!item.completed ? (
                    <>
                        <p className='text-muted'>{item.description}</p>
                        <p>
                            {
                                new Date(item.completeAt)
                                    .toString()
                                    .split("2021")[0]
                            }
                        </p>
                    </>
                ) : (
                    <p className='text-muted'>
                        Task finished on{" "}
                        {new Date(item.finishedOn).toString().split("2021")[0]}
                    </p>
                )}
            </div>
            {!item.completed && <DropdownBtn />}
        </div>
    );
};

export default TodoRow;
