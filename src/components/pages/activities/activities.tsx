"use client";

import { useState, useEffect } from "react";
import ActivityBackground from "./ActivityBackground";
import ActivitiesSearch from "./ActivitiesSearch";
import { Activity, Category } from "@prisma/client";
import { useSession } from "next-auth/react";
import { getUserById } from "@/lib/service/user";

type ClientPageActivitiesProps = {
  activities: Activity[];
  categories: Category[];
};

function ClientPageActivities({
  activities,
  categories,
}: ClientPageActivitiesProps) {
  const { data: session } = useSession();
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingAction, setPendingAction] = useState<
    (() => Promise<void>) | null
  >(null);
  const [isIncompleteProfile, setIsIncompleteProfile] = useState(false);
  const [userHasCompleteProfile, setUserHasCompleteProfile] = useState<
    boolean | null
  >(null);

  // Check user profile completeness
  useEffect(() => {
    const checkUserProfile = async () => {
      if (session?.user?.id) {
        try {
          const user = await getUserById(session.user.id);
          const hasComplete = !!(user?.nim && user?.phoneNumber);
          setUserHasCompleteProfile(hasComplete);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserHasCompleteProfile(false);
        }
      }
    };

    checkUserProfile();
  }, [session]);

  const confirmApply = async (onConfirm: () => Promise<void>) => {
    // If user profile is incomplete, show information popup
    if (userHasCompleteProfile === false) {
      setIsIncompleteProfile(true);
      setShowConfirm(true);
      return;
    }

    // Normal confirmation flow
    setIsIncompleteProfile(false);
    setShowConfirm(true);
    setPendingAction(() => onConfirm);
  };

  const handleConfirm = async () => {
    if (pendingAction) await pendingAction();
    setShowConfirm(false);
    setPendingAction(null);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setPendingAction(null);
  };

  return (
    <>
      {/* Spacer for header */}
      <div className="h-[10vh] bg-[#F1EEE6]" />

      {/* Background Container */}
      <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-[#F1EEE6] bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center pt-0 select-none">
        <ActivityBackground />
        <ActivitiesSearch
          activities={activities}
          confirmApply={confirmApply}
          categories={categories}
        />
      </div>

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg">
            {isIncompleteProfile ? (
              <>
                <h2 className="mb-4 text-lg font-semibold">
                  Incomplete Profile
                </h2>
                <p className="mb-6">
                  Please fill your NIM and Phone Number in your dashboard.
                </p>
                <button
                  onClick={handleCancel}
                  className="rounded-md bg-gray-600 px-6 py-2 text-white hover:bg-gray-700"
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <h2 className="mb-4 text-lg font-semibold">
                  Confirm Application
                </h2>
                <p className="mb-6">
                  Are you sure you want to apply for this activity?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleConfirm}
                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
                  >
                    No
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ClientPageActivities;
