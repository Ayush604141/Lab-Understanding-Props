import './App.css';
import elephant from "./images/elephant.jpeg";
import AddImage from './components/dataComponents';

const App = () => {
  return (
    <div className='gridElement'>
      <AddImage URL={elephant}/>
      <AddImage URL={elephant}/>
      <AddImage URL={elephant}/>
      <AddImage URL={elephant}/>
    </div>
  )
} 

export default App;
