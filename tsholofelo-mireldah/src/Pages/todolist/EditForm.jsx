import { Form } from "react-bootstrap"
import { TodoContext} from "./TodoContext";
import {useContext, useState} from 'react';


function EditForm  ({todoEdt}) {

    const id = todoEdt.id;

    const [description, setDescription] = useState(todoEdt.description);
    const [dueDate, setDueDate] = useState(todoEdt.dueDate);
    const [inProgress, setInProgress] = useState(todoEdt.inProgress);
    const [priority, setPriority] = useState(todoEdt.priority);


    const {updateTodo} = useContext(TodoContext);

    const updatedTodo = {id, description, dueDate, inProgress, priority}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodo(id, updatedTodo)
    }



 return   (
     <div>
 <Form onSubmit={handleSubmit}>
				<div class="box_general padding_bottom">				
					<div class="form-group">
						<label>Description</label>
						<input class="form-control" type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>Due date</label>
						<input class="form-control" type="Date" name="dueDate" value={dueDate} onChange={(e)=> setDueDate(e.target.value)} required/>
					</div>
					<div class="form-group">
						<label>In Progress</label>
						<select class="form-control" name="inProgress" id="inProgress" value={inProgress} onChange={(e)=> setInProgress(e.target.value)} required>
                             <option value="InProgress">InProgress</option>
                             <option value="Pending">Pending</option>
                             <option value="Closed">Closed</option>
                             <option value="InCompleted">InCompleted</option>
                        </select>

					</div>
                 <div class="form-group">
						<label>Priority</label>
						<select class="form-control" name="priority" id="priority" value={priority} onChange={(e)=> setPriority(e.target.value)} required>
                             <option value="High">High</option>
                             <option value="Low">Low</option>
                             <option value="Medium">Medium</option>
                             <option value="Hot">Hot</option>
                        </select>					
					</div>

          <div class="form-group">
          <button class="btn_1 medium">Add Item</button>
					</div>

				</div></Form>
     </div>

 )

}
export default EditForm;