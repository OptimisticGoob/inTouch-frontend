import React, { useState } from 'react';
import "./SubmissionForm.css"
import axios from 'axios';

interface FormData {
  title: string;
  location: string;
  eventInfo: string;
  date: string;
}

const SubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    location: '',
    eventInfo: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/post-submit', formData); 
        console.log('Form submitted successfully:', response.data);
        setFormData({
          title: '',
          location: '',
          eventInfo: '',
          date: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    console.log('Form data:', formData);
  };

  return (
    <div className="submit-container">
    <form className="form-card" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Event Information:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          rows={4}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Post</button>
    </form>
    </div>
  );
};

export default SubmissionForm;