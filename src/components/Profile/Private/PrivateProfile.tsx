import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./PrivateProfile.css"

const PrivateProfile: React.FC = () => {
    
    const [formData, setFormData] = useState({
        avatar: '',
        username: '',
        email: '',
        bio: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="avatar">Avatar:</label>
                <img
      src={formData.avatar}
      alt={"src/assets/placeholder-person.png"}
      style={{
        width: "50px",
        height: `50px`,
        borderRadius: '50%', // Apply border-radius to make the image circular
        objectFit: 'cover', // Ensure the image fills the circular space
      }}
    />
                <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    value={formData.avatar}
                    accept="image/*"
                    onChange={handleChange}
                />
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="bio">bio:</label>
                <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={8}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PrivateProfile;