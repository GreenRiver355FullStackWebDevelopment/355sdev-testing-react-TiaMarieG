import { useState } from "react";
function AddRestaurant({ updateRestaurants }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    updateRestaurants(formData);
  };

  return (
    <form data-cy="form-submit" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          // Adding data-cy attribute for Cypress testing
          data-cy="input-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          // Adding data-cy attribute for Cypress testing
          data-cy="input-address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          // Adding data-cy attribute for Cypress testing
          data-cy="input-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Cuisine:</label>
        <input
          // Adding data-cy attribute for Cypress testing
          data-cy="input-cuisine"
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Rating:</label>
        <input
          // Adding data-cy attribute for Cypress testing
          data-cy="input-rating"
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <button data-cy="restaurant-btn" type="submit">Submit</button>
    </form>
  );
}

export default AddRestaurant;
