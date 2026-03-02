"use client";

import FrameImage from "@/components/achievement/FrameImage";
import { Activity } from "@prisma/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ApplyButton from "@/components/utils/ApplyButton";
import { getApprovedApplicationsCount } from "@/lib/service/activity";

type ClientActivityDetailsProps = {
  activity: Activity;
};

const ClientActivityDetails = ({ activity }: ClientActivityDetailsProps) => {
  const description = activity.description;
  const slicedDescription = description.split("\n");

  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingAction, setPendingAction] = useState<
    (() => Promise<void>) | null
  >(null);
  const [approvedCount, setApprovedCount] = useState<number>(0);

  useEffect(() => {
    const fetchApprovedCount = async () => {
      const count = await getApprovedApplicationsCount(activity.id);
      setApprovedCount(count);
    };
    fetchApprovedCount();
  }, [activity.id]);

  const confirmApply = (onConfirm: () => Promise<void>) => {
    setShowConfirm(true);
    setPendingAction(() => onConfirm); // store async function
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
      <div className="z-0 flex w-full flex-col items-center gap-10 md:flex-row md:items-start md:justify-center">
        <div className="mt-10 block text-center md:hidden">
          <h1 className="font-impact text-4xl font-bold">{activity.title}</h1>
        </div>
        <div className="relative mt-0 h-[300px] w-[300px] md:mt-35 md:h-[350px] md:w-[300px] xl:mt-0 xl:h-[472px] xl:w-[450px]">
          {activity.imageUrl && (
            <FrameImage
              src={activity.imageUrl}
              className="top-0 left-0 w-[280px] -rotate-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] md:w-[270px] xl:top-20 xl:w-[400px]"
            />
          )}
        </div>
        <div className="z-10 mb-[12vh] w-[80%] md:mt-10 md:w-[40%]">
          <div className="relative w-fit">
            <h1 className="font-impact hidden text-5xl font-bold md:block">
              {activity.title}
            </h1>

            <Image
              className="absolute top-0 left-[105%] hidden xl:block xl:w-[100px]"
              src="/activities/activityDetails/among-us.svg"
              alt=""
              width={300}
              height={327}
              draggable={false}
            ></Image>
          </div>

          {/* Activity Information Cards */}
          <div className="mt-6 mb-6 grid grid-cols-1 gap-4 sm:mt-8 sm:mb-8 sm:grid-cols-2 sm:gap-6">
            {/* Location Card */}
            <div className="group relative overflow-hidden rounded-xl border-4 border-red-500 bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-red-500 p-2 shadow-md sm:p-3">
                  <svg
                    className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-gray-600 uppercase sm:text-xs">
                    Location
                  </p>
                  <p className="text-sm font-bold text-gray-900 sm:text-lg">
                    {activity.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Date Card */}
            <div className="group relative overflow-hidden rounded-xl border-4 border-[#0555AB] bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0555AB]/5 to-transparent"></div>
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className="rounded-full bg-[#0555AB] p-2 shadow-md sm:p-3">
                  <svg
                    className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-gray-600 uppercase sm:text-xs">
                    Start Date
                  </p>
                  <p className="text-sm font-bold text-gray-900 sm:text-lg">
                    {new Date(activity.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Credit Points Card */}
            <div className="group relative overflow-hidden rounded-xl border-4 border-yellow-500 bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"></div>
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className="rounded-full bg-yellow-500 p-2 shadow-md sm:p-3">
                  <svg
                    className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-gray-600 uppercase sm:text-xs">
                    Credit Points
                  </p>
                  <p className="text-sm font-bold text-gray-900 sm:text-lg">
                    {activity.creditPoint} CP
                  </p>
                </div>
              </div>
            </div>

            {/* Quota Card */}
            <div className="group relative overflow-hidden rounded-xl border-4 border-green-500 bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-green-500 p-2 shadow-md sm:p-3">
                  <svg
                    className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold tracking-wide text-gray-600 uppercase sm:text-xs">
                    Availability
                  </p>
                  <p className="text-sm font-bold text-gray-900 sm:text-lg">
                    {approvedCount}/{activity.quota} Registered
                  </p>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-200 sm:h-2.5">
                    <div
                      className="h-2 rounded-full bg-green-500 shadow-sm transition-all duration-300 sm:h-2.5"
                      style={{
                        width: `${Math.min((approvedCount / activity.quota) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-5 text-xl break-words sm:mt-10">
            <div className="w-full">
              <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-bl from-gray-500/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full bg-gradient-to-tr from-gray-700/10 to-transparent"></div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-center space-x-3 sm:mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black shadow-lg sm:h-12 sm:w-12">
                      <svg
                        className="h-5 w-5 text-white sm:h-6 sm:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="font-family-impact text-xl font-semibold text-black sm:text-2xl">
                      Description
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {slicedDescription.map((line, index) => (
                      <p
                        className="w-full text-sm leading-relaxed break-words text-black sm:text-base"
                        key={index}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-6 w-fit self-center sm:mt-8">
              <ApplyButton
                bgColor="#ED4E45"
                activityId={activity.id}
                confirmApply={confirmApply}
                startDate={activity.startDate}
                quota={activity.quota}
                approvedCount={approvedCount}
                className="w-fit transform rounded-xl px-8 py-3 text-[24px] font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-12 sm:py-4 sm:text-[32px]"
              >
                REGISTER NOW
              </ApplyButton>
              <Image
                className="absolute -top-6 -right-10 w-[80px] sm:-top-8 sm:-right-14 sm:w-[100px]"
                src="/activities/activityDetails/button-decor.webp"
                alt=""
                width={100}
                height={65}
                draggable={false}
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">
                Confirm Registration
              </h2>
              <p className="leading-relaxed text-gray-600">
                Are you sure you want to register for{" "}
                <span className="font-semibold text-gray-800">
                  {activity.title}
                </span>
                ?
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleConfirm}
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 hover:shadow-lg"
              >
                Yes, Register
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 rounded-xl bg-gray-100 px-6 py-3 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientActivityDetails;
