//import Sidebar from "./Sidebar";
//import './Sidebar.css';
import './Home.css';
const Home = () => {
    return (
      <div className="home-container">
        <div className="design">
          
            <h1><b>CareCrafter</b></h1>
          
        </div>
        <div className="card-container">
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7QTrSvQNvLguwEU5-0duTQJFPWMuC1wQ4Q&usqp=CAU" alt="Image" className="image" />
            <div className="overlay">
              <p className="text">Our Specialized team of Doctors</p>
            </div>
        </div>
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqwTUdtJjTj55gRQNok0XZi_ThfD-F-mBHw&usqp=CAU" alt="Image" className="image" />
            <div className="overlay">
              <p className="text">Easy Appointment Booking</p>
            </div>
        </div>
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco8qALlWaDUYBgVg0u7qaoCW35cn-k4NTRQ&usqp=CAU" alt="Image" className="image" />
            <div className="overlay">
              <p className="text">Track your appointments</p>
            </div>
        </div>
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLnmlBKPzZyaby61mjOKrZWfPCyEIOqpnuw&usqp=CAU" alt="Image" className="image" />
            <div className="overlay">
              <p className="text">Easy to Connect with</p>
            </div>
          </div>
        </div>
      </div>

       
    );
  };

export default Home;