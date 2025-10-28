import { PrismaClient } from "@prisma/client";

// Instantiate PrismaClient
const prisma = new PrismaClient();

const userService = {
  async createUser(data) {
    return await prisma.user.create({ data });
  },

  async getAllUsers() {
    return await prisma.user.findMany();
  },

  async getUserById(id) {
    return await prisma.user.findUnique({ where: { id: Number(id) } });
  },

  async updateUser(id, data) {
    return await prisma.user.update({ where: { id: Number(id) }, data });
  },

  async deleteUser(id) {
    return await prisma.user.delete({ where: { id: Number(id) } });
  },
};

export default userService;
