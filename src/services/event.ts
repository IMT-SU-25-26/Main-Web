"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { EventSchema } from "@/types/db/event";

export async function getAllEvents() {
  return await prisma.event.findMany({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      title: true,
      startDate: true,
      images: {
        take: 1,
        select: {
          url: true,
        },
      },
    },
  });
}

export async function getEventById(eventId: string) {
  return await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      images: true,
    },
  });
}

export async function createEvent(data: z.infer<typeof EventSchema>) {
  const result = EventSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid event data submitted." };
  }

  const { images, ...rest } = result.data;
  const eventData = { ...rest, startDate: new Date(rest.startDate) };

  try {
    const event = await prisma.event.create({
      data: {
        ...eventData,
        images: images ? { create: images } : undefined,
      },
    });

    revalidatePath("/events");
    revalidatePath("/dashboard/pr");

    return { success: true, event };
  } catch (err) {
    return { error: "Failed to create event: " + (err as Error).message };
  }
}

export async function updateEvent(
  eventId: string,
  data: z.infer<typeof EventSchema>,
) {
  const result = EventSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid event data submitted." };
  }

  const { images, ...rest } = result.data;
  const eventData = { ...rest, startDate: new Date(rest.startDate) };

  try {
    const updateData: Record<string, unknown> = { ...eventData };
    
    if (images !== undefined) {
      updateData.images = { deleteMany: {}, create: images };
    }

    const event = await prisma.event.update({
      where: { id: eventId },
      data: updateData,
    });

    revalidatePath("/events");
    revalidatePath("/dashboard/pr");

    return { success: true, event };
  } catch (err) {
    return { error: "Failed to update event: " + (err as Error).message };
  }
}

export async function deleteEvent(eventId: string) {
  try {
    await prisma.event.delete({
      where: { id: eventId },
    });

    revalidatePath("/events");
    revalidatePath("/dashboard/pr");

    return { success: true };
  } catch (err) {
    return { error: "Failed to delete event: " + (err as Error).message };
  }
}
