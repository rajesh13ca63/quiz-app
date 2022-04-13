import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import QuizDashboard from './components/QuizDashboard';
import HeaderComponent from './components/headercomponents/HeaderComponent';
import { Route, Routes } from 'react-router-dom';
import MovieDashboard from './MovieComponents/MovieDashboard';
import Counter from './components/Counter';
import FilterProducts from './FilterProductsComponent/FilterProducts';
import Pagination from './Pagination/Pagination';

function App() {
  return (
    <div className="container">
      	<div>
		    <HeaderComponent/>
      	</div>
		<div>
			<Routes>
				<Route path='/quiz' element={<QuizDashboard />} />
				<Route path='/movie' element={<MovieDashboard />} />
				<Route path='/counter' element={<Counter/>}/>
				<Route path='/products' element={<FilterProducts />}/>
				<Route path='/pagination' element={<Pagination />} />
			</Routes>
		</div>
    </div>
  );
}

export default App;
