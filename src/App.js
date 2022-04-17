
import Home from './components/Home';
import {DefaultContext} from './contexts/UsersContext';


function App() {
 
  return (
    <div className="App">
      <DefaultContext>
      <Home />
      </DefaultContext>
      

       
    </div>
  );
}

export default App;
