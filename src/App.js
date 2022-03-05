import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import QuizDashboard from './components/QuizDashboard';
import HeaderComponent from './components/headercomponents/HeaderComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <HeaderComponent/>
      </header>
	  <QuizDashboard />
    </div>
  );
}

export default App;
