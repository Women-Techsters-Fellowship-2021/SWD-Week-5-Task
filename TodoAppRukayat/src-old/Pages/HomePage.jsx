import Todolist from "../Images/Todolist.jpg";
import "../Styles/Pages.css";

const HomePage = ()=>{
return (

    <div className="homepage">
        <img src ={Todolist}
        alt="todolist Pic"/>
        <h1>Welcome to My TodoList App</h1>
        <h3>Use the NavBar to Navigate your Way!!!</h3>

    </div>
);




}
export default HomePage;