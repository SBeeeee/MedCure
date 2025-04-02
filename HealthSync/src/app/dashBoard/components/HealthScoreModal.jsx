"use client";
import { useState } from "react";

const HealthScoreModal = ({ onClose, onSubmit, healthscore,setHealthscore }) => {
  const [formData, setFormData] = useState({ AVPU: "", SEX: "", AGE: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg text-black w-96 text-center">
        {healthscore === null ? (
          <>
            <h2 className="text-lg font-bold mb-4">Enter Details</h2>
            <label className="block text-left">AVPU:</label>
            <input
              type="text"
              name="AVPU"
              className="border p-2 w-full mb-2 rounded"
              onChange={handleInputChange}
            />
            <label className="block text-left">Sex:</label>
            <input
              type="text"
              name="SEX"
              className="border p-2 w-full mb-2 rounded"
              onChange={handleInputChange}
            />
            <label className="block text-left">Age:</label>
            <input
              type="number"
              name="AGE"
              className="border p-2 w-full mb-2 rounded"
              onChange={handleInputChange}
            />
            <div className="flex justify-end mt-3">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="ml-3 bg-gray-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">Health Score</h2>
            <p className="text-3xl font-semibold text-green-600 mb-4">{healthscore}</p>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={()=>{onClose();setHealthscore(null)}}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HealthScoreModal;
