import {
  FaComments,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaAward,
} from "react-icons/fa";

function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      {/* About Us Main Heading */}
      <section className="mx-auto max-w-6xl text-center mb-12 sm:mb-16">
        <h2 className="h-serif text-gold text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide leading-snug">
          About Us
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      {/* About Our School Section */}
      <section className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left - About Our School */}
        <div>
          <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-left">
            About Our School
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-yellow-500 mt-2 sm:mt-4 mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            The{" "}
            <span className="font-semibold text-white">
              GD Goenka Public School
            </span>
            , established in{" "}
            <span className="text-yellow-400 font-semibold">1994</span> by the
            Gayatri Devi Goenka Group, has upheld a tradition of excellence
            across academics, co-curricular activities, and the holistic growth
            of individuals. The Lucknow branch, founded in{" "}
            <span className="text-yellow-400 font-semibold">2011</span> and
            managed by the Nandini Educational and Charitable Trust, is
            dedicated to nurturing a supportive and dynamic learning
            environment.
            <br />
            <br />
            Guided by our motto,{" "}
            <span className="italic text-yellow-400 font-bold">
              “Higher, Stronger, Brighter”
            </span>
            , our mission is to create an engaging space that cultivates{" "}
            <span className="text-white font-semibold">innovation</span>,
            nurtures{" "}
            <span className="text-white font-semibold">resilience</span>, and
            builds a strong foundation for lifelong success.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src="about us.png"
            alt="About GDGPS"
            className="rounded-2xl shadow-lg w-[250px] sm:w-[300px] md:w-[350px] object-cover"
          />
        </div>
      </section>

      {/* About Our MUN Section */}
      <section className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start mt-16 sm:mt-24">
        {/* Left - About Our MUN */}
        <div>
          <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-left">
            About Our MUN
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-yellow-500 mt-2 sm:mt-4 mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            The GD Goenka Public School Model United Nations was inaugurated in{" "}
            <span className="text-yellow-400 font-semibold">2016</span> with
            the vision of creating a platform where delegates could come
            together to engage in purposeful and constructive debate. Since
            then, we have embarked on a long and meaningful journey that has
            brought us to the{" "}
            <span className="text-yellow-400 font-semibold">
              Ninth Edition
            </span>{" "}
            of GDGPS MUN.
            <br />
            <br />
            More than just a forum for debate, GDGPS MUN is a{" "}
            <span className="font-semibold text-white">
              symbol of leadership, diplomacy, and global awareness
            </span>
            , and a testament to the enduring importance of dialogue. Today, it
            continues to empower young leaders to question, collaborate, and
            shape the future with conviction.
          </p>
        </div>

        {/* Right - Features with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-6 sm:mt-10">
          <div className="flex items-center gap-3">
            <FaComments className="text-gold text-lg sm:text-2xl" />
            <p className="text-gray-300 text-sm sm:text-base">
              Engage in meaningful discussions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaLightbulb className="text-gold text-lg sm:text-2xl" />
            <p className="text-gray-300 text-sm sm:text-base">
              Enhance critical thinking
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaHandshake className="text-gold text-lg sm:text-2xl" />
            <p className="text-gray-300 text-sm sm:text-base">
              Practice diplomacy
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaUsers className="text-gold text-lg sm:text-2xl" />
            <p className="text-gray-300 text-sm sm:text-base">
              Network with peers
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaAward className="text-gold text-lg sm:text-2xl" />
            <p className="text-gray-300 text-sm sm:text-base">
              Earn special awards
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
