import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Contact() {
  return (
    <div className="py-16 sm:py-24 relative overflow-hidden">
      <Helmet>
        <title>Contact Us | Smartify Fast Fitness & Gadgets Support</title>
        <meta name="description" content="Contact Smartify for support related to buying gym equipment, smart gadgets online, fitness products, or tracking your order. We're here to help 24/7." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Smartify",
            "url": "https://smartify.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Smartify Headquarters",
              "telephone": "+91 98765 43210",
              "email": "support@smartify.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Tech & Fitness Street",
                "addressLocality": "New Delhi",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="absolute bottom-0 right-0 -z-10 translate-x-1/3 translate-y-1/3 opacity-20">
         <div className="h-[600px] w-[600px] rounded-full bg-cyan-600 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-left mb-16">
          <h1 className="text-4xl font-display font-bold tracking-tight text-white mb-4">Contact Us</h1>
          <p className="text-lg text-slate-400">Need help buying gym equipment or smart gadgets online? Send us your queries and we'll get back to you soon.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                 <div className="p-3.5 bg-cyan-950/50 border border-cyan-500/20 rounded-xl text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors"><MapPin className="h-6 w-6" /></div>
                 <div>
                    <h2 className="text-lg font-semibold text-white">Address</h2>
                    <p className="mt-1 text-slate-400">Smartify Headquarters<br/>123 Tech & Fitness Street, New Delhi, India</p>
                 </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                 <div className="p-3.5 bg-fuchsia-950/50 border border-fuchsia-500/20 rounded-xl text-fuchsia-400 shrink-0 group-hover:bg-fuchsia-500 group-hover:text-slate-950 transition-colors"><Phone className="h-6 w-6" /></div>
                 <div>
                    <h2 className="text-lg font-semibold text-white">Phone</h2>
                    <p className="mt-1 text-slate-400">+91 98765 43210</p>
                 </div>
              </div>

              <div className="flex items-start gap-4 group">
                 <div className="p-3.5 bg-cyan-950/50 border border-cyan-500/20 rounded-xl text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors"><Mail className="h-6 w-6" /></div>
                 <div>
                    <h2 className="text-lg font-semibold text-white">Email</h2>
                    <p className="mt-1 text-slate-400">support@smartify.com</p>
                 </div>
              </div>

              <div className="flex items-start gap-4 group">
                 <div className="p-3.5 bg-fuchsia-950/50 border border-fuchsia-500/20 rounded-xl text-fuchsia-400 shrink-0 group-hover:bg-fuchsia-500 group-hover:text-slate-950 transition-colors"><Clock className="h-6 w-6" /></div>
                 <div>
                    <h2 className="text-lg font-semibold text-white">Business Hours</h2>
                    <p className="mt-1 text-slate-400">Monday – Friday: 9 AM – 7 PM<br/>Saturday: 10 AM – 5 PM<br/>Sunday: Closed</p>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-10 border border-slate-800">
              <form className="flex flex-col gap-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                       <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                       <input type="text" id="name" className="mt-2 block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                       <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                       <input type="email" id="email" className="mt-2 block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="john@example.com" />
                    </div>
                 </div>
                 
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Phone Number</label>
                    <input type="tel" id="phone" className="mt-2 block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="+91 xxxxx xxxxx" />
                 </div>

                 <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300">Subject</label>
                    <input type="text" id="subject" className="mt-2 block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="How can we help?" />
                 </div>

                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                    <textarea id="message" rows={4} className="mt-2 block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Your message..."></textarea>
                 </div>

                 <button type="button" className="mt-2 rounded-xl bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-colors">
                    Send Message
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
