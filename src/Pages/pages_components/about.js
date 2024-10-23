import mypic from './pic/file.png';
import log1 from './pic/cropped-logobleuhori.png';

const people = [
  {
    name: 'Lycée Lyssane Dine Bno Lkhattibe Salé',
    email: '',
    role: '',
    imageUrl:
      '',
    start: '2024',
    finish: '2029',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'École Nationale des Sciences Appliquées de Kénitra',
    email: '(ENSAK)',
    role: '',
    imageUrl:
      'https://ensa.uit.ac.ma/wp-content/uploads/cropped-logobleuhori.png',
    start: '2022',
    finish: '2024',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
]

export default function Example() {
  return (
  <div>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-2 lg:px-8 mb-20">
        <div className="relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#FEB95F" />
                <stop offset={1} stopColor="#FEB95F" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            <div className=' lg:text-center MyName'>
              <span className="text-blue">YOUSSEF</span> <span className="text-gray-700">BOUHAJA</span>
            </div>
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-black">
            Développeur Web Full Stack
            Passionné par la technologie et la création de solutions innovantes, 
            je suis un développeur web full stack avec une expertise en Python, Django, 
            et Django Rest Framework. J'ai une solide expérience dans le développement de sites web dynamiques et interactifs, 
            maîtrisant également HTML, CSS, et JavaScript. De plus, je suis compétent en React, 
            ce qui me permet de concevoir des applications web front-end modernes et performantes. 
            Toujours à la recherche de nouveaux défis, je m'efforce de créer des solutions efficaces et évolutives.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:ml-12 flex flex-col items-center lg:items-end ">
            <img
              alt="App screenshot"
              src={mypic}
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full mb-10"
            />
            
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start mb-8">
              <a
                href="#"
                className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                My Skills
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray">
                Download My Resume <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-2 lg:px-8">
        <div className="relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#FEB95F" />
                <stop offset={1} stopColor="#FEB95F" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto  text-left  lg:flex-auto lg:py-32 ">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            <div className=' lg:text-center MyName'>
              <span className="text-blue">My Educational </span> <span className="text-gray-700">Path</span>
            </div>
            </h2>
            <ul role="list" className="divide-y divide-blue">
              {people.map((person) => (
                <li key={person.email} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <img alt="" src={person.imageUrl} className="h-12 w-25 flex-none  bg-gray-50" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                    {person.start ? (
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        from <time dateTime={person.lastSeenDateTime}>{person.start}</time> <br />
                        to <time dateTime={person.lastSeenDateTime}>{person.finish}</time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">Online</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>


  </div>
    

  )
}
