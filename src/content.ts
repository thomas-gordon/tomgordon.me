/**
 * Homepage content.
 *
 * Everything a visitor reads lives here, kept apart from layout. Durations
 * ("17 years", "over 4 years") are worked out from the start dates in
 * `milestones`, so the copy stays accurate without anyone touching it. When
 * something changes, update a date or a list here rather than a sentence.
 */

export const site = {
  name: 'Tom Gordon',
  url: 'https://tomgordon.me',
  title: 'Tom Gordon — Technical Lead & Engineer, Melbourne',
  description:
    'Technical lead in Melbourne focused on mentorship, growing engineering teams, and building interfaces that make technology feel human.',
  analyticsId: 'G-Q1EHMXSL9G',
  githubUser: 'thomas-gordon',
}

type YearMonth = `${number}-${number}`

/**
 * Start dates (YYYY-MM) that every duration on the page is derived from.
 * These were back-calculated from earlier copy (e.g. "16 years" written in
 * both July 2025 and March 2026), so swap in the real months if you know
 * them.
 */
export const milestones = {
  /** First professional web development work */
  career: '2009-07',
  /** Design systems and component architecture */
  designSystems: '2016-03',
  /** Technical leadership, people management, hiring & mentoring */
  leadership: '2021-03',
  /** Managing a team (3+ direct reports) */
  managing: '2021-03',
  /** Leading frontend on the Pladia product suite */
  pladia: '2022-06',
} satisfies Record<string, YearMonth>

export type Years = Record<keyof typeof milestones, number>

/** Whole years elapsed since a YYYY-MM date. */
export function yearsSince(start: YearMonth, now = new Date()): number {
  const [year, month] = start.split('-').map(Number)
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month)
  return Math.max(0, Math.floor(months / 12))
}

export function getYears(now = new Date()): Years {
  const years = {} as Years
  for (const key of Object.keys(milestones) as (keyof Years)[]) {
    years[key] = yearsSince(milestones[key], now)
  }
  return years
}

export type LinkIcon =
  | 'email'
  | 'codepen'
  | 'linkedIn'
  | 'github'
  | 'resume'
  | 'medium'

export type ContactLink = { text: string; url: string; icon: LinkIcon }

export type Tool = { name: string; url: string }

export type ToolGroup = { category: string; tools: Tool[] }

export type WorkItem = { name: string; url?: string; summary: string }

export type ExperienceRow = { title: string; years: number; detail: string }

export const links: ContactLink[] = [
  {
    text: 'Email Me',
    url: 'mailto:thomasgordon02@gmail.com',
    icon: 'email',
  },
  {
    text: 'Codepen Experiments',
    url: 'https://codepen.io/thomas-gordon/',
    icon: 'codepen',
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thomas-gordon-46574b13',
    icon: 'linkedIn',
  },
  {
    text: 'GitHub',
    url: 'https://github.com/thomas-gordon',
    icon: 'github',
  },
  {
    text: 'Resume',
    url: 'https://docs.google.com/document/d/1Rw7b9PkSPXlfwEWWLziUkVCC5CsWF0Pmbv1R0jZssf8/',
    icon: 'resume',
  },
  {
    text: 'Medium',
    url: 'https://medium.com/@tomgwebdev',
    icon: 'medium',
  },
]

export const toolkit: ToolGroup[] = [
  {
    category: 'Libraries',
    tools: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'React Native', url: 'https://reactnative.dev/' },
      { name: 'TanStack', url: 'https://tanstack.com/' },
    ],
  },
  {
    category: 'Build',
    tools: [
      { name: 'Vite', url: 'https://vitejs.dev/' },
      { name: 'Yarn', url: 'https://yarnpkg.com/' },
    ],
  },
  {
    category: 'Testing',
    tools: [
      { name: 'Vitest', url: 'https://vitest.dev/' },
      { name: 'BrowserStack', url: 'https://www.browserstack.com/' },
    ],
  },
  {
    category: 'Analytics',
    tools: [
      {
        name: 'Google Analytics',
        url: 'https://analytics.google.com/analytics/web/',
      },
      { name: 'Mixpanel', url: 'https://mixpanel.com/' },
    ],
  },
  {
    category: 'Project management',
    tools: [{ name: 'Atlassian', url: 'https://www.atlassian.com/' }],
  },
  {
    category: 'Design',
    tools: [{ name: 'Figma', url: 'https://www.figma.com/' }],
  },
  {
    category: 'Code editing',
    tools: [
      { name: 'VS Code', url: 'https://code.visualstudio.com/' },
      { name: 'Cursor', url: 'https://www.cursor.com/' },
    ],
  },
  {
    category: 'AI assistants',
    tools: [
      { name: 'Claude', url: 'https://claude.ai/' },
      { name: 'Cursor', url: 'https://www.cursor.com/' },
    ],
  },
  {
    category: 'Deployment',
    tools: [
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Netlify', url: 'https://www.netlify.com/' },
      { name: 'Cloudflare Pages', url: 'https://pages.cloudflare.com/' },
    ],
  },
]

/** Everything on the homepage, with durations resolved for `now`. */
export function getContent(now = new Date()) {
  const years = getYears(now)

  return {
    years,

    intro: {
      heading: "Hi, I'm Tom.",
      paragraphs: [
        "I'm a technical lead with a focus on mentorship and user experience. I care as much about the people building a product as the people using it.",
        `For over ${years.managing} years I've managed a team of engineers: hiring, mentoring, and running agile ceremonies. I think good leadership is an extension of good design — clear, intentional, and centred on the people involved — and I work to balance technical rigour, delivery pace, and people growth.`,
        'Lifting the teams around me has been a thread through my career, from skilling up in-house developers in frontend best practice to leading frontend development across multiple teams on the Pladia product suite.',
        `Under that sits ${years.career} years of hands-on engineering. I started with simple HTML template manipulation in the early 1990s, and I still take work from Figma prototype to production React application myself — which keeps my technical guidance grounded in the real work.`,
      ],
    },

    links,

    toolkit: {
      heading: 'Current toolkit',
      lead: "Currently at work I'm using the following tools to get the job done.",
      groups: toolkit,
    },

    work: {
      heading: 'Recent work',
      items: [
        {
          name: 'Pladia',
          url: 'https://pladia.io/',
          summary: `For over ${years.pladia} years I've led frontend development across multiple teams on the Pladia product suite: a series of web applications that streamline the workflow of gallery management and experience design.`,
        },
        {
          name: 'Synced Player',
          summary:
            'Built a web audio player that synchronises playback with video content displayed in a separate browser context — using a shared runtime to keep audio and video in lockstep across decoupled surfaces.',
        },
        {
          name: 'Pladia spatial asset management',
          summary:
            'Built a spatial content management system for physical gallery environments. The system lets curators manage artwork placement and interpretive content across complex, three-dimensional exhibition spaces — translating real-world spatial data into a structured, editable model.',
        },
        {
          name: 'Yarra Valley Water | Website',
          url: 'https://www.yvw.com.au/',
          summary:
            "Helped bring agile processes into Yarra Valley's project management while building the frontend components and style guide onsite.",
        },
        {
          name: 'State Library Victoria | Website',
          url: 'https://www.slv.vic.gov.au/',
          summary:
            "Skilled up the SLV development team in frontend best practice and agile project management, alongside working on the library's frontend.",
        },
      ] satisfies WorkItem[],
    },

    experience: {
      heading: 'Experience that outlasts the stack',
      stat: {
        value: years.career,
        label: 'years of web development experience',
      },
      lead: "Through my career I've used innumerable configurations of dev tooling, and most of them have since been replaced. The tools live in the toolkit above; what carries from one stack to the next is how you lead, how you teach, and how you design for people.",
      rows: [
        {
          title: 'Frontend & user experience',
          years: years.career,
          detail:
            'Designing and building interfaces that make technology feel human, from prototype to production.',
        },
        {
          title: 'Design systems',
          years: years.designSystems,
          detail:
            'Component architecture and shared design language that let teams build consistently and change safely.',
        },
        {
          title: 'Technical leadership',
          years: years.leadership,
          detail:
            'Setting technical direction across teams and balancing technical rigour with delivery pace.',
        },
        {
          title: 'Mentoring & hiring',
          years: years.leadership,
          detail:
            'Hiring and mentoring engineers, and skilling up teams in frontend best practice and agile ways of working.',
        },
        {
          title: 'Team management',
          years: years.managing,
          detail:
            'Leading a team of 3+ direct reports and running the agile ceremonies that keep it moving.',
        },
      ] satisfies ExperienceRow[],
    },

    repos: {
      heading: 'Ideas to execution',
    },
  }
}
