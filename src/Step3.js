import React from "react";

const Step3 = ({ prevStep, formData }) => {
  const handleSubmit = () => {
    alert("Form submitted successfully!");
    // Here you would normally handle the form submission to a server
  };

  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <div>
        <h4>Personal Information</h4>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>
      <div>
        <h4>Address Information</h4>
        <p>Address Line 1: {formData.address1}</p>
        <p>Address Line 2: {formData.address2}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip Code: {formData.zip}</p>
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;

// +++++++++++++ check  +++++++++++++++++++

const submitData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        // Simulate success with 80% chance
        resolve("Success");
      } else {
        reject("Error submitting data");
      }
    }, 1000);
  });
};
