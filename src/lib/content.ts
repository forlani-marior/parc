export const business = {
  name: 'Perfect Accident Repair Centre Ltd.',
  phone: '065 686 8444',
  tel: '+353656868444',
  recovery: '087 262 5444',
  recoveryTel: '+353872625444',
  email: 'info@parc.ie',
  hours: 'Monday–Friday, 8 am–5 pm',
  eircode: 'V95 HV18',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=52.836597%2C-8.9692',
  map: 'https://www.openstreetmap.org/export/embed.html?bbox=-8.991%2C52.826%2C-8.947%2C52.847&layer=mapnik&marker=52.836597%2C-8.9692',
};

export const chapters = [
  { name: 'Introduction', heading: 'Precision in Every Repair.', description: 'Trusted accident repair specialists in Ennis, County Clare.', cta: 'Discover PARC', href: '/discover/', alignment: 'center' },
  { name: 'Body Repairs', heading: 'Restoring What Matters.', description: 'Expert accident repairs and professional bodywork.', cta: 'Explore Accident Repairs', href: '/services/accident-repairs/', alignment: 'left' },
  { name: 'Paintwork', heading: 'Every Detail Counts.', description: 'Precision painting, refinishing and panel restoration.', cta: 'Explore Body & Paint', href: '/services/body-and-paint/', alignment: 'right' },
  { name: 'Customer Care', heading: 'Here When You Need Us.', description: 'From insurance assistance to vehicle recovery and replacement vehicles.', cta: 'Explore Customer Support', href: '/services/customer-support/', alignment: 'left' },
  { name: 'Our Heritage', heading: 'Proudly Rooted in Ennis.', description: 'A family-run business built on craftsmanship, experience and personal service.', cta: 'Discover Our Story', href: '/about/', alignment: 'right' },
];

export const photos = {
  premises: { file: 'parc-premises', alt: 'PARC’s original workshop frontage and sign at Quin Road Business Park', label: 'The PARC premises · Quin Road, Ennis', width: 650, height: 270 },
  reception: { file: 'parc-reception', alt: 'The reception desk and blue PARC signs at the Ennis premises', label: 'Reception', width: 650, height: 270 },
  alignment: { file: 'workshop-alignment', alt: 'Vehicles and alignment equipment in PARC’s workshop', label: 'Alignment and repair bay', width: 650, height: 270 },
  bays: { file: 'workshop-bays', alt: 'Vehicles on lifts and tools inside the PARC workshop', label: 'The workshop floor', width: 650, height: 270 },
  paintBay: { file: 'workshop-paint-bay', alt: 'A silver hatchback beside PARC’s paint booth', label: 'The paint bay', width: 650, height: 270 },
  paintPrep: { file: 'parc-paint-prep', alt: 'A technician preparing a masked car for refinishing', label: 'Preparing a vehicle for paint', width: 650, height: 270 },
  paintMix: { file: 'parc-paint-mixing', alt: 'Paint mixing station with a computer and shelves of colour supplies', label: 'The paint mixing station', width: 650, height: 270 },
  archive: { file: 'archive-parc-welcome', alt: 'A member of the PARC team outside the Ennis premises in the original website’s welcome photograph', label: 'From the original PARC welcome gallery', width: 500, height: 270 },
  desk: { file: 'archive-customer-care', alt: 'A customer speaking with a member of the PARC team at the reception desk', label: 'At the front desk · PARC archive', width: 500, height: 270 },
  collision: { file: 'collision-in-progress', alt: 'A partially stripped silver car undergoing repair in the bodyshop', label: 'Collision repair in progress', width: 600, height: 270 },
  diagnostics: { file: 'diagnostic-equipment', alt: 'A diagnostic scan tool in use inside a vehicle', label: 'Vehicle diagnostics', width: 600, height: 270 },
  mercedes: { file: 'work-mercedes', alt: 'A black Mercedes in the PARC workshop', label: 'Mercedes in the workshop', width: 600, height: 270 },
  bmw: { file: 'work-bmw', alt: 'A black BMW photographed outside the PARC workshop', label: 'BMW outside the workshop', width: 600, height: 270 },
  rally: { file: 'work-rally', alt: 'A blue rally car with PARC branding in the business park', label: 'Rally car from the PARC archive', width: 600, height: 270 },
  classic: { file: 'work-classic', alt: 'A classic blue car parked outside PARC', label: 'Classic car from the PARC archive', width: 600, height: 270 },
  recovery: { file: 'recovery-truck', alt: 'A red car loaded onto the back of a PARC recovery truck', label: 'Vehicle recovery', width: 600, height: 270 },
  ambulance: { file: 'work-ambulance', alt: 'A high-visibility ambulance parked outside the PARC workshop', label: 'An ambulance from the PARC archive', width: 600, height: 270 },
};
export type Photo = (typeof photos)[keyof typeof photos];

export const serviceCategories = [
  { title: 'Accident & Crash Repairs', href: '/services/accident-repairs/', icon: 'car', text: 'From collision damage to structural repairs.' },
  { title: 'Bodywork & Panel Repairs', href: '/services/body-and-paint/#bodywork', icon: 'panel', text: 'Dents, damaged panels and bumper repairs.' },
  { title: 'Spray Painting & Refinishing', href: '/services/body-and-paint/#paintwork', icon: 'spray', text: 'Colour matching and a carefully finished surface.' },
  { title: 'Mechanical Servicing & Diagnostics', href: '/services/mechanical-diagnostics/', icon: 'tool', text: 'Servicing, fault finding and pre-NCT checks.' },
  { title: 'Insurance Claims Assistance', href: '/services/customer-support/#insurance', icon: 'shield', text: 'A practical guide through estimates and claims.' },
  { title: 'Vehicle Recovery & Replacement Vehicles', href: '/services/customer-support/#recovery', icon: 'truck', text: 'Help moving your vehicle and keeping you mobile.' },
];

