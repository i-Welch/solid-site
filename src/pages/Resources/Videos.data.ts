import { Resource, ResourceCategory, ResourceType } from './Ecosystem';

const videos: Array<Resource> = [
  {
    link: 'https://www.youtube.com/watch?v=wu6HvLoi9VQ',
    title: 'How To Convert React Application To SolidJS',
    description: 'Maksim Ivanov walks us through Solid.js and how to use it.',
    author: 'Maksim Ivanov',
    author_url: 'https://www.youtube.com/user/satansdeer1',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628532062000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Dq5EAcup044',
    title: 'UI Libraries, Improving React.js & Music, with Ryan Carniato, Solid.js Creator',
    description: '',
    author: 'Jakub Neander',
    author_url: 'https://github.com/zaiste',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1616544000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=P8iGK8zYzns',
    title: 'Solid.js - A Fast, Declarative, Compiled Web UI Library - Better than React.js?',
    description:
      'Zaiste Programming discusses three things that makes Solid.js and Snowpack great.',
    author: 'Jakub Neander',
    author_url: 'https://github.com/zaiste',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1615593600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=p8e9ta269x8',
    title: 'React to Solid - Stream With Ryan Carniato',
    description:
      'Maksim Ivanov and Ryan Carniato take an existing React application and try to rewrite it using the Solid framework.',
    author: 'Maksim Ivanov',
    author_url: 'https://www.youtube.com/user/satansdeer1',
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1617062400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=-CymMzGwzP8',
    title: 'Looking at solid.js',
    description: "Looking at solid.js, a new library for reactive web UI's.",
    keywords: [''],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1601164800000,
  },
  {
    link: 'https://www.youtube.com/watch?v=P-AGz3U8lFY',
    title: 'Learning SolidJS',
    description:
      'Alex takes a first look, building a color transformation tool and dad joke search app in the process.',
    keywords: [''],
    author: 'uidotdev',
    author_url: 'https://www.youtube.com/channel/UCbAn7pVK2VIyo-UysfWGdZQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1625011200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=_ne2BsvFBH0',
    title: 'Solid.js - the NEXT React? In-depth code analysis.',
    description:
      "A super in-depth code conversation about the inner-workings of Solid.js from a React developer's perspective.",
    keywords: [''],
    author: 'Sawtaytoes',
    author_url: 'https://www.youtube.com/channel/UCDezHlQN79VWarlRgvmim-w',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1625184000000,
  },
  {
    link: 'https://www.youtube.com/playlist?list=PLtLhzwNMDs1fMi43erQSzXD49Y4p0TniU',
    title: 'Solid Video Series',
    description:
      'Information for developers who are interested in using the Solid JavaScript UI framework to create a web application.',
    keywords: [''],
    author: 'Eric Schmucker',
    author_url: 'https://www.youtube.com/channel/UCDezHlQN79VWarlRgvmim-w',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: undefined,
  },
  {
    link: 'https://www.youtube.com/watch?v=iyY1lT8-ZDA',
    title: 'The Deep Drive Episode #4 Reactive Frontends',
    description:
      'The Deep Dive delves into reactive front-end frameworks with Lars Gyrup, Brink Nielsen, Kos Palchyk and Ryan Carniato.',
    keywords: ['reactive', 'kos palychyk'],
    author: 'The Deep Dive',
    author_url: 'https://www.youtube.com/channel/UCsZWzmsdKz2VA49XXBK5TQA',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1615939200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=OqcHoLWyyIw',
    title: 'React vs SolidJS, Fight!',
    description: "Let's compare React with the upstart newcomer Solid-JS in an eCommerce showdown!",
    keywords: ['reactive', 'blue', 'jack', 'harrington'],
    author: 'Jack Harrington',
    author_url: 'https://www.youtube.com/channel/UC6vRUjYqDuoUsYsku86Lrsw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628640000000,
  },
  {
    link: 'https://youtu.be/cuHDQhDhvPE?t=1038',
    title: 'I built the same app 10 times // Which JS Framework is best?',
    description: 'Solid is featured amongst 10 other frameworks and compared.',
    keywords: ['fireship'],
    author: 'Fireship',
    author_url: 'https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628640000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=cFasysKU7vk&t=5s',
    title: "React Wednesdays: Let's Learn Solid JS with Ryan Carniato",
    description:
      'On this episode of React Wednesdays we welcome in Ryan Carniato, a member of the Marko team at eBay, and the author of Solid JS.',
    keywords: ['react', 'wednesday'],
    author: 'CodeItLive',
    author_url: 'https://www.telerik.com/react-wednesdays',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1628640000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=2iK9zzhSKo4&t=69s',
    title: 'React Finland 2021: SolidJS - Reactive JSX',
    description:
      'An introduction to SolidJS UI Library. Explore an example to show the similarity and differences between Hook + Virtual DOM versus Reactivity + DOM.',
    keywords: ['react', 'finland'],
    author: 'React Finland',
    author_url: 'https://react-finland.fi/',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1630368000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=PW6Re59Hb-8',
    title: 'AM Coder - SolidJS Todo App for Express/Mongo API',
    description: 'Alex Merced walks us through creating a Solid app with Express and Mongo.',
    keywords: ['express', 'app', 'mongo'],
    author: 'Alex Merced',
    author_url: 'https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Data, ResourceCategory.UI],
    published_at: 1631059200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=LZc2hSghezM&t=57s',
    title: 'Solid + GraphQL = Realtime Magic',
    description:
      "Let's use the Solid-JS framework to create a todo app using queries, mutations and ",
    keywords: ['graphql', 'queries'],
    author: 'Jack Harrington',
    author_url: 'https://www.youtube.com/channel/UC6vRUjYqDuoUsYsku86Lrsw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Data],
    published_at: 1630886400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=0zadjVUV7zM',
    title: 'Streaming SolidJS - Context, Async, & Suspense',
    description: 'Ryan talks about context, async and suspense.',
    keywords: ['context', 'transitions', 'suspense', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1631894400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=0zadjVUV7zM',
    title: 'Streaming SolidJS - Server Rendering',
    description: 'Ryan talks about Server Rendering with SolidJS Framework',
    keywords: ['ssr', 'streaming', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1632499200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=b9e7VXs_A4s',
    title: 'Fine-Grained Reactivity',
    description:
      'Ryan goes over the topic of fine-grained reactivity based on my article series and answer any questions along the way.',
    keywords: ['fine-grained', 'reactivity', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1631296862000,
  },
  {
    link: 'https://www.youtube.com/watch?v=jnZmG4hyNas',
    title: 'First look at DOM Expressions',
    description: 'Overview of the universal reactive renderer that powers SolidJS.',
    keywords: ['expressions', 'dom', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1630713600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=P_attYd04-0',
    title: 'Intro to SolidJS in 20 Minutes',
    description: 'Full stack developer walks through SolidJS is 20 minutes.',
    keywords: ['introduction', 'learning'],
    author: 'Alex Merced',
    author_url: 'https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1633369644000,
  },
  {
    link: 'https://www.youtube.com/watch?v=UPhx3OxUH0w',
    title: 'Streaming SolidJS - First look at Astro',
    description: 'Ryan takes a look at what Astro is all about with Solid.',
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    keywords: ['astro', 'streaming', 'ryanstream'],
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.BuildUtilities],
    published_at: 1633110444000,
  },
  {
    link: 'https://www.youtube.com/watch?v=YxroH_MXuhw',
    title: 'Streaming SolidJS: Routing',
    description:
      "Looks at control flow and routing in Solid and the approach we've taken with Solid App Router.",
    keywords: ['introduction', 'control flow', 'routing', 'stream', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Routers],
    published_at: 1633752000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Q0mXYbA86Qo',
    title: 'Islands, Partial Hydration, & JavaScript Frameworks',
    description:
      'Ryan explores the ideas of islands, islets, and partial hydration, and look at what frameworks like Marko, Astro, and Qwik are attacking this.',
    keywords: ['islands', 'islets', 'hydration', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Routers],
    published_at: 1634326849000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Yi_MJ8cVCCs',
    title: 'Streaming SolidJS - Benchmarking and Custom Renderers',
    description:
      'The history of JavaScript framework benchmarking and the new custom renderer API coming in Solid 1.2.0',
    keywords: ['custom render', 'benchmarking', 'performance', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Routers],
    published_at: 1635047498000,
  },
  {
    link: 'https://www.youtube.com/watch?v=O2kFXlNSdn0',
    title: 'Streaming SolidJS - Netlify and Vercel and Cloudflare, Oh My!',
    description:
      "This stream looks at what deployment is like on different platforms. And reflect on the work we've been doing with adapters in Solid Start.",
    keywords: ['netlify', 'vercel', 'cloudflare', 'deployment', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1636779600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=ZZ-a7B761Ds&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx',
    title: 'Learn With Jason',
    description:
      'In this episode, Ryan Carniato will teach us how to get started with our first SolidJS app!',
    keywords: ['netlify', 'vercel', 'cloudflare', 'deployment', 'ryanstreams'],
    author: 'Jason Lengstorf',
    author_url: 'https://www.youtube.com/channel/UCnty0z0pNRDgnuoirYXnC5A',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1638507600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Hdc5QqPfFH8&t=21s',
    title: 'Streaming SolidJS - Concurrent Rendering without a Virtual DOM',
    description:
      "I'm no stranger to skeptics. But today I hope to lay to rest the myth that the VDOM is the only game in town.",
    keywords: ['streaming', 'concurrent', 'rendering', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1637367008000,
  },
  {
    link: 'https://www.youtube.com/watch?v=WE5rIOX12gs',
    title: 'Introduction to SolidJS - SolidJS vs ReactJS',
    description:
      'This video is a small introduction to Solid JS framework with a help of a small todo App.',
    keywords: ['intro', 'react'],
    author: 'dotJS',
    author_url: 'https://www.youtube.com/channel/UCcSeQUrdrNObZqyqMD-913g',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1637810770000,
  },
  {
    link: 'https://www.youtube.com/watch?v=wre8TPir36s',
    title: 'Reactive Primitives in Solid JS',
    description:
      'This video is about different SolidJS reactive primitives. How to use them in a an application.',
    keywords: ['intro', 'primitives'],
    author: 'dotJS',
    author_url: 'https://www.youtube.com/channel/UCcSeQUrdrNObZqyqMD-913g',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational, ResourceCategory.Primitives],
    published_at: 1637810770000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Off4L7NJgA0&t=29534s',
    title: 'JS Conf India Online 2021: The Future is Reactive',
    description:
      'Ryan introduces the concept of reactivity and describes why it is the future of UI.',
    keywords: ['netlify', 'jsonf', 'india', 'reactivity', 'ryanstreams'],
    author: 'JSConf India',
    author_url: 'https://www.jsconf.in/',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1638576320000,
  },
  {
    link: 'https://www.youtube.com/watch?v=s_Fs4AXsTnA',
    title: 'Micro-Frontends in Just 10 Minutes',
    description:
      'Take ten minutes to create three applications using Module Federation to create and share a Micro-Frontend between SolidJS and React.',
    keywords: ['micro', 'front-end', 'react', 'module', 'federation'],
    author: 'JSConf India',
    author_url: 'https://www.jsconf.in/',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1634192389000,
  },
  {
    link: 'https://www.youtube.com/watch?v=70w-UoEu3Ss',
    title: 'SolidJS with Ryan Carniato',
    description:
      'Ryan Carniato tells us all about SolidJS, a declarative, efficient, and flexible JavaScript library for building user interfaces.',
    keywords: ['logrocket', 'solid', 'react', 'module', 'federation'],
    author: 'LogRocket',
    author_url: 'https://www.youtube.com/channel/UCktI_HQAkbr-tJbdWnQ_osw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1630482701000,
  },
  {
    link: 'https://www.youtube.com/watch?v=CQm52h3Ukng',
    title: 'A First Look at Remix',
    description: 'Ryan takes a deep dive into Remix.',
    keywords: ['remix', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1638521693000,
  },
  {
    link: 'https://www.youtube.com/watch?v=FB_kBYO_vIw',
    title: 'Compilation in JavaScript Frameworks',
    description: 'Ryan covers the topic of JavaScript compilers.',
    keywords: ['compilers', 'js', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1639126493000,
  },
  {
    link: 'https://www.twitch.tv/videos/1275982315',
    title: 'SolidJS - a Reactive Framework w/ Author Ryan Carniato',
    description: 'Ryan talks about the start of Solid and walks us through why its so special.',
    keywords: ['coderpad', 'reactivity'],
    author: 'CoderPad',
    author_url: 'https://www.twitch.tv/coderpad',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1642791417000,
  },
  {
    link: 'https://www.youtube.com/watch?v=6CnjpXSZXXk',
    title: 'SolidJS loops are better than React',
    description: "A video that compares React Array.map with Solid's <For> component.",
    keywords: ['for', 'loop', 'reactivity'],
    author: 'Basarat Codes',
    author_url: 'https://www.youtube.com/channel/UCGD_0i6L48hucTiiyhb5QzQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1642791417000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Jn5e1NYFfN4',
    title: 'Regaining JavaScript Performance in your Website',
    description:
      'PurrfectDev has Ryan Carniato on to talk about SolidJS and performance on your website.',
    keywords: ['for', 'loop', 'reactivity'],
    author: 'PurrfectDev',
    author_url: 'https://codingcat.dev/',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1646203243000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Bwjm4asSAMo',
    title: 'SolidJS with ArcGIS API for JavaScript',
    description: 'Looks at how easy it is to use with the ArcGIS API for JavaScript',
    keywords: ['arcgis', 'rene rubalcave'],
    author: 'Rene Rubalcava',
    author_url: 'https://www.youtube.com/channel/UCo7tc3KZgH4GMUcqcSFBLOQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1649400779000,
  },
  {
    link: 'https://www.youtube.com/watch?v=tcwe85p7M9c',
    title: "Petite Solid?! Let's build a Micro View Library",
    description:
      'The question of this functionality in Solid has come up a few times and I thought it would be fun to explore. What this really is, is a throwback to the early days of frontend frameworks.',
    keywords: ['petitsolid', 'small', 'petit', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9/videos',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1641542174000,
  },
  {
    link: 'https://www.youtube.com/watch?v=lsWXyyEsw7E&t=1838s',
    title: 'Solid Three, Custom Renderers, and SolidStart w/ Nikhil Saraf',
    description:
      "Tonight I'm excited to be joined by the creator of a few really cool projects in the Solid ecosystem and one of main contributors to upcoming SolidStart Metaframework.",
    keywords: ['three', 'three.js', 'custom renderer', 'renderer', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9/videos',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1643356574000,
  },
  {
    link: 'https://www.youtube.com/watch?v=ZVKHxm1-g3E',
    title: 'SolidScript?! Using Compilation for Syntax',
    description:
      'Everyone seems to have their own preferences when it comes to syntax. Some like it explicit. Some implicit. Fortunately, with the right primitives, it is easy to tailor it to what you want.',
    keywords: ['solidscript', 'compilation', 'syntax', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9/videos',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1647586574000,
  },
  {
    link: 'https://www.youtube.com/watch?v=REXtIuAJ3dE',
    title: 'Breaking Down the Web /w Dan Jutan',
    description:
      'Dan Jutan, Solid Core Team member in charge of Documentation, joins Ryan to help give context for a lot of the topics he covers on stream.',
    keywords: ['breaking down', 'hydration', 'ssr', 'web', 'streaming', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9/videos',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1650670987000,
  },
  {
    link: 'https://www.youtube.com/watch?v=iR5T2HefqKk',
    title: 'Breaking Down Hydration w/Dan Jutan',
    description: 'Want to know what Partial, Progressive, and Resumable means?',
    keywords: ['breaking down', 'hydration', 'ssr', 'web', 'streaming', 'ryanstreams'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9/videos',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1651290187000,
  },
  {
    link: 'https://www.youtube.com/watch?v=WSvmEG7HPyE',
    title: "SolidJS - Why Doesn't React Just Work like This",
    description: `Solid is close enough to React that you'll pick it up quickly, so let's build something with the framework.`,
    keywords: ['learning', 'starter', 'reactivity', 'planet'],
    author: 'Planet of the Web',
    author_url: 'https://www.youtube.com/channel/UCnd308ZWP--wV2-_j3LZU9A',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1652280016000,
  },
  {
    link: 'https://www.youtube.com/watch?v=O4sgwuMQns0',
    title: 'The story of Solid JS and How its Different',
    description: 'Ryan joins ThePrimeagen to discuss Solid and where it has come from.',
    keywords: ['history', 'story', 'solid', 'ryan'],
    author: 'ThePrimaegen',
    author_url: 'https://www.youtube.com/c/ThePrimeagen',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1654277076000,
  },
  {
    link: 'https://www.youtube.com/watch?v=A_dUsSzxwkI',
    title: 'What is SolidJS (vs React and Svelte)?',
    description:
      'What is Solid JS, the relative newcomer to the JavaScript frameworks scene, and what is it worth versus React or Svelte?',
    keywords: ['solid', 'introduction', 'react', 'svelte', 'comparison'],
    author: 'KodapsAcademy',
    author_url: 'https://www.youtube.com/c/KodapsAcademy',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1654635600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=4Xnt2ASdFbA',
    title: 'Pourquoi Solid JS (vs React & Svelte)?',
    description: `Solid JS ressemble en surface à React, et sous la surface, à Svelte. Qu'apporte ce framework de plus que la pléthoire de frameworks qui existent déjà, ou que le framework dominant qu'est React ?`,
    keywords: ['solid', 'introduction', 'react', 'svelte', 'comparison', 'fr'],
    author: 'Kodaps - apprendre à coder',
    author_url: 'https://www.youtube.com/channel/UCzdX32OIhpfrdxQRhN2s98w',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1653598800000,
  },
  {
    link: 'https://www.youtube.com/watch?v=4KY8qIkJeSw',
    title: 'Ryan Carniato — SolidJS - Getting Started (HolyJS 2022)',
    description:
      'In this talk, Ryan will introduce SolidJS a JavaScript UI framework built on fine-grained reactivity and compiled JSX.',
    keywords: ['solid', 'introduction', 'ryanstreams', 'holyjs'],
    author: 'HolyJS',
    author_url: 'https://holyjs.ru/en',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1653512400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=YJaaAZswOcg',
    title: 'SolidJS #2: state management and custom components',
    description:
      'In this video we will create custom components, we will analyze a couple of patterns to share the state between components and we will refactor the application that was created in the first video about Solid.',
    keywords: ['solid', 'state-management'],
    author: 'Fabio Biondi',
    author_url: 'https://www.youtube.com/c/FabioBiondi',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1654030800000,
  },
  {
    link: 'https://www.youtube.com/watch?v=Ilf34WjMBkU',
    title: `FAQ: Why doesn't my early return work in Solid?`,
    description: `Dan explains why early returns don't work in Solid the same way they work in React`,
    keywords: ['faq', 'early-return', 'control-flow', 'react'],
    author: 'Dan Jutan (Jutanium)',
    author_url: 'https://twitter.com/jutanium',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1652907600000,
    official: true,
  },
  {
    link: 'https://www.youtube.com/watch?v=JWcorrKWRgY',
    title: 'SolidJS Intro in 5 minutes (for React Developers)',
    description: `SolidJS is a "new" (5 years old) UI library with an API very similar to React that is gaining more and more popularity on Twitter and GitHub (20k stars), and which, in my opinion, is exactly how React should work.`,
    keywords: ['solid', 'introduction', '5-minutes', 'react'],
    author: 'Fabio Biondi',
    author_url: 'https://www.youtube.com/c/FabioBiondi',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1653685200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=0efOc8D39Ow',
    title: 'Gentle introduction to SolidJS by Kajetan Swiatek',
    description: `This talk serves as a gentle introduction to SolidJS. During the event, you’ll hear about basic concepts behind the framework and what makes it stand out - all based on a real-world example of a small feature that’ll be live-coded in front of you.`,
    keywords: ['solid', 'introduction'],
    author: 'Kajetan Swiatek / Engineering Community',
    author_url: 'https://www.youtube.com/channel/UCARnxsw8cR-dsuOG_2YMEjg',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1654117200000,
  },
  {
    link: 'https://www.youtube.com/watch?v=WDodWU-B-aY',
    title: 'SolidJS Crash Course - Better Than React!',
    description: `SolidJS is the framework React has always wanted to be. In this SolidJS tutorial, we'll learn state management, routing, data fetching, use of components, web storage and more!`,
    keywords: ['solid', 'introduction', 'react'],
    author: 'Ebenezer Don',
    author_url: 'https://www.youtube.com/c/EbenezerDon',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1654030800000,
  },
  {
    link: 'https://www.youtube.com/watch?v=NGqoq5D_rEE&t',
    title: '5 React Alternatives You Should Know',
    description: `If not React, then what should we use instead? Flutter? Angular? Solid-JS? Vue? Svelte? VanillaJS? Web Components? Let's talk pros, cons and career impact.`,
    keywords: ['solid', 'react', 'svelte', 'vue', 'comparison'],
    author: 'Jack Herrington',
    author_url: 'https://www.youtube.com/c/JackHerrington',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1653944400000,
  },
  {
    link: 'https://www.youtube.com/watch?v=dOgnQ9SuKYk',
    title: 'SolidJS: Past, Present, Future',
    description: `The one thing that surprises new people about SolidJS is just how long I've been working on it. It completely shifts the perspective. So in this stream, I'm going to cover everything Solid from the first commit in a private repo in 2016, how Solid is already redefining how the whole industry is building the web for the future, and give insights into how that future is shaping up.`,
    keywords: ['solid', 'ryanstreams', 'history', 'future'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1654203600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=k70vruSwQ4w',
    title: '2.20 - Regaining JavaScript Performance in your Website',
    description: `We have Ryan Carniato on to talk about SolidJS and performance on your website. As well as comparing Qwik, React and SolidJS.`,
    keywords: ['solid', 'ryanstreams', 'performance', 'javascript'],
    author: 'PurrfectDev',
    author_url: 'https://www.youtube.com/c/PurrfectDev',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1654203600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=GWH8CdQfN38',
    title: 'Astro -- Going Fast Without JavaScript Bloat (demonstrated using Solid)',
    description: `In this video, we dive into Astro and how it can help you build better websites without the big, bulky SPA, but still enable you to have interactive content.`,
    keywords: ['solid', 'astro'],
    author: 'Spooky Software',
    author_url: 'https://www.youtube.com/channel/UCuRHr-1aqro-UWcz36hkdoQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1656363600000,
  },
  {
    link: 'https://www.youtube.com/watch?v=2T8M2VV1EXk',
    title: 'Reactive Future: SolidJS without Compromise',
    description:
      'In this video, we learn about reactive programming, reactivity, signals, derivations, reactions and oh so much more.',
    keywords: ['solid', 'introduction', 'reactivity'],
    author: 'Spooky Software',
    author_url: 'https://www.youtube.com/channel/UCuRHr-1aqro-UWcz36hkdoQ',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1643580000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=bvWCyGsKOXY',
    title: 'Hydrogen & RSCs w/ Bret Little',
    description: `Bret Little joins me on stream to talk and look at building apps with Shopify's Hydrogen and React Server Components.`,
    keywords: ['ryanstreams', 'react', 'server-components'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1653598800000,
  },
  {
    link: 'https://www.youtube.com/watch?v=2UPX0HZxXEQ',
    title: 'Building SolidJS 1.4',
    description: `Tonight we look at the new features coming in SolidJS 1.4, including better streaming and resource handling, improved Stores, and added compiler niceties. I won't just preview the features. We will dig into the code to see how they are implemented.`,
    keywords: ['ryanstreams', 'solid', '1.4'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1651870800000,
  },
  {
    link: 'https://youtu.be/M5rJxGPPFvY',
    title: 'Supabase with SolidJS - Creating a Realtime Todo List App Live',
    description:
      'Tyler from Supabase invites Dan from SolidJS to build a realtime todo list app together using SolidJS and Supabase.',
    keywords: ['supabase', 'solid', 'danstreams', 'collaborations'],
    author: 'Supabase',
    author_url: 'https://www.youtube.com/c/Supabase',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1655114560000,
  },
  {
    link: 'https://www.youtube.com/watch?v=sgMdAD8stJg',
    title: 'Maintaining Open Source Full-time',
    description:
      'We will explore what it takes to become an Open Source maintainer full-time and how to achieve it, and the challenges faced.',
    keywords: ['open-source', 'netlify', 'maintainers', 'solid'],
    author: 'This Is Tech Talks',
    author_url: 'https://www.youtube.com/c/ThisisTechTalks',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1655114560000,
  },
  {
    link: 'https://www.youtube.com/watch?v=-TeXU9UZ_4w',
    title: 'Nested Routing, Parallelized Data Fetching, and SolidJS w/ Ryan Turnquist',
    description: 'This stream we will focus on all things routing.',
    keywords: ['ryanstreams', 'ryan', 'routing', 'turnquist'],
    author: 'Ryan Carniato',
    author_url: 'https://www.youtube.com/c/RyanCarniato9',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1657918000000,
  },
  {
    link: 'https://www.youtube.com/watch?v=MgC-ESbahR0',
    title: 'SolidJS is a game changer',
    description: 'Awesome spends 10 minutes introducing you to introduction Solid concepts.',
    keywords: ['getting started', 'future', 'intro', 'awesome'],
    author: 'Awesome',
    author_url: 'https://www.awesome.club/',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1658770100000,
  },
  {
    link: 'https://youtu.be/qpAkYk1LK-U?t=2322',
    title: 'Ryan Carniato on Solid.js, Jarred Sumner on Bun, & Alex Cole on e2e Reactivity',
    description: 'Ryan Carniato presents at the Contax sponsored Real World React.',
    keywords: ['contax', 'reactivity', 'sumner', 'real world', 'world', 'real'],
    author: 'Real World React',
    author_url: 'https://www.realworldreact.com/',
    type: ResourceType.Video,
    categories: [ResourceCategory.Educational],
    published_at: 1659074818000,
  },
];

export default videos;
