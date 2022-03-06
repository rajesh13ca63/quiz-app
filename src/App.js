import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import QuizDashboard from './components/QuizDashboard';
import HeaderComponent from './components/headercomponents/HeaderComponent';

function App() {
  return (
    <div className="container-fluid">
      <div>
		  <HeaderComponent/>
      </div>
	  <QuizDashboard />
    </div>
  );
}

export default App;
