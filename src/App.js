import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Main/About';
import Appointment from './components/Main/Appointment';
import ContactUs from './components/Main/ContactUs';
import Home from './components/Main/Home';
import Login from './components/Main/Login';
import NotFound from './components/Main/NotFound';
import Reviews from './components/Main/Reviews';
import Header from './components/Shared/Header/Header';

function App() {
	return (
		<div className="App">
			<Header></Header>

			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route path='/appointment' element={<Appointment></Appointment>}></Route>
				<Route path='/reviews' element={<Reviews></Reviews>}></Route>
				<Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='*' element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	);
}

export default App;
