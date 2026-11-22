import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'bhuvanshetty2018@gmail.com', link: 'mailto:bhuvanshetty2018@gmail.com' },
  { icon: Phone, title: 'Phone', value: '+91 6361782350', link: 'tel:+916361782350' },
  { icon: MapPin, title: 'Location', value: 'Kambalabettu, Karnataka, India', link: 'https://maps.app.goo.gl/mYyxrQhMZqNSVBq28' },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRef.current) return;
    try { setStatus('sending'); await emailjs.sendForm('service_o17yyqp', 'template_0f6e8pl', formRef.current, 'x2oCH1LfVilF8i5ij'); setStatus('success'); formRef.current.reset(); } catch { setStatus('error'); }
  };
  return <section id="contact" className="page-panel section bg-[#e6b84c] text-[#0d1117]">
    <div className="section-frame"><div className="mb-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div className="section-heading"><span className="section-label !text-[#0d1117] before:!bg-[#0d1117]">Get in Touch</span><h2 className="section-title !text-[#0d1117]">Let's Connect</h2></div><p className="max-w-xl text-base leading-8 text-[#3d351d]">Have a question or want to work together? Feel free to reach out!</p></div>
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="space-y-4">{contactInfo.map(({ icon: Icon, ...info }) => <a key={info.title} href={info.link} className="flex items-center gap-4 border-t border-[#0d1117]/20 py-5 transition-transform hover:translate-x-2"><Icon size={20} /><span><small className="block font-mono text-xs uppercase tracking-[.12em]">{info.title}</small><strong className="text-lg">{info.value}</strong></span></a>)}</div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5"><div className="grid gap-5 md:grid-cols-2"><label className="text-sm font-semibold">Name<input name="name" required className="mt-2 w-full border-b border-[#0d1117]/40 bg-transparent px-0 py-3 outline-none placeholder:text-[#3d351d]/60" /></label><label className="text-sm font-semibold">Email<input type="email" name="email" required className="mt-2 w-full border-b border-[#0d1117]/40 bg-transparent px-0 py-3 outline-none placeholder:text-[#3d351d]/60" /></label></div><label className="block text-sm font-semibold">Message<textarea name="message" required rows={4} className="mt-2 w-full resize-none border-b border-[#0d1117]/40 bg-transparent px-0 py-3 outline-none" /></label><button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-3 bg-[#0d1117] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1 disabled:opacity-60">{status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} /></button>{status === 'success' && <p className="flex items-center gap-2 text-sm"><CheckCircle size={17} /> Message sent successfully!</p>}{status === 'error' && <p className="flex items-center gap-2 text-sm"><AlertCircle size={17} /> Failed to send message. Please try again.</p>}</form>
      </div>
    </div>
  </section>;
};

export default Contact;
