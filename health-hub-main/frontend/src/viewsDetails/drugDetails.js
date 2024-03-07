import '../css_Styles/drugStyles.css'

function drugDetails({ drug }) {
    return (
      //drug layout of queried information
      <div className="layout-details">
        <div className="drug-info">
          <div className="info">
            <p><strong>Brand Name:</strong> {drug.brand_name ? drug.brand_name : 'N/A'}</p>
            <p><strong>Purpose:</strong> {drug.purpose ? drug.purpose : 'N/A'}</p>
            <p><strong>Active Ingerdient(s):</strong> {drug.active_ingredient ? drug.active_ingredient : 'N/A'}</p>
          </div>
        </div>
      </div>
    )
  }

export default drugDetails