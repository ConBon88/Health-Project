import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useReportsContext } from "../hooks/useContext"
import '../css_Styles/ReportPage.css'

function ReportPage_Create(){
    const { user } = useAuthContext()
    const { dispatch } = useReportsContext()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [patientEmail, setPatientEmail] = useState('')
    const [doctorName, setDoctorName] = useState(`${user.fName} ${user.surname}`)
    const [userID, setUserID] = useState(`${user.id}`)
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            return
          }

        const report = {title, description, patientEmail, doctorName, userID}
        console.log(report)
        const response = await fetch('https://healthhubbackendapi.onrender.com/api/reports/create', {
            method: 'POST',
            body: JSON.stringify(report),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`,
              'doctor': `${user.doctor}`
            }
          })
        
        const json = await response.json()

        if (!response.ok) {
            console.log(json.error)
        }

        // If the server response is OK, clear the form inputs and add the new report to the state
        if (response.ok) {
            if(user.email===patientEmail){
                dispatch({ type: 'CREATE_REPORT', payload: json })
            }
            setTitle('')
            setDescription('')
            setPatientEmail('')
            setUserID(`${user.id}`)
            setDoctorName(`${user.fName} ${user.surname}`)
        }

      }

    return (
        <>
        <div>
            <div className='title'>
                <center><h2>Create Report</h2></center> 
            </div>
            <form onSubmit={handleSubmit}>

                <div className="input-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Patient Email:</label>
                    <input
                        type="email"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Description:</label>
                    <input
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button className='reportBtn'>Add Report</button>
            </form>
        </div>
        </>
    )
}

export default ReportPage_Create;