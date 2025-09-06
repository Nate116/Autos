import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const cities = [
  { name: 'Lagos', lat: 6.5244, lng: 3.3792 },
  { name: 'Akure', lat: 7.2575, lng: 5.2058 },
  { name: 'Ado-Ekiti', lat: 7.6233, lng: 5.2209 },
  { name: 'Abeokuta', lat: 7.1475, lng: 3.3619 },
  { name: 'Ibadan', lat: 7.3775, lng: 3.9470 },
];

async function main() {
  // Admin
  const admin = await prisma.user.upsert({
    where: { phone: '+2348000000000' },
    update: {},
    create: {
      name: 'Admin',
      phone: '+2348000000000',
      passwordHash: 'dev-only-hash',
      role: 'admin'
    }
  });

  for (const city of cities) {
    for (let i = 1; i <= 10; i++) {
      const owner = await prisma.user.create({
        data: {
          name: `${city.name} Mart Owner ${i}`,
          phone: `+23480${Math.floor(10000000 + Math.random()*89999999)}`,
          passwordHash: 'dev-only-hash',
          role: 'mart'
        }
      });

      const mart = await prisma.mart.create({
        data: {
          ownerUserId: owner.id,
          displayName: `${city.name} Wash #${i}`,
          description: 'Reliable wash & fold, ironing, and dry-clean.',
          capacityKgPerHr: 60,
          deliveryRadiusKm: 6,
          city: city.name,
          geoLat: city.lat + (Math.random()-0.5)*0.05,
          geoLng: city.lng + (Math.random()-0.5)*0.05,
          basePriceList: { washFoldPerKg: 800, ironPerItem: 200 },
          operatingHours: { mon_fri: "08:00-20:00", sat: "09:00-18:00", sun: "off" }
        }
      });

      await prisma.service.createMany({
        data: [
          { martId: mart.id, type: 'washFold', basePrice: 0, perKgPrice: 800, turnaroundHours: 24 },
          { martId: mart.id, type: 'iron', basePrice: 0, perItemPrice: 200, turnaroundHours: 24 },
          { martId: mart.id, type: 'dryClean', basePrice: 1500, turnaroundHours: 48 }
        ]
      });
    }
  }
  console.log('Seed complete');
}

main().finally(() => prisma.$disconnect());
