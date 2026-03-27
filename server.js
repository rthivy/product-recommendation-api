const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// -----------------------------
// VEHICLES
// -----------------------------
const vehicles = [
  { id: 'v1', year: 2020, make: 'Toyota', model: 'Camry' },
  { id: 'v2', year: 2021, make: 'Toyota', model: 'RAV4' },
  { id: 'v3', year: 2019, make: 'Honda', model: 'Civic' },
  { id: 'v4', year: 2022, make: 'Honda', model: 'CR-V' },
  { id: 'v5', year: 2018, make: 'Ford', model: 'F-150' },
  { id: 'v6', year: 2021, make: 'Ford', model: 'Escape' },
  { id: 'v7', year: 2020, make: 'Chevrolet', model: 'Silverado 1500' },
  { id: 'v8', year: 2019, make: 'Nissan', model: 'Altima' },
  { id: 'v9', year: 2022, make: 'Jeep', model: 'Grand Cherokee' },
  { id: 'v10', year: 2021, make: 'Subaru', model: 'Outback' },
  { id: 'v11', year: 2020, make: 'Mazda', model: 'CX-5' },
  { id: 'v12', year: 2021, make: 'Hyundai', model: 'Tucson' },
  { id: 'v13', year: 2022, make: 'Kia', model: 'Sportage' },
  { id: 'v14', year: 2019, make: 'Volkswagen', model: 'Tiguan' },
  { id: 'v15', year: 2020, make: 'BMW', model: '3 Series' },
  { id: 'v16', year: 2021, make: 'Mercedes-Benz', model: 'C-Class' },
  { id: 'v17', year: 2022, make: 'Audi', model: 'Q5' },
  { id: 'v18', year: 2020, make: 'Lexus', model: 'RX 350' },
  { id: 'v19', year: 2021, make: 'Ram', model: '1500' },
  { id: 'v20', year: 2019, make: 'GMC', model: 'Sierra 1500' }
];

