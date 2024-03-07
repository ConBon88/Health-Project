import React, { useEffect, useState } from 'react'
import { useReportsContext } from '../hooks/useContext'
import { useAuthContext } from '../hooks/useAuthContext'
import ReportDetails from '../viewsDetails/reportDetails';
import ErrorDetails from '../viewsDetails/errorDetails';
import '../css_Styles/ReportPage.css'

function ReportPage(){
    const { user } = useAuthContext()
    const {reports, dispatch} = useReportsContext()
    const [error, setError] = useState(null)

    useEffect(() => { 
        
        // Function to fetch reports from the server
        const fetchReports = async () => {
            const response = await fetch(`https://healthhubbackendapi.onrender.com/api/reports/get/${user.id}?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                }
            })

          const json = await response.json()
    
          // If the request is successful, update the reports state
          if (response.ok) {
            dispatch({type: 'SET_REPORTS', payload: json})
            console.log('updated')
            setError(null)
          } else {
            setError("No report(s) found")
          }
        }
        
    
        // Fetch reports only if a user is logged in
        if (user) {
            fetchReports()
        } 
    
      }, [dispatch, user])
        

    return (
        <>
        <div>
            <div className='title'>
                <center><h2>Your Reports</h2></center>
            </div> <br></br>
            
            <div className='layout'>
                {reports && !error ? reports.map(reportData =>(
                    <ReportDetails report={reportData} key={reportData._id} />
                )) : null}
            </div>
            

            {error ? <ErrorDetails error={error}/> : null}
        </div>
        </>
    )
}

export default ReportPage;