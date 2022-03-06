import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import QuizDashboard from './components/QuizDashboard';
import HeaderComponent from './components/headercomponents/HeaderComponent';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <div>
		  <HeaderComponent/>
      </div>
	  <Routes>
		  <Route path='/quiz' element={<QuizDashboard />} />
	  </Routes>
    </div>
  );
}

export default App;
