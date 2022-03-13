import React from 'react'
import TodoItem from '../../molecules/todoItem/TodoItem'

const DailyNote = () => {
  return (
    <div className='note-normal'>

      <h3 className='title'> Monday </h3>

      <ul className='list-todos'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>

    </div>
  )
}

export default DailyNote
