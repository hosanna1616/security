"use client";

import { useState } from "react";

export default function Request() {
  const [formData, setFormData] = useState({
    companyName: "",
    windowsOS: "",
    linuxOS: "",
    contactPerson: "",
    contactPhone: "",
    website: "",
    officeNumber: "",
    contactEmail: "",
    architecture: "",
    jobTitle: "",
    department: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      companyName: "",
      windowsOS: "",
      linuxOS: "",
      contactPerson: "",
      contactPhone: "",
      website: "",
      officeNumber: "",
      contactEmail: "",
      architecture: "",
      jobTitle: "",
      department: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-transparent border border-primary p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.5)] max-w-xl mx-auto space-y-4"
    >
      <h2 className="text-xl font-semibold text-primary text-center">
        Software Request Form
      </h2>

      <input
        required
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="windowsOS"
        value={formData.windowsOS}
        onChange={handleChange}
        placeholder="Windows Operating System"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="linuxOS"
        value={formData.linuxOS}
        onChange={handleChange}
        placeholder="Linux Operating System"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="contactPerson"
        value={formData.contactPerson}
        onChange={handleChange}
        placeholder="Contact Person"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="contactPhone"
        value={formData.contactPhone}
        onChange={handleChange}
        placeholder="Contact Phone"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="Website"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="officeNumber"
        value={formData.officeNumber}
        onChange={handleChange}
        placeholder="Office Number"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="contactEmail"
        value={formData.contactEmail}
        onChange={handleChange}
        placeholder="Contact Email"
        type="email"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <select
        required
        name="architecture"
        value={formData.architecture}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded bg-transparent text-white"
      >
        <option value="">Select Architecture</option>
        <option value="32-bit">32-bit</option>
        <option value="64-bit">64-bit</option>
      </select>

      <input
        required
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <input
        required
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        className="w-full px-4 py-2 border rounded bg-transparent text-white placeholder:text-gray-400"
      />

      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="border border-primary text-primary px-6 py-2 rounded hover:bg-secondary hover:text-white transition shadow-[0_0_10px_rgba(0,255,255,0.6)]"
        >
          Send Request
        </button>

        <button
          type="button"
          onClick={handleCancel}
          className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white transition shadow-[0_0_10px_rgba(255,0,0,0.6)]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
