import Link from 'next/link'

export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white" id='about'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-6 text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-orange-600">Global Inclusion Network International (GINI)</span> is a
            forward-thinking organization dedicated to creating inclusive and accessible communities for persons with
            disabilities. We place a strong emphasis on{" "}
            <span className="font-semibold text-green-600">early intervention for children with disabilities</span>,
            recognizing its critical role in unlocking their full potential and fostering independence.
          </p>
          <p className="mb-6 text-gray-700 text-lg leading-relaxed">
            We are committed to addressing the{" "}
            <span className="font-semibold text-orange-600">
              societal perceptions and misconceptions about disabilities
            </span>{" "}
            that lead to discrimination, exclusion, and a lack of opportunities in education, employment, and social
            activities. Through community outreach, caregiver support, disability education, and professional therapy
            services, we strive to challenge these barriers and promote inclusion at every level.
          </p>
          <p className="mb-10 text-gray-700 text-lg leading-relaxed">
            Guided by a passionate team of advocates and experts, GINI envisions a world where inclusion begins early
            and continues across all areas of life, ensuring that every individual, regardless of ability, has the
            opportunity to thrive and contribute meaningfully to society.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe-mSta2f397t5iKFULWo2QHn3YREVwTertBeAtnWZYtAeD1A/viewform" target='_blank'>
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md hover:shadow-lg">
            Join as A Volunteer
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

