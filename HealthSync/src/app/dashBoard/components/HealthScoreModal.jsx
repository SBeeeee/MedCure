"use client";
import { useState } from "react";

const HealthScoreModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ AVPU: "", SEX: "", AGE: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-md text-black">
        <h2 className="text-lg font-bold mb-4">Enter Details</h2>
        <label className="block">AVPU:</label>
        <input
          type="text"
          name="AVPU"
          className="border p-2 w-full mb-2"
          onChange={handleInputChange}
        />
        <label className="block">Sex:</label>
        <input
          type="text"
          name="SEX"
          className="border p-2 w-full mb-2"
          onChange={handleInputChange}
        />
        <label className="block">Age:</label>
        <input
          type="number"
          name="AGE"
          className="border p-2 w-full mb-2"
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
      </div>
    </div>
  );
};

export default HealthScoreModal;
