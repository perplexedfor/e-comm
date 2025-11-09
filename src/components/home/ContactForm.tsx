// src/components/home/ContactForm.tsx

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';

// === STEP 1: Import the action ===
import { submitQuoteRequest } from '@/app/lib/action';


export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // === STEP 2: The inline Server Action is GONE ===
  // (We deleted it from here)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    
    // === STEP 3: We call the imported action ===
    const response = await submitQuoteRequest(formData);

    setIsSubmitting(false);

    if (response.success) {
      toast.success('Your quote request has been sent! We will be in touch soon.');
      (event.target as HTMLFormElement).reset(); // Reset the form
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* The form still uses the client-side handleSubmit */}
      <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-lg shadow-xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+91 98123 45678" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name (Optional)</Label>
            <Input id="company" name="company" placeholder="ABC Electricals" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Your Message / Inquiry</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="I'm interested in a bulk order of MCB DB Boxes..."
            className="min-h-[120px]"
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 text-base" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}