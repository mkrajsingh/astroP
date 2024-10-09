import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      {step === 0 && (
        <Step1
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 1 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 2 && <Step3 prevStep={prevStep} formData={formData} />}
    </div>
  );
};

export default Form;
