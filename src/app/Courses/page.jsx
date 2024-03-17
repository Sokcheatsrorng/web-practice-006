import CardCourseComponent from "../components/CardCourse/CardCourseComponent";

export default function CoursesPage() {
    return (
        <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-extrabold text-4xl text-center mt-[100px] ">COURSES</h1>
        <div className="flex justify-center mt-8 mb-8">
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
    );
}
