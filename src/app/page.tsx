import Hero from './components/sections/hero/hero'
import WhatIsRetreat from './components/sections/what-is-retreat/what-is-retreat'
import WhoIsItFor from './components/sections/who-is-it-for/who-is-it-for'
import WhatToExpect from './components/sections/what-to-expect/what-to-expect'
import PlacesToVisit from './components/sections/places-to-visit/places-to-visit'
import DailySchedule from './components/sections/daily-schedule/daily-schedule'
import Authors from './components/sections/authors/authors'
import Team from './components/sections/team/team'
import Location from './components/sections/location/location'
import Pricing from './components/sections/pricing/pricing'
import Booking from './components/sections/booking/booking'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsRetreat />
      <WhoIsItFor />
      <WhatToExpect />
      <PlacesToVisit />
      <DailySchedule />
      <Authors />
      <Team />
      <Location />
      <Pricing />
      <Booking />
    </main>
  )
}
