'use client'
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { FaClock, FaLayerGroup } from "react-icons/fa";

export default function CardCourseComponent() {
  const [liked, setLiked] = React.useState(false);
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6  md:grid-cols-12 sm:grid-cols-6 gap-6 md:gap-4 items-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png"
              width="100%"
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="col-12 md:col-6 pl-2">
                <h6 className="course-title text-lg font-semibold mb-1 uppercase hover:text-blue-700">
                  Flutter Mobile Development
                </h6>
                <span className="mb-1 mr-2 inline-block px-2 py-1 text-sm font-semibold bg-red-700 text-white rounded-2xl">
                  20% Scholarship
                </span>
                <p className="course-desc mt-1 text-sm">
                  Flutter course is designed to develop multi-platform
                  applications for iOS and Android.
                </p>
              </div>
              <div className="col-6 md:col-3 pl-1 pb-0 mb-2 course-detail">
                <div className="d-flex flex-row justify-content-between">
                  <p className="course-hour p-0 m-1 flex">
                    <FaClock />&nbsp;
                    <span>80</span>&nbsp;
                    <span>hours</span>
                  </p>
                  <p className="course-level p-0 m-1 flex">
                    <FaLayerGroup />&nbsp;
                    <span>Medium</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