// -----------------------------
// PRODUCTS
// -----------------------------
const products = [
  {
    id: 'p1',
    sku: 'BRK-1001',
    name: 'Ceramic Front Brake Pads',
    category: 'Brakes',
    price: 89.99,
    description:
      'Premium ceramic front brake pads designed for smooth stopping power, reduced brake dust, and quiet daily driving performance.',
    fitmentInstructions:
      'Confirm front brake configuration before installation. Replace pads in axle sets only. Inspect rotors for wear and resurface or replace if needed. Perform brake bedding procedure after installation.',
    fitments: ['v1', 'v3', 'v8', 'v11', 'v15']
  },
  {
    id: 'p2',
    sku: 'FLT-2001',
    name: 'Engine Air Filter',
    category: 'Filters',
    price: 24.99,
    description:
      'High-flow engine air filter that helps protect the engine from dust and debris while supporting proper airflow.',
    fitmentInstructions:
      'Open the air box housing, remove the old filter, clean out debris, and install with the seal seated evenly. Verify housing clips are fully secured.',
    fitments: ['v1', 'v2', 'v4', 'v6', 'v12', 'v13', 'v18']
  },
  {
    id: 'p3',
    sku: 'OIL-3001',
    name: 'Synthetic Oil Filter',
    category: 'Engine',
    price: 14.99,
    description:
      'Synthetic media oil filter built for extended oil change intervals and improved contaminant capture.',
    fitmentInstructions:
      'Lubricate the gasket before install, hand-tighten to manufacturer spec, and confirm no leaks after engine startup.',
    fitments: ['v3', 'v4', 'v8', 'v10', 'v11', 'v14', 'v15']
  },
  {
    id: 'p4',
    sku: 'SUS-4001',
    name: 'Rear Shock Absorber Kit',
    category: 'Suspension',
    price: 159.99,
    description:
      'Rear shock kit designed to restore ride control, reduce bouncing, and improve overall handling.',
    fitmentInstructions:
      'Support the suspension before removing old shocks. Install both rear shocks together. Torque upper and lower mounting hardware to vehicle specification.',
    fitments: ['v2', 'v6', 'v9', 'v10', 'v12', 'v17', 'v18']
  },
  {
    id: 'p5',
    sku: 'LGT-5001',
    name: 'LED Headlight Assembly',
    category: 'Lighting',
    price: 219.99,
    description:
      'Complete LED headlight assembly offering brighter output and improved nighttime road visibility.',
    fitmentInstructions:
      'Remove bumper or trim as needed for access. Connect wiring harness securely and test all beam functions before final reassembly. Headlight aiming may be required.',
    fitments: ['v5', 'v7', 'v9', 'v19', 'v20']
  },
  {
    id: 'p6',
    sku: 'INT-6001',
    name: 'All-Weather Floor Mat Set',
    category: 'Interior',
    price: 79.99,
    description:
      'Durable floor mat set designed to protect interior carpet from mud, snow, spills, and daily wear.',
    fitmentInstructions:
      'Remove existing mats before installing. Align retention clips or anchors where applicable. Do not stack mats on top of original mats.',
    fitments: ['v1', 'v2', 'v4', 'v9', 'v10', 'v11', 'v12', 'v13', 'v18']
  },
  {
    id: 'p7',
    sku: 'BAT-7001',
    name: '12V AGM Battery',
    category: 'Electrical',
    price: 189.99,
    description:
      'Maintenance-free AGM battery providing reliable cold starts and strong reserve capacity.',
    fitmentInstructions:
      'Disconnect negative terminal first and reconnect it last. Confirm battery group size and terminal orientation before installation.',
    fitments: ['v1', 'v2', 'v3', 'v4', 'v8', 'v10', 'v15', 'v16']
  },
  {
    id: 'p8',
    sku: 'WIP-8001',
    name: 'Premium Wiper Blade Set',
    category: 'Wipers',
    price: 34.99,
    description:
      'Beam-style windshield wiper blades engineered for streak-free visibility in rain and snow.',
    fitmentInstructions:
      'Match driver and passenger side lengths before install. Confirm adapter clicks into place and test sweep path after installation.',
    fitments: [
      'v1', 'v2', 'v3', 'v4', 'v6', 'v8', 'v9', 'v10',
      'v11', 'v12', 'v13', 'v14', 'v15', 'v16', 'v17', 'v18'
    ]
  },
  {
    id: 'p9',
    sku: 'SPK-9001',
    name: 'Iridium Spark Plug Set',
    category: 'Ignition',
    price: 69.99,
    description:
      'Iridium spark plugs for improved ignition performance, fuel efficiency, and long service life.',
    fitmentInstructions:
      'Gap only if required by manufacturer. Install into a cool engine and torque correctly to avoid thread damage.',
    fitments: ['v1', 'v3', 'v8', 'v11', 'v12', 'v13', 'v14']
  },
  {
    id: 'p10',
    sku: 'RAD-1002',
    name: 'Aluminum Radiator',
    category: 'Cooling',
    price: 249.99,
    description:
      'Direct-fit aluminum radiator designed to restore cooling efficiency and support proper engine temperature.',
    fitmentInstructions:
      'Drain coolant fully before removal. Inspect hoses and clamps during installation. Refill with correct coolant mixture and bleed the system of air.',
    fitments: ['v5', 'v7', 'v19', 'v20']
  },
  {
    id: 'p11',
    sku: 'TRN-1101',
    name: 'Transmission Filter Kit',
    category: 'Transmission',
    price: 44.99,
    description:
      'Transmission filter and gasket kit for servicing automatic transmission fluid systems.',
    fitmentInstructions:
      'Verify transmission type before purchase. Clean pan thoroughly, replace gasket, and refill using manufacturer-approved fluid.',
    fitments: ['v5', 'v7', 'v19', 'v20', 'v6']
  },
  {
    id: 'p12',
    sku: 'WHL-1201',
    name: 'Front Wheel Bearing Hub Assembly',
    category: 'Drivetrain',
    price: 129.99,
    description:
      'Complete front wheel hub assembly with bearing and sensor-ready fitment for smoother wheel operation.',
    fitmentInstructions:
      'Inspect knuckle and axle splines before installation. Torque axle nut and wheel fasteners to specification. Alignment check recommended afterward.',
    fitments: ['v2', 'v4', 'v6', 'v9', 'v10', 'v17', 'v18']
  },
  {
    id: 'p13',
    sku: 'EXH-1301',
    name: 'Cat-Back Exhaust System',
    category: 'Exhaust',
    price: 399.99,
    description:
      'Stainless steel cat-back exhaust system designed for improved exhaust flow and a refined performance tone.',
    fitmentInstructions:
      'Install on a cool exhaust system. Reuse or replace hangers as needed and ensure all joints are aligned before tightening clamps fully.',
    fitments: ['v3', 'v5', 'v7', 'v15', 'v19']
  },
  {
    id: 'p14',
    sku: 'SUS-1401',
    name: 'Front Strut Assembly',
    category: 'Suspension',
    price: 179.99,
    description:
      'Loaded front strut assembly intended to restore ride height, control, and handling.',
    fitmentInstructions:
      'Install in pairs on the same axle. Check camber alignment after replacement. Confirm left and right orientation before install.',
    fitments: ['v1', 'v2', 'v4', 'v11', 'v12', 'v13', 'v14', 'v18']
  },
  {
    id: 'p15',
    sku: 'CAB-1501',
    name: 'Cabin Air Filter',
    category: 'Filters',
    price: 19.99,
    description:
      'Cabin air filter designed to reduce dust, pollen, and airborne contaminants entering the passenger compartment.',
    fitmentInstructions:
      'Typically accessed behind the glove box or cowl area. Confirm airflow direction arrow during installation.',
    fitments: [
      'v1', 'v2', 'v3', 'v4', 'v8', 'v9', 'v10',
      'v11', 'v12', 'v13', 'v14', 'v15', 'v16', 'v17', 'v18'
    ]
  },
  {
    id: 'p16',
    sku: 'ALT-1601',
    name: 'Alternator Assembly',
    category: 'Electrical',
    price: 279.99,
    description:
      'Direct replacement alternator for reliable charging system performance and battery support.',
    fitmentInstructions:
      'Disconnect battery before installation. Confirm pulley alignment and belt routing before starting the engine.',
    fitments: ['v5', 'v6', 'v7', 'v19', 'v20']
  },
  {
    id: 'p17',
    sku: 'BEL-1701',
    name: 'Serpentine Belt',
    category: 'Engine',
    price: 29.99,
    description:
      'Multi-rib serpentine drive belt built for dependable accessory drive performance.',
    fitmentInstructions:
      'Inspect pulleys and tensioner before install. Route belt using under-hood belt diagram and confirm proper rib alignment.',
    fitments: [
      'v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8',
      'v9', 'v10', 'v11', 'v12', 'v13', 'v14', 'v15',
      'v16', 'v17', 'v18', 'v19', 'v20'
    ]
  },
  {
    id: 'p18',
    sku: 'BRK-1801',
    name: 'Rear Brake Rotor Set',
    category: 'Brakes',
    price: 119.99,
    description:
      'Rear brake rotor set engineered for stable braking performance and heat dissipation.',
    fitmentInstructions:
      'Clean hub surface before installation to prevent runout. Replace in pairs and confirm parking brake adjustment where applicable.',
    fitments: ['v1', 'v3', 'v4', 'v8', 'v10', 'v15', 'v16']
  },
  {
    id: 'p19',
    sku: 'TIR-1901',
    name: 'TPMS Sensor Kit',
    category: 'Wheels & Tires',
    price: 99.99,
    description:
      'Tire pressure monitoring sensor kit for restoring accurate tire pressure reporting.',
    fitmentInstructions:
      'Sensors may require programming or relearn procedure after installation. Verify wheel compatibility before mount and balance.',
    fitments: [
      'v1', 'v2', 'v4', 'v5', 'v6', 'v7', 'v9', 'v10',
      'v11', 'v12', 'v13', 'v14', 'v17', 'v18', 'v19', 'v20'
    ]
  },
  {
    id: 'p20',
    sku: 'TOW-2001',
    name: 'Trailer Hitch Receiver',
    category: 'Towing',
    price: 229.99,
    description:
      'Class-rated trailer hitch receiver designed for light-duty towing and accessory mounting.',
    fitmentInstructions:
      'Use supplied hardware and torque to spec. Some installations may require trimming underbody panels or lowering the spare tire temporarily.',
    fitments: ['v2', 'v4', 'v6', 'v9', 'v10', 'v11', 'v12', 'v13', 'v17', 'v18']
  }
];

