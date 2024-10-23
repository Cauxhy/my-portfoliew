import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Modern Development Practices',
    description:
      'I stay up-to-date with the latest technologies and development methodologies, ensuring that my work is efficient, maintainable, and scalable.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Attention to Detail',
    description:
      'I take pride in delivering high-quality work. I pay close attention to the little details that make a big difference, ensuring everything is done to perfection.',
    icon: LockClosedIcon,
  },
  {
    name: 'Problem-Solving Skills',
    description:
      'I approach each project with a problem-solving mindset, ready to tackle challenges and find the best solutions. I believe there’s always a way to improve and innovate.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Passion for Learning',
    description:
      'I have a continuous desire to learn and grow. Staying curious and improving my skills is what drives me to keep evolving in my work.',
    icon: FingerPrintIcon,
  },
];


export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-left">
          <p className=" MyName text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-left">
            I'am <br /> 
            <div className=' lg:text-center'>
              <span className="text-blue">YOUSSEF</span> <span className="text-gray-700">BOUHAJA</span>
            </div>
          </p>

          <p className="mt-4 text-lg leading-5 text-gray-600 lg:text-left description">
          Développeur Web Full Stack, passionné par la création de solutions innovantes, 
          avec une expertise en Python, Django, et React pour concevoir des applications web modernes et performantes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-20">
                <dt className="text-base font-semibold leading-7 text-gray-900 title">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-black" />
                  </div>
                  {feature.name}
                </dt>
                <hr className="border-0 h-0.5 bg-blue" />

                <dd className="mt-2 text-base leading-5 text-black description-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-left">
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center link-font">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-blue shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Connect With Me
            </a>
            <a
              href="/path/to/your/resume.pdf"
              download="Youssef_Bouhaja_Resume.pdf"
              className="rounded-md border px-4 py-2.5 text-sm font-semibold shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
            >
              Download My Resume <i class="bi bi-arrow-down"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}
