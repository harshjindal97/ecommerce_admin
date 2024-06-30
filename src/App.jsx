import { createContext, useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Sidebar from './Components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import CategoryList from './pages/CategoryList/CategoryList';
const MyContext = createContext();
function App() {
  const [count, setCount] = useState(0)
  const values = {
    
  }
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values} >
          <section className='main d-flex'>
            <div className='sidebarWrapper w-[18%]'>
              <Sidebar/>
            </div>
            <div className='contentRight w-[82%]'>
            <Routes>
              <Route path='/' exact={true} element={<Dashboard/>}/>
              <Route path='/catlist' exact={true} element={<CategoryList/>}/>
            </Routes>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
