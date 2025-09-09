import React from 'react'

export const Contact = () => {
  return (
    <section id="contact" className="py-16 text-white bg-slate-900 text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    
    <form action="mailto:michaelwfoisy@gmail.com" className="max-w-lg mx-auto space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
      <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </section>
  )
}
export default Contact;