"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { ApplicationSchema } from "@/types/db/application";

export async function getApplicationStatus(activityId: string, userId: string) {
  const application = await prisma.application.findFirst({
    where: {
      activityId,
      userId,
    },
  });

  return application?.status;
}

export async function createApplication(
  data: z.infer<typeof ApplicationSchema>,
) {
  const result = ApplicationSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid application data submitted." };
  }

  try {
    const application = await prisma.application.create({
      data: {
        ...result.data,
      },
    });

    revalidatePath("/activities");

    return { success: true, application };
  } catch (err) {
    return { error: "Failed to create application: " + (err as Error).message };
  }
}
