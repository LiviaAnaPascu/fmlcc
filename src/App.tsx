import React from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/navbar/footer/Footer";
import { Logo } from "./svgs/Logo";
import Section from "./components/Section";
import { StravaQR } from "./svgs/StravaQR";
import Events from "./components/Events";

function App() {
  const about =
    "fml.cc is creating a new open space in vienna. a bold step towards demolishing the dominant masculine cycling environment and challenging preexisting norms and biases that have long excluded or marginalized women. by offering group rides, workshops, and an open platform for discussion and collaboration, fml.cc aims to build a community deeply rooted in shared values, experiences, and passion for cycling.one of the core missions of fml.cc is to harness the often-underestimated power of female road rage. instead of letting frustration and anger be built up, the collective encourages women to bundle these emotions into a powerful force for change. by redirecting this energy, fml.cc aims to foster resilience, determination, and solidarity among its members. the collective is not just about riding bikes; it's about creating a supportive and empowering network where women can connect, inspire each other, and grow together. fml.cc recognises the unique challenges women face in the male-dominated sport and seeks to provide a space where they can be heard and seen – together we ride, thrive and conquer";
  const voices =
    "When I set off alone on my bike for the first time, without a GPS, without a plan, just my bike, the tarmac and me, it was a feeling of pure freedom. I was able to distil two reasons for this: On one hand, up to this day, I had always ridden with my boyfriend, so I had strong guidance I could rely on. Now I could and, above all, had to be able to rely on myself. I realized, I am enough. To myself I can be both: good company and strong guidance. On the other hand, it was a new sense of empowerment, to claim the streets for myself, as a young woman. I was suddenly faster than the male gazes that would have hit me in such a short and tight clothing, the sound of my freehub being louder than their whistles. I preferred to ride alone for a long time. At some point, I also enjoyed riding in mixed groups. I’ve learned that although I can trust myself (and my boyfriend) blindly, that doesn’t apply to all fellow cyclists: While I enjoyed the social aspect, I was nervously thinking for everyone in the group, constantly assessing risks and predicting behaviors. I didn’t imagine that I would also be confronted with so-called “mental load”, i.e. invisible mental work that is often done by women, in connection with my favorite hobby. (Because I know that some men will feel targeted and generalized by my words, I do want to emphasize, that “not all men” unknowingly hand over their thinking work to women and that I really enjoy riding with considerate and cautious groups of men). Nevertheless, I experienced an epiphany on my first rides in women-only groups: everyone is mindful, the risky situations quasi nonexistent. If someone falls behind, everyone waits as a natural reaction without anyone having to remind the others: When the traffic light turns yellow, you don’t accelerate and thereby pressuring those behind you to either break the law or fall behind. You stop together, give a damn about the pace exchange a few nice words and make sure everyone is having fun. I believe that if we take care of each other, we will ultimately become stronger. And there’s nothing I enjoy more than claiming our space on the roads with a strong group and thus sharing the feeling of empowerment I felt after my first solo ride.";

  const sections = ["home", "about", "strava", "events"];

  const events = [
    { day: 2, message: "Event 1" },
    { day: 9, message: "Event 2" },
    { day: 16, message: "Event 3" },
    { day: 23, message: "Event 4" },
    { day: 30, message: "Event 4" },
  ];
  return (
    <div className="App">
      <NavBar logo={<Logo width={139} height={88} />} sections={sections} />
      <main className="px-[50px]">
        <Section header="ABOUT" content={about} id="about" />
        <Section
          className="mb-[100px]"
          header="VOICES FROM WITHIN"
          content={voices}
        />
        <Section
          header="Strava"
          id="strava"
          content={
            <div>
              <StravaQR width={200} height={200} />
            </div>
          }
        ></Section>
        <Section
          header="Events"
          id="events"
          content={<Events events={events} />}
        ></Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
