import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {value: initialTodosList}

  deletetodo = uniqueid => {
    this.setState(eachitem => {
      const result = eachitem.value.filter(each => each.id !== uniqueid)
      return {value: result}
    })
  }

  render() {
    const {value} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="todo-head">Simple Todos</h1>
          <ul className="itemsList">
            {value.map(each => (
              <TodoItem
                key={each.id}
                deletetodo={this.deletetodo}
                id={each.id}
                title={each.title}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
