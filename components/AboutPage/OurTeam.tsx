import React from "react";
const teams = [
  {
    id: 1,
    position: "C.E.O.",
    name: "Ronny Jofra",
    title: "If the distribution of letters and 'words' is random",
    image: "/aboutpage/01.jpg",
  },
  {
    id: 2,
    position: "Manager",
    name: "Salma kama",
    title: "If the distribution of letters and 'words' is random",
    image: "/aboutpage/02.jpg",
  },
];
const OurTeam = () => {
  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Our Professional Team
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>
        {/* <!--end grid--> */}

        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-[32px] p-8  ">
          {teams.map((team) => (
            <div key={team.id}>
              <div className="team p-6 rounded-md border border-gray-100 group bg-white ">
                <img
                  src={team.image}
                  className="size-24 mx-auto rounded-full shadow-md dark:shadow-gray-800"
                  alt={team.name}
                />

                <div className="content mt-4">
                  <a
                    href="https://shreethemes.in/techwind/landing/page-aboutus.html"
                    className="text-lg font-medium hover:text-indigo-600 block"
                  >
                    {team.name}
                  </a>
                  <span className="text-slate-400 block">{team.position}</span>

                  <p className="text-slate-400 mt-4">{team.title}</p>

                  {/* <!--end icon--> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
