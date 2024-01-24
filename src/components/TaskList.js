import React from 'react';
import Task from "./Task";

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active === true)
    const done = props.tasks.filter(task => task.active === false)


    const activeTasks = active.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)

    done.sort((a, b) => {
        if (a.finishDate < b.finishDate) {
            return -1;
        }
        if (a.finishDate > b.finishDate) {
            return 1;
        }
        return 0;
    });

    if (active.length >= 2) {
        active.sort((a, b) => {
            if (a.text < b.text) return -1;
            if (a.text > b.text) return 1;
            return 0
        })
    }


    return (
        <>
            <div className="active">
                <h2>Lista Taskow do Zrobienia <em>({active.length})</em></h2>
                {activeTasks.length > 0 ? activeTasks : <p>Brak Zadań do
                    <strong> Wykonania</strong></p>}
            </div>

            <hr />
            <div className="done">
                <h2>Taski Zrobione <em>({done.length})</em></h2>
                {doneTasks.length > 0 ? doneTasks : <p>Żadne zadanie nie zostało
                    <strong> Zrobione</strong></p>}

            </div>
        </>
    );

}

export default TaskList;