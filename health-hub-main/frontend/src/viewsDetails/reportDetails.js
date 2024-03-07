import '../css_Styles/drugStyles.css'
import { useReportsContext } from '../hooks/useContext'
import { useAuthContext } from '../hooks/useAuthContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { faTrashCan  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ReportDetails({ report }) {

  const { dispatch } = useReportsContext()
  const { user } = useAuthContext()

  // Function to handle the delete button click
  const handleClick = async () => {
    // Check if the user is logged in
    if (!user) {
      return
    }

    // Delete the report using the API
    const response = await fetch('https://healthhubbackendapi.onrender.com/api/reports/' + report._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-type': 'application/json'
      }
    })

    // If the report is successfully deleted, dispatch a delete action to update the context
    if (response.ok) {
      dispatch({ type: 'DELETE_REPORT', payload: {_id: report._id} })
      console.log('passed')
    }
  }
    return (
      //report layout of information
      <div className="layout-details">
        <div className="drug-info">
          <div className="info">
            <p><strong>Title:</strong> {report.title}</p>
            <p><strong>Doctor:</strong> {report.doctorName}</p>
            <p><strong>Patient:</strong> {report.patientEmail}</p>
            <p><strong>Date Created:</strong> {formatDistanceToNow(new Date(report.dateCreated), {addSuffix: true})}</p>
            <p><strong>Description:</strong> {report.description}</p>
            <span onClick={handleClick}><FontAwesomeIcon icon={faTrashCan} /></span>
          </div>
        </div>
      </div>
    )
  }

export default ReportDetails