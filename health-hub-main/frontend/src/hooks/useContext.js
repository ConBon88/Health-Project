import { ReportsContext } from "../context/ReportContext"
import { useContext } from "react"

export const useReportsContext = () => {
    // Access the ReportsContext using the useContext hook
    const context = useContext(ReportsContext)
  
    // If the context is not available, throw an error indicating that it must be used inside a ReportsContextProvider
    if (!context) {
      throw Error('useReportsContext must be used inside a ReportsContextProvider')
    }
  
    // Return the context
    return context
  }