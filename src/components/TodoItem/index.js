// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {title, deletetodo, id} = this.props

    const clicked = () => {
      deletetodo(id)
    }

    return (
      <li className="title">
        <p className="title-head">{title}</p>
        <button onClick={clicked} type="button" className="btn">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
