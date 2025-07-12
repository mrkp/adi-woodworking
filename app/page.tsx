import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const featuredWorks = [
    { id: 1, src: '/WhatsApp Image 2025-07-11 at 19.12.54.jpeg', alt: 'Custom bathroom vanity' },
    { id: 2, src: '/WhatsApp Image 2025-07-11 at 19.12.56.jpeg', alt: 'Home office furniture' },
    { id: 3, src: '/WhatsApp Image 2025-07-11 at 19.12.56 (2).jpeg', alt: 'Kitchen cabinetry' },
    { id: 4, src: '/WhatsApp Image 2025-07-11 at 19.12.56 (4).jpeg', alt: 'Custom furniture' },
    { id: 5, src: '/WhatsApp Image 2025-07-11 at 19.12.56 (5).jpeg', alt: 'Wood craftsmanship' },
    { id: 6, src: '/WhatsApp Image 2025-07-11 at 19.12.56 (6).jpeg', alt: 'Fine woodwork' },
    { id: 7, src: '/WhatsApp Image 2025-07-11 at 19.12.57.jpeg', alt: 'Custom cabinetry' },
    { id: 8, src: '/WhatsApp Image 2025-07-11 at 19.12.57 (1).jpeg', alt: 'Woodworking detail' },
    { id: 9, src: '/WhatsApp Image 2025-07-11 at 19.12.57 (2).jpeg', alt: 'Quality craftsmanship' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ADI Woodworking</h1>
            </div>
            <div className="flex space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4">Master Craftsman from Trinidad</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bringing over 30 years of expertise in custom woodworking, fine furniture, and architectural millwork
          </p>
          <Link href="#portfolio" className="inline-flex items-center bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            View My Work <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/WhatsApp_Image_2025-07-11_at_19.12.57.jpeg')] bg-cover bg-center opacity-30"></div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">About David Inniss</h3>
              <p className="text-lg text-gray-600 mb-4">
                With a passion for woodworking that spans over three decades, David Inniss has established himself as one of Trinidad's premier craftsmen. His work combines traditional techniques with modern design sensibilities.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                From custom kitchen cabinetry to bespoke furniture pieces, David's attention to detail and commitment to quality ensures that every project becomes a lasting work of art.
              </p>
              <p className="text-lg text-gray-600">
                Specializing in residential and commercial projects, David works closely with clients to bring their vision to life using the finest materials and time-honored craftsmanship.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/WhatsApp Image 2025-07-11 at 19.14.11.jpeg"
                alt="David Inniss at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <div key={work.id} className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="mailto:adi.woodworking.tt@gmail.com?subject=Custom%20Woodworking%20Quote%20Request&body=Hello%20David%2C%0A%0AI'm%20interested%20in%20getting%20a%20custom%20quote%20for%20a%20woodworking%20project.%0A%0AProject%20Details%3A%0A-%20Type%20of%20project%3A%20%0A-%20Approximate%20dimensions%3A%20%0A-%20Preferred%20wood%20type%3A%20%0A-%20Timeline%3A%20%0A%0APlease%20let%20me%20know%20when%20we%20can%20discuss%20this%20further.%0A%0AThank%20you%2C%0A%5BYour%20Name%5D%0A%5BYour%20Phone%20Number%5D"
              className="inline-flex items-center bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition"
            >
              Get a Custom Quote <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-amber-800" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <a href="tel:+18687882290" className="text-gray-600 hover:text-amber-800 transition">+1 (868) 788-2290</a>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-amber-800" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <a href="mailto:adi.woodworking.tt@gmail.com" className="text-gray-600 hover:text-amber-800 transition">adi.woodworking.tt@gmail.com</a>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-amber-800" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <p className="text-gray-600">Trinidad & Tobago</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 ADI Woodworking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}