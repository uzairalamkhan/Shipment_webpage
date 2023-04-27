import './App.css';
import Chatbot from 'react-simple-chatbot';
import {Segment} from "semantic-ui-react";
import Header from './Header';
import Bod from './Bod';
import Booking from './Booking';
import Track from './Track';
import Footer from './Footer';

function App() {

  const steps=[
    {
      id:'Greet',
      message:"Hello",
      trigger:'Ask Name'
    },
    {
      id:'Ask Name',
      message:'please enter your name',
      trigger:'waiting1'
    },
    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi {previousValue}, Please select your issue',
      trigger:'issues'
    },
    {
      id:'issues',
      options:[
        {value:"React", label:"Shipment Delay",trigger:"React"},
        {value:"React", label:"Wrong Delivery",trigger:"React"},
        {value:"React", label:"Damaged Item",trigger:"React"},
        {value:"React", label:"Refund",trigger:"React"}
      ],
    },
    {
      id:'React',
      message:'Thanks for telling your issue',
      end:true
    }
  ]

  return (
    <div className="App">
      {/* <Bod className='bod'></Bod> */}
      <Header></Header>
      <Segment className='segment' floated="right">
        <Chatbot steps={steps} minimized="true" />
      </Segment>
      <Bod className='bod'></Bod>
      <Booking></Booking>
      <Track></Track>
      <Footer></Footer>

    </div>
  );
}

export default App;
