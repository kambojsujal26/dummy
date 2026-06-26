import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";

// Initialize Stripe gracefully, avoiding crash if key is missing during dev
let stripeClient: Stripe | null = null;
function getStripe(): Stripe | null {
  if (!stripeClient && process.env.STRIPE_SECRET_KEY) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      // @ts-ignore
      apiVersion: "2024-12-18.acacia",
    });
  }
  return stripeClient;
}

// Mock inventory state for real-time tracking
const inventory = {
  "adjustable-dumbbells": 15,
  "bench-press": 5,
  "treadmill": 2,
  "kettlebells": 20,
  "resistance-bands": 50,
  "yoga-mat": 30,
  "jump-rope": 40,
  "foam-roller": 25,
  "whey-protein": 100,
  "creatine": 80,
  "pre-workout": 60,
  "smart-watch": 10,
  "fitness-tracker": 15,
  "smart-scale": 8,
  "wireless-earbuds": 25,
  "bluetooth-speaker": 18,
  "power-bank": 40,
  "wireless-charger": 35,
  "gaming-headset": 12,
  "tablet": 6,
  "laptop-accessories": 50,
};

// Simple polling simulation for inventory variance
setInterval(() => {
  const keys = Object.keys(inventory);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  // Randomly decrease inventory by 1 to simulate purchases, but keep above 0
  if (inventory[randomKey as keyof typeof inventory] > 0) {
     const shouldDecrease = Math.random() > 0.8;
     if(shouldDecrease) {
        inventory[randomKey as keyof typeof inventory] -= 1;
     }
  }
}, 5000);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/inventory", (req, res) => {
    res.json(inventory);
  });

  const exchangeRates: Record<string, number> = {
    USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.12, AUD: 1.52, CAD: 1.35
  };

  app.post("/api/checkout", async (req, res) => {
    const stripe = getStripe();
    if (!stripe) {
      return res.status(500).json({ error: "Stripe is not configured." });
    }

    try {
      const { items, currency = "USD" } = req.body;
      const rate = exchangeRates[currency] || 1;
      
      const lineItems = items.map((item: any) => {
         const convertedPrice = item.price * rate;
         return {
           price_data: {
              currency: currency.toLowerCase(),
              product_data: {
                 name: item.name,
                 images: item.image ? [item.image] : [],
              },
              unit_amount: Math.round(convertedPrice * 100),
           },
           quantity: item.quantity || 1,
         };
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.APP_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL || "http://localhost:3000"}/cart`,
      });

      res.json({ id: session.id, url: session.url });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
