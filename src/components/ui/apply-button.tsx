"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { createApplication } from "@/services/application";

interface ButtonProps {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
  activityId: string;
  confirmApply?: (onConfirm: () => Promise<void>) => void;
  startDate?: Date;
  quota?: number;
  approvedCount?: number;
  initialApplicationStatus?: string;
  isLoggedIn?: boolean;
  userId?: string;
}

export default function ApplyButton({
  bgColor,
  children,
  className,
  activityId,
  confirmApply,
  startDate,
  quota,
  approvedCount,
  initialApplicationStatus,
  isLoggedIn,
  userId,
}: ButtonProps) {
  const [applicationStatus, setApplicationStatus] = useState<
    string | undefined
  >(initialApplicationStatus);

  const now = new Date();
  const isActivityPassed = startDate ? new Date(startDate) < now : false;
  const isQuotaFull =
    quota && approvedCount !== undefined ? approvedCount >= quota : false;

  const handleApply = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isActivityPassed || isQuotaFull) {
      return;
    }

    if (!isLoggedIn || !userId) {
      authClient.signIn.social({ provider: "google" });
      return;
    }

    if (!applicationStatus) {
      const apply = async () => {
        // prevent multiple applications
        const result = await createApplication({
          userId,
          activityId,
          status: "PENDING",
        });
        if (result.success) {
          setApplicationStatus("PENDING");
        } else {
          alert(`Error: ${result.error}`);
        }
      };

      if (confirmApply) {
        confirmApply(apply);
      } else {
        if (window.confirm("Are you sure you want to apply for this activity?")) {
          await apply();
        }
      }
    }
  };

  let childrenTemp = children;

  if (!isLoggedIn) {
    childrenTemp = "Please Log In to Apply";
  } else if (isActivityPassed) {
    childrenTemp = "Activity Has Ended";
  } else if (isQuotaFull) {
    childrenTemp = "Quota Full";
  } else if (applicationStatus === "APPROVED") {
    childrenTemp = "Accepted";
  } else if (applicationStatus === "REJECTED") {
    childrenTemp = "Rejected";
  } else if (applicationStatus === "PENDING") {
    childrenTemp = "Waiting for Approval";
  }

  return (
    <button
      type="button"
      className={`inline-block rounded-md px-4 py-1 text-[0.9rem] text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_4px] hover:ring-2 hover:brightness-90 ${className} ${
        isActivityPassed || isQuotaFull ? "cursor-not-allowed" : ""
      }`}
      style={{
        backgroundColor: childrenTemp !== children ? "#a0a0a0" : bgColor,
      }}
      onClick={handleApply}
      disabled={isActivityPassed || isQuotaFull}
    >
      {childrenTemp}
    </button>
  );
}
