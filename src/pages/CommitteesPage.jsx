import CommitteeCard from "../components/CommitteeCard";

function CommitteesPage() {
  const overviewIntro = `The 9th Edition of GD Goenka Public School Model United Nations 2025 is more than a conference—it’s a stage for diplomacy, strategy, and ideas that can change the world. From shaping global peace in the United Nations Security Council to addressing humanitarian crises in the UNGA Emergency Session, delegates will experience the thrill of decision-making in real time. History comes alive in committees like the Dumbarton Oaks Conference and Akbar’s Ibadat Khana, while national politics takes center stage in the Lok Sabha and AIPPM. For those drawn to international law and trade, the WTO Dispute Settlement Panel offers a unique challenge. Whether you are a first-time delegate or a seasoned debater, GDGPS MUN 2025 promises intense debate, bold solutions, and an unforgettable journey into the art of negotiation.`; 

  const committees = [
    {
      title: "AIPPM",
      overview:
        `Ask an Agniveer what stays longer — the pride of serving the nation for four years, or the unanswered question of ‘what next?’ The Agniveer scheme, often spoken of as a revolutionary reform to India’s military recruitment, promises a younger, stronger army. But behind the bold slogans and patriotic ardor lies a looming question that is often overlooked: Is this scheme trading long-term security and youth welfare for a short-term round of applause and a couple of feel-good headlines? Ask the thousands of Agniveers who sacrificed their youth to get into the military just to be sent back after 4 years of service without a pension, without a job and most importantly without a path forward. This AIPPM is not just a debate over a scheme; it is a decision that will shape the helpless lives of people who risked everything to serve their country. Let us create thought-provoking conversation and ask ourselves: Can a nation really prosper if those who were once ready to lay down their lives for the country are forgotten?`,
      agenda:
        "Evaluating the Agniveer scheme with special emphasis on creating a balance between national security and the welfare of youth.",
      image: "/images/c1.png"
    },
    {
      title: "UNHRC",
      overview:
        `Across Central and South-East Asia, terrorist organisations have weaponised one of humanity’s greatest vulnerabilities—its children. Forced recruitment robs them of safety, education, and innocence, leaving deep psychological wounds that endure long after the violence ends. The issue extends beyond the battlefield, demanding urgent attention to post-conflict rehabilitation, trauma recovery, and reintegration into society. Cultural sensitivities, resource limitations, and the stigma surrounding former child combatants make the challenge even more complex. Addressing these human rights violations requires coordinated action that blends legal protections, humanitarian aid, and mental health expertise. In this committee, you will have the platform to dissect these realities, confront the moral and political dilemmas, and shape actionable, compassionate strategies that may one day restore stolen childhoods. Your ideas could become their lifeline.`,
      agenda:
        "Addressing the human rights violations arising from the conscription of children by terrorist organizations, with special emphasis on psychological rehabilitation in Central & South East Asia.",
      image: "/images/c2.png"
    },
    {
      title: "HSRA",
      overview:
        `The blows struck at me today will be the last nails in the coffin of British rule in India.” The date is 30 December 1927; death penalties have been decreed, and the Hindustan Socialist Republican Association (HSRA) is in a state of upheaval. Our plans are now compromised, and trust amongst our ranks has crumbled. Nevertheless, we rekindled our resolve amidst the ashes of Kakori. Consequently, what should be our subsequent measures? How might we reorganize the HSRA with a significant portion of our leadership lost? How can we continue to operate under constant surveillance? This committee is not concerned with debate or diplomatic formalities; it aims to initiate genuine change. You will confront the formidable challenges faced by revolutionaries—survival, planning, loyalty, betrayal, and purpose. If this revolutionary fire is to be ignited within you, if you possess the capacity to shape the future of this committee and to honor the sacrifices of martyrs, then step forward. Join the HSRA.`,
      agenda:
        "Envisaging a pan-India strategy for a revolution for an independent socialist Hindustan & devising the immediate roadmap to function, after the loss of leadership post Kakori Kaand Trials and increasing police scrutiny after the killing of John P.Saunders.",
      image: "/images/c3.png"
    },
    {
      title: "UNSC",
      overview:
        `In the words of Jean-Roger Kaseki, Congolese activist- “The world talks about Congo's minerals, but never about our blood." For over a decade, the United Nations Organization Stabilization Mission in the DRC has advocated for peace and order. Despite all these efforts, humanitarian conditions in Congo are deteriorating. Internal Displacement has further exacerbated the crisis, causing disease outbreaks and gender-based violence. Violent demonstrations continue across various locations of the Democratic Republic of Congo, resulting in adverse security implications. The Secretary General's latest report on the current status of Democratic Republic of Congo documents a rise in armed conflict primarily by the M23 rebel group. The report reviews the implementation of MONUSCO mandate and highlights growing humanitarian concerns in the eastern provinces of the DRC. The United Nations Security Council must assess the current situation in DRC and mitigate the effects of the crisis.`,
      agenda:
        "Addressing the situation concerning the Democratic Republic of the Congo.",
      image: "/images/c4.png"
    },
    {
      title: "UN Women (UNW)",
      overview:
        `UN Women leads the United Nations in its pursuit of gender equality and accelerated women’s empowerment. It acts as a global catalyst for change. It’s vital role in advancing women’s rights and combating gender-based violence reaffirms its continued relevance and necessity. Its unwavering efforts to uphold women’s rights aren’t just a part of a global agenda, they are personal battles for millions. Around the world, financial support for institutions that empower women is shrinking, slowly eroding the foundation of progress. But through advocacy and action, that tide can be turned. By reaffirming and advancing the Sevilla Commitment made at the 4th International Conference on Financing for Development, doors can be opened to the funding that fuels change. The chance to transform commitments into resources and resources into results lies here. This session is not just a conversation. The world is listening, and it is waiting. We must push for inclusive financing strategies and demand gender responsive budgeting that reflects the real lives and needs of women across every nation. Only then can we begin to fill the funding gaps that hold back progress. Aligning with the Sevilla Commitment is more than a policy step, it is a promise. A promise that injustice will not thrive through neglect. A promise that we will fight not only for gender equity, but for a world where women no longer have to fight alone.`,
      agenda:
        "Addressing the global decline in funding for women's empowerment institutions and reinforcing international investment in gender equity, in alignment with the framework of the Compromiso de Sevilla.",
      image: "/images/c5.png"
    },
    {
      title: "Lok Sabha",
      overview:
        `India’s democracy has long worn its resilience as a crown but even the mightiest foundations tremble when confronted with the weight of internal unrest. In the eastern corridors of our nation, a burning crisis has erupted, where identity battles citizenship, and politics bleeds into violence. West Bengal stands at crossroads, streets echoing with protests, institutions drowning in mistrust and its communities divided along the weakest lines. Beneath every vote, lies fear and behind every government action lies a question about allegiance. Illegal immigration is no longer a border issue, it has become an epicenter of community rift, population concerns and electoral uncertainty. At the same time, a worrying rise in political assassinations threatens the very heart of democratic expression. As the session convenes, the stakes are clear- will order be restored through dialogue or will silence continue to push division? This session doesn’t just demand policy, it demands courage. For in this chamber, the future of West Bengal, and the very integrity of India's federalism itself, is uncertain. Will the house of people stand by the values of the Indian constitution or will political gain silence the promises of the preamble?`,
      agenda:
        "Addressing the political assassinations, communal Riots and center-state power dispute in the state of West Bengal with special emphasis on illegal immigration.",
      image: "/images/c1.png"
    },
    {
      title: "Dumbarton Oaks",
      overview:
        `Welcome to 1944. With the severe impact of World War II, humanity lies on the brink of collapse, the world anxiously holds its breath, and history awaits to be written. The then-established international organisation known as the League of Nations ended up crumbling miserably. From the ruins of hopelessness, a tiny glimmer of optimism emerges as four great powers — China, the Soviet Union, the United Kingdom, and the United States — assemble at a conference in Washington, D.C. The four secretly assemble with the single aim of forging a blueprint for a new successful international organisation to ensure peaceful coexistence among nations, justice, and the secure future of mankind. The conference navigates itself through questions like how such a large institution would function, who would head it, and whether all the nations would truly collaborate with one another. Can trust be rebuilt after the betrayals of war? Can sovereignty survive in a world that demands global unity?`,
      agenda:
        "Drafting proposals for the establishment of a General International Committee",
      image: "/images/c4.png"
    },
    {
      title: "JCC",
      overview:
        "",
      agenda: "Case file (To be released 7 days prior to the conference)",
      image: "/images/c7.png"
    },
    {
      title: "Akbar’s Ibadat Khana",
      overview:
        `The Mughal Empire was being destroyed, not by a foreign intruder but by their people, divided among religions. Akbar witnessed a troubling surge in sectarian tensions: Muslim theologians condemned those with differing beliefs. Hindu leaders grew wary of imperial interference, and bitter feuds began to spread, district by district. In this turmoil, Akbar took a radical step: “A monarch should be free to choose the best from every faith,” he proclaimed as he built not another fort, but a religious sanctuary —the Ibadat Khana, the House of Worship. Here, faiths meet not to conquer but to unite. This is not just an ordinary council but a battlefield of belief. The result? Din-I-Ilahi: The Religion of God. A spiritual fellowship. Not a new religion, but a shared moral philosophy. No scripture. No rituals. Just truth, love, reason, and tolerance. But not everyone welcomed this experiment. People began to talk. Orthodoxy was threatened, spirituality was questioned, and belief had begun to fail. Could an empire survive with one emperor and many gods? Could unity thrive without uniformity? And now, as the court prepares to reconvene at Fatehpur Sikri, the biggest question remained unanswered —Is Din-I-Ilahi a path to peace… or a challenge to power?`,
      agenda: "The creation of Din-i-Ilahi.",
      image: "/images/c8.png"
    },
    {
      title: "WTO; DSB",
      overview:
        "",
      agenda: "Case file (To be released 7 days prior to the conference)",
      image: "/images/c9.png"
    },
    {
      title: "UNGA; ESS",
      overview:
        `"When justice turns into a privilege, humanity is never more vulnerable." What if you were unable to cross a border and your life depended on it? What if the politics of those who professed to be your protectors blocked the only path to safety, not the enemy you knew? Across all conflict zones around the world, armed non-state groups rule by force, not by mandate. They decide who eats, who leaves and who is left behind. Government falters. Aid convoys are forced to retreat. Entire town vanishes, first from map then from memory. These people are not anonymous victims. They are the doctors operating by candlelight because the hospital generator ran out of fuel. They are the father digging through rubble with bare hands, searching for his child. They are the girl who hides her schoolbooks because education is forbidden. This is a test of our global conscience, not just a humanitarian crisis. We must consider whether we can still claim to be for peace when the world decides to intervene selectively and when protection turns into a political issue.`,
      agenda:
        "Humanitarian intervention and protection mandates involving armed non-State groups in conflict zones.",
      image: "/images/c7.png"
    },
    {
      title: "International Press Corps",
      overview:
        "",
      agenda: "Photography, Journalism and Caricature.",
      image: "/images/c10.png"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      {/* Heading */}
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h2 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          Committees
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      {/* Overview with image on right */}
      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-center mb-12">
        <div className="md:col-span-3">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-left">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {overviewIntro}
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center mt-6 md:mt-0">
          <img
            src="committee.png"
            alt="Committees"
            className="rounded-2xl shadow-lg max-w-[150px] sm:max-w-[200px] md:max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>

      {/* Cards */}
      <div className="mx-auto max-w-6xl space-y-6 sm:space-y-8">
        {committees.map((c, idx) => (
          <CommitteeCard
            key={idx}
            title={c.title}
            overview={c.overview}
            agenda={c.agenda}
            image={c.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CommitteesPage;
