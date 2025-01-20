export default function Hero() {
  return (
    <section
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?auto=compress&cs=tinysrgb&w=600)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content">
      <div className="max-w-6xl">
        <h1 className="mb-5 text-5xl font-bold">Empowering Every Child, Regardless of Ability</h1>
        <p className="mb-5">
        Global Inclusion Network International is dedicated to creating inclusive communities and unlocking the
        potential of children with disabilities.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </section>
  )
}




