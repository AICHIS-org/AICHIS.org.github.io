/* =========================================================================
   AICHIS — SITE CONTENT
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website's text,
   members, or resources. No HTML/CSS knowledge required.

   HOW IT WORKS
   ------------
   Everything below is grouped by language: `es` (Español), `en` (English),
   `sv` (Svenska). Whatever you write for one language, write the equivalent
   for the other two so all versions stay in sync.

   - To change a piece of text  -> find it and edit the text between quotes.
   - To add a member            -> copy a { ... } block in the `members` list
                                    and change the values.
   - To add a resource          -> copy a { ... } block in the `resources`
                                    list and change the values.

   Tip: keep the quotes " " and commas , exactly as they are.
   ========================================================================= */

const CONTENT = {

  /* ================================ ESPAÑOL ============================== */
  es: {
    nav: {
      about: "Sobre nosotros",
      members: "Miembros",
      resources: "Recursos",
    },
    hero: {
      title: "AICHIS",
      subtitle: "Asociación de Investigadores Chilenos en Suecia",
      cta: "Conócenos",
    },
    about: {
      title: "Sobre nosotros",
      lead: "Somos una comunidad de investigadoras e investigadores chilenos que viven y trabajan en Suecia. Nos une la ciencia, la colaboración y el deseo de tender puentes entre Chile y Suecia.",
      cards: [
        {
          title: "Nuestra misión",
          text: "Conectar y apoyar a la comunidad científica chilena en Suecia, fomentando la colaboración académica y el intercambio de conocimiento.",
        },
        {
          title: "Qué hacemos",
          text: "Organizamos encuentros, compartimos oportunidades y creamos redes entre investigadores de todas las disciplinas y etapas de carrera.",
        },
        {
          title: "Nuestra visión",
          text: "Ser un puente activo entre Chile y Suecia, impulsando la ciencia, la cultura y las oportunidades para las próximas generaciones.",
        },
      ],
    },
    members: {
      title: "Miembros",
      lead: "Personas que forman parte de AICHIS. Pronto agregaremos más perfiles.",
    },
    resources: {
      title: "Recursos",
      lead: "Enlaces y materiales útiles para investigadores chilenos en Suecia. Iremos ampliando esta sección.",
    },
    footer: {
      tagline: "Asociación de Investigadores Chilenos en Suecia",
      contributeTitle: "Ciencia abierta",
      contributeText: "Este sitio es de código abierto. ¿Encontraste un error o quieres sugerir un cambio? Cuéntanoslo en GitHub, o si te animas, propón directamente la mejora.",
      reportIssue: "Reportar un problema",
      proposeChange: "Proponer un cambio (Pull Request)",
    },
  },

  /* ================================ ENGLISH ============================== */
  en: {
    nav: {
      about: "About us",
      members: "Members",
      resources: "Resources",
    },
    hero: {
      title: "AICHIS",
      subtitle: "Association of Chilean Researchers in Sweden",
      cta: "Learn more",
    },
    about: {
      title: "About us",
      lead: "We are a community of Chilean researchers living and working in Sweden. We are united by science, collaboration, and a wish to build bridges between Chile and Sweden.",
      cards: [
        {
          title: "Our mission",
          text: "To connect and support the Chilean scientific community in Sweden, fostering academic collaboration and knowledge exchange.",
        },
        {
          title: "What we do",
          text: "We organise meetups, share opportunities, and build networks among researchers across all disciplines and career stages.",
        },
        {
          title: "Our vision",
          text: "To be an active bridge between Chile and Sweden, advancing science, culture, and opportunities for the next generations.",
        },
      ],
    },
    members: {
      title: "Members",
      lead: "People who are part of AICHIS. More profiles coming soon.",
    },
    resources: {
      title: "Resources",
      lead: "Useful links and materials for Chilean researchers in Sweden. We will keep expanding this section.",
    },
    footer: {
      tagline: "Association of Chilean Researchers in Sweden",
      contributeTitle: "Open science",
      contributeText: "This site is open source. Found something wrong or have a suggestion? Let us know on GitHub, or, if you like, propose the change yourself.",
      reportIssue: "Report an issue",
      proposeChange: "Propose a change (Pull Request)",
    },
  },

  /* ================================ SVENSKA ============================== */
  sv: {
    nav: {
      about: "Om oss",
      members: "Medlemmar",
      resources: "Resurser",
    },
    hero: {
      title: "AICHIS",
      subtitle: "Föreningen för chilenska forskare i Sverige",
      cta: "Läs mer",
    },
    about: {
      title: "Om oss",
      lead: "Vi är en gemenskap av chilenska forskare som bor och arbetar i Sverige. Vi förenas av vetenskap, samarbete och en önskan att bygga broar mellan Chile och Sverige.",
      cards: [
        {
          title: "Vårt uppdrag",
          text: "Att koppla samman och stödja den chilenska forskargemenskapen i Sverige och främja akademiskt samarbete och kunskapsutbyte.",
        },
        {
          title: "Vad vi gör",
          text: "Vi anordnar träffar, delar möjligheter och bygger nätverk mellan forskare inom alla discipliner och karriärsteg.",
        },
        {
          title: "Vår vision",
          text: "Att vara en aktiv bro mellan Chile och Sverige som främjar vetenskap, kultur och möjligheter för kommande generationer.",
        },
      ],
    },
    members: {
      title: "Medlemmar",
      lead: "Personer som är en del av AICHIS. Fler profiler kommer snart.",
    },
    resources: {
      title: "Resurser",
      lead: "Användbara länkar och material för chilenska forskare i Sverige. Vi fortsätter att utöka denna sektion.",
    },
    footer: {
      tagline: "Föreningen för chilenska forskare i Sverige",
      contributeTitle: "Öppen vetenskap",
      contributeText: "Den här webbplatsen är öppen källkod. Hittade du ett fel eller har ett förslag? Berätta för oss på GitHub, eller föreslå gärna ändringen själv.",
      reportIssue: "Rapportera ett problem",
      proposeChange: "Föreslå en ändring (Pull Request)",
    },
  },

};

/* =========================================================================
   MEMBERS
   -------------------------------------------------------------------------
   Names, roles and links are the same in every language, so they live here
   once. `role` can be translated per language if you wish (see below).
   To add a member, copy one { ... } block and edit the values.
   `photo` is optional — leave "" to show initials instead.
   ========================================================================= */

const MEMBERS = [
  {
    name: "Nombre Apellido",
    role: { es: "Investigador/a", en: "Researcher", sv: "Forskare" },
    affiliation: "Universidad / University",
    photo: "", // e.g. "assets/img/members/name.jpg"
    link: "",  // e.g. "https://..." (personal or institutional page)
  },
  // --- copy the block above to add another member ---
];

/* =========================================================================
   RESOURCES
   -------------------------------------------------------------------------
   Each resource has a title, a short description and a link.
   Titles and descriptions can be translated per language.
   To add a resource, copy one { ... } block and edit the values.
   ========================================================================= */

const RESOURCES = [
  {
    title: {
      es: "Ejemplo de recurso",
      en: "Example resource",
      sv: "Exempelresurs",
    },
    description: {
      es: "Una breve descripción de este recurso y por qué es útil.",
      en: "A short description of this resource and why it is useful.",
      sv: "En kort beskrivning av denna resurs och varför den är användbar.",
    },
    link: "https://example.com",
  },
  // --- copy the block above to add another resource ---
];
