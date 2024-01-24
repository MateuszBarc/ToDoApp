import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import TaskList from './TaskList';


class App extends Component {
  counter = 5
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrac w Wiedzmina 3',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'isc morsowac',
        date: '2019-01-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'zrobic trening k1',
        date: '2019-01-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'zapalic papierosa',
        date: '2019-01-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'sprawdzic plyte Gibbsa',
        date: '2019-01-15',
        important: false,
        active: true,
        finishDate: null,
      },
    ]

  }

  deleteTask = (id) => {
    // console.log("delete elementu o id " + id);
    // const tasks = [...this.state.tasks]
    // const index = tasks.findIndex(task => task.id === id)
    // console.log(index);
    // tasks.splice(index, 1)
    // console.log(tasks);
    // this.setState({
    //   tasks: tasks
    // })
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks: tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w App o id" + id);
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {

    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App" >
        <h1>Aplikacja ToDo</h1>
        <Header add={this.addTask} />

        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
