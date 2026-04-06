import { FC, useState } from 'react';

export const ContactForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
        required
      />
      <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        Send Message
      </button>
    </form>
  );
};