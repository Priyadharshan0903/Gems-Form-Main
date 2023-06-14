import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [services, setServices] = useState([]);
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (e) => {
    const selectedService = e.target.value;
    if (e.target.checked) {
      setServices([...services, selectedService]);
    } else {
      setServices(services.filter((service) => service !== selectedService));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Please enter a valid email";
    }

    if (!phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(phone)) {
      validationErrors.phone = "Please enter a valid phone number";
    }

    if (!description) {
      validationErrors.description = "Description is required";
    }

    if (services.length === 0) {
      validationErrors.services = "At least one service must be selected";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear validation errors
    setErrors({});

    const formData = {
      name: name,
      email: email,
      phone: phone,
      description: description,
      services: services,
    };

    try {
      console.log(formData);
      const response = await fetch("http://formz.in/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");

        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setServices([]);
      } else {
        console.error("Error submitting form:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPhoneNumber = (value) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(value);
  };

  return (
    <div className="flex flex-col justify-center items-start text-start px-7 py-7 gap-4 md:px-0 md:py-0 md:gap-6 lg:min-py-3 lg:min-w-[500px] ">
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="text-3xl md:text-6xl font-normal flex flex-col">
          Lets Level up your
          <span>brand, together</span>
        </h1>
        <p className="text-gray-400 text-sm font-medium md:text-lg">
          You can reach us anytime via xyz@gmail.com
        </p>
      </div>

      <form onSubmit={handleSubmit} className="min-w-full flex flex-col gap-6">
        <div className="">
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-gray-800 text-start mb-1"
          >
            Name
          </label>
          <input
            id="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-800 text-start mb-1"
          >
            Email
          </label>
          <input
            id="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="your@company.com"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="">
          <label
            htmlFor="Phone"
            className="block text-sm font-medium text-gray-800 text-start mb-1"
          >
            Phone number
          </label>
          <input
            id="Phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-800 text-start mb-2"
          >
            How can we help?
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className={`block p-2.5 w-full h-[70px] text-sm text-balck rounded-lg border border-gray-300 bg-white focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:placeholder-gray-400 ${
              errors.description ? "border-red-500" : ""
            }`}
            placeholder="Write your thoughts here..."
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="Services"
            className="block text-sm font-medium text-gray-800 text-start items-center justify-center mb-2"
          >
            Services
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center mb-2">
              <input
                id="web-design-checkbox"
                type="checkbox"
                value="Web Design"
                checked={services.includes("Web Design")}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="web-design-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Web Design
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="content-correction-checkbox"
                type="checkbox"
                value="Content correction"
                checked={services.includes("Content correction")}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="content-correction-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Content correction
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="ux-design-checkbox"
                type="checkbox"
                value="UX design"
                checked={services.includes("UX design")}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="ux-design-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                UX design
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="strategy-consulting-checkbox"
                type="checkbox"
                value="Strategy & consulting"
                checked={services.includes("Strategy & consulting")}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="strategy-consulting-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Strategy & consulting
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="user-research-checkbox"
                type="checkbox"
                value="User research"
                checked={services.includes("User research")}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="user-research-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                User research
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="Other-checkbox"
                type="checkbox"
                value="Other"
                checked={services.includes("Other")}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="Other-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Other
              </label>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Send message"
          className="bg-gray-700 text-white py-3 rounded-md font-medium mt-5"
        />
      </form>
    </div>
  );
}

export default Form;
