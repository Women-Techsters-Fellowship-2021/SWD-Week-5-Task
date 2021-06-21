import React from 'react';

const List = ({ todos, editItem, completedItem }) => {
    
    //unable to display the items of loggedin user

    return (
        <div>
            {/* each item list */}
            {todos.map((todo) => {
                // access properties using object destructuring
                const { id, title, completed } = todo;
                //const itemSaved = JSON.parse(localStorage.getItem(id))

                return (
                    <article key={id} className="todo-list">
                        {/* p changes when done btn is clicked */}
                        <p className={completed ? 'completed' : ''}>{title}</p>
                        <div className="btn-container">
                            <button type="button"
                                    className="edit-btn"
                                    onClick={() => editItem(id)}>
                                Edit
                            </button>
                            
                            <button type="button"
                                    className="done-btn"
                                    onClick={() =>completedItem(id)}>
                                        {/* toggle between done and not done text */}
                                    {completed ? 'done' : 'not done'}
                            </button>  
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default List;