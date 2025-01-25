import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch user data from your local database
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/users/me");
//         setUser(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch user data");
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

  return (
    <div >
      <h2 >User Profile</h2>
      {/* {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )} */}
    </div>
  );
};

export default UserProfile;
