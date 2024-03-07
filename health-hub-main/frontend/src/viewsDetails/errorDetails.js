
function ErrorDetails({ error }) {
    return (
      //layout for errors
      <div className="error">
          <div className="layout-details">
          <div className="drug-info">
            <div className="info">
              <p><strong>Error:</strong> {error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ErrorDetails;