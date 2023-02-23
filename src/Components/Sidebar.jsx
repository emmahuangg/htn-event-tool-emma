import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export const Sidebar = (props) => {
  const handleSearch = (event) => {
    props.setSearch(event.target.value);
  }

  const handleSort = (event) => { 
    props.setSort(event.target.value);
  }

  const handleFilter = (event) => { 
    const { name, checked } = event.target;
    props.setFilter(prevFilter => { 
      return {
        ...prevFilter,
        [name]: checked
      }
    })
  }
  return (
    <div className='w-full h-fit grid gap-5' >
      {/* Search bar for user to search events by name */}
      <span className='flex gap-5'>
        <input autoComplete="off"  onChange={handleSearch} className='bg-black outline outline-4 outline-blue rounded-xl mt-1 px-3 py-1 text-lg text-white font-bold w-full' type="text" value={props.search} name="search" placeholder='Search events by name'/>
        <button disabled={true}><AiOutlineSearch className='text-3xl text-white font-extrabold rounded-full bg-blue p-1 drop-shadow-lg shadow-pureBlack outline outline-blue outline-4' /></button>
      </span>

      {/* Sorting options for user to sort by alphabetical, start time */}
      <span className='outline outline-pink outline-4 rounded-xl p-4 grid gap-3'>
      <h1 className='text-xl text-pink font-extrabold block'>Sort by:</h1>
      <span className='flex gap-5'>
        <input
          type="radio"
          id="startTime"
          name="sort" 
          value="startTime" 
          checked={props.sort === "startTime"}
          onChange={handleSort}
          className='accent-pink w-5 h-5 my-auto'
        />
        <label htmlFor="startTime" className='my-auto text-pink text-xl font-bold'>Event start time</label>
          <br />
        </span>
        <span className='flex gap-5'>
          <input
            type="radio"
            id="alphabetical"
            name="sort"
            value="alphabetical"
            checked={props.sort === "alphabetical"}
            onChange={handleSort}
            className='accent-pink w-5 h-5 my-auto'
          />
          <label htmlFor="alphabetical" className='my-auto text-pink text-xl font-bold'>Event name</label>
          <br />
        </span>
      </span>

      {/* Filtering options for user to filter by event type */}
      <span className='outline outline-green outline-4 rounded-xl p-4 grid gap-3'>
        <h1 className='text-xl text-green font-extrabold block'>Filter by:</h1>
      <span className='flex gap-5'>
        <input
          type="checkbox"
          id="workshop"
          checked={props.filter.workshop}
          onChange={handleFilter}
            name="workshop"
            className='accent-green w-5 h-5 my-auto'

        />
          <label htmlFor="workshop" className='my-auto text-green text-xl font-bold'>Workshops</label>
        </span>
      <span className='flex gap-5'>
        <input
          type="checkbox"
          id="activity"
          checked={props.filter.activity}
          onChange={handleFilter}
          name="activity"
          className='accent-green w-5 h-5 my-auto'

        />
        <label htmlFor="activity" className='my-auto text-green text-xl font-bold'>Activities</label>
        </span>
        <span className='flex gap-5'>
          <input
            type="checkbox"
            id="tech_talk"
            checked={props.filter.tech_talk}
            onChange={handleFilter}
            name="tech_talk"
            className='accent-green w-5 h-5 my-auto'

          />
          <label htmlFor="tech_talk" className='my-auto text-green text-xl font-bold'>Tech talks</label>
        </span>

    </span>

    </div>
  )
}

export default Sidebar;