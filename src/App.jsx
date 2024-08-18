import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import AddJobPage from './pages/AddJobPage'
import { Route,createBrowserRouter
  ,createRoutesFromElements,RouterProvider
 } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import NotFound from './pages/NotFound'
import JobPage, { jobLoader } from './pages/JobPage'
function App() {

  const addJob=async(newJob)=>{
    const res=await fetch ('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newJob)
    })
    return ;
  }
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobPage loader={addJob}/>}/>
      <Route path='*' element={<NotFound/>}/>
   </Route>
)
)
  return (
  <RouterProvider router={router}/>
  )
}

export default App
{/* <Navbar/>
<Hero title="" subTitle=""/>
<HomeCards/>
<JobListings/>
<ViewAllJobs/> */}