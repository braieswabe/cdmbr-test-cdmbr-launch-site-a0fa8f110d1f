```typescript
import { FC, useState } from 'react';

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg p-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-lg p-2 w-full"
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border rounded-lg p-2 w-full"
        required
      />
      <button type="submit" className="bg-[#2563eb] text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        Send Message
      </button>
    </form>
  );
};
```