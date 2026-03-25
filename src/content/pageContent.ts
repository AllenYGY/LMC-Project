import cinemaAuditorium from '../../images/cinema_auditorium.jpg';
import aiGenerated from '../../images/ai_generated.svg';
import copyrightSymbol from '../../images/copyright_symbol.svg';
import bigDataPrecision from '../../images/big_data_precision.svg';
import virtualProduction from '../../images/virtual_production.svg';
import streamingDisruption from '../../images/streaming_disruption.svg';

export interface Evidence {
  label?: string;
  source: string;
  date?: string;
  summary: string;
  url?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  thesis: string;
  imageSrc: string;
  imageAlt: string;
}

export interface IssueContent {
  id: string;
  tone: 'positive' | 'negative';
  kicker: string;
  deck: string;
  title: string;
  intro: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  evidence: Evidence;
  placeholder?: boolean;
  reverse?: boolean;
}

export interface PolicyPoint {
  title: string;
  body: string;
}

export interface PolicyCallout {
  title: string;
  body: string;
  points: PolicyPoint[];
  evidence: Evidence;
}

export interface CreditLink {
  label: string;
  url: string;
}

export interface PageContent {
  hero: HeroContent;
  overview: {
    title: string;
    body: string;
    guidingQuestion: string;
    balanceCards: Array<{
      tone: 'positive' | 'negative';
      label: string;
      title: string;
      body: string;
    }>;
  };
  issues: IssueContent[];
  policyCallout: PolicyCallout;
  keyMessage: {
    title: string;
    body: string;
    iconSrc: string;
    iconAlt: string;
  };
  credits: {
    images: CreditLink[];
    news: CreditLink[];
    note: string;
  };
}

const pageContent: PageContent = {
  hero: {
    subtitle: 'Language, Media and Culture / Cinema Project',
    title: 'How Digital Technology Reshapes Cinema',
    thesis:
      'Digital technology is a double-edged force for the cinema business: it improves audience targeting and production efficiency, but it also creates new threats through AI infringement and streaming disruption.',
    imageSrc: cinemaAuditorium,
    imageAlt: 'An empty cinema auditorium with rows of seats facing a screen.',
  },
  overview: {
    title: 'Four Impacts Now Define the Cinema Business',
    body:
      'This version now includes two positive impacts and two negative impacts. Together, the four sections show how digital technology makes cinema more efficient and creative while also weakening theatrical exclusivity and copyright control.',
    guidingQuestion:
      'How do digital tools make cinema more efficient and creative, while also weakening copyright control and theatrical exclusivity?',
    balanceCards: [
      {
        tone: 'positive',
        label: 'Opportunities',
        title: 'Smarter operations and more flexible production',
        body:
          'Big data improves scheduling and marketing, while digital production tools lower costs and expand what filmmakers can create.',
      },
      {
        tone: 'negative',
        label: 'Risks',
        title: 'Weaker control over film assets and audience habits',
        body:
          'AI raises copyright and likeness conflicts, and streaming continues to put pressure on cinema attendance and theatrical value.',
      },
    ],
  },
  issues: [
    {
      id: 'big-data-operations',
      tone: 'positive',
      kicker: 'Audience Insight',
      deck: 'Big Data in cinema operations and precision scheduling',
      title: 'Big Data in Cinema Operations: Precision Scheduling and Targeted Marketing',
      intro:
        'Digital technology has transformed cinema operations by enabling data-driven scheduling and marketing. Instead of relying mainly on subjective judgement, cinemas can now use ticketing and audience data to improve occupancy rates and revenue efficiency.',
      bullets: [
        'Online ticketing platforms such as Maoyan and Fandango collect real-time data on demographics, viewing habits, and regional preferences.',
        'Cinemas can adjust screening times, screen sizes, and even ticket prices in response to changing demand across different cities and time slots.',
        'Targeted marketing makes promotion more efficient by matching films with the audiences most likely to attend them.',
      ],
      imageSrc: bigDataPrecision,
      imageAlt: 'A stylized cinema screen with a chart rising above rows of seats.',
      evidence: {
        label: 'Draft Evidence',
        source: 'Current group draft',
        summary:
          'The draft cites examples such as The Wandering Earth 2 and Barbie to show how demand forecasting can increase screenings in strong markets and improve weekend sales. It also argues that data-driven scheduling can raise occupancy and reduce empty-screen waste.',
      },
    },
    {
      id: 'digital-production',
      tone: 'positive',
      kicker: 'Production Shift',
      deck: 'Breaking with traditional film-making methods',
      title: 'Breaking Away from Traditional Film Production Methods',
      intro:
        'Digital technology has changed film production by reducing dependence on heavy equipment, large physical sets, and purely manual effects work. As a result, film-making has become more flexible, more efficient, and more open to creative experimentation.',
      bullets: [
        'Digital cameras lower production costs and make filming more portable, which helps independent filmmakers work with smaller crews and tighter budgets.',
        'Virtual production and digital environments allow scenes to be built beyond the limits of physical locations and traditional set construction.',
        'Modern CGI and digital post-production let directors create more complex visual worlds and deliver a more immersive cinematic experience.',
      ],
      imageSrc: virtualProduction,
      imageAlt: 'A stylized LED volume and virtual production camera setup.',
      evidence: {
        label: 'Draft Evidence',
        source: 'Current group draft',
        summary:
          'The current draft uses Everything Everywhere All at Once to show how portable digital cameras support lower-budget production, and The Wandering Earth 2 to show how digital environments and CGI expand what filmmakers can stage on screen.',
      },
      reverse: true,
    },
    {
      id: 'ai-copyright',
      tone: 'negative',
      kicker: 'Copyright Risk',
      deck: 'AI and cinema copyright infringement',
      title: 'AI Copyright Infringement and Digital Clones',
      intro:
        'Generative AI can imitate characters, actors, and cinematic styles with striking accuracy. That creates legal conflict over copyrighted training data and commercial confusion when unofficial outputs start competing with real film products.',
      bullets: [
        'Movie frames, posters, and concept art can be absorbed into datasets without licensing.',
        'AI-generated scenes and replicas can blur the line between official releases and fake content.',
        'Studios and performers lose control when likenesses and creative assets are copied at scale.',
      ],
      imageSrc: aiGenerated,
      imageAlt: 'An abstract AI-generated human profile made of layered shapes.',
      evidence: {
        label: 'News Example',
        source: 'Associated Press',
        date: 'February 15, 2026',
        summary:
          'Hollywood groups condemned ByteDance\'s Seedance 2.0, saying the model raised copyright and performer-likeness concerns. The backlash showed how AI video generation can become an immediate legal and ethical problem for cinema.',
        url: 'https://apnews.com/article/ai-seedance-bytedance-hollywood-copyright-7e445388401d172c6bf51d0d42aa4f24',
      },
    },
    {
      id: 'streaming-disruption',
      tone: 'negative',
      kicker: 'Exhibition Pressure',
      deck: 'The streaming disruption and the decline of traditional cinema',
      title: 'Streaming Disruption and Theatrical Decline',
      intro:
        'Streaming services have expanded access to films, but they have also created serious pressure on the traditional cinema business. By weakening the theatrical window and shifting audiences toward home viewing, streaming undermines the exclusivity and communal experience that theaters rely on.',
      bullets: [
        'Day-and-date releases and shorter theatrical windows train audiences to wait for streaming instead of treating cinema as a must-see-first event.',
        'The convenience of home viewing makes it harder for theaters to protect ticket sales, especially when audiences know films will reach streaming quickly.',
        'A constant flow of direct-to-streaming content weakens the cultural value of cinema by making films feel more disposable and less like destination events.',
      ],
      imageSrc: streamingDisruption,
      imageAlt: 'A stylized streaming screen pointing toward a couch while cinema seats sit below.',
      evidence: {
        label: 'Draft Evidence',
        source: 'Current group draft',
        summary:
          'The draft uses Warner Bros.\' 2021 HBO Max strategy as an example of how shortened or simultaneous releases can damage theatrical revenue. It also argues that streaming platforms such as Netflix normalize at-home viewing and make it harder for theatrical releases to stand out as major cultural events.',
      },
      reverse: true,
    },
  ],
  policyCallout: {
    title: 'What This Means for the Cinema Business',
    body:
      'The cinema industry now has to manage innovation in two directions at once. Data and digital production tools can improve operations and creativity, but AI and streaming can weaken both copyright control and theatrical exclusivity. The result is a business model that is more efficient than before, but also more fragile.',
    points: [
      {
        title: 'Operational Gain',
        body: 'Audience data and scheduling tools help cinemas target demand more accurately and make faster commercial decisions.',
      },
      {
        title: 'Creative Efficiency',
        body: 'Digital cameras, virtual production, and CGI expand what filmmakers can produce while reducing some practical barriers and inefficiencies.',
      },
      {
        title: 'Structural Risk',
        body: 'Streaming reduces exclusivity by pulling audiences toward home viewing and weakening the sense of cinema as a special destination event.',
      },
    ],
    evidence: {
      label: 'Policy Response',
      source: 'Governor of California',
      date: 'September 17, 2024',
      summary:
        'California signed laws to strengthen protection for performers\' digital likenesses, showing that governments now treat AI replication as a serious entertainment-industry problem.',
      url: 'https://www.gov.ca.gov/2024/09/17/governor-newsom-signs-bills-to-protect-digital-likeness-of-performers/',
    },
  },
  keyMessage: {
    title: 'Digital Technology is Both an Opportunity and a Threat',
    body:
      'For the cinema business, digital technologies can improve scheduling, marketing, and film production, but they can also weaken theatrical attendance and intellectual-property protection. The key challenge is to adopt innovation without reducing the value of cinema itself.',
    iconSrc: copyrightSymbol,
    iconAlt: 'A copyright symbol.',
  },
  credits: {
    images: [
      {
        label: 'Capitol Auditorium image',
        url: 'https://commons.wikimedia.org/wiki/File:Capitol_Auditorium.jpg',
      },
      {
        label: 'AI-generated illustration',
        url: 'https://commons.wikimedia.org/wiki/File:AI-generated.svg',
      },
      {
        label: 'Big data illustration',
        url: 'local: images/big_data_precision.svg',
      },
      {
        label: 'Virtual production illustration',
        url: 'local: images/virtual_production.svg',
      },
      {
        label: 'Streaming disruption illustration',
        url: 'local: images/streaming_disruption.svg',
      },
      {
        label: 'Copyright symbol',
        url: 'https://commons.wikimedia.org/wiki/File:Copyright.svg',
      },
    ],
    news: [
      {
        label: 'AP: Disney and Universal sue Midjourney',
        url: 'https://apnews.com/article/disney-universal-midjourney-copyright-lawsuit-722b1b892192e7e1628f7ae5da8cc427',
      },
      {
        label: 'AP: Hollywood groups condemn Seedance 2.0',
        url: 'https://apnews.com/article/ai-seedance-bytedance-hollywood-copyright-7e445388401d172c6bf51d0d42aa4f24',
      },
      {
        label: 'AP-NORC: streaming is overtaking theaters',
        url: 'https://www.ap.org/news-highlights/spotlights/2025/streaming-is-overtaking-theaters-for-movie-watchers-an-ap-norc-poll-finds/',
      },
      {
        label: 'California governor: digital likeness protections',
        url: 'https://www.gov.ca.gov/2024/09/17/governor-newsom-signs-bills-to-protect-digital-likeness-of-performers/',
      },
    ],
    note:
      'This version now includes all four sections of the group topic: two positive impacts and two negative impacts on the cinema business.',
  },
};

export default pageContent;
