import React, { useState } from 'react'

export const FilterContext = React.createContext()

export const JobFilterProvider = (props) => {
  const jobData = props.data;
  const [jobs, setJobs] = useState([{ id: '1', type : 'IT', location: '2500', selected: false }])

  return (
    <FilterContext.Provider value={[jobs, setJobs]}>
      {props.children}
    </FilterContext.Provider>
  )
}

