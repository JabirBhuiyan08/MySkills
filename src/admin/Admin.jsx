import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Admin = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    nationality: "",
    passportNumber: "",
    eCertNumber: "",
    finNumber: "",
    graduation: "",
    subject: "",
    date: "",
    passportImglink: "", // passport Image link field
    certificateImglink: "", // certificate Image link field
    signetureImglink: "", // signeture Image link field
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
   
  };

  // Handle form submission
  const imgHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPublic.post("/myskills", formData);

      if (response.status === 200 || response.status === 201) {
        alert("Data submitted successfully!");
        console.log("Server Response:", response.data);
      } else {
        alert("Failed to submit data. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting the data.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-32 mb-32 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
      <form onSubmit={imgHandleSubmit} className="space-y-4">
        {/* Personal Information Section */}
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Name: Sabbir Md Nayan Khan"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="dob"
            placeholder="Date of Birth: 28 Feb 2001"
            value={formData.dob}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender: Male"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="nationality"
            placeholder="Nationality: Bangladeshi"
            value={formData.nationality}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </div>

        {/* Document Details Section */}
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Document Details</h3>
          <input
            type="text"
            name="passportNumber"
            placeholder="Passport Number: A02642315"
            value={formData.passportNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="eCertNumber"
            placeholder="e-Cert serial no."
            value={formData.eCertNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="finNumber"
            placeholder="Fin Number: M3062691L"
            value={formData.finNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="graduation"
            placeholder="Graduation: Skill in Singapore"
            value={formData.graduation}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject: Timber Formwork"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="date"
            placeholder="Date: 26 Dec 2023"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="passportImglink"
            placeholder="Passport Image Link"
            value={formData.passportImglink}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="certificateImglink"
            placeholder="certificate Image Link"
            value={formData.certificateImglink}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="text"
            name="signetureImglink"
            placeholder="Signeture Image Link"
            value={formData.signetureImglink}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