// -----------------------------
// ROUTES
// -----------------------------
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Product recommendation API is running',
    endpoints: {
      health: 'GET /health',
      recommendations: 'POST /api/recommendations',
      vehicles: 'GET /api/vehicles',
      products: 'GET /api/products'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ success: true, status: 'ok' });
});

app.get('/api/vehicles', (req, res) => {
  res.json({
    success: true,
    count: vehicles.length,
    vehicles
  });
});

app.get('/api/products', (req, res) => {
  const cleanProducts = products.map((product) => ({
    id: product.id,
    sku: product.sku,
    name: product.name,
    category: product.category,
    price: product.price,
    description: product.description,
    fitmentInstructions: product.fitmentInstructions,
    fitmentCount: product.fitments.length
  }));

  res.json({
    success: true,
    count: cleanProducts.length,
    products: cleanProducts
  });
});

app.post('/api/recommendations', (req, res) => {
  const { year, make, model } = req.body;

  if (!year || !make || !model) {
    return res.status(400).json({
      success: false,
      error: 'year, make, and model are required'
    });
  }

  const normalizedYear = Number(year);
  const normalizedMake = String(make).trim().toLowerCase();
  const normalizedModel = String(model).trim().toLowerCase();

  const matchedVehicle = vehicles.find(
    (vehicle) =>
      vehicle.year === normalizedYear &&
      vehicle.make.toLowerCase() === normalizedMake &&
      vehicle.model.toLowerCase() === normalizedModel
  );

  if (!matchedVehicle) {
    return res.status(404).json({
      success: false,
      error: 'No matching vehicle found'
    });
  }

  const recommendedProducts = products
    .filter((product) => product.fitments.includes(matchedVehicle.id))
    .map((product) => ({
      id: product.id,
      sku: product.sku,
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
      fitmentInstructions: product.fitmentInstructions
    }));

  return res.json({
    success: true,
    vehicle: {
      year: matchedVehicle.year,
      make: matchedVehicle.make,
      model: matchedVehicle.model
    },
    count: recommendedProducts.length,
    recommendedProducts
  });
});

// -----------------------------
// START SERVER
// -----------------------------
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
