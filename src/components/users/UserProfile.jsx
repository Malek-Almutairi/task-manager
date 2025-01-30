import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = () => {
    alert("Profile updated (mock)!");
  };

  return (
    <div>
      <h2 className="text-xl">User Profile</h2>
      <div className="mb-2">
        <label>Name</label>
        <input
          className="border w-full px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label>Email</label>
        <input
          className="border w-full px-2 py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}
