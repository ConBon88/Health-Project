import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import DrugDetails from '../viewsDetails/drugDetails'
import ErrorDetails from '../viewsDetails/errorDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../css_Styles/search.css';
import '../css_Styles/ReportPage.css'


function SearchPage() {
  //state variables
  const { user } = useAuthContext()
  const [drugData, setdrugData] = useState(null)
  const [error, setError] = useState(null)

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputElement = e.target.querySelector('input[name="name"]')
    const searchTerm = inputElement.value

    //fetches data
    const data = await fetchData(searchTerm)

    //check if it was successful
    if(data){
      setdrugData(data)
      setError(null)
    } else{
      setError("No result(s) found")
    }
  }

  const fetchData = async (term) => {
    try {
      //GET request
      const field = "openfda.brand_name"
      const response = await fetch(`https://healthhubbackendapi.onrender.com/api/drugAPI/?field=${field}&term=${term}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })

      //check HTTP response
      if (response.ok){
        const json = await response.json()
        return json
      } else{
        console.log('Failed to fetch data: ' + response.statusText)
      }
      //catch exceptions 
    } catch(error){
      setError('An error occurred: ' + error.message)
    }
    return null
  }
  return (
    <>
    <div>

      <div className='title'>
       <center><h2>Search for any drug</h2></center> 
      </div>
      
      <form className="searchBox" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search.." name="name" />
        <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
      </form>

      <div className='layout'>
        {drugData && !error ? drugData.map(drugData => (
            <DrugDetails drug={drugData} key={drugData.id} />
          )) : null}
      </div>

      {error ? <ErrorDetails error={error}/> : null}
    </div>
    </>
  )
}

export default SearchPage;