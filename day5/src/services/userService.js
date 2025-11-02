

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import {generateToken}  from '../middleware/jwt.js';

const userService = {

    async getAllUsers() {
        return await prisma.user.findMany();
    },

    async createUser(data) {

         const existingUser = await prisma.user.findUnique({
            where: { email: data.email }
         });

         if (existingUser) {
             return null;
         }

        const newUser = await prisma.user.create({
            data
        });
        return newUser;
    },

    async updateUser(email, data) {
      const existingUser = await prisma.user.findUnique({
            where: { email }
         });
            if (!existingUser) {
                return null;
            }
            return await prisma.user.update({
                where: { email },
                data
            });
    },

    async deleteUser(email) {

        const existingUser = await prisma.user.findUnique({
            where: { email }
         });
         if (!existingUser) {
             return null;
         }
        const deletedUser =  await prisma.user.delete({
             where: { email }
         });
         return deletedUser;
    },

    async  login(email,password) {
        const user  = await prisma.user.findUnique({
            where: { email , password }
         });
  if(!user){
    return null;
  }
  const token = generateToken(user);
  
  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, token };
    }



}

export default userService;
