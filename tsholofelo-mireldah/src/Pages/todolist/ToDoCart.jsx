import { Redirect } from 'react-router';
import { TodoContext } from './TodoContext';
import Footer from '../navbar/Footer';
import SideBar from '../navbar/SideBar';
import {  Modal,Button, Alert} from 'react-bootstrap';
import {React,useContext, useEffect, useState } from 'react';
import ToDo from './GetToDo';
import CreateForm from './CreateForm';
import Pagination from './Pagination';

function ToDoCart({auth}) {

  const {sortedTodos} = useContext(TodoContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(2)

  const handleShowAlert = () => {
      setShowAlert(true);
      setTimeout(()=> {
          setShowAlert(false);
      }, 2000)
  }

  useEffect(() => {
      handleClose();

      return () => {
          handleShowAlert();
      }
  }, [sortedTodos])

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = sortedTodos.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPagesNum = Math.ceil(sortedTodos.length / todosPerPage);

     if(!auth){
        return <Redirect to="/Login"/>
     }
        return ( 
                <div>
                    <div class="content-wrapper">
                        <SideBar/>
            <div class="container-fluid">
                   <ol class="breadcrumb">
        `               <li class="breadcrumb-item">
                         <a href="./dashboard">Dashboard</a>
                         </li>
                           <li class="breadcrumb-item active">Todo</li>
                   </ol>
                 
		<div class="row">
      
		<div className="table-title">
        <div className="row" >          
            <div className="col-sm-8">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add ToDo</span></Button>					
            </div>
        </div>
    </div>
			
          
    <Alert show={showAlert} variant="success">
        ToDo List Updated Succefully!
    </Alert><br></br>
    <br></br>
    <div class="col-md-12">
				<div class="box_general padding_bottom">
				
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Completed</th>
                  <th>Actions</th>
                </tr>
              </thead>            
              <tbody>
              {
                  currentTodos.map(todol => (
                      <tr key={todol.id}>
                       <ToDo todo={todol}/>
                    </tr>
                  ))  
                }              
              </tbody>
            </table>
        
            <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentTodos ={currentTodos}
                sortedTodos = {sortedTodos} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add ToDoList
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreateForm/>
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
          </div>
      
				</div>
			</div>
		</div>
       
        
       
         <Footer />
         </div>
         </div>
         </div>
         );
}

 
export default ToDoCart;
