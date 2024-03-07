import { useAuthContext } from './useAuthContext'

// Custom hook to handle user logout
export const useLogout = () => {
  // Access the auth context dispatch function to update the authentication state
  const { dispatch } = useAuthContext()

  // Function to perform user logout
  const logout = () => {
    // Remove user data from local storage
    localStorage.removeItem('user')

    // Dispatch a logout action to update the auth context
    dispatch({ type: 'LOGOUT' })
  }

  // Return the logout function to be used in components
  return { logout }
}