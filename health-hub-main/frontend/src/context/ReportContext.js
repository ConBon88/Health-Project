import { createContext, useReducer } from 'react'

// Create the ReportsContext to be used for providing and consuming reports-related data
export const ReportsContext = createContext()

// Reducer function to handle state changes based on dispatched actions
export const reportsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_REPORTS':
      // Set the reports data in the state when fetching the reports list
      return {
        reports: action.payload
      }
    case 'CREATE_REPORT':
      // Add a new report to the state when creating a report
      return {
        reports: [action.payload, ...state.reports]
      }
    case 'DELETE_REPORT':
      // Remove a report from the state when deleting a report
      return {
        reports: state.reports.filter(s => s._id !== action.payload._id)
      }
    default:
      // If no action type matches, return the current state
      return state
  }
}

// ReportsContextProvider component to wrap the application with the ReportsContext
export const ReportsContextProvider = ({ children }) => {
  // Initialize the state and the dispatch function using the reportsReducer
  const [state, dispatch] = useReducer(reportsReducer, {
    reports: [] // Initial state, indicating that reports data is not loaded yet
  })

  // Provide the ReportsContext with the state and dispatch function to its children
  return (
    <ReportsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ReportsContext.Provider>
  )
}