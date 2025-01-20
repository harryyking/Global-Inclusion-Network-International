export default function MissionVision() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold text-secondary">Our Vision</h2>
              <p className="text-lg">
                To dismantle societal myths surrounding disability and establish an inclusive platform where every child
                with a disability not only thrives but also emerges as a valuable contributor to society.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg">
                To increase public awareness and understanding of disabilities while providing tailored support systems
                to empower each child to integrate fully into society and achieve their potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

