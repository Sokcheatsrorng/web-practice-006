import CardContentComponent from  '../components/CardContent/CardContentComponent';

export default function JobOpportunityPage() {
    return (
        <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-extrabold text-4xl mt-[100px] text-center">USEFUL CONTENTS</h1>
        <div className="flex justify-center mt-8 mb-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-4">
          <CardContentComponent />
          <CardContentComponent />
          <CardContentComponent />
          <CardContentComponent />
          </div>
        </div>
      </div>

    );
}
