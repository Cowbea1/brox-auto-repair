export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* NAVBAR */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              BROX AUTO REPAIR
            </h1>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-zinc-300 hover:text-white">
              Services
            </a>
            <a href="#about" className="text-sm text-zinc-300 hover:text-white">
              About
            </a>
            <a href="#contact" className="text-sm text-zinc-300 hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#appointment"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Request Appointment
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Auto Repair & Maintenance
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Keep Your Vehicle
              <span className="block text-zinc-400">Running Right.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Quality automotive service for routine maintenance, repairs,
              diagnostics, and more. Get your vehicle serviced by a team you
              can count on.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#appointment"
                className="rounded-lg bg-red-600 px-7 py-4 text-center font-semibold hover:bg-red-700"
              >
                Request an Appointment
              </a>

              <a
                href="tel:+19044599507"
                className="rounded-lg border border-white/20 px-7 py-4 text-center font-semibold hover:bg-white/10"
              >
                Call the Shop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Automotive Services
            </h2>

            <p className="mt-4 text-zinc-400">
              From routine maintenance to more complex repairs, we help keep
              your vehicle on the road.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Brake Repair",
                description:
                  "Brake inspections, repairs, and maintenance to help keep your vehicle stopping safely.",
              },
              {
                title: "Oil Changes",
                description:
                  "Routine oil and filter service to help maintain your engine.",
              },
              {
                title: "Diagnostics",
                description:
                  "Identify warning lights and vehicle problems with professional diagnostics.",
              },
              {
                title: "A/C & Heating",
                description:
                  "Service and repair for your vehicle's heating and air conditioning system.",
              },
              {
                title: "Engine Repair",
                description:
                  "Repair and maintenance for engine-related problems.",
              },
              {
                title: "General Maintenance",
                description:
                  "Routine maintenance and repairs to keep your vehicle performing properly.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-red-500/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                  🔧
                </div>

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Why Choose Brox
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Service You Can Feel Good About.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              At Brox Auto Repair Shop, our goal is to provide dependable
              automotive service while giving customers a straightforward
              experience from start to finish.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Professional automotive service",
              "Clear communication",
              "Quality workmanship",
              "Convenient appointment scheduling",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold">
                  {index + 1}
                </div>

                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="bg-zinc-900 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Get Started
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Request an Appointment
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Tell us a little about your vehicle and what it needs. We'll
              contact you to confirm your appointment.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mbgloyav"
            method="POST"
            className="mt-12 grid gap-5 rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 outline-none focus:border-red-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 outline-none focus:border-red-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 outline-none focus:border-red-500"
            />

            <div className="grid gap-5 md:grid-cols-3">
              <input
                type="number"
                name="vehicle_year"
                placeholder="Vehicle Year"
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 outline-none focus:border-red-500"
              />

              <input
                type="text"
                name="vehicle_make"
                placeholder="Make"
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 outline-none focus:border-red-500"
              />

              <input
                type="text"
                name="vehicle_model"
                placeholder="Model"
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 outline-none focus:border-red-500"
              />
            </div>
            {/* Service */}
            <select
              name="service"
              className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 text-zinc-400 outline-none focus:border-red-500"
              defaultValue=""
            >
              <option value="" disabled>
                What does your vehicle need?
              </option>
              <option>Oil Change</option>
              <option>Brake Service</option>
              <option>Diagnostics</option>
              <option>A/C or Heating</option>
              <option>Engine Repair</option>
              <option>General Repair</option>
              <option>Other</option>
            </select>
            {/* Date & Time */}
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="date"
                placeholder="Preferred Date"
                name="preferred_date"
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 text-zinc-400 outline-none focus:border-red-500"
              />

              <select
                name="preferred_time"
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 text-zinc-400 outline-none focus:border-red-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Preferred Time
                </option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
            {/* Problem description */}
            <textarea
              name="message"
              placeholder="Tell us about the problem..."
              rows={5}
              className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-4 outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-red-600 px-6 py-4 font-semibold hover:bg-red-700"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Brox Auto Repair Shop
            </h2>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Phone</p>
            <a
              href="tel:+19044599507"
              className="mt-2 block font-medium hover:text-red-500"
            >
              (904) 459-9507
            </a>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Email</p>
            <a
              href="mailto:info@broxautorepair.com"
              className="mt-2 block font-medium hover:text-red-500"
            >
              info@broxautorepair.com
            </a>
          </div>

        <div>
          <p className="text-sm text-zinc-500">Hours</p>
          <p className="mt-2 text-zinc-300">
            Open Mon-Fri: 8am - 5pm
          </p>
        </div>

          <div>
            <p className="text-sm text-zinc-500">Location</p>
            <a
              href="https://maps.app.goo.gl/17ipDpnxsNaHbDsY7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-zinc-300 hover:text-red-500"
            >
              7316 US-17, Richmond Hill, GA 31324
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Brox Auto Repair Shop. All rights reserved.</p>

          <p>Professional Auto Repair & Maintenance</p>
        </div>
      </footer>
    </main>
  );
}