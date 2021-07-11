import Mytodoimage from "../Images/Mytodoimage.jpg";
import "../Styles/Pages.css";

const HomePage = ()=>{
return (

    <div className="homepage">
        <img class="image-design" src ={Mytodoimage}
        alt="myimage"/>
        <h1> My TodoList App</h1>
        <h3>You can continue exploring!</h3>

    </div>
);




}
export default HomePage;