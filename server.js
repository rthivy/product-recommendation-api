const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// --- DATA ---
const vehicles = [
  { id: 'v1', year: 2020, make: 'Toyota', model: 'Camry' },
  { id: 'v2', year: 2021, make: 'Toyota', model: 'RAV4' },
  { id: 'v3', year: 2019, make: 'Honda', model: 'Civic' },
];

const products = [
  {
    id: 'p1',
    name: 'Brake Pads',
    price: 89.99,
    fitments: ['v1', 'v3'],
  },
  {
    id: 'p2',
    name: 'Air Filter',
    price: 24.99,
    fitments: ['v1', 'v2'],
  },
];

// --- ROUTES ---
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

app.post('/api/recommendations', (req, res) => {
  const { year, make, model } = req.body;

  if (!year || !make || !model) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const vehicle = vehicles.find(
    (v) =>
      v.year === Number(year) &&
      v.make.toLowerCase() === make.toLowerCase() &&
      v.model.toLowerCase() === model.toLowerCase()
  );

  if (!vehicle) {
    return res.status(404).json({ error: 'Vehicle not found' });
  }

  const results = products
    .filter((p) => p.fitments.includes(vehicle.id))
    .map(({ fitments, ...p }) => p);

  res.json({
    vehicle,
    products: results,
  });
});

// --- START ---
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});