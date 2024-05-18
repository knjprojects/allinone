"use server"; //this file is progra,mmed to use server actions with tanstack/query
//not the original way of using server actions intended by nextjs, but may be much better
import { db } from "@/db";
export const CreateMongoUser = async (requestData: {
  username: string;
  password: string;
}) => {
  try {
    const user = await db.user.create({
      data: requestData,
    });

    return { name: "" };
    //return response.data; // This data will be available where the function is called
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
