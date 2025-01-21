import Link from 'next/link'

export default function Hero() {
  return (
    <section
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?auto=compress&cs=tinysrgb&w=600)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content justify-start text-neutral-content">
      <div className="max-w-6xl text-center">
        <h1 className="mb-5 lg:text-6xl text-3xl  font-bold leading-none">Empowering Every Child,<br /> Regardless of Ability</h1>
        <p className="mb-5 lg:text-2xl text-lg">
        Global Inclusion Network International is dedicated to creating <br />inclusive communities and  unlocking the
        potential of children with disabilities.
        </p>
        <Link href="/contact">
        <button className="btn btn-primary text-lg">Come Support Now</button>
        </Link>
      </div>
    </div>
  </section>
  )
}




