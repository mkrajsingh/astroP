import React, { useState } from "react";

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.address1) newErrors.address1 = "Address Line 1 is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip) newErrors.zip = "Zip Code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <input
        type="text"
        placeholder="Address Line 1"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
      />
      {errors.address1 && <p>{errors.address1}</p>}
      <input
        type="text"
        placeholder="Address Line 2"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && <p>{errors.city}</p>}
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      />
      {errors.state && <p>{errors.state}</p>}
      <input
        type="text"
        placeholder="Zip Code"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
      />
      {errors.zip && <p>{errors.zip}</p>}
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