export const services = [
  {
    slug: 'accident-repairs', num: '01', label: 'Collision repairs', title: 'Accident & Crash Repairs',
    intro: 'When an accident disrupts your day, we can help you make sense of the damage, the estimate and the repair.',
    photo: photos.collision,
    sections: [
      { id: 'assessment', title: 'Start with an assessment', body: 'We assess the visible damage, explain what the repair may involve and prepare an estimate. If something further comes to light during the work, we can explain the implications and discuss the next step with you.' },
      { id: 'repair', title: 'From bodywork to structural repair', body: 'PARC handles cosmetic and collision damage, from bumpers and panels to repairs that need structural measuring and alignment. We can discuss repair and replacement options for damaged parts with you.' },
      { id: 'handover', title: 'Know what happens next', body: 'Ask us about arranging recovery, dealing with your insurer or keeping mobile during repairs. At collection we can talk you through the work and answer questions about your vehicle.' },
    ],
    next: { href: '/services/customer-support/', label: 'See customer support' },
  },
  {
    slug: 'body-and-paint', num: '02', label: 'Body & paint', title: 'Bodywork & Paint',
    intro: 'From a scuffed bumper to panel damage after a collision, we take care over the preparation, fit and finish.',
    photo: photos.paintPrep,
    sections: [
      { id: 'bodywork', title: 'Bodywork and panel repairs', body: 'We assess dents, panel alignment and damaged bodywork. Depending on the damage, we can discuss reshaping a panel, repairing plastic parts or sourcing an appropriate replacement.' },
      { id: 'paintwork', title: 'Spray painting and refinishing', body: 'We repair paintwork on bumpers, doors, mirrors, wings and bonnets, as well as refinishing vehicles after collision repairs. Colour matching and surface preparation are an important part of getting the finish right.' },
      { id: 'small-repairs', title: 'Small details make a difference', body: 'Ask us about headlamp refurbishment or cosmetic alloy wheel repairs. We’ll inspect the condition first and explain what can reasonably be restored.' },
    ],
    next: { href: '/services/accident-repairs/', label: 'See accident repairs' },
  },
  {
    slug: 'mechanical-diagnostics', num: '03', label: 'Servicing & diagnostics', title: 'Mechanical Servicing & Diagnostics',
    intro: 'Regular maintenance, help with warning lights and practical checks before your NCT, from a local workshop you can speak to directly.',
    photo: photos.diagnostics,
    sections: [
      { id: 'servicing', title: 'Mechanical servicing', body: 'Talk to us about regular servicing and safety checks. Tell us your make, model, mileage and any changes you have noticed, so we can advise what to book.' },
      { id: 'diagnostics', title: 'Vehicle diagnostics', body: 'Diagnostic equipment helps us investigate warning lights and faults. We use the results alongside an inspection to explain the likely cause and what may be needed.' },
      { id: 'pre-nct', title: 'Pre-NCT checks and air conditioning', body: 'We can check common areas such as lights, tyres and emissions before an NCT. Ask about air conditioning fault diagnosis, servicing and recharge when booking.' },
    ],
    next: { href: '/services/', label: 'See all services' },
  },
  {
    slug: 'customer-support', num: '04', label: 'Support after an accident', title: 'Customer Support',
    intro: 'A clear next step makes all the difference. We can help with the estimate, insurance paperwork and getting your vehicle to the workshop.',
    photo: photos.recovery,
    sections: [
      { id: 'insurance', title: 'Estimates and insurance claims', body: 'We can explain the estimate, help with the information your insurer requests and liaise with them as needed. Have your vehicle details and any claim reference to hand when you get in touch.' },
      { id: 'recovery', title: 'Recovery and vehicle storage', body: 'If your vehicle needs to be moved, phone us so we can discuss recovery. For out-of-hours recovery, call 087 262 5444. Ask about storage when you speak to the team.' },
      { id: 'replacement', title: 'Replacement vehicles', body: 'Ask us about replacement cars or vans while your vehicle is in for repair. Availability and any cover under your insurance policy depend on your circumstances.' },
    ],
    next: { href: '/advice/', label: 'Read our repair guide' },
  },
];

export const proof = [
  ['Local since 2011', 'A family business with roots in the Ennis motor trade going back to 1989.'],
  ['Experienced hands', 'Skilled technicians and specialist equipment for body, paint and mechanical work.'],
  ['A person to talk to', 'Straightforward advice about your estimate, insurance claim and repair.'],
  ['Right First Time', 'Care and attention from the first assessment through to collection.'],
];

export const localFeedback = [
  { place: 'Ennis', detail: 'Customers mention fitting repairs in at short notice and being pleased with how the car looked on collection.' },
  { place: 'Ardrahan', detail: 'Prompt work and courteous service stand out in feedback from this part of the region.' },
  { place: 'Kilrush & Killaloe', detail: 'The original customer notes mention paintwork and practical help getting a car ready for the NCT.' },
];
