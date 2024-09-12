import { useState, useEffect } from "react";

export default function Home() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const response = await fetch("http://192.168.0.77:8000/api/experiences");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      }
    }

    fetchExperiences().then(r => r);
  }, []);

  return (
    <div>
      <section>
        <img
          src="src/assets/showcase_group.png"
          alt="A group of pictures showcasing the experiences on AirBnb"
          className="w-full"
        />
      </section>
      <section>
        <h1 className="font-bold text-5xl p-2">Online Experiences</h1>
        <h2 className="font-thin text-2xl max-w-96 p-2">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h2>
      </section>
      <section className="flex flex-grow [&>*]:p-[18px]">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col justify-center w-full"
          >
            <div className="relative">
              <p className="absolute m-2 px-4 py-2 font-normal text-sm uppercase bg-slate-200 text-black rounded-xl">
                Sold Out
              </p>
              <img
            src={`http://192.168.0.77:8000/api/image/${experience.id}`}
            height={235}
            alt={experience.description}
            className="rounded-2xl"
            />
            </div>
            <div className="">
              <h4 className="text-sm font-light m-2">
                {experience.star_count}
              </h4>
              <p className="text-md font-medium m-2">
                {experience.description}
              </p>
              <p className="text-md font-light m-2">
                <span className="font-bold">
                  From {experience.starting_price}
                </span>{" "}
                / person
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
