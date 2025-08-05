const Profile = ({ user }) => {
  if (!user) return <div>Login to see profile</div>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
