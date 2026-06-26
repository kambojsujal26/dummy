import { Product } from "./types";

export const products: Product[] = [
  { id: "adjustable-dumbbells", name: "Adjustable Dumbbells Set for Home Workout", price: 199, category: "Gym Equipment", image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&q=80&w=400", description: "Quick-adjust mechanism for seamless weight changes during high-intensity training. Replaces 10 pairs of traditional dumbbells." },
  { id: "bench-press", name: "Multi-Purpose Weight Bench for Home Gym", price: 250, category: "Gym Equipment", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400", description: "Commercial-grade steel frame with multi-angle adjustments for incline, decline, and flat presses. 800lb weight capacity." },
  { id: "treadmill", name: "Foldable Motorized Treadmill for Home", price: 899, category: "Gym Equipment", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=400", description: "Interactive touchscreen, auto-incline up to 15%, and shock-absorbing deck. Connects to popular virtual training apps." },
  { id: "kettlebells", name: "Cast Iron Kettlebell for Strength Training", price: 80, category: "Gym Equipment", image: "https://images.unsplash.com/photo-1615202685641-fc167e452936?auto=format&fit=crop&q=80&w=400", description: "Precision-cast iron with a powder-coated finish for superior grip without tearing hands during high-rep snatches." },
  
  { id: "resistance-bands", name: "Resistance Bands Set with Handles for Home Workout", price: 30, category: "Fitness Accessories", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=400", description: "Five distinct resistance levels crafted from 100% natural latex. Indestructible hardware and cushioned handles." },
  { id: "yoga-mat", name: "Non-Slip Yoga Mat for Men & Women", price: 65, category: "Fitness Accessories", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=400", description: "Non-slip PU surface with laser-engraved alignment lines. Extra density protects joints on hard floors." },
  { id: "jump-rope", name: "Adjustable Jump Rope for Cardio Workout", price: 25, category: "Fitness Accessories", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400", description: "Aircraft-grade aluminum handles with zero-friction ball bearings for effortless double-unders." },
  { id: "foam-roller", name: "High-Density Foam Roller for Muscle Massage", price: 35, category: "Fitness Accessories", image: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&q=80&w=400", description: "Multi-density 3D surface designed to mirror a massage therapist's hands. Essential for myofascial release." },
  
  { id: "whey-protein", name: "Whey Protein Powder Isolate", price: 55, category: "Supplements", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400", description: "25g of pure protein per scoop. Cold-processed and micro-filtered, ensuring maximum bioavailability and easy mixing." },
  { id: "creatine", name: "Creatine Monohydrate Powder for Muscle Growth", price: 30, category: "Supplements", image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=400", description: "Clinically proven to increase physical performance in successive bursts of short-term, high-intensity exercise." },
  { id: "pre-workout", name: "Pre Workout Supplement for Energy & Focus", price: 42, category: "Supplements", image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=400", description: "Nitric oxide boosters and clean energy complex to maximize focus, pump, and endurance without the crash." },
  
  { id: "smart-watch", name: "Smartwatch with Heart Rate & Sleep Monitor", price: 299, category: "Smart Fitness Gadgets", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400", description: "Advanced biometric tracking including VO2 max, recovery readiness, and sleep architecture analysis. 14-day battery." },
  { id: "fitness-tracker", name: "Fitness Tracker Band with Step Counter", price: 129, category: "Smart Fitness Gadgets", image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=400", description: "Minimalist band measuring heart rate variability (HRV), daily strain, and comprehensive sleep staging." },
  { id: "smart-scale", name: "Smart Digital Body Weight Machine", price: 89, category: "Smart Fitness Gadgets", image: "https://images.unsplash.com/photo-1612711679093-f094eefe0523?auto=format&fit=crop&q=80&w=400", description: "Metrics go beyond weight to track body fat percentage, lean mass, bone density, and visceral fat hydration." }
];

export const blogs = [
  {
     slug: "top-smart-gadgets",
     title: "Top 10 Smart Gadgets Online to Transform Your Home in 2026",
     date: "June 12, 2026",
     summary: "Explore the best and most affordable smart gadgets online in India making life easier. From home automation to personalized routines.",
     imageCategory: "tech",
     content: "In the fast-paced modern world, efficiency is everything. Smart gadgets have moved beyond simple novelty and are now integral components for an active, managed lifestyle. As we advance through 2026, the demand for affordable smart gadgets online in India continues to skyrocket. This list covers the top devices that promise to automate your fitness routines, manage your recovery metrics, and essentially, transform your life."
  },
  {
     slug: "home-workout-equipment",
     title: "How to Buy Gym Equipment for Home Workout on a Budget",
     date: "June 7, 2026",
     summary: "A complete guide on choosing the best fitness products online in India for a superior home training experience and muscle building.",
     imageCategory: "gym",
     content: "Setting up a home gym doesn't have to break the bank. Buying gym equipment for your home workout is one of the best investments you can make for your health. Focus on versatile, compound-movement tools like adjustable dumbbells, a sturdy bench, and high-quality resistance bands. By researching the best fitness products online in India, you can find incredible deals on commercial-grade hardware without compromising on safety."
  },
  {
     slug: "fitness-tech-trends",
     title: "Fitness Tech Trends: Best Wearable Fitness Gadgets for Workout",
     date: "May 30, 2026",
     summary: "Discover how the latest electronic gadgets for daily use are transforming personal fitness and making it easier to track your health metrics.",
     imageCategory: "fitness",
     content: "Wearable technology has officially evolved from simple step-counters to comprehensive health laboratories on your wrist. Today, the latest electronic gadgets for daily use provide deep insights into your sleep architecture, blood oxygen, and recovery strain. If you want to optimize your training safely, leveraging the best wearable fitness gadgets for workouts is non-negotiable. They keep you accountable while preventing overtraining."
  }
];

