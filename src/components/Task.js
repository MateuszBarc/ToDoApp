import React from 'react';


const Task = props => {
    const style = {
        color: 'red',
    }

    const { text, date, id, active, important, finishDate } = props.task
    if (active) {

        return (
            <p>
                <strong style={important ? style : null}>{text} </strong>
                - do <span>{date} </span>
                <button onClick={() => props.change(id)}>Zostało Zrobione</button>
                <button onClick={() => props.delete(id)}> X </button>
            </p>
        );
    } else {

        const timeEnd = new Date(finishDate).toLocaleString()
        return (
            <div>  <p>
                <strong>{text} </strong>
                - do <em> (zrobic do {date}) </em>
                <br />
                - potwierdzenie wykonania < span> {timeEnd}</span>

                <button onClick={() => props.delete(id)}> X </button>
            </p></div>
        )
    }
}

export default Task;