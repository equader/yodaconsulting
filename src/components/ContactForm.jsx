import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    problemDescription: "",
    services: {
      "Technology Consulting": false,
      "Core Banking Consulting": false,
      "Business Partnerships": false,
    },
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    location: false,
    problemDescription: false,
    services: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "location",
      "problemDescription",
    ];
    const allFilled = requiredFields.every((field) => formData[field].trim() !== "");
    const hasService = Object.values(formData.services).some((v) => v);
    return allFilled && hasService;
  };

  const getValidationClass = (field) => {
    return `w-full rounded border px-3 py-2 ${
      submitted && touched[field] && !formData[field].trim()
        ? "border-red-500"
        : "border-gray-300"
    }`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    const web3FormData = new FormData();
    web3FormData.append("name", `${formData.firstName} ${formData.lastName}`);
    web3FormData.append("email", formData.email);
    web3FormData.append("phone", formData.phoneNumber);
    web3FormData.append("location", formData.location);
    web3FormData.append("message", formData.problemDescription);
    web3FormData.append(
      "services",
      Object.entries(formData.services)
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(", ")
    );
    web3FormData.append("apikey", process.env.REACT_APP_WEB3FORMS_API_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });
      const result = await response.json();

      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          location: "",
          problemDescription: "",
          services: {
            "Technology Consulting": false,
            "Core Banking Consulting": false,
            "Business Partnerships": false,
          },
        });
        setTouched({});
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        console.log("Form submission error:", result);
      }
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(false);
    }
  };

  return (
    <div id="contact" className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-emerald sm:text-5xl">
          Let's Get in Touch
        </h2>
        <p className="mt-4 text-gray-600">
  Want to chat? Connect with me on{" "}
  <a href="https://www.linkedin.com/in/anupmahimkar" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
    LinkedIn
  </a>{" "}
  or email{" "}
  <a href="mailto:anup.mahimkar@yodaconsulting.com" className="text-blue-600 underline">
    anup.mahimkar@yodaconsulting.com
  </a>.
  <br></br>  
  <br></br> 
  Prefer a callback? Leave your details below and I’ll be in touch.
</p>

      </div>
      

      <form
        onSubmit={handleSubmit}
        noValidate
        className="block rounded-xl border bg-white p-8 transition hover:border-green-500/10 hover:shadow-lg hover:shadow-green-500/10 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={getValidationClass("firstName")}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={getValidationClass("lastName")}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={getValidationClass("email")}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={getValidationClass("phoneNumber")}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            name="location"
            type="text"
            value={formData.location}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getValidationClass("location")}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">What do you need help with?</label>
          <textarea
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleInputChange}
            onBlur={handleBlur}
            rows={4}
            className={getValidationClass("problemDescription")}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Services (check all that apply):</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Object.keys(formData.services).map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={service}
                  checked={formData.services[service]}
                  onChange={handleInputChange}
                  onBlur={() =>
                    setTouched((prev) => ({
                      ...prev,
                      services: true,
                    }))
                  }
                  className="h-4 w-4"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
          {submitted && !Object.values(formData.services).some((v) => v) && (
            <p className="text-sm text-red-600 mt-2">
              Please select at least one service.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`w-full py-3 flex justify-center items-center gap-2 rounded text-white font-semibold transition ${
            isSubmitted
              ? "bg-green-500"
              : "bg-emerald hover:bg-emerald-dark"
          }`}
        >
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          )}
          {isSubmitting
            ? "Sending..."
            : isSubmitted
            ? "Form sent!"
            : "Submit Inquiry"}
        </button>

        {isSubmitted && (
          <p className="text-green-600 text-center mt-2 font-medium">
            Thanks for reaching out. We'll get back to you shortly!
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
