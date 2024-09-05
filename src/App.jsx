import './App.css';
import LoginSignup from './components/auth/Login';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Home from './components/HomeSection/Home';
import Literature from './components/Literature/Literature';
import Navbar from './components/MainNav/Navbar';
import Calender01 from './components/MainNav/Other/Calender01';
import Checkout from './components/MainNav/Other/Checkout';
import CourseCalender from './components/MainNav/Other/CourseCalender';
import FullViewCalendar from './components/MainNav/Other/FullViewCalendar';
import Search from './components/MainNav/Other/Search';
import Membership from './components/Membership/Membership';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path='/login' element={<LoginSignup />} />
          <Route exact path='/members' element={<Membership />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/literature' element={<Literature />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/course-cal-create-01' element={<Calender01 />} />
          <Route exact path='/checkoutpage' element={<Checkout/>}></Route>
          <Route exact path='//course-calendar' element={<CourseCalender/>}></Route>
          <Route eaxct path='/Course-Full-View' element={<FullViewCalendar/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
