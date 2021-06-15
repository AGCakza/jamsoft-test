import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Loader, TodoAdd, TodoItem } from './Components/Components'
import useState from './hooks/state'


const App = () => {
  const { state, progress, handleChange, deleteItem, useAddItem, useEditItem, changeOrder, resetDone } = useState()

  const onDragEnd = res => {
    if(!res.destination) return;
    if(res.destination.droppableId === res.source.droppableId &&
      res.destination.index === res.source.index) return;
    changeOrder(res)
  }

  return(
    <div className='container'>
      <TodoAdd useAddItem={useAddItem} resetDone={resetDone} />
      <Loader value={progress} />
      <DragDropContext
      onDragEnd={onDragEnd}
      >
        <Droppable droppableId='droppable-0'>
          {provided => (
            <div
              className='TodoList'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {state.map((obj, index) => <TodoItem useEditItem={useEditItem} index={index} handleChange={handleChange} deleteItem={deleteItem} key={obj.id} obj={obj}/>)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default App