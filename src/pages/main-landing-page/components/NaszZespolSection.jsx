import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Filip Dadas',
    role: 'Właściciel',
    img: '/team-person-1.jpeg',
    bio: 'Dbający o każdy detal i jakość wykonanej pracy, zawsze ma na uwadze zadowolenie klienta. Auto nie jest dobrze wyczyszczone dopóki sam się nie zadowoli efektem.',
  },
  {
    id: 2,
    name: 'Jakub Safian',
    role: 'Właściciel',
    img: '/team-person-2.jpeg',
    bio: 'Ekspert w dziedzinie detailingu wnętrz, dbający o najmniejszy szczegół, nie znosi brudnych dywanów i foteli więc to jego priorytet.',
  },
];

const NaszZespolSection = () => {
  return (
    <section
      id="nasz-zespol"
      className="py-20 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d0d0d 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="lux-divider mb-6" />
          <h2 className="section-heading">Nasz Zespół</h2>
          <p className="section-subheading">
            Pasja do doskonałości na każdym stopniu — poznaj ludzi, którzy zostawią twoje auto czyste.
          </p>
        </div>

        {/* Team Row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Person 1 */}
          <TeamCard member={teamMembers[0]} align="right" />

          {/* Center divider / description */}
          <div className="flex-shrink-0 lg:w-64 text-center">
            <div
              className="w-px h-24 mx-auto mb-6 hidden lg:block"
              style={{ background: 'linear-gradient(to bottom, transparent, #c0c0c0, transparent)' }}
            />
            <p
              className="hidden lg:block text-sm leading-relaxed font-sans italic"
              style={{ color: '#a0a0a0' }}
            >
              „Każde auto traktujemy jak własne. Precyzja, pasja i dbałość o szczegóły — to nasza
              codzienność."
            </p>
            <div
              className="w-px h-24 mx-auto mt-6 hidden lg:block"
              style={{ background: 'linear-gradient(to bottom, transparent, #c0c0c0, transparent)' }}
            />
          </div>

          {/* Person 2 */}
          <TeamCard member={teamMembers[1]} align="left" />
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, align }) => {
  return (
    <div className="flex-1 flex flex-col items-center group">
      {/* Photo frame */}
      <div
        className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden mb-6 smooth-transition hover-scale"
        style={{
          background: 'linear-gradient(135deg, #111111 0%, #2a2a2a 100%)',
          boxShadow:
            '0 0 0 1px rgba(192,192,192,0.2), 0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(192,192,192,0.08)',
        }}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
        {/* Silver overlay shimmer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition"
          style={{
            background:
              'linear-gradient(135deg, rgba(192,192,192,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Info */}
      <div className={`text-${align} w-full max-w-xs`}>
        <h3
          className="text-xl font-bold font-serif mb-1"
          style={{ color: '#e8e8e8' }}
        >
          {member.name}
        </h3>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4 font-sans"
          style={{ color: '#a0a0a0' }}
        >
          {member.role}
        </p>
        <p
          className="text-sm leading-relaxed font-sans"
          style={{ color: '#787878' }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
};

export default NaszZespolSection;
