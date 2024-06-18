import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

// this is the big file that calls the other files!!!!!!!!!


const App = () => {
  return (
    <>
    {/* all the lines under are calling the specific file. for example:
    the '<Navbar />' with the import above, its like puting here all the content of the Navbar file */}
    <Navbar /> 
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App