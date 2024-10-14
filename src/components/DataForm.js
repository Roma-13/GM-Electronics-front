import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    category: "",
    status: "",
    photo: null,
    properties: [{ name: "", value: "" }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormValues({ ...formValues, photo: e.target.files[0] });
  };

  const handlePropertyChange = (index, e) => {
    const { name, value } = e.target;
    const newProperties = formValues.properties.map((property, propIndex) => {
      if (index === propIndex) {
        return { ...property, [name]: value };
      }
      return property;
    });
    setFormValues({ ...formValues, properties: newProperties });
  };

  const handleAddProperty = () => {
    setFormValues({
      ...formValues,
      properties: [...formValues.properties, { name: "", value: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("price", formValues.price);
    formData.append("category", formValues.category);
    formData.append("status", formValues.status);
    formData.append("photo", formValues.photo);
    formData.append("properties", JSON.stringify(formValues.properties));

    axios.post("http://localhost:5000/api/data", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(formValues);
  };

  return (
    <div className="container">
      <h1>Product Registration Form</h1>
      <div className="reg">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={formValues.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formValues.category}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Status:</label>
              <input
                type="text"
                name="status"
                value={formValues.status}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label>Properties:</label>
            <div className="properties-group">
              {formValues.properties.map((property, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={property.name}
                    onChange={(e) => handlePropertyChange(index, e)}
                  />
                  <input
                    type="text"
                    name="value"
                    placeholder="Value"
                    value={property.value}
                    onChange={(e) => handlePropertyChange(index, e)}
                  />
                </div>
              ))}
            </div>
            <button type="button" onClick={handleAddProperty}>+</button>
            <div className="add-photo">
              <label>Photo:</label>
              <input type="file" name="photo" onChange={handlePhotoChange} />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
