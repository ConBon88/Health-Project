
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    background: 'white'
  },
  header: {
    borderBottom: '2px solid #f2f2f2',
    paddingBottom: '10px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  item: {
    marginBottom: '10px'
  },
  label: {
    fontWeight: 'bold'
  }
};

function Profile(user) {
  return (
    <div className="profile-container">
      <div style={styles.container}>
      <div style={styles.header}>
        <h2>User Profile</h2>
      </div>
      <div style={styles.item}>
        <div style={styles.label}>First Name:</div> {user.user.fName}
      </div>
      <div style={styles.item}>
        <div style={styles.label}>Surname:</div> {user.user.surname}
      </div>
      <div style={styles.item}>
        <div style={styles.label}>Date of Birth:</div> {user.user.dob}
      </div>
      <div style={styles.item}>
        <div style={styles.label}>Doctor:</div> {user.user.doctor ? 'Yes' : 'No'}
      </div>
      <div style={styles.item}>
        <div style={styles.label}>Email:</div> {user.user.email}
      </div>
      <div style={styles.item}>
        <div style={styles.label}>Phone:</div> {user.user.phone}
      </div>
    </div>
    </div>
  );
}

export default Profile;
