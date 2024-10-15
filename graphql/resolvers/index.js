import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: async (_, { id }) => {
      if (id) {
        const users = await prisma.user.findUnique({
          where: { id: parseInt(id) }, // uniq by id
          include: { posts: true }, // include: sudah termasuk relasi
        });

        if (!users) {
          throw new Error(`User ID ${id} not founds`);
        }
        return [users];
      }

      return prisma.user.findMany({
        include: { posts: true },
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

  Mutation: {
    deleteUser: async (_, { id }) => {
      await prisma.post.deleteMany({
        // delete post dari authorId
        where: { authorId: parseInt(id) },
      });

      const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) },
      });

      return {
        message: `Success Delete User ID ${id}`,
        user: deletedUser,
      };
    },
  },
};
