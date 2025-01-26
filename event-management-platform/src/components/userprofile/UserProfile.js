import React, { useEffect, useState } from "react";
import { fetchUser } from "../../services/userProfileService";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetchUser();
        setUser(user);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
      {}
    };
    getUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.user.username}</p>
          <p><strong>Email:</strong> {user.user.email}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserProfile;
