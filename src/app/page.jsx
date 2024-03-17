import Image from "next/image";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import CardCourseComponent from "./components/CardCourse/CardCourseComponent";
import CardContentComponent from "./components/CardContent/CardContentComponent";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-extrabold text-4xl mt-8 text-center">COURSES</h1>
        <div className="flex justify-center mt-8">
          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-4">
            <CardCourseComponent />
            <CardCourseComponent />
            <CardCourseComponent />
            <CardCourseComponent />
            <CardCourseComponent />
            <CardCourseComponent />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-extrabold text-4xl mt-8 text-center">USEFUL CONTENTS</h1>
        <div className="flex justify-center mt-8 mb-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-4">
          <CardContentComponent />
          <CardContentComponent />
          <CardContentComponent />
          <CardContentComponent />
          </div>
        </div>
      </div>

    </>
  );
}
