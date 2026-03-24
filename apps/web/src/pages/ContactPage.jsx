import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import AnimatedSection from '../components/AnimatedSection.jsx';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.send(
      'service_51oslxq',
      'template_dcbwdxh',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'FfZScTcjPM7ixISw2'
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      setStatus('error');
      setErrorMessage(error.text || 'Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20 max-w-6xl">

      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Interested in collaborating or have a question? Feel free to reach out.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <AnimatedSection delay={0.1}>
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:navinjwork@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    navinjwork@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+917276734894"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    +91-7276734894
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-medium">India</p>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* RIGHT SIDE (FORM) */}
        <AnimatedSection delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card border rounded-2xl p-8 shadow-sm"
          >

            {/* SUCCESS */}
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {/* ERROR */}
            {status === 'error' && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                <p>{errorMessage}</p>
              </div>
            )}

            {/* NAME */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            {/* SUBJECT */}
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
              />
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows={5}
                className="resize-none"
              />
            </div>

            {/* BUTTON */}
            <Button type="submit" className="w-full" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>

          </form>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ContactPage;