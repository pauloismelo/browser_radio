import styles from './App.css'
import Sidebar from './pages/Sidebar';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <div className="row">
          <div className="col-4 text-center">
              <Sidebar/>
          </div>
          <div className="col-8">
              <View/>
          </div>
      </div>
    </div>
  );
}

export default App;
