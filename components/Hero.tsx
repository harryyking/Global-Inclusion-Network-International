import Link from 'next/link'

export default function Hero() {
  return (
    <section
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://media.istockphoto.com/id/1133789952/photo/disabled-schoolboy-arms-stretched-out-in-a-corridor.jpg?b=1&s=612x612&w=0&k=20&c=LIfyHkZ_w1WQSZPoXYWge3AgjRSplbjI6-wlwnJ2jvo=)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content justify-start text-neutral-content">
      <div className="max-w-6xl text-center">
        <h1 className="mb-5 lg:text-6xl text-3xl  font-bold leading-none">Empowering Every Child,<br /> Regardless of Ability</h1>
        <p className="mb-5 lg:text-2xl">
        Global Inclusion Network International is dedicated to creating inclusive communities and  unlocking the
        potential of children with disabilities.
        </p>
        <Link href="#about">
        <button className="btn btn-primary text-white">Learn more</button>
        </Link>
      </div>
    </div>
  </section>
  )
}




