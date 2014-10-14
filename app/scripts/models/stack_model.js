/*global Ember*/
Portfolio.Stack = DS.Model.extend({
    name: DS.attr('string'),

    category: DS.attr('string'),

    tagline: DS.attr('string'),

    description: DS.attr('string'),

    image: DS.attr('string'),

    rating: DS.attr('string'),

    articles: DS.hasMany('article', {async:true}),

    events: DS.hasMany('event', {async:true})
});

// delete below here if you do not want fixtures
Portfolio.Stack.FIXTURES = [
  
  
  {
    id: 2,
    
    name: 'Ember.js',

    category: "HTML,CSS,JavaScript,Framework,Front End,Open source,Applications",

    tagline: "A framework for creating ambitious web applications",

    description: "<p>MORE PRODUCTIVE OUT OF THE BOX.</p><p>Write dramatically less code with Ember's Handlebars integrated templates that update automatically when the underlying data changes.<p>Don't waste time making trivial choices. Ember.js incorporates common idioms so you can focus on what makes your app special, not reinventing the wheel.<p>Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast.</p><p>source: ember.com</p>",

    image: "images/stack/ember.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },

  {
    id: 0,

    name: "Grunt",

    category: "Automation,Node.js,Open source,JavaScript,Front End",

    tagline: "The JavaScript Task Runner",

    description: "<p>Why use a task runner?</p><p>In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.</p><p>Why use Grunt?</p><p>The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze.</p><p>source: gruntjs.com</p>",

    image: "images/stack/grunt.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 1,
    
    name: 'Wordpress',

    category: "CMS,Open source,PHP,Framework,CSS,Front End,Server Side,Back End",

    tagline: "Code is Poetry",

    description: "<p>WordPress is web software you can use to create a beautiful website or blog. We like to say that WordPress is both free and priceless at the same time.</p><p>The core software is built by hundreds of community volunteers, and when you’re ready for more there are thousands of plugins and themes available to transform your site into almost anything you can imagine. Over 60 million people have chosen WordPress to power the place on the web they call “home” — we’d love you to join the family.</p><p>source: wordpress.org</p>",

    image: "images/stack/wordpress.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 7,
    
    name: 'Bower',

    category: "Automation,Open source,Front End",

    tagline: "A package manager for the web",

    description: "<p>Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.</p><p>Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, bower.json. How you use packages is up to you. Bower provides hooks to facilitate using packages in your tools and workflows.</p><p>Bower is optimized for the front-end. Bower uses a flat dependency tree, requiring only one version for each package, reducing page load to a minimum.</p><p>source: bower.io</p>",

    image: "images/stack/bower.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 11,
    
    name: 'Github',

    category: "Git,SCM",

    tagline: "Build software better, together.",

    description: "<p>Why you’ll love GitHub.</p><p>Powerful features to make software development more collaborative.</p><p>Great collaboration starts with communication.</p><p>Review changes, comment on lines of code, report issues, and plan the future of your project with discussion tools.</p><p>Friction-less development across teams.</p><p>Work with project collaborators or teams of people in organization accounts to communicate with ease.</p><p>World’s largest open source community.</p><p>Share your projects with the world, get feedback, and contribute to millions of repositories hosted on GitHub.</p><p>Do more with powerful integrations.</p><p>Discover applications and tools that integrate with GitHub to help you and your team build software better, together.<p>source: github.com</p>",

    image: "images/stack/github.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 22,
    
    name: 'Phonegap',

    category: "JavaScript,Framework,Applications,Mobile,Front End,Open source",

    tagline: "Easily create apps using the web technologies you know and love",

    description: "<p>PhoneGap is an open source framework for quickly building cross-platform mobile apps using HTML5, Javascript and CSS.</p><p>Wrap your app with PhoneGapDeploy to mobile platforms!</p><p>Building applications for each device–iPhone, Android, Windows Mobile and more–requires different frameworks and languages. PhoneGap solves this by using standards-based web technologies to bridge web applications and mobile devices. Since PhoneGap apps are standards compliant, they’re future-proofed to work with browsers as they evolve. Read an in-depth post explaining PhoneGap visually.</p><p>PhoneGap has been downloaded over 1 million times and is being used by over 400,000 developers. Thousands of apps built using PhoneGap are available in mobile app stores and directories. Check out some of them here.</p><p>The PhoneGap code was contributed to the Apache Software Foundation (ASF) under the name Apache Cordova and graduated to top-level project status in October 2012. Through the ASF, future PhoneGap development will ensure open stewardship of the project. It will always remain free and open source under the Apache License, Version 2.0.</p><p>source: phonegap.com</p>",

    image: "images/stack/phonegap.svg",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 15,
    
    name: 'JavaScript',

    category: "JavaScript,Language,Front End,Open source",

    tagline: "",

    description: "<p>JavaScript is a dynamic computer programming language, and increasingly considered an "+'"assembly"'+" language (a compiler target) or "+'"the x86 of the web"'+" according to its creator and others. It is most commonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter the document content that is displayed. It is also being used in server-side network programming (with Node.js), game development and the creation of desktop and mobile applications.</p><p>JavaScript is classified as a prototype-based scripting language with dynamic typing and has first-class functions. This mix of features makes it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.</p><p>Despite some naming, syntactic, and standard library similarities, JavaScript and Java are otherwise unrelated and have very different semantics. The syntax of JavaScript is actually derived from C, while the semantics and design are influenced by Self and Scheme programming languages.</p><p>The application of JavaScript in use outside of web pages—for example, in PDF documents, site-specific browsers, and desktop widgets—is also significant. Newer and faster JavaScript VMs and platforms built upon them (notably Node.js) have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript was traditionally implemented as an interpreted language but just-in-time compilation is now performed by recent (post-2012) browsers.</p><p>JavaScript was formalized in the ECMAScript language standard and is primarily used as part of a web browser (client-side JavaScript). This enables programmatic access to objects within a host environment.</p><p>source: wikipedia.org</p>",

    image: "images/stack/js.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 24,
    
    name: 'PHP',

    category: "PHP,Language,Server Side,Back End,Open source",

    tagline: "PHP: Hypertext Preprocessor",

    description: "<p>PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. As of January 2013, PHP was installed on more than 240 million websites (39% of those sampled) and 2.1 million web servers. Originally created by Rasmus Lerdorf in 1994, the reference implementation of PHP (powered by the Zend Engine) is now produced by The PHP Group. While PHP originally stood for Personal Home Page, it now stands for PHP: Hypertext Preprocessor, which is a recursive backronym.</p><p>PHP code can be simply mixed with HTML code, or it can be used in combination with various templating engines and web frameworks. PHP code is usually processed by a PHP interpreter, which is usually implemented as a web server's native module or a Common Gateway Interface (CGI) executable. After the PHP code is interpreted and executed, the web server sends resulting output to its client, usually in form of a part of the generated web page – for example, PHP code can generate a web page's HTML code, an image, or some other data. PHP has also evolved to include a command-line interface (CLI) capability and can be used in standalone graphical applications.</p><p>The canonical PHP interpreter, powered by the Zend Engine, is free software released under the PHP License. PHP has been widely ported and can be deployed on most web servers on almost every operating system and platform, free of charge.</p><p>Despite its popularity, no written specification or standard exists for the PHP language; instead, the canonical PHP interpreter serves as a de facto standard. However, work on creating a formal specification has started in 2014.</p><p>source: wikipedia.org</p>",

    image: "images/stack/php.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 33,
    
    name: 'Sass',

    category: "CSS,Language,Animation,Front End",

    tagline: "Syntactically Awesome Style Sheets",

    description: "<p>Pre-processing</p><p>CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.</p><p>Once you start tinkering with Sass, it will take your preprocessed Sass file and save it out as a normal CSS file that you can use in your web site.</p><p>source: sass-lang.org</p>",

    image: "images/stack/sass.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 64,
    
    name: 'After Effects',

    category: "Animation,Video",

    tagline: "",

    description: "<p>Adobe After Effects is a digital motion graphics, visual effects and compositing app developed by Adobe Systems used in the post-production process of filmmaking and television production. After Effects can also be used as a basic non-linear editor and a media transcoder.</p><p>source: wikipedia.org</p>",

    image: "images/stack/after-effects.svg",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 3,
    
    name: 'Apigee',

    category: "JavaScript,API",

    tagline: "Achieve digital acceleration",

    description: "<p>APIs</p><p>Mobile devices and apps have changed the way customers connect with every business. To be relevant and compete, businesses must become digital and choose a technology platform capable of reaching new levels of scale, insight, and agility.</p><p>Apigee Edge is purpose-built for digital business and extends across the digital value chain to help organizations launch API programs fast, onboard partners and developers at low cost, and participate fully in a digital ecosystem.</p><p>Big Data</p><p>The intelligence from the massive amount of data generated by increasingly connected customers is proving critical to understanding user engagement and for optimizing experience across multiple channels.</p><p>Apigee Insights provides big data predictive analytics with time-based graph processing that enables enterprises to deliver API-powered adaptive apps that anticipate and adapt to the needs of individual customers.</p><p>apigee.com</p>",

    image: "images/stack/apigee.svg",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 4,
    
    name: 'Basecamp',

    category: "Project Management Software",

    tagline: '"Basecamp is everyone'+"'"+'s favorite project management app."',

    description: "<p>Highly recommended.</p><p>Primarily through word-of-mouth alone, Basecamp has become the world’s #1 project management tool. For the last 10 years, companies have been switching to Basecamp because it’s famously easy-to-use, reliable, and It Just Works™. Combine that with our best-in-the-biz customer service, and you’ve got a unique and delightful package. Just last week, another 5,776 companies started using Basecamp.</p><p>A track record you can trust.</p><p>We’ve been in business for 15 years, so you can depend on us to be here when you need us. We’re profitable, debt-free, and privately owned so we answer to our customers and no one else. Our job is to help you do your job better. Learn more about our company.</p><p>On the Mac, PC, iPhone/iPad, Android and via email.</p><p>Basecamp’s at home on Safari (Mac, iPhone/iPad), Chrome (Mac, PC, iPhone/iPad, Android), Firefox (Mac, PC), and IE 9+ (PC, Surface). Basecamp also integrates effortlessly with email. Official apps are available for Android on Google Play, iPad in the App Store, and iPhone in the App Store.</p><p>source: basecamp.com</p>",

    image: "images/stack/basecamp.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 5,
    
    name: 'Bitbucket',

    category: "SCM,Git",

    tagline: "Unlimited private code repositories",

    description: "<p>Unlimited Private Repositories</p><p>Host, manage, and share Git and Mercurial repositories in the cloud. Free, unlimited private repositories for up to 5 developers give teams the flexibility to grow and code without restrictions.</p><p>Work as a Team</p><p>Built with small teams in mind. Consolidate user management, invite members, and automatically share repositories with all your teammates. Get your team working as one.</p><p>source: bitbucket.org</p>",

    image: "images/stack/bitbucket.svg",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 6,
    
    name: 'Bootstrap',

    category: "HTML,Framework,CSS,Front End,JavaScript,Open source",

    tagline: "",

    description: "<p>Designed for everyone, everywhere.</p><p>Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.</p><p>Sass and Less support</p><p>Preprocessors</p>Bootstrap ships with vanilla CSS, but its source code utilizes the two most popular CSS preprocessors, Less and Sass. Quickly get started with precompiled CSS or build on the source.</p><p>Responsive across devices</p><p>One framework, every device.</p><p>Bootstrap easily and efficiently scales your websites and applications with a single code base, from phones to tablets to desktops with CSS media queries.</p><p>Components</p><p>Full of features</p><p>With Bootstrap, you get extensive and beautiful documentation for common HTML elements, dozens of custom HTML and CSS components, and awesome jQuery plugins.</p><p>source: getbootstrap.com</p>",

    image: "images/stack/bootstrapp.svg",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 8,
    
    name: 'Cinema 4D',

    category: "3D,Animation,Design",

    tagline: "EVERYTHING YOU NEED FOR HIGH-END 3D",

    description: "<p>CINEMA 4D Studio is the very best that MAXON has to offer for professional 3D artists. If you want to create advanced 3D graphics but need a helping hand to ensure you create jaw-dropping graphics quickly and easily, then this is the choice for you.</p><p>As well as containing all of the features found in CINEMA 4D Prime, Visualize and Broadcast, CINEMA 4D Studio adds advanced character tools, hair, a physics engine and an unlimited client network for rendering. The result is that CINEMA 4D Studio can tackle any project you throw at it with ease.</p><p>CINEMA 4D Studio's character tools make it easy to create character rigs and advanced character animations. Adding hair or fur to characters is fast and simple with a powerful suite of hair tools that let you grow, comb, style and animate. The physics engine makes it simple to perform complex collisions and interaction between objects, be it just a few or thousands. Network rendering allows you to take advantage of all computers on your network to help render your animations faster.</p><p>Despite being designed for advanced 3D, the extra tools found in CINEMA 4D Studio are still designed to be user-friendly and intuitive. Generating advanced 3D effects such as hair is surprisingly easy and fast, with CINEMA 4D doing much of the work for you. For example, hair will automatically swoosh and sway as you move your character around; and making thousands of objects collide with each other only takes a few mouse clicks to set up.</p><p>CINEMA 4D Studio lets you unleash your creativity and enjoy 3D without limits.</p><p>source: maxon.net</p>",

    image: "images/stack/c4d.svg",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 9,
    
    name: 'Eclipse',

    category: "SDK,Open source",

    tagline: "",

    description: "<p>The Eclipse Top-Level Project - an open source, robust, full-featured, commercial-quality, industry platform for the development of highly integrated tools and rich client applications.</p><p>source: eclipse.org</p>",

    image: "images/stack/eclipse.svg",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 10,
    
    name: 'Flash/Actionscript',

    category: "Animation,Applications,Design,Language,Front End",

    tagline: "",

    description: "<p>Adobe Flash (formerly called Macromedia Flash and Shockwave Flash) is a multimedia and software platform used for creating vector graphics, animation, games and rich Internet applications (RIAs) that can be viewed, played and executed in Adobe Flash Player. Flash is frequently used to add streamed video or audio players, advertisement and interactive multimedia content to web pages, although usage of Flash on websites is declining.</p><p>Flash manipulates vector and raster graphics to provide animation of text, drawings, and still images. It allows bidirectional streaming of audio and video, and it can capture user input via mouse, keyboard, microphone and camera. Flash applications and animations can be programmed using the object-oriented language called ActionScript. Adobe Flash Professional is the most popular[original research?] authoring tool for creating the Flash content, which also allows automation via the JavaScript Flash language (JSFL).</p><p>ActionScript is an object-oriented programming language originally developed by Macromedia Inc. (now owned by Adobe Systems). It is a dialect of ECMAScript (meaning it is a superset of the syntax and semantics of the language more widely known as JavaScript), and is used primarily for the development of websites and software targeting the Adobe Flash Player platform, used on Web pages in the form of embedded SWF files. ActionScript 3 is also used with the Adobe Integrated Runtime system for the development of desktop and mobile applications. The language itself is open-source in that its specification is offered free of charge and both an open source compiler (as part of Apache Flex) and open source virtual machine (Mozilla Tamarin) are available.</p><p>ActionScript was initially designed for controlling simple 2D vector animations made in Adobe Flash (formerly Macromedia Flash). Initially focused on animation, early versions of Flash content offered few interactivity features and thus had very limited scripting capability. Later versions added functionality allowing for the creation of Web-based games and rich Internet applications with streaming media (such as video and audio). Today, ActionScript is suitable for use in some database applications, and in basic robotics, as with the Make Controller Kit.</p><p>Flash MX 2004 introduced ActionScript 2.0, a scripting language more suited to the development of Flash applications. It is often possible to save time by scripting something rather than animating it, which usually also enables a higher level of flexibility when editing.</p><p>Since the arrival of the Flash Player 9 alpha (in 2006) a newer version of ActionScript has been released, ActionScript 3.0. This version of the language is intended to be compiled and run on a version of the ActionScript Virtual Machine that has been itself completely re-written from the ground up (dubbed AVM2). Because of this, code written in ActionScript 3.0 is generally targeted for Flash Player 9 and higher and will not work in previous versions. At the same time, ActionScript 3.0 executes up to 10 times faster than legacy ActionScript code due to the Just-In-Time compiler enhancements.</p><p>Flash libraries can be used with the XML capabilities of the browser to render rich content in the browser. This technology is known as Asynchronous Flash and XML, much like AJAX. Adobe offers its Flex product line to meet the demand for Rich Internet Applications built on the Flash runtime, with behaviors and programming done in ActionScript. ActionScript 3.0 forms the foundation of the Flex 2 API.</p><p>source: wikipedia.org</p>",

    image: "images/stack/flash.svg",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 12,
    
    name: 'Illustrator',

    category: "Graphics,Design,Front End",

    tagline: "",

    description: "<p>Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Systems. The latest version, Illustrator CC, is the seventeenth generation in the product line.</p><p>source: wikipedia.org</p>",

    image: "images/stack/illustrator.svg",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 13,
    
    name: 'Jira',

    category: "Project Management Software",

    tagline: "Plan, track, work - smarter and faster",

    description: "<p>JIRA is the tracker for teams planning and building great products. Thousands of teams choose JIRA to capture and organize issues, assign work, and follow team activity. At your desk or on the go with the new mobile interface, JIRA helps your team get the job done</p><p>source: atlassian.com</p>",

    image: "images/stack/Jira.svg",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 14,
    
    name: 'jQuery',

    category: "JavaScript,Library,Front End,Open source",

    tagline: "The Write Less, Do More, JavaScript Library.",

    description: "<p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</p><p>jquery.com</p>",

    image: "images/stack/jquery.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 16,
    
    name: 'Less',

    category: "CSS,Language,Front End,Open source",

    tagline: "",

    description: "<p>Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.</p><p>Less runs inside Node, in the browser and inside Rhino. There are also many 3rd party tools that allow you to compile your files and watch for changes.</p><p>source: lesscss.org</p>",

    image: "images/stack/less.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 17,
    
    name: 'MongoDB',

    category: "Database,noSQL,Server Side,Back End,Open source",

    tagline: "Agile and Scalable",

    description: "<p>MongoDB (from "+'"humongous"'+") is an open-source document database, and the leading NoSQL database. Written in C++, MongoDB features:</p><p>Document-Oriented Storage » <br />JSON-style documents with dynamic schemas offer simplicity and power.</p><p>Full Index Support »<br />Index on any attribute, just like you're used to.</p><p>Replication & High Availability »<br />Mirror across LANs and WANs for scale and peace of mind.</p><p>Auto-Sharding »<br />Scale horizontally without compromising functionality.</p><p>Querying »<br />Rich, document-based queries.</p><p>Fast In-Place Updates »<br />Atomic modifiers for contention-free performance.</p><p>Map/Reduce »<br />Flexible aggregation and data processing.</p><p>GridFS »<br />Store files of any size without complicating your stack.</p><p>MongoDB Management Service »<br />Monitoring and backup designed for MongoDB.</p><p>Partner with MongoDB »<br />Reduce cost, accelerate time to market, and mitigate risk with proactive support and enterprise-grade capabilities.</p><p>source: mongodb.org</p>",

    image: "images/stack/mongodb.svg",

    rating: 1,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 18,
    
    name: 'MySQL',

    category: "Database,SQL,PHP,NPM,Server Side,Back End,Open source,Node.js",

    tagline: "The world's most popular open source database",

    description: "Many of the world's largest and fastest-growing organizations including Facebook, Google, Adobe, Alcatel Lucent and Zappos rely on MySQL to save time and money powering their high-volume Web sites, business-critical systems and packaged software.</p><p>source: mysql.com</p>",

    image: "images/stack/mysql.svg",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 19,
    
    name: 'Neo4j',

    category: "Database,Graph,Server Side,Back End",

    tagline: "Graphs for Everyone",

    description: "<p>...Neo4j is the world's leading graph database. People everywhere are using Neo4j to find graphs in every industry, connecting data to make sense of everything...</p><p>What can I do with Neo4j?</p><p>Make recommendations, get social, find paths, uncover fraud, manage networks, organize your business</p><p>Who else is using Neo4j?</p><p>Everyone from global 500 enterprises, mid-market companies, startups, to governments and non-profits</p><p>source: neo4j.org</p>",

    image: "images/stack/neo4j.svg",

    rating: 1,

    articles: [0,1],

    events: [2,3]
    
  },
  
/**/

  {
    id: 20,
    
    name: 'Node.js',

    category: "JavaScript,Language,Server Side,Back End,Open source,Node.js",

    tagline: "",

    description: "<p>As an asynchronous event driven framework, Node.js is designed to build scalable network applications. In the following "+'"hello world"'+" example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done Node is sleeping.</p><pre>\r\nvar http = require('http');\r\n\r\nhttp.createServer(function (req, res) {\r\n  res.writeHead(200, {'Content-Type': 'text/plain'});\r\n  res.end('Hello World\n');\r\n}).listen(1337, "+'"127.0.0.1"'+");\r\n\r\nconsole.log('Server running at http://127.0.0.1:1337/');</pre><p>This is in contrast to today's more common concurrency model where OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node are free from worries of dead-locking the process—there are no locks. Almost no function in Node directly performs I/O, so the process never blocks. Because nothing blocks, less-than-expert programmers are able to develop scalable systems.</p><p>Node is similar in design to and influenced by systems like Ruby's Event Machine or Python's Twisted. Node takes the event model a bit further, it presents the event loop as a language construct instead of as a library. In other systems there is always a blocking call to start the event-loop. Typically one defines behavior through callbacks at the beginning of a script and at the end starts a server through a blocking call like EventMachine::run(). In Node there is no such start-the-event-loop call. Node simply enters the event loop after executing the input script. Node exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript -— the event loop is hidden from the user.</p><p>HTTP is a first class citizen in Node, designed with streaming and low latency in mind. This makes Node well suited for the foundation of web library or framework.</p><p>Just because Node is designed without threads, doesn't mean you cannot take advantage of multiple cores in your environment. You can spawn child processes that are easy to communicate with by using our child_process.fork() API. Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores.</p><p>source: nodejs.org</p>",

    image: "images/stack/nodejs.svg",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 21,
    
    name: 'NPM',

    category: "JavaScript,Framework,NPM,Open source,Node.js",

    tagline: "node package manager",

    description: "<p>npm (Node Package Manager) is the default package manager for Node.js. As of Node.js version 0.6.3, npm is bundled and installed automatically with the environment. npm runs through the command line and manages dependencies for an application. It also allows users to install Node.js applications that are available on the npm registry. npm is written entirely in JavaScript.</p><p>source: wikipedia.org</p>",

    image: "images/stack/npm.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 23,
    
    name: 'Photoshop',

    category: "Design,Graphics,Front End",

    tagline: "",

    description: "",

    image: "images/stack/photoshop.svg",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 25,
    
    name: 'Plex',

    category: "",

    tagline: "",

    description: "<p>Plex organizes video, music and photos from personal media libraries and streams them to smart TVs, streaming boxes and mobile devices. It is a media player system and software suite consisting of many player applications for 10-foot user interfaces and an associated media server that organizes personal media stored on local devices. It is available for Mac OS X, Linux, and Microsoft Windows. Plex also offers streaming apps for Roku and Chromecast. Integrated Plex Channels provide users with access to a growing number of online content providers such as YouTube, Vimeo, TEDTalks, and CNN among others. Plex also provides integration for cloud services including Dropbox, Box, Google Drive, Copy and Bitcasa.</p><p>Plex's front-end media player, Plex Home Theater (formerly Plex Media Center), allows the user to manage and play video, photos, music, and podcasts from a local or remote computer running Plex Media Server. In addition, the integrated Plex Online service provides the user with a growing list of community-driven plugins for online content including Hulu, Netflix, and CNN video.</p><p>Before the release of the closed source Plex Home Theater in November 2013, Plex Media Center's source code was initially forked from XBMC Media Center on May 21, 2008; this fork is still used today as a front-end media player on Linux for Plex's media server back-end media host component. Plex Media Server, unlike the open source frontend, is proprietary software.</p>",

    image: "images/stack/plex.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 26,
    
    name: 'PostgreSQL',

    category: "Database,SQL,Server Side,Back End,Open source",

    tagline: "",

    description: "<p>PostgreSQL, often simply "+'"Postgres"'+", is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards-compliance. As a database server, its primary function is to store data, securely and supporting best practices, and retrieve it later, as requested by other software applications, be it those on the same computer or those running on another computer across a network (including the Internet). It can handle workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users. Recent versions also provide replication of the database itself for security and scalability.</p><p>PostgreSQL implements the majority of the SQL:2011 standard, is ACID-compliant and transactional (including most DDL statements) avoiding locking issues using multiversion concurrency control (MVCC), provides immunity to dirty reads and full serializability; handles complex SQL queries using many indexing methods that are not available in other databases; has updateable views and materialized views, triggers, foreign keys; supports functions and stored procedures, and other expandability, and has a large number of extensions written by third parties. In addition to the possibility of working with the major proprietary and open source databases, PostgreSQL supports migration from them, by its extensive standard SQL support and available migration tools. And if proprietary extensions had been used, by its extensibility that can emulate many through some built-in and third-party open source compatibility extensions, such as for Oracle.</p><p>PostgreSQL is cross-platform and runs on many operating systems including Linux, FreeBSD, Solaris, and Microsoft Windows. Mac OS X, starting with OS X 10.7 Lion, has the server as its standard default database in the server edition, and PostgreSQL client tools in the desktop edition. The vast majority of Linux distributions have it available in supplied packages.</p><p>PostgreSQL is developed by the PostgreSQL Global Development Group, a diverse group of many companies and individual contributors. It is free and open source software, released under the terms of the PostgreSQL License, a permissive free software license.</p><p>source: wikipedia.org</p>",

    image: "images/stack/postgress.svg",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 27,
    
    name: 'Python',

    category: "Python,Language,Server Side,Back End,Applications",

    tagline: "",

    description: "<p>Python is a widely used general-purpose, high-level programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than would be possible in languages such as C. The language provides constructs intended to enable clear programs on both a small and large scale.</p><p>Python supports multiple programming paradigms, including object-oriented, imperative and functional programming or procedural styles. It features a dynamic type system and automatic memory management and has a large and comprehensive standard library.</p><p>Python interpreters are available for installation on many operating systems, allowing Python code execution on a majority of systems. Using third-party tools, such as Py2exe or Pyinstaller, Python code can be packaged into standalone executable programs for some of the most popular operating systems, allowing distribution of Python-based software for use on instances those environments without requiring the installation of a Python interpreter.</p><p>CPython, the reference implementation of Python, is free and open-source software and has a community-based development model, as do nearly all of its alternative implementations. CPython is managed by the non-profit Python Software Foundation.</p><p>source: wikipedia.org</p>",

    image: "images/stack/python.svg",

    rating: 1,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 28,
    
    name: 'Rails',

    category: "Ruby,Framework,Language,Server Side,Back End,Open source",

    tagline: "Web development that doesn’t hurt",

    description: "<p>Ruby on Rails® is an open-source web framework that’s optimized for programmer happiness and sustainable productivity. It lets you write beautiful code by favoring convention over configuration.<p>source: rubyonrails.org</p></p>",

    image: "images/stack/rails.svg",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 30,
    
    name: 'Redis',

    category: "Database,noSQL,Server Side,Back End,Open source",

    tagline: "",

    description: "<p>Redis is an open source, BSD licensed, advanced key-value cache and store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets, sorted sets, bitmaps and hyperloglogs.</p><p>source: redis.io</p>",

    image: "images/stack/redis.svg",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 31,
    
    name: 'Redmine',

    category: "Ruby,Project Management Software,Open source",

    tagline: "",

    description: "<p>Redmine is a flexible project management web application. Written using the Ruby on Rails framework, it is cross-platform and cross-database.</p><p>Redmine is open source and released under the terms of the GNU General Public License v2 (GPL).</p><p>Some of the main features of Redmine are:</p><ul><li>Multiple projects support</li><li>Flexible role based access control</li><li>Flexible issue tracking system</li><li>Gantt chart and calendar</li><li>News, documents & files management</li><li>Feeds & email notifications</li><li>Per project wiki</li><li>Per project forums</li><li>Time tracking</li><li>Custom fields for issues, time-entries, projects and users</li><li>SCM integration (SVN, CVS, Git, Mercurial, Bazaar and Darcs)</li><li>Issue creation via email</li><li>Multiple LDAP authentication support</li><li>User self-registration support</li><li>Multilanguage support</li><li>Multiple databases support</li></ul><p>source: redmine.org</p>",

    image: "images/stack/redmine.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 32,
    
    name: 'Ruby',

    category: "Ruby,Language,Server Side,Back End,Open source",

    tagline: "A programmer's best friend",

    description: "<p>Wondering why Ruby is so popular? Its fans call it a beautiful, artful language. And yet, they say it’s handy and practical. What gives?</p><p>The Ideals of Ruby’s Creator</p><p>Ruby is a language of careful balance. Its creator, Yukihiro “Matz” Matsumoto, blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a new language that balanced functional programming with imperative programming.</p><p>He has often said that he is “trying to make Ruby natural, not simple,” in a way that mirrors life.</p><p>Building on this, he adds:</p><p>Ruby is simple in appearance, but is very complex inside, just like our human body.</p><p>source: ruby-lang.org</p>",

    image: "images/stack/ruby.svg",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 33,
    
    name: 'Sass',

    category: "CSS,Language,Animation,Front End",

    tagline: "Syntactically Awesome Style Sheets",

    description: "<p>Pre-processing</p><p>CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.</p><p>Once you start tinkering with Sass, it will take your preprocessed Sass file and save it out as a normal CSS file that you can use in your web site.</p><p>source: sass-lang.org</p>",

    image: "images/stack/sass.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 34,
    
    name: 'Sketch',

    category: "Graphics,Design,Front End",

    tagline: "Unleash your imagination.",

    description: "<p>We created Sketch specifically for designing interfaces, websites, icons… whatever is in your head. And here’s what we came up with.</p><p>Precision</p><p>Vectors mean scalability. Sketch’s Vector shapes easily adapt to changing styles, sizes and layouts, allowing you to avoid a lot of painful hand-tweaking. Sometimes though, you still need to account for physical pixels. Sketch supports this, meaning that you can fine tune when you need to.</p><p>Objects.</p><p>In Sketch, every shape you create is an item in the Layers List. No more hidden paths.</p><p>With our flexible boolean operations, you can combine paths to create complex shapes, while all the parts stay 100% editable.</p><p>Working on a large document? Name and group layers to keep things organized, then search by name when you need to find something.</p><p>Snap to Pixel.</p><p>Sketch rounds a shape or layer to its nearest pixel edge. No more half pixels, dirty shapes and alpha-blended messes.</p><p>Pixel Zoom.</p><p>See everything in the fullest detail, or turn on Pixel View to inspect the resulting pixels. It’s the best of both worlds.</p><p>Beautiful Text.</p><p>Sketch’s perfect native text rendering shows your text exactly as it will appear in your app or on your website.</p><p>source: bohemiancoding.com</p>",

    image: "images/stack/sketch.svg",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 35,
    
    name: 'Sublime',

    category: "Command Line,SDK,Python,Front End",

    tagline: "The text editor you'll fall in love with",

    description: "<p>Some things users love about Sublime Text</p><p>Goto Anything</p><p>Use Goto Anything to open files with only a few keystrokes, and instantly jump to symbols, lines or words.</p><p>Triggered with ⌘P, it is possible to:</p><p>Type part of a file name to open it.</p><p>Type @ to jump to symbols, # to search within the file, and : to go to a line number.</p><p>These shortcuts can be combined, so tp@rf may take you to a function read_file within a file text_parser.py. Similarly, tp:100 would take you to line 100 of the same file.</p><p>Multiple Selections</p><p>Make ten changes at the same time, not one change ten times. Multiple selections allow you to interactively change many lines at once, rename variables with ease, and manipulate files faster than ever.</p><p>Try pressing ⇧⌘L to split the selection into lines and ⌘D to select the next occurrence of the selected word. To make multiple selections with the mouse, take a look at the Column Selection documentation.</p><p>Command Palette</p><p>The Command Palette holds infrequently used functionality, like sorting, changing the syntax and changing the indentation settings. With just a few keystrokes, you can search for what you want, without ever having to navigate through the menus or remember obscure key bindings.</p><p>Show the Command Palette with ⌘⇧P.</p><p>Distraction Free Mode</p><p>When you need to focus, Distraction Free Mode is there to help you out. Distraction Free Mode is full screen, chrome free editing, with nothing but your text in the center of the screen. You can incrementally show elements of the UI, such as tabs and the find panel, as you need them.</p><p>You can enter Distraction Free Mode using the View/Enter Distraction Free Mode menu.</p><p>Split Editing</p><p>Get the most out of your wide screen monitor with split editing support. Edit files side by side, or edit two locations in the one file. You can edit with as many rows and columns as you wish.</p><p>Take advantage of multiple monitors by editing with multiple windows, and using multiple splits in each window.</p><p>Take a look at the View/Layout menu for split editing options. To open multiple views into the one file, use the File/New View into File menu item.</p><p>Instant Project Switch</p><p>Projects in Sublime Text capture the full contents of the workspace, including modified and unsaved files. You can switch between projects in a manner similar to Goto Anything, and the switch is instant, with no save prompts - all your modifications will be restored next time the project is opened.</p><p>Plugin API</p><p>Sublime Text has a powerful, Python based plugin API. Along with the API, it comes with a built in Python console to interactively experiment in real time.</p><p>Customize Anything</p><p>Key Bindings, Menus, Snippets, Macros, Completions and more - just about everything in Sublime Text is customizable with simple JSON files. This system gives you flexibility as settings can be specified on a per-file type and per-project basis.</p><p>Cross Platform</p><p>Sublime Text is available for OS X, Windows and Linux. One license is all you need to use Sublime Text on every computer you own, no matter what operating system it uses.</p><p>Sublime Text uses a custom UI toolkit, optimized for speed and beauty, while taking advantage of native functionality on each platform.</p><p>source: sublimetext.com</p>",

    image: "images/stack/sublime.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 36,
    
    name: 'SVG',

    category: "Language,Graphics,Animation,Front End",

    tagline: "Scalable Vector Graphics",

    description: "<p>Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999.</p><p>SVG images and their behaviors are defined in XML text files. This means that they can be searched, indexed, scripted, and compressed. As XML files, SVG images can be created and edited with any text editor, but are more often created with drawing software.</p><p>All major modern web browsers—including Mozilla Firefox, Internet Explorer, Google Chrome, Opera, and Safari—have at least some degree of SVG rendering support.</p><p>source: wikipedia.org</p>",

    image: "images/stack/svg.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 37,
    
    name: 'Textastic',

    category: "SDK,Mobile",

    tagline: "Text, Code, and Markup Editor with Syntax Highlighting - FTP, SFTP, Dropbox - for iPad",

    description: "<p>Versatile</p><p>Highlights more than 80 different types of files while you're typing; HTML, XML, Objective-C, C++, PHP, Perl, Python, SQL, JavaScript, CSS, Tex, shell scripts, and many more. You can even use your own TextMate-compatible syntax definitions.</p><p>Speedy</p><p>Textastic's code editor is written from the ground up using native iOS APIs like Core Text. Particularly evident during interactive search, the text editor is quick and responsive.</p><p>Touch & Type</p><p>Additional keys above the virtual keyboard make it easy to enter code. Tapping on the editor with two fingers brings up a cursor navigation wheel that simplifies text selection. Code completion for HTML and CSS. External keyboards are fully supported.</p><p>Connective</p><p>Connect to FTP, SFTP and WebDAV servers and to your Dropbox account, use the built-in WebDAV server to easily transfer files from your Mac or PC. iTunes files sharing, emailing and "+'"open in"'+" for opening email attachments and transfering files to other apps are supported too.</p><p>source: textasticapp.com</p>",

    image: "images/stack/textastic.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 38,
    
    name: 'Trello',

    category: "Project Management Software",

    tagline: "Trello makes it easy to organize anything with anyone.</p>",

    description: "<p>Drop the lengthy email threads, out-of-date spreadsheets, no-longer-so-sticky notes, and clunky software for managing your projects and get Trello, the easy, free, and visual way to organize your important stuff.</p><p>This is a Trello board. It’s a list of lists filled with cards, used with a team or by yourself.</p><p>A Trello Board</p><p>Drag and drop cards between lists to show progress. Add as many people as you need and drag them to cards. Add and reorder lists as you need. Trello adapts to your project, team, and workflow.</p><p>You’ll see everything about your project just by glancing at the board, and it all updates in real-time. There’s nothing to set up and everyone gets it instantly.</p><p>Trello is simple on the surface, but cards have everything you need to get stuff done. Post comments for instant feedback. Upload files from your computer, Google Drive, Dropbox, Box, and OneDrive. Add checklists, labels, due dates, and more. Notifications make sure you always know when important stuff happens.</p><p>source trello.com</p>",

    image: "images/stack/trello.svg",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },

  
  {
    id: 39,
    
    name: 'Morello',

    category: "CMS",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 40,
    
    name: 'MODX',

    category: "CMS,PHP,Framework",

    tagline: "MODX is Creative Freedom",

    description: "<p>MODX is a free, open source content management system and web application framework for publishing content on the world wide web and intranets. MODX is licensed under the GPL, is written in the PHP programming language, and supports MySQL and Microsoft SQL Server as the database. It was awarded Packt Publishing's Most Promising Open Source Content Management System in 2007</p><p>source: wikipedia.org</p>",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 41,
    
    name: 'pbRadiomanager',

    category: "CMS,PHP,Framework",

    tagline: "",

    description: "<p>Enhances collaboration, accelerates information ﬂows and improves the actuality and accuracy of this information.</p><p>All aspects of making radio are integrated in pbRadioManager. All employees are able to work with one central system and they can make radio programmes together 24/7. Information can immediately be send to the website, facebook, twitter, text messaging, mobile apps and other applications.</p>",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 42,
    
    name: 'Yeoman',

    category: "Automation,Node.js,NPM,JavaScript,Front End",

    tagline: "THE WEB'S SCAFFOLDING TOOL FOR MODERN WEBAPPS",

    description: "<p>Yeoman helps you kickstart new projects, prescribing best practices and tools to help you stay productive.</p><p>To do so, we provide a generator ecosystem. A generator is basically a plugin that can be run with the `yo` command to scaffold complete projects or useful parts.</p><p>Through our official Generators, we promote the "+'"Yeoman workflow"'+". This workflow is a robust and opinionated client-side stack, comprising tools and frameworks that can help developers quickly build beautiful web applications. We take care of providing everything needed to get started without any of the normal headaches associated with a manual setup.</p><p>With a modular architecture that can scale out of the box, we leverage the success and lessons learned from several open-source communities to ensure the stack developers use is as intelligent as possible.</p><p>As firm believers in good documentation and well thought out build processes, Yeoman includes support for linting, testing, minification and much more, so developers can focus on solutions rather than worrying about the little things.</p><p>Tools</p><p>The Yeoman workflow is comprised of three types of tools for improving your productivity and satisfaction when building a web app: the scaffolding tool (yo), the build tool (Grunt, Gulp, etc) and the package manager (like Bower and npm).</p><p>YO</p><p>yo scaffolds out a new application, writing your Grunt configuration and pulling in relevant Grunt tasks and Bower dependencies that you might need for your build.</p><p>Grunt, Gulp, etc</p><p>The Build System is used to build, preview and test your project. Grunt and Gulp are two popular options.</p><p>Bower, npm, etc</p><p>The Package Manager is used for dependency management, so that you no longer have to manually download and manage your scripts. Bower and npm are two popular options.</p><p>All three of these tools are developed and maintained separately, but work well together as part of our prescribed workflow for keeping you effective.</p>",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 43,
    
    name: 'Express',

    category: "Framework,Node.js,NPM,JavaScript,Server Side,Back End",

    tagline: "web application framework for node",

    description: "<p>Web Applications</p><p>Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.</p><p>APIs</p><p>With a myriad of HTTP utility methods and Connect middleware at your disposal, creating a robust user-friendly API is quick and easy.</p><p>Performance</p><p>Express provides a thin layer of features fundamental to any web application, without obscuring features that you know and love in node.js</p>",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 44,
    
    name: 'Gitlab',

    category: "Git,SCM,Ruby,Open source",

    tagline: "Open source software to collaborate on code",

    description: "<p>GitLab offers git repository management, code reviews, issue tracking, activity feeds, wikis. It has LDAP/AD integration, handles 25,000 users on a single server but can also run on a highly available active/active cluster. A subscription gives you access to our support team and to GitLab Enterprise Edition that contains extra features aimed at larger organizations.</p>",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 45,
    
    name: 'SVN',

    category: "SCM",

    tagline: "Apache Subversion",

    description: "<p>Apache Subversion (often abbreviated SVN, after the command name svn) is a software versioning and revision control system distributed as free software under the Apache License. Developers use Subversion to maintain current and historical versions of files such as source code, web pages, and documentation. Its goal is to be a mostly compatible successor to the widely used Concurrent Versions System (CVS).</p><p>The free software community has used Subversion widely: for example in projects such as Apache Software Foundation, Free Pascal, FreeBSD, GCC, Mono and SourceForge. Google Code also provides Subversion hosting for their free software projects. CodePlex offers access to Subversion as well as to other types of clients.</p><p>The corporate world has also started to adopt Subversion. A 2007 report by Forrester Research recognized Subversion as the sole leader in the Standalone Software Configuration Management (SCM) category and as a strong performer in the Software Configuration and Change Management (SCCM) category.</p><p>Subversion was created by CollabNet Inc. in 2000, and is now a top-level Apache project being built and used by a global community of contributors.</p>",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 46,
    
    name: 'Mail chimp',

    category: "Framework,HTML,CSS",

    tagline: "Send Better Email",

    description: "<p>Subscriber profiles</p><p>Get insight about your subscribers and keep your contacts in one place with subscriber profiles. Click someone's name to see engagement, website activity, and more.</p><p>Add notes and one-to-one conversations to profiles, so you can remember who your customers are. And you can access it all from desktop or mobile, so it's easy to add notes when you're out and about meeting new people.</p><p>Automation and personalization</p><p>MailChimp helps you email the right people at the right time. Send automated emails based on customer behavior and preferences. Get started with pre-built Workflows or use our built-in segmentation and targeting options to build custom rules. And get in-depth reporting on how each of your automated series is performing. Our tools help you learn more about your customers and send them timely, relevant content.</p><p>What's the best time to send?</p><p>MailChimp's send time optimization recommends the best send time within 24 hours of your selected delivery date, determined by your specific list's engagement data. Send time optimization is powered by MailChimp's ongoing big data initiative, Email Genome Project.</p><p>How do I target smarter?</p><p>Pick a list or part of a list, and using Discover Similar Subscribers, we'll analyze it and build new segments of likeminded people from your subscriber base.</p><p>How can I grow my list?</p><p>With Twitter Tailored Audiences, you can target your subscribers on Twitter and make it easy for them to share your content with other people who have similar interests.</p><p>Advanced analytics</p><p>In addition to the reports that come with every account, MailChimp offers plenty of advanced reporting options that you can access from anywhere.</p><p>Monitor sales and website activity with revenue reports. With Google Analytics, you can inform your email content with purchase data and more.</p><p>Flexible design options for teams of all sizes</p><p>Add content and collaborate on campaigns that fit your brand, using MailChimp's Email Designer. Want to build your own email? Check out our email template reference.</p><p>Desktop view of MailChimp's drag and drop editorReceive feedback through comments with in MailChimp's campaign editor</p><p>MailChimp's collaboration options, like multi-user accounts and comments inside the editor, will speed up the design process and fit right into your workflow.</p><p>If you send transactional email, use MailChimp alongside Mandrill. It's built on the same delivery infrastructure that powers MailChimp, and the integration is seamless.</p><p>Send anytime, anywhere</p><p>MailChimp is a fully responsive app, so you can use it wherever and whenever you want to. And we have a suite of mobile apps to support you.</p><p>Access your MailChimp account from your phone with MailChimp Mobile. Check your reports, add notes about a contact, or send a campaign when your team is finished working on it.</p><p>Create new campaigns or edit draft campaigns on the MailChimp editor for mobile</p><p>Add content to your campaigns in the MailChimp editor for mobile</p><p>Edit campaigns, collaborate with your team, and send from a tablet with MailChimp Editor. And with Chimpadeedoo, you can collect signups from your tablet, even when you're not online.</p><p>Our templates and forms are mobile-ready out of the box, so you don't have to worry about coding anything special to make sure your emails look good on different screens.</p><p>We're constantly studying data and using it to create new tools and products for you.</p><p>We use data to improve our abuse prevention initiative that's always working in the background to keep our system clean. We also use it to create tools, like Discover Similar Segments, which helps you uncover segments within your list.</p><p>MailChimp's advanced features are free and easy to use. We can help you determine the best time to send a campaign, and quickly test subject lines before you send. You can even automatically send your campaigns at the same time in different time zones with the click of a button.</p><p>Our data scientists and engineers blog about new products and features, and our researchers publish their insights on our website. We share this knowledge so you can send better email.</p><p>We make products that support MailChimp customers with specific needs, like Gather, our SMS app for events.</p><p>Our API allows you to adapt your email marketing to fit your workflow. Whether it's time to integrate with a CRM, send transactional email with Mandrill, or build your own CMS, MailChimp will scale with your business.</p><p>MailChimp API wrappers hosted on Bitbucket.org</p><p>Our API offers in-depth documentation, wrapper downloads, and how-to documents. Almost all the data and functionality within our app is accessible, so the possibilities are endless. We encourage developers to integrate their own products with MailChimp and add to our growing collection of third-party apps. In fact, we've invested millions of dollars in an integration fund that pays people to do just that.</p><p>And MailChimp already integrates with hundreds of apps and services, like Salesforce, Eventbrite, Google, Twitter, Facebook, Shopify, and SurveyMonkey. Sync your data, import content from other sources, and see how your newsletters affect your business.</p><p>source: mailchimp.com</p>",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 47,
    
    name: 'Spotify',

    category: "Applications,HTML,CSS,JavaScript,Framework",

    tagline: "Music for everyone",

    description: "<p>Spotify Web API</p><p>Our Web API lets your applications fetch data from the Spotify music catalog and manage user’s playlists and saved music.</p><p>Based on simple REST principles, our Web API endpoints return metadata in JSON format about artists, albums, and tracks directly from the Spotify catalogue. The API also provides access to user-related data such as playlists and music saved in a “Your Music” library, subject to user’s authorization.</p><p>source developer.spotify.com</p>",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 48,
    
    name: 'HTML',

    category: "HTML,Language,Front End",

    tagline: "HyperText Markup Language",

    description: "<p>HTML or HyperText Markup Language is the standard markup language used to create web pages.</p><p>HTML is written in the form of HTML elements consisting of tags enclosed in angle brackets (like &lt;html&gt;). HTML tags most commonly come in pairs like &lt;h1&gt; AND &lt;/h1&gt;, although some tags represent empty elements and so are unpaired, for example &lt;img&gt;. The first tag in a pair is the start tag, and the second tag is the end tag (they are also called opening tags and closing tags).</p><p>A web browser can read HTML files and compose them into visible or audible web pages. The browser does not display the HTML tags, but uses them to interpret the content of the page. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language rather than a programming language.</p><p>HTML elements form the building blocks of all websites. HTML allows images and objects to be embedded and can be used to create interactive forms. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. It can embed scripts written in languages such as JavaScript which affect the behavior of HTML web pages.</p><p>Web browsers can also refer to Cascading Style Sheets (CSS) to define the look and layout of text and other material. The W3C, maintainer of both the HTML and the CSS standards, encourages the use of CSS over explicit presentational HTML.</p><p>source wikipedia.org</p>",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 49,
    
    name: 'CSS',

    category: "CSS,Language,Animation,Design,Front End",

    tagline: "Cascading Style Sheets",

    description: "<p>Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. While most often used to style web pages and user interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. CSS is a cornerstone specification of the web, and almost all web pages use CSS style sheets to describe their presentation.</p><p>CSS is designed primarily to enable the separation of document content from document presentation, including elements such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple pages to share formatting, and reduce complexity and repetition in the structural content (such as by allowing for tableless web design). It obviates those portions of markup that would specify presentation by instead providing that information in a separate file. For each relevant HTML element (identified by tags), it provides a list of formatting instructions. For example, it might say (in CSS syntax), "+'"All heading 1 elements should be bold."'+" Therefore, no formatting markup such as bold tags (&lt;b&gt;&lt;/b&gt;)is needed within the content; what is needed is simply semantic markup saying, "+'"this text is a level 1 heading."'+"</p><p>CSS can also allow the same markup page to be presented in different styles for different rendering methods, such as on-screen, in print, by voice (when read out by a speech-based browser or screen reader) and on Braille-based, tactile devices. It can also be used to allow the web page to display differently depending on the screen size or device on which it is being viewed. While the author of a document typically links that document to a CSS file, readers can use a different style sheet, perhaps one on their own computer, to override the one the author has specified. However if the author or the reader did not link the document to a specific style sheet the default style of the browser will be applied.</p><p>CSS specifies a priority scheme to determine which style rules apply if more than one rule matches against a particular element. In this so-called cascade, priorities or weights are calculated and assigned to rules, so that the results are predictable.</p><p>The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998), and they also operate a free CSS validation service.</p>",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 50,
    
    name: 'Indesign',

    category: "",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 51,
    
    name: 'Facebook API',

    category: "API,Framework,Social",

    tagline: "",

    description: "<p>Canvas</p><p>Canvas is a frame in which to put your app or game directly on Facebook.com on desktops and laptops. Building a Canvas app on Facebook gives you the opportunity to deeply integrate into the core Facebook experience. Your app can integrate with many aspects of Facebook.com, including the News Feed and Notifications. All of the core Facebook Platform technologies, such as Graph API, Facebook Login and Payments are available within Canvas apps.</p><p>Facebook SDK for JavaScript</p><p>The Facebook SDK for JavaScript provides a rich set of client-side functionality for adding Social Plugins, making API calls and implementing Facebook Login.</p>",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 52,
    
    name: 'Hyves API',

    category: "API,Social",

    tagline: "",

    description: "",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 54,
    
    name: 'Twitter API',

    category: "API,Social",

    tagline: "",

    description: "",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 55,
    
    name: 'Linkedin API',

    category: "API,Social",

    tagline: "",

    description: "",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 56,
    
    name: 'VKontakte API',

    category: "API,Social",

    tagline: "",

    description: "",

    rating: 2,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 57,
    
    name: 'Last.fm API',

    category: "API,Framework",

    tagline: "",

    description: "",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 58,
    
    name: 'Mespeak.js',

    category: "JavaScript,Framework",

    tagline: "",

    description: "",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 59,
    
    name: 'Sencha Touch',

    category: "JavaScript,Framework,Applications,Front End",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 60,
    
    name: 'Sencha Command',

    category: "Command Line,Framework,Applications",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 61,
    
    name: 'SSH Terminal',

    category: "Command Line,Mobile",

    tagline: "",

    description: "",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 62,
    
    name: 'Terminal',

    category: "SDK,Command Line,Server Side,Back End",

    tagline: "",

    description: "",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 53,
    
    name: 'VIM',

    category: "SDK,Server Side,Back End,Command Line",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 63,
    
    name: 'Responnsive Styling',

    category: "HTML,CSS,Mobile,Front End",

    tagline: "",

    description: "",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 65,
    
    name: 'Sencha Architect',

    category: "SDK,Design",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 66,
    
    name: 'Docker',

    category: "Automation,OS,Operations,Server Side,Back End",

    tagline: "",

    description: "",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 67,
    
    name: 'Windows',

    category: "Operating System",

    tagline: "",

    description: "",

    rating: 4,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 68,
    
    name: 'OSX',

    category: "Operating System",

    tagline: "",

    description: "",

    rating: 5,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 69,
    
    name: 'FreeBSD',

    category: "Operating System,Operations",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 70,
    
    name: 'Ubuntu',

    category: "Operating System,Operations",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  },
  
  {
    id: 71,
    
    name: 'CentOS',

    category: "Operating System,Operations",

    tagline: "",

    description: "",

    rating: 3,

    articles: [0,1],

    events: [2,3]
    
  }
];
