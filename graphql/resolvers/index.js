import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany({
        include: { posts: true }, // include: sudah termasuk relasi
      });
    },
    posts: async () => {
      return prisma.post.findMany({
        include: { tags: true },
      });
    },
    tags: async () => {
      return prisma.tag.findMany({
        include: { posts: true },
      });
    },
  },
};
