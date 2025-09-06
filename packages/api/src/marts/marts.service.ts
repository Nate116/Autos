import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MartsService {
  constructor(private prisma: PrismaClient) {}

  async nearby(lat: number, lng: number, radiusKm: number) {
    const deg = radiusKm / 111;
    const marts = await this.prisma.mart.findMany({
      where: {
        geoLat: { gte: lat - deg, lte: lat + deg },
        geoLng: { gte: lng - deg, lte: lng + deg },
        isActive: true
      },
      take: 100
    });
    return marts.map(m => ({
      id: m.id,
      displayName: m.displayName,
      city: m.city,
      ratingAvg: m.ratingAvg,
      geo: { lat: m.geoLat, lng: m.geoLng }
    }));
  }
}
