'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company_email: '',
    phone_no: '',
    website_uri: '',
    company_type: '',
    company_role: '',
    department: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([formData]);

      if (dbError) throw dbError;

      setSuccess(true);
      setFormData({
        first_name: '',
        last_name: '',
        company_email: '',
        phone_no: '',
        website_uri: '',
        company_type: '',
        company_role: '',
        department: '',
        message: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Contact Us</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">for Assistance</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Feel free to reach out to us using the provided contact information if you require any assistance. Our dedicated team is here to help and address your inquiries promptly.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name *"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name *"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="company_email"
                  placeholder="Company Email *"
                  value={formData.company_email}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
                <input
                  type="tel"
                  name="phone_no"
                  placeholder="Phone No *"
                  value={formData.phone_no}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="url"
                  name="website_uri"
                  placeholder="Website URI *"
                  value={formData.website_uri}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
                <input
                  type="text"
                  name="company_type"
                  placeholder="Company Type *"
                  value={formData.company_type}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company_role"
                  placeholder="Company Role *"
                  value={formData.company_role}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
                <input
                  type="text"
                  name="department"
                  placeholder="Department *"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message *"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 resize-none"
              ></textarea>

              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                  Message sent successfully! We'll be in touch soon.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
