import React, { useState, useEffect } from "react";

const UserDetailsForm = ({ token, user }) => {
  const [formData, setFormData] = useState({
    profession: "",
    designation: "",
    photo: null,
    bio: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill the form with user data
  useEffect(() => {
    if (user) {
      setFormData({
        profession: user.profession || "",
        designation: user.designation || "",
        bio: user.bio || "",
        photo: null, // Photo won't be prefilled since it's a file input
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      user: user.id,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "photo" && formData.photo) {
        formDataToSend.append(key, formData.photo);
      } else if (key !== "photo") {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/update-profile`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Profile updated successfully!");
        console.log("Updated profile:", result);
      } else {
        const error = await response.json();
        alert("Error updating profile: " + error.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">
        Complete Your Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Profession</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="block w-full text-gray-300"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
        >
          {isSubmitting ? "Submitting..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
