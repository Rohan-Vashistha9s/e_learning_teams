import './App.css';
import LoginSignup from './components/auth/Login';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Home from './components/HomeSection/Home';
import Literature from './components/Literature/Literature';
import BlogDetails from './components/MainNav/Other/BlogDetails';
import Calendar02 from './components/MainNav/Other/Calendar02';
import Calender01 from './components/MainNav/Other/Calender01';
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
          <Route exact path='/Course-Calendar-Create2' element={<Calendar02 />} />
          <Route exact path='/blog-details' element={<BlogDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
