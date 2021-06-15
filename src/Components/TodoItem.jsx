import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const TodoItem = ({
    obj,
    handleChange,
    deleteItem,
    useEditItem,
    index
}) => {
    const { onChange, Edit } = useEditItem()
    return(
        <Draggable
        draggableId={`${obj.id}`}
        index={index}
        >
            {provided => (
                <div className={`TodoItem${obj.done ? ' done' : ''}`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <label htmlFor={obj.id}>
                        <input checked={obj.done} type="checkbox" id={obj.id} name={obj.id} onChange={handleChange}/>
                        <span className=''>
                            <input onChange={onChange} maxlength='90' className='TodoItem__input' id={obj.id} disabled={!obj.isEditing} type='text' value={obj.text} />
                        </span>
                    </label>
                    <div className='TodoItem__btns'>
                        <i className="material-icons">drag_handle</i>
                        <i className="material-icons" onClick={Edit} id={obj.id}>{obj.isEditing ? 'save' : 'edit'}</i>
                        <i onClick={deleteItem} id={obj.id} className='material-icons'>clear</i>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default TodoItem