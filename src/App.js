import styles from './App.css'
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="row">
          <div className="col-3 text-center">
              <Sidebar/>
          </div>
          <div className="col-9">
              <h2>show</h2>
          </div>
      </div>
    </div>
  );
}

export default App;
