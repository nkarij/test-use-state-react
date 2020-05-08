import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from './JobFilterProvider'
// import FilterItem from './FilterItem';

const FilterCard = (props) => {

  const [jobs, setJobs] = useContext(FilterContext);
  // const [job, setJob] = useState('');

  const handleCheckboxEvent = (event) => {
    event.preventDefault();
    // THIS IS TRUE ON EVENT FIRING
    console.log(event.target.checked);
    setJobs(prevState => {
      // however, when logging prevState, the object.selected should not be true, since its actually false...
        console.log("prevState", prevState);
        prevState.map(item => {
          if(item.id === event.target.id) {
            item.selected = event.target.checked;
            return item;
          }
          return item;
        })
        return prevState;
    })
  }

  return (
      <div className="filter-card">
        <h4>{props.categoryTitle}</h4>
        <ul>
          {
            jobs.map(job => (
              <li key={job.id}>
                <label htmlFor="jobfilter__checkbox-label">
                  {job.type}
                </label>
                <input 
                  name="jobfilter__checkbox-label" 
                  id={job.id} 
                  type="checkbox" 
                  checked={job.selected}
                  onChange={ handleCheckboxEvent }/>
            </li>
            ))
          }
        </ul>
      </div>
    )
}

export default FilterCard;
