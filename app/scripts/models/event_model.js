/*global Ember*/
Portfolio.Event = DS.Model.extend({
    name: DS.attr('string'),

    role: DS.attr('string'),

    type: DS.attr('string'),

    startStamp: DS.attr('string'), 

    endStamp: DS.attr('string'),

    description: DS.attr('string'),

    location: DS.attr('string'),

    color: DS.attr('string'),

    articles: DS.hasMany('article', {async:true}),

    stackItems: DS.hasMany('stack', {async:true})
});

// delete below here if you do not want fixtures
Portfolio.Event.FIXTURES = [
  
  {
    id: 0,
    
    name: 'Het Financieele Dagblad',
    
    role: 'Image / Web intern',

    type: "Employement",
    
    startStamp: 1249077600000,
    
    endStamp: 1262300400000,
    
    description: "For Het Financieele Dagblad (Dutch financial daily) I my task was to provide imagery for the online articles. Besides this I've created numerous tools to automate annoying processes for the editors.",
    
    location: "Amsterdam",

    //color: "#ffeadb",

    articles: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 1,
    
    name: 'Studio Stomp',
    
    role: 'Intern / Junior Developer',

    type: "Employement",
    
    startStamp: 1262300400000,
    
    endStamp: 1296514800000,
    
    description: "I've learned Object oriented scripting as wel as assisting on a lot of the productions made by studio stomp.",
    
    location: "Amsterdam",

    color: "rgb(20, 173, 124)",

    articles: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 2,
    
    name: 'Studio Stomp',
    
    role: 'Developer',

    type: "Employement",
    
    startStamp: 1296514800000,
    
    endStamp: 1328050800000,
    
    description: "For Studio Stomp I've created numerous online activation sites, banners and informative sites. For a lot of these products I've also created a large part of the interaction- and technical designs to assist the visual designers.",
    
    location: "Amsterdam",

    color: "rgb(20, 173, 124)",

    articles: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 3,
    
    name: 'Albumprinter',
    
    role: 'Seconded frontend developer',

    type: "Employement",
    
    startStamp: 1317420000000,
    
    endStamp: 1328050800000,
    
    description: "I was seconded to Albumprinter by Studio Stomp to assist the online marketing team. My main tasks where developing landing pages, social widgets, giving technical support on implementing analytics and upgrading the blogs for the Brands Albelli (nl, fr, de, be, co.uk), Önskefoto (se), Allfoto (no) and bonusprint (co.uk). The last months I also assisted the online editor team in creating and fixeng HTML5 product editors, and a product viewer.",
    
    location: "Amsterdam",

    color: "#e65c00",

    articles: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 4,
    
    name: 'NPO',
    
    role: 'Frontend Developer',

    type: "Employement",
    
    startStamp: 1364767200000,
    
    endStamp: 1385852400000,
    
    description: "I was placed here as an external frontend developer, although most of my work turned out te be backend PHP. I was the main developer for the second half of the production of the new website for Radio 1. I worked with Pluxbox on the new Radio 2 website where I did most of the front end styling and scripting. The rest of the time I did maintenance work on the websites and apps for Radio 4 and Radio 6 soul & jazz",
    
    location: "Hilversum",

    color: "#ff6d00",

    articles: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 5,
    
    name: 'Reobwuein',
    
    role: 'CTO, CEO, Owner',

    type: "Company",
    
    startStamp: 1262300400000,
    
    endStamp: new Date().getTime(),
    
    description: "Under the banner of Reobwuein I create websites and applications using web technologies. The main focus at the moment is Wordpress driven highly customized websites, which preform smoothly across different devices and browsers. Working according best practices and the W3C rulebook. I also handle all project management, sales and account for Reobwuein",
    
    location: "Amsterdam",

    color: "#29a",

    articles: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 6,
    
    name: 'P.K Trappen',
    
    role: 'Part time worker',

    type: "Employement",
    
    startStamp: 1149112800000,
    
    endStamp: 1251756000000,
    
    description: "For Studio Stomp I've created numerous online activation sites, banners and informative sites. For a lot of these products I've also created a large part of the interaction- and technical designs to assist the visual designers.",
    
    location: "Amsterdam",

    //color: "rgb(194,49,42)",

    articles: [0,1],

    stackItems: [2,3]
    
  },
  
  {
    id: 7,
    
    name: 'Genkgo',
    
    role: 'Freelance Ember developer',

    type: "Project",
    
    startStamp: 1394406000000,
    
    endStamp: 1395961200000,
    
    description: "Genkgo hired me to help them with the setup of an Ember.js app. The setup was made for an app build on ember and ported with phonegap to be placed in the app store and play store.",
    
    location: "Amsterdam",

    //color: "rgb(194,49,42)",

    articles: [],

    stackItems: [2,22,7,15,0,33,42,68]
    
  },
  
  {
    id: 8,
    
    name: 'Cook By Stapp',
    
    role: 'Partner / Developer',

    type: "Project",
    
    startStamp: 1337292000000,
    
    endStamp: 1367618400000,
    
    description: "We decided to build an app, we failed.",
    
    location: "Amsterdam",

    //color: "rgb(194,49,42)",

    articles: [],

    stackItems: [15,48,49,22,24]
    
  },
  
  {
    id: 9,
    
    name: 'Sem Helpt',
    
    role: 'Partner / Developer',

    type: "Project",
    
    startStamp: 1375308000000,
    
    endStamp: new Date().getTime(),
    
    description: "Sem",
    
    location: "Amsterdam",

    articles: [],

    stackItems: [2,22,7,15,0,33,42,68]
    
  },
  
  {
    id: 10,
    
    name: 'Railway Rules',
    
    role: 'Full stack developer / Designer',

    type: "Project",
    
    startStamp: 1370037600000,

    endStamp: 1377727200000,
    
    description: "Rwr",
    
    location: "Amsterdam",

    articles: [],

    stackItems: [2,22,7,15,0,33,42,68]
    
  },
  {
    id: 11,
    
    name: 'Railway Rules',
    
    role: 'Full stack developer / Designer',

    type: "Project",
    
    startStamp: 1402005600000,

    endStamp: 1404079200000,
    
    description: "Rwr",
    
    location: "Amsterdam",

    articles: [],

    stackItems: [2,22,7,15,0,33,42,68]
    
  },
  {
    id: 12,
    
    name: 'Interactive designer',
    
    role: 'Student',

    type: "Education",
    
    startStamp: 1138748400000,

    endStamp: 1301608800000,
    
    description: "MBO niveau 4",
    
    location: "Amsterdam",

    articles: [],

    stackItems: []
    
  },

    {
        "name":"Weekly Wednesday Lunchtime Lectures","role":"visitor","type":"Meetup","startStamp":1375266600000,"endStamp":1375273800000,"description":"This week's lecture will be presented by Lee Boonstra from Sencha. Lee will discuss the power of mobile HTML5 frameworks, where Sencha Touch fits in, Sencha equips developers with frameworks, tools and services to help them build awesome (mobile) web applications using HTML5 and JavaScript. As a technical trainer, 12:30 13:00 14:00 14:30 Weekly Wednesday Lunchtime Lectures is an initiative to allow people in Appsterdam to talk about technology and share knowledge, allowing participants to receive training in public speaking. Our lectures cover a wide range of topics related to making apps on any platform, from technical to non-technical including computer languages, modelling, testing, design, marketing, business philosophy, startups, strategizing, In the full sharing spirit of Appsterdam, we will eat lunch together. Our kind host will provide us with bread and drinks. Bring your own sandwich topping to share with others.","id":8999,"color":"#e0393e"
    },
    {
        "name":"Hackers and Founders (Amsterdam, NL) Meetup","role":"visitor","type":"Meetup","startStamp":1375376400000,"endStamp":1375376400000,"description":"Rosario Iannella - Qardio, A company who is designing and manufacturing beautiful and revolutionary cardiovascular monitoring systems that bring your health into a clear, David Klingen - Moyee Coffee, Aiming to disrupt the coffee production process, this company is inventing the concept of 'fair chain', all the while creating great tasting coffee, building store fronts, and an online presence.  http://moyeecoffee.nl/","id":9000,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - October/2013 (with PHPBenelux)","role":"visitor","type":"Meetup","startStamp":1382029200000,"endStamp":1382029200000,"description":"We'll be organizing October's meeting together with PHPBenelux! For their meeting in the Netherlands they chose Amsterdam, 19:00 19:30 - 20:30: 'Speeding up PHP – mixing PHP with C++' 20:30 - 20:45 20:45: Social, However, although PHP offers a C API that allows one to combine PHP and C/C++, using this API is tough. The PHP C API is not very well documented - and could have a better and simpler structure. Most PHP developers therefore never consider writing in C, That's why the PHP-CPP library is being developed. To overcome the problems that the C API has, Copernica is building a C++ library that is easy to use, and that has an object oriented structure. This library allows developers to move their algorithms and data structures from PHP to C++, Emiel Bruijntjes will show examples of how to use the C++ library, and will speak about the design of the library, and the plans he has with it. This presentation will also be the first time the library is showed to the public, Emiel Bruijntjes has been working with PHP for more then 10 years. He is one of the founders of Copernica BV. This year he has been working on MailerQ, a fast and flexible MTA that uses AMQP message queues, and PHP-CPP, We got some awesome stuff to give away this month, so make sure you CHECK IN once you arrive at the meetup if you want a shot at getting it!","id":9001,"color":"#e0393e"
    },
    {
        "name":"AmsterdamJS October","role":"visitor","type":"Meetup","startStamp":1383156000000,"endStamp":1383156000000,"description":" Sometimes you are tasked with building great things by yourself or in a small team. Bootstrapped start-ups don’t always have the budget for a dedicated Uxer to help you design the best apps, software or websites. So how do design great things without a Uxer? This is not a definitive guide or to even to be used instead of getting professional UX help but it will get you started developing the right way and stop you making classic mistakes.Before you even consider touching your dev environment I will show you how to “Start with one idea”, “Think like a user” and set out your user journeys. From this solid foundation I will show you how to wireframe your logic and build it as rough a prototype as you can manage. We then consider how to evaluate and iterate on your designs and what tools you can use. Finally, We'll also have plenty of drinks and snacks sponsored by Trifork, See you all there!","id":9002,"color":"#e0393e"
    },
    {
        "name":"Weekly Wednesday Lunchtime Lectures","role":"visitor","type":"Meetup","startStamp":1386156600000,"endStamp":1386163800000,"description":"This week we have Valentina Rao, who will talk about 'Behavior change for applications and applications for behavior change: a look into persuasive design' This talk will be about persuasive design in mobile apps, when to use it, how to use it, Some applications are 'evil by design', they oblige the user to go in a certain direction, To make your application successful, design has rather to be seductive, but also to leave space to individual will and actions, The above is important for every kind of application, 12:30 13:00 14:00 14:30 Weekly Wednesday Lunchtime Lectures is an initiative to allow people in Appsterdam to talk about technology and share knowledge, allowing participants to receive training in public speaking. Our lectures cover a wide range of topics related to making apps on any platform, from technical to non-technical including computer languages, modelling, testing, design, marketing, business philosophy, startups, strategizing, In the full sharing spirit of Appsterdam, we will eat lunch together. Our kind host will provide us with bread and drinks. Bring your own sandwich topping to share with others.","id":9003,"color":"#e0393e"
    },
    {
        "name":"Ti.Next: Future of Titanium","role":"visitor","type":"Meetup","startStamp":1386174600000,"endStamp":1386174600000,"description":" • NEW: 17:30 • 18:30 • 19:30 • 20:30 From now on, be sure to bring your laptop and test devices, 'cause we get hands-on! Get to Glimworm HQ straight out of work to get help with your daily issues. And after hearing the latest on Titanium, learn how to use it in your projects right away! Plenty WiFi, power and tables, Come over to hear more about Ti.Next, the next major (4.x) release of Titanium. A complete rewrite of the core, wherein JavaScript will be compiled to assembly, rather then going through Objective-C or JAVA. Because of this you will be able to use any native API directly and tests show a 400 https://vimeo.com/75241456 Jeff is Co-founder and CEO of Appcelerator. Jeff is a long-time serial entrepreneur, technologist and blogger. Previously, Jeff was Co-founder and CTO of Vocalocity, a software provider in the communications arena and before that, CTO of eHatchery, a digital incubator and off-shoot of Bill Gross’ idealab!. Jeff has worked on numerous standard committees such as IETF and W3 Boydlee will also be in Amsterdam for the meetup to do a secret announcement. If you know about Boydlee's involvement in the community you probably know what it's about :)","id":9004,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - December/2013","role":"visitor","type":"Meetup","startStamp":1387476000000,"endStamp":1387476000000,"description":" This month, 19:00 19:30 - 20:30: 'Freelancing: How to Fail' 20:30 - 20:45 20:45: Social, Shawn has been developing for the web professionally for over 15 years. Most of his job is planning and developing web sites. But, In June of 2011 Shawn moved from Nashville, Talk: 'Freelancing: How To Fail' After over a decade of full-time software development, Shawn (with business partner, Justin) decided to put his money where his mouth was and work for himself. A year later, We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9005,"color":"#e0393e"
    },
    {
        "name":"Theming with Architect 3 / Sencha Products Roadmap","role":"visitor","type":"Meetup","startStamp":1389115800000,"endStamp":1389115800000,"description":" Presentation starts at 7:00 18.30 19.00 19.30 19.45 20.15 20:45 21:30 End","id":9006,"color":"#e0393e"
    },
    {
        "name":"Fundamentals - Making the most of your single thread","role":"visitor","type":"Meetup","startStamp":1389198600000,"endStamp":1389198600000,"description":"Snowciety’s co-founder Ronald Treur will talk about how to make the best use of your single thread, • NEW: 17:30 • 18:30 • 19:30 • 20:30 From now on, be sure to bring your laptop and test devices, 'cause we get hands-on! Get to Glimworm HQ straight out of work to get help with your daily issues. And after hearing the latest on Titanium, learn how to use it in your projects right away! Plenty WiFi, power and tables, The native app development environments support multiple threads. Titanium however does not, it only supports one (basically). In today's talk, Ronald Treur will shortly explain how threading works and why this matters. But more important, Keeping lengthy processes from blocking (for example) user input (via the UI) is but one problem every Titanium developer will encounter sooner rather than later. Depending on the time left, other handy Javascript, Ronald Treur has been working with Titanium for over two years now. Together with Timan Rebel, he created the social wintersports app 'Snowciety'. Originally coded using Titanium 1.6, the app was completely rewritten using Alloy in 2013 Using Alloy as a foundation, Ronald wrote a framework on top of it that offers more options and flexibility and at the same time increases the level of abstraction and cohesion. Dubbed 'Frost(ium)', this framework is currently closed source and used exclusively by Snowciety. If however, he ever manages to clone himself, he promised to open source it.","id":9007,"color":"#e0393e"
    },
    {
        "name":"New Years' Drinks","role":"visitor","type":"Meetup","startStamp":1389376800000,"endStamp":1389391200000,"description":"Welcome 2014 Join us for a look back into the AmsterdamPHP past and its future. We'll look back at what we achieved, share stories, Following of course by pizza and drinks, graciously sponsored by our friends at Driebit.","id":9008,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - January/2014","role":"visitor","type":"Meetup","startStamp":1389895200000,"endStamp":1389895200000,"description":" This month, 19:00 19:30 - 20:30: 'The first few milliseconds of HTTPS' 20:30 - 20:45 20:45: Social, Joshua Thijssen is a freelance consultant, developer and trainer. His daily work consists of maintaining code bases, working on different projects and helping other to achieve higher standards in both coding and thinking. He is the lead developer of Saffire - a web/system language, author of the PHP|Architect book 'Mastering the SPL library', Talk: 'The first few milliseconds of HTTPS' What happens when your browser connects to a HTTPS secure site? We all know it has to do something with certificates, blue and green address bars and sometimes your browser will give warnings which we normally click away. But what actually happens under the hood? In this talk I will give a step-by-step explanation on the first few hundred milliseconds during a connection to HTTPS. We will talk about master secrets, shared secrets, cipher suites, x509 certificates and why secure does not (always) mean secure. After this talk you not only can use HTTPS correctly, We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9009,"color":"#e0393e"
    },
    {
        "name":"Talks & Drinks","role":"visitor","type":"Meetup","startStamp":1390327200000,"endStamp":1390327200000,"description":"This time we have 3 great speakers lined up for you. We'll start at 19:00 at the Springest office, Rokin 75 • Wouter de Vos (Springest) - RubyMotion/ProMotion","id":9010,"color":"#e0393e"
    },
    {
        "name":"JS MVC Meetup #6","role":"visitor","type":"Meetup","startStamp":1391016600000,"endStamp":1391029200000,"description":"Hi everybody, We're having our 6th Meetup on Wednesday 29 January. De Voorhoede has graciously offered to host this meetup and you can show up anytime after 18:30h. The first talk will start at 19:00 1 2 Ben, Thijs and Niels","id":9011,"color":"#e0393e"
    },
    {
        "name":"Weekly Wednesday Lunchtime Lectures","role":"visitor","type":"Meetup","startStamp":1391599800000,"endStamp":1391607000000,"description":"This week we are honored to have Dennis Reumer and his colleagues Titus Braber and Rik Scheffer from BlackBerry come and present on 'Free Money - Android on BlackBerry' Android is being fully supported on BlackBerry 10 and with the coming BlackBerry 10.2.1 OS release even Native Code can be run on the BlackBerry 10 OS Platform. Learn how to test in under 5 minutes if your app will run and work on BlackBerry 10 and with another 10 12:30 13:00 14:00 14:30 Weekly Wednesday Lunchtime Lectures is an initiative to allow people in Appsterdam to talk about technology and share knowledge, allowing participants to receive training in public speaking. Our lectures cover a wide range of topics related to making apps on any platform, from technical to non-technical including computer languages, modelling, testing, design, marketing, business philosophy, startups, strategizing, In the full sharing spirit of Appsterdam, we will eat lunch together. Our kind host will provide us with bread and drinks. Bring your own sandwich topping to share with others.","id":9012,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting","role":"visitor","type":"Meetup","startStamp":1391623200000,"endStamp":1391623200000,"description":" This month's meeting will be hosted by our friends at Publitas.com, who will also provide us with drinks, 19:00 19:30 19:40  'Behaviour design, an emerging field driven by mobile technology' 20:30  Food, drinks, He's a strategist and co-founder Somehow digital innovation studio. Fasciated by behavior, Talk: Behaviour design, How can we use technology to influence behaviour and attitudes of people? We'll give an overview of this emerging field, the most exiting projects and dive into one of the scientific models underlying this field.","id":9013,"color":"#e0393e"
    },
    {
        "name":"Open Coffee Amsterdam @ Launchdesk Bovendebalie","role":"visitor","type":"Meetup","startStamp":1391673600000,"endStamp":1391673600000,"description":"Have a casual cup of coffee with about 100 tech enthousiasts every 1st Thursday of the month at 09:00AM in the Bovendebalie coworking space building (Café de Balie, Marieke, PS. If you're looking for shared office space in Amsterdam, check out our new initiative Launchdesk","id":9014,"color":"#e0393e"
    },
    {
        "name":"HTML5 App Camp 151 - Build a Sencha Touch App with Sencha Architect","role":"visitor","type":"Meetup","startStamp":1391760000000,"endStamp":1391796000000,"description":" Did you miss the HTML5 App Camp HTML5-151 in January? We are hosting the same App Camp again on the 7 https://www.regonline.com/Register/Checkin.aspx?EventID=1437749 Learn how to build and deploy powerful mobile apps quickly for iOS, Android, Blackberry 10, and Windows Phone 8 Quickly develop an app that functions across a variety of mobile devices with Sencha Architect. Implement a complex mobile UI that integrates forms, maps, tabs, sorting, and media. Efficiently handle gestures. Make background requests for data from an application server or web service. Use Cordova to test and package apps ready for app stores.","id":9015,"color":"#e0393e"
    },
    {
        "name":"Meeting with Jared Spool","role":"visitor","type":"Meetup","startStamp":1391797800000,"endStamp":1391797800000,"description":"With our friends Fronteers we were lucky enough to catch Jared Spool (yes, The meeting would take place in the beautiful Felix Meritis house, provided for us by our sponsor User Intelligence. Please note, that the amount of places is limited, 19:30 20:35 20:45  'UX strategy means business' 21:45 22:05 23:00 Jared M. Spool is the founder of User Interface Engineering, the largest usability research organisation of its kind in the world. He’s been working in the field of usability and experience design since 1978, before the term 'usability' Jared spends his time working with the research teams at the company, helps clients understand how to solve their design problems, explains to reporters and industry analysts what the current state of design is all about, and is a top-rated speaker at more than 20 conferences every year. He is also the conference chair and keynote speaker at the annual UI Conference and UX Immersion Conference, and manages to squeeze in a fair amount of writing time. He is author of the book, We are in an age where poor user experiences become the focus of nationwide attention. One doesn’t need to look beyond recent catastrophes, such as Apple’s iOS6 Maps, Healthcare.gov, Yet, what do we know about ensuring our next design isn’t going down the same road as those that have failed before us? We need to understand how design integrates with our organisation’s strategy, to ensure we’re supporting and enhancing it, In what may possibly be his most entertaining presentation ever, Jared will show you how to integrate user experience strategy with your business’s objectives. He’ll explore the world of business models, 1 2 3. Which of the emerging business model variations for content might be the right direction for your business","id":9016,"color":"#e0393e"
    },
    {
        "name":"Weekly Wednesday Lunchtime Lectures","role":"visitor","type":"Meetup","startStamp":1392204600000,"endStamp":1392211800000,"description":" Jonathan will shed some lights on iBeacon, an indoor positioning system that Apple calls 'a new class of low-powered, low-cost transmitters that can notify nearby iOS7 devices of their presence'. If time permits, 12:30 13:00 14:00 14:30 Weekly Wednesday Lunchtime Lectures is an initiative to allow people in Appsterdam to talk about technology and share knowledge, allowing participants to receive training in public speaking. Our lectures cover a wide range of topics related to making apps on any platform, from technical to non-technical including computer languages, modelling, testing, design, marketing, business philosophy, startups, strategizing, In the full sharing spirit of Appsterdam, we will eat lunch together. Our kind host will provide us with bread and drinks. Bring your own sandwich topping to share with others.","id":9017,"color":"#e0393e"
    },
    {
        "name":"Amsterdam JS February","role":"visitor","type":"Meetup","startStamp":1392228000000,"endStamp":1392228000000,"description":"AmsterdamJS February 2014 Node &amp; Native, Felix will introduce his last desktop app done entirely with Node, and will explain how to bundle our own desktop apps, JavaScript and HTML in Shipbuilding and aircraft industries, Denis will explain why in the near future we might see airplanes and ships that use HTML and JavaScript for their UIs, We'd love to know what you are passionate about! Any subject related to JavaScript and any length of talk will be considered. Speaking at AmsterdamJS is easy, https://docs.google.com/forms/d/1JqfozjbITrOMN0Eq1886nS8gjgGmZg5ZQBFSflQ7NBU/viewform","id":9018,"color":"#e0393e"
    },
    {
        "name":"Monthly Meetup - Devops from a dev perspective","role":"visitor","type":"Meetup","startStamp":1392310800000,"endStamp":1392321600000,"description":"This time we are welcome at DigitasLBi (http://www.digitaslbi.com/global/). We would like to start at 18:00 For those who come by car, there is parking space at DigitasLBi after 18:00 Joop Geesinkweg 209 1096 020 460 4500 https://maps.google.nl/?ie=UTF8&amp;ll=52.334782,4.93108&amp;spn=0.00474,0.…src=6&amp;iwloc=A&amp;q=DigitasLbi+Netherlands&amp;cid=7351234080957032824 For those who come by public transport, Van der Madeweg, Metro vanaf dit station: 50, 54 https://maps.google.nl/?ie=UTF8&amp;ll=52.33134,4.932421&amp;spn=0.00474,0.…amp;iwloc=lyrftr:h,0x47c60bc5aff86907:0x75d631732331da2d,52.329904,4.93034","id":9019,"color":"#e0393e"
    },
    {
        "name":"Geeks & drinks","role":"visitor","type":"Meetup","startStamp":1392400800000,"endStamp":1392400800000,"description":" Chat with people you know from the user group, or get to know new people. No presentations or sponsors, just drinks, social and a lot of fun.","id":9020,"color":"#e0393e"
    },
    {
        "name":"Haal meer uit je website","role":"visitor","type":"Meetup","startStamp":1392400800000,"endStamp":1392411600000,"description":"Je website ziet er strak uit en je hebt er ook best goede content aan  toegevoegd. Maar hoe nu verder? Hoe kun je online beter gevonden worden en voor meer verkeer, • Affiliate marketing, • Remarketing, Tegenwoordig is het voor bedrijven essentieel om online gevonden te worden. Welke manieren zijn eigenlijk effectief? Waar liggen op dit moment de kansen en bedreigingen? SEA, SEO, remarketing of affiliate marketing. Termen waar je wel van gehoord hebt, Laat snel weten of je komt, want de ruimte is beperkt (50 Voor maar €40 per jaar ben je lid van de leukste freelance vereniging van Nederland! Zie de website voor meer informatie over de aanmelding als lid:  www.freelancefactory.nl.","id":9021,"color":"#e0393e"
    },
    {
        "name":"Weekly Wednesday Lunchtime Lectures","role":"visitor","type":"Meetup","startStamp":1392809400000,"endStamp":1392816600000,"description":" Abstract: Graphs offer application developers a fantastic, flexible and fast way to store and access their data. In this talk, we will introduce and illustrate the main concepts, This week, we are honored to have Rik Van Bruggen as our guest lecturer. Rik is the regional territory manager for Neo Technology for the BeNeLux, UK, and Nordics. He has been working for startup companies for most of his career, and while he has a fond technical interest, Please note that starting this week, 12:30 13:00 14:00 14:30 Weekly Wednesday Lunchtime Lectures is an initiative to allow people in Appsterdam to talk about technology and share knowledge, allowing participants to receive training in public speaking. Our lectures cover a wide range of topics related to making apps on any platform, from technical to non-technical including computer languages, modelling, testing, design, marketing, business philosophy, startups, strategizing, In the full sharing spirit of Appsterdam, we will eat lunch together. Our kind host will provide us with bread and drinks. Bring your own sandwich topping to share with others.","id":9022,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - February/2014","role":"visitor","type":"Meetup","startStamp":1392919200000,"endStamp":1392919200000,"description":"Febuary's topic will be: PHP weirdness! This month, 19:00 19:30 - 20:30: The Big 'Why equal doesn't equal' 20:30 - 20:45 20:45: Social, Juliette is an all round consultant and web-developer who tries not be a geek. Having started with client-side web development in 2000, she furtively tried to avoid server-side web until she was forced to learn PHP at knife-point in 2002 and found herself hooked quite quickly. As she herself would put it ‘It is more fun than Sudoku, We all compare and test data on nearly every other line in our code, be it input validation, an if-statement, a switch or determining what to display and how. So of course we are all experts on how to do these tests and comparisons…. Or are we? Come and join in on the Big “Why equal doesn’t equal” Quiz and show us whether you are an expert or a n00 We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9023,"color":"#e0393e"
    },
    {
        "name":"Docker: Show and tell!","role":"visitor","type":"Meetup","startStamp":1393524000000,"endStamp":1393524000000,"description":"With Docker appearing in more blog posts and conferences every day, we thought it was about time to hand over the meetup to you, For anyone unfamiliar with the Show and Tell concept, Everyone who wants to, gets 10-20 minutes to explain how they have been using Docker, Perhaps you're using Docker for a hobby project, We will either go for a standard lecture format, or if there are enough applicants, If you want to give a Show and Tell, either leave a comment on this meetup, See you all on the 27th!","id":9024,"color":"#e0393e"
    },
    {
        "name":"Open Bar, Presentations & Q&A with Lead Go Ethereum Developer - Jeffrey Wilcke","role":"visitor","type":"Meetup","startStamp":1393956000000,"endStamp":1393956000000,"description":"So we have a beamer and open bar (first come, first serve!) at Cafe De Doffer, 7pm, Tuesday 4 So far we have 2 - Q&amp;A with the Lead Go Developer, If you are interested in giving a presentation please hit me up, the more the merrier and I look forward to seeing you there!","id":9025,"color":"#e0393e"
    },
    {
        "name":"JS MVC Meetup #7","role":"visitor","type":"Meetup","startStamp":1394042400000,"endStamp":1394053200000,"description":" Join us on Wednesday March 5th for another JS MVC Meetup! The Meetup is being held at the Rockstart office and will start at 19:00 1 2 Niels, Ben and Thijs","id":9026,"color":"#e0393e"
    },
    {
        "name":"Open Coffee Amsterdam @ Launchdesk Bovendebalie","role":"visitor","type":"Meetup","startStamp":1394092800000,"endStamp":1394092800000,"description":"Have a casual cup of coffee with about 100 tech enthousiasts every 1st Thursday of the month at 09:00AM in the Bovendebalie coworking space building (Café de Balie, Marieke, PS. If you're looking for shared office space in Amsterdam, check out our new initiative Launchdesk","id":9027,"color":"#e0393e"
    },
    {
        "name":"Hackers and Founders (Amsterdam, NL) Meetup","role":"visitor","type":"Meetup","startStamp":1394128800000,"endStamp":1394128800000,"description":" Ben Lenarts from Tupil, maker of Beamer app, will talk about their path to indie development. His company has essentially 'built a better mousetrap' As part of our monthly craft brewer spotlight we have a new beer on draft. This week it is the Carrie IPA from the Kaapse Brouwers, a new brewery from Rotterdam. We also have Gaio 1.0 from Amsterdam's Oedipus Brewing in bottle, our featured brewer for last month's meetup.","id":9028,"color":"#e0393e"
    },
    {
        "name":"Joint meetup with DEVOPS Amsterdam!","role":"visitor","type":"Meetup","startStamp":1394470800000,"endStamp":1394470800000,"description":" If you're not already familiar with DEVOPS Amsterdam this is a good opportunity to meet a great bunch of people and a nice way to start warming up for DEVOPS Days Amsterdam 2014 - (3 p.s. You can see the DEVOPS Amsterdam meetup event here: http://www.meetup.com/DevOpsAmsterdam/events/166427712/","id":9029,"color":"#e0393e"
    },
    {
        "name":"Monthly Meetup - Docker and Enterprise on Devops","role":"visitor","type":"Meetup","startStamp":1394470800000,"endStamp":1394481600000,"description":" 18:00 19:00 19:30 20:00 20:30 If you want to speak on a meetup in the future, Thanks, After the meetup we'll have another beer and probably close around 22:00 Talks can be longer ..., depending on discussions/questions","id":9030,"color":"#e0393e"
    },
    {
        "name":"Ember.js Meetup #1","role":"visitor","type":"Meetup","startStamp":1394647200000,"endStamp":1394656200000,"description":"Hi Everybody, This group's first Meetup is scheduled for 12 March at 19:00 We have one talk scheduled and anybody who's interested in giving a lightning talk (5 mins) or short talk / demo (15 - 20 1 2 Ben","id":9031,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - March/2014","role":"visitor","type":"Meetup","startStamp":1395338400000,"endStamp":1395338400000,"description":"March's topic will be: Reactphp! This month, 19:00 19:30 - 20:30 20:30 - 20:45 20:45: Social, Cees-Jan has been working with PHP for more than 10 years, before the dawn of PHP frameworks. In his spare time, We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9032,"color":"#e0393e"
    },
    {
        "name":"Impact Storytelling Open Learning group","role":"visitor","type":"Meetup","startStamp":1396371600000,"endStamp":1396378800000,"description":"Learn essential storytelling skills from experienced trainers. Rapidly develop skills and content through repeated cycles of education, Storytelling is an essential art in leadership, Each month we will host a speaker, either from Words That Change, THNK or a guest, who will offer a new perspectives on storytelling or a particular application of it. We will then apply these principles in the development of our own story and practice it with supportive feedback. We will use social dynamics techniques to encourage openness and creativity and you will have plenty of contact with inspired minds in order to develop your story. Simon Hodges (Words That Change) and Robert Wolfe (THNK) will be facilitators, Speak regularly to groups or 1 to 1 More than anything, this group has been created to develop the discipline of transformational storytelling – creating a community of individuals committed to making impact in their chosen communities, whether business, social or environmental, You could chose to attend as a one-off, in order to develop and practice your story, or enter on to a longer learning journey that allows you to become an adept storyteller in a variety of fields. For those who want to go further on the journey, Your facilitators are expert trainers and expert practitioners in story. We've worked with corporate leadership and world-changing entrepreneurs. We love working with people who want to change the world through business. Simon Hodges has given his workshops to around 500 Dates will be posted on the Words That Change site, 7pm Meet up, check in, 7.20 7.45 8 8.45pm Open space, 9 Exercises will be energetic, Sign-ups can be done either through the Meetup.com or by emailing: simon@wordsthatchange.nl","id":9033,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting","role":"visitor","type":"Meetup","startStamp":1396458000000,"endStamp":1396458000000,"description":" Patrick Sanwikarja would take us through the process of designing the cooking iPad app for Allerhande, This month's meeting will be hosted by our friends at Usabilla, who will also provide us with drinks, 19:00 19:30 19:40  'Make it delicious: designing an iPad app for the kitchen' 20:30  Food, drinks, He is a senior interaction designer at Fabrique [brands, design &amp; interaction], one of Holland’s leading interactive design agencies. He has worked on numerous interfaces, from websites and apps to baggage drop off machines and ATMs, for well known brands like Albert Heijn, How do you design the ideal cooking app? What’s the best way to guide a user through a recipe, so that even the clumsiest cook can successfully put the most delicious and challenging meals on the table? In this talk I will take you through the process of designing the cooking iPad app for Allerhande, Albert Heijn’s food inspiration brand. I will show you different iterations of the design and talk about Scrum, the value of good content and dealing with a tough customer.","id":9034,"color":"#e0393e"
    },
    {
        "name":"Hackers and Founders (Amsterdam, NL) Meetup","role":"visitor","type":"Meetup","startStamp":1396544400000,"endStamp":1396544400000,"description":" Hacking insect brains and Netherlands GMO legislation and  atempts to hack turtle and rhino poaching, along with our mission to equip DIY biologist, artists, By popular demand for this first meetup of spring we have the Mama pale ale on draft, a craft beer from Oidapus Brewing.","id":9035,"color":"#e0393e"
    },
    {
        "name":"Google Cloud Platform Developer Roadshow","role":"visitor","type":"Meetup","startStamp":1396938600000,"endStamp":1396956600000,"description":"After the cool Cloud Platform Live announcements this week, Google is also bringing lot of developer goodness to Amsterdam. Speakers have just been announced for the Cloud Platform Roadshow here on April 8: Andrew Jessup, It's free to come, so I hope you will join for some inspiration and hands-on look at the new tools, rapidly building your mobile backend, Please be sure to also register at the Google Cloud Platform Roadshow page, In just one hour we'll step through everything you need to build an Android application that uses Cloud services to provide a fun experience. You'll see many of the elements of the platform in action, including Compute Engine, App Engine, Cloud Storage, VM Engines, We're introducing a brand new way of thinking about development for the cloud -- one which takes the best of both IaaS and PaaS but removes the false choice. What if you wanted to build an app that had the great management of one built on a PaaS platform, but needed capabilities that weren't supported. You could build it using IaaS, but you'd need to do a lot of management. In this session we'll show you how this wall can be breached, We have a wonderful new way for developers to build cloud applications. We can't talk much about it yet, but we know you're going to love it. In this session you'll get hands-on with how to use it!","id":9036,"color":"#e0393e"
    },
    {
        "name":"Updates, Legal Approaches to Smart Contracts & Decentralized Autonomous Orgs.","role":"visitor","type":"Meetup","startStamp":1396976400000,"endStamp":1396976400000,"description":"We have 3 - Decentralized Autonomous Organizations by Joris Bontje","id":9037,"color":"#e0393e"
    },
    {
        "name":"JS MVC Meetup #8","role":"visitor","type":"Meetup","startStamp":1397061000000,"endStamp":1397061000000,"description":"Hi folks, We would like you to join us on Wednesday April 9th for another JS MVC Meetup! The Meetup is being held at A Lab and will start at 18:30 1 Joost will give a presentation about Hypermedia APIs with HAL and rich JavaScript clients. Compared to classical REST APIs, Hypermedia designs scale better, are more easily changed and promote decoupling and encapsulation, 2 Ben and Niels","id":9038,"color":"#e0393e"
    },
    {
        "name":"Freelance Friday in Appril","role":"visitor","type":"Meetup","startStamp":1397235600000,"endStamp":1397246400000,"description":" Maud de Vries komt vertellen over The making of F3PiX, een app die zij zelf bedacht en ontwikkeld heeft. F3PiX gaat over een nieuw verdienmodel voor fotografen, In april verschijnt ook de eerste app van Quirky Publishing: ‘50 Quirky Publishing is een nieuwe uitgeverij voor apps en maps over steden. Deze app en map zijn voortgekomen uit het succesvolle Twitter account Free Amsterdam, Voor maar €40 Laat snel weten of je komt, want de ruimte is beperkt (50 personen).","id":9039,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - April/2014","role":"visitor","type":"Meetup","startStamp":1397754000000,"endStamp":1397754000000,"description":"April's topic will be: Phing! This month, 19:00 19:30 - 20:30 20:30 - 20:45 20:45: Social, PHPMD, PHPCS, PHPUnit and PHPLint; these are all tools to maintain code quality. Executing these tasks is a chore and there are many ways to automate this process, Phing being one of them. The goal of this talk is to really discover what Phing has to offer, After messing about with code for as long as I can remember I decided to make it my fulltime job which I've now been doing for 3 years. I'm interested in anything PHP related and have been delving myself into the community since 2013 We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9040,"color":"#e0393e"
    },
    {
        "name":"Open Coffee Amsterdam @ Launchdesk Bovendebalie","role":"visitor","type":"Meetup","startStamp":1398927600000,"endStamp":1398927600000,"description":"Have a casual cup of coffee with about 100 tech enthousiasts every 1st Thursday of the month at 09:00AM in the Bovendebalie coworking space building (Café de Balie, Marieke, PS. If you're looking for shared office space in Amsterdam, check out our new initiative Launchdesk","id":9041,"color":"#e0393e"
    },
    {
        "name":"Hackers and Founders Building Opening Party!","role":"visitor","type":"Meetup","startStamp":1398963600000,"endStamp":1398963600000,"description":"This meetup will be in our new building, Herengracht 504 Beers: Mama pale ale, Lekker Bek (new Saison with mustard and dille) and the new award winning Gaia 2.0 Food: Thali and Tandoori from popup restaurant Joeri Tandoeri. There will be curry, meat, vegetarians and weather permitting nan breads cooked in the Tandoori ovens on the patio. This will be a full dinner so there will be no need to eat before hand. It should cost about 8 or 9 FoundationDB w/ Jessica Rullman &amp; Jessica Winter: NoSQL database option visiting from the US. What is FoundationDB, and how is it different from other NoSQL databases? How hard is it to get started with it and scale FoundationDB compared to other databases? Learn what happens when the power goes out at one of your data-centers, Social Magnetics w/ Christian Beaumont &amp; Behnaz Beaumont: What happens when Teddy Bears can talk to lights? How that is related to databases? How people will be able to use our platform to solve global scale connectivity problems, and some other cunning plans from Social Magnetics a user of FoundationDB.","id":9042,"color":"#e0393e"
    },
    {
        "name":"HMTL/CSS Monthly Meetup","role":"visitor","type":"Meetup","startStamp":1399393800000,"endStamp":1399393800000,"description":" Talk: Felix will be taking us through building HTML5 Every first Tuesday of the month, Exact schedule, location, talks and events will be announced approximately 1-2 Anyone who is interested in doing a presentation, or preparing anything else, feel free to contact Nikos or Chrissy.","id":9043,"color":"#e0393e"
    },
    {
        "name":"HTML5 meetup @ Booking.com","role":"visitor","type":"Meetup","startStamp":1399910400000,"endStamp":1399910400000,"description":"We’ll start at 18.00 with drinks and snacks, the talks will start at 18.30. See below for the content of the talks, 1 Discover how this new concept formed by five new specifications (Templates, Decorators, Shadow DOM, Custom Elements, 2. Rock the browser like it's 1983 What have you been doing with your browser? Checking emails? Moving digital kanban cards? Watching cute cat videos? How about using it to rock songs like it's the 80's? With friends? Through web APIs? In this talk, I'll show how the Web Audio API, Websockets, Node.js, multiple devices, Zeno Rocha works now as a front-end engineer at Liferay. Besides that, he's a writer at Smashing Magazine, host at Zone Of Front-Enders podcast, member of the Google Developer Expert program and co-founder of BrazilJS Foundation. With only 23 years-old he's one of the top 30 Eduardo Shiota is a front-end engineer and designer, who moved from the land of samba to the land of bicycles, and hacks JavaScript at Booking.com. Started developing pages in 1997, has been working with web development since 2002 and with design since 2005. He has spoken at international conferences such as RubyConf and QCon, and published articles about UX and front-end development to the php[architect] magazine and 'Coletânea Front-end' book. Loves sushi and hates parsley.","id":9044,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - May/2014","role":"visitor","type":"Meetup","startStamp":1400173200000,"endStamp":1400173200000,"description":"April's topic will be: Compilers! This month, 19:00 19:30 - 20:30 20:30 - 20:45 20:45: Social, How does this work under the hood? Emiel Bruijntjes gives a crash course 'how to write your own compiler' in which the whole process from writing a tokenizer and a parser, Emiel Bruijntjes lives in Amsterdam and is a member and frequent visitor of the PHP Amsterdam user group. In 2013 he initiated the open source PHP-CPP project to create a bridge between PHP and C++, We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9045,"color":"#e0393e"
    },
    {
        "name":"DevOps @Rackspace","role":"visitor","type":"Meetup","startStamp":1400776200000,"endStamp":1400788800000,"description":"At Rackspace they take DevOps very seriously (http://www.rackspace.com/devops/). Thus, they'll kindly host our May Meetup and will invite two top-notch DevOps geeks with extensive experience and great presentation skills. You might have seen Marc at Fosdem 2013? We also will have a guest speaker from the community. As always, we'll start at 18.30, food will be served and we'll start with the presentations around 19.30 Chris Jackson Chief Technologist at Rackspace, DevOps demystifier and Motorsport enthusiast): 'Searching for Cloud's God Particle' Marc Cluet (Head of DevOps &amp; Automation Advisory at Rackspace, geek, bash scripting master, python padawan, ruby gerbil, Pro-Active Quality Control with Pre-Flight Builds' The Rackspace offices are easily reachable from Sloterdijk station. Parking can be found on the Tempelhofstraat or the Kingsfordweg and is free after 7pm and only €1,40 During the event we'll update the audience on the upcoming DevOps Days 2014 Amsterdam conference. Remember, the CFP is still open! And grab your ticket here while you can :) If you want to help, you can contact us for sponsoring (organizers-amsterdam-2014 Lastly, if you have dietary restrictions, let us know and we'll arrange something for you. We care about your health!","id":9046,"color":"#e0393e"
    },
    {
        "name":"Appsterdam Salesforce1 Hackathon","role":"visitor","type":"Meetup","startStamp":1401172200000,"endStamp":1401172200000,"description":"We are excited to announce a special hackathon along with Salesforce during the Salesforce1 Come join us on May 27 for a day of ideas, coding, and designing for the future of social welfare and health in the Netherlands! The challenge is explained below, and there are 1,750 Salesforce1 API experts will be on-hand to answer questions about the platform.  Click here for more information on the Salesforce1 The event will be covered through a live webcast by the Top Names team, on fastmovingtargets.nl and on the Appsterdam Facebook page. As a participant, you can be on the show to present your own product, company or activity. Your Keynotes, Powerpoints, movies, RSVP here to reserve your spot. Everybody in the app business, coders, designers, marketers… you are all welcome to attend. Registration is free, When registering, you'll need to enter some contact details, as we will get you a Salesforce1 8:30 9:00-9:30: Introduction, overview of Salesforce1 9:30-11:00 Pitches, idea selection, 11:30-16:30: Hacking and prototype building (with lunch, drinks, 16:30-18:00 There’s a big change coming in the social welfare system in the Netherlands. As of 2015, the central government will delegate many of its tasks around social security and healthcare to local municipalities. When this happens, local communities themselves will create and implement their own laws for social welfare and long-term care of the sick and elderly, giving them a chance to independently decide and implement the laws, This new law is called “‘Wet Maatschappelijke Ondersteuning”, or WMO. While this is a great opportunity, “WMO consultants” are professionals who will help municipalities make this transition, by organizing access to proper care, deciding on appropriate funding levels, matching care options to consumers, and delivering a fair and efficient care delivery model. Salesforce wants to help these WMO consultants, Appsterdam or Salesforce will not be taking ownership or any IP rights to the Entries.","id":9047,"color":"#e0393e"
    },
    {
        "name":"Weekly Wednesday Lunchtime Lectures","role":"visitor","type":"Meetup","startStamp":1401877800000,"endStamp":1401885000000,"description":"This week, Joris van Eil and Jasper van Rijckevorsel will present 'Grants &amp; tax benefits for ICT innovation' Innovation is risky.  Assigning resources to the development of an idea, of which the outcome is uncertain, To nurture new technologies and their inherent commercial outcomes, In this lecture, 12:30 13:00 14:00 14:30 Weekly Wednesday Lunchtime Lectures is an initiative to allow people in Appsterdam to talk about technology and share knowledge, allowing participants to receive training in public speaking. Our lectures cover a wide range of topics related to making apps on any platform, from technical to non-technical including computer languages, modelling, testing, design, marketing, business philosophy, startups, strategizing, In the full sharing spirit of Appsterdam, we will eat lunch together. Our kind host will provide us with bread and drinks. Bring your own sandwich topping to share with others.","id":9048,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting","role":"visitor","type":"Meetup","startStamp":1401901200000,"endStamp":1401901200000,"description":" Hanna Zoon will tell us about how she created a toolbox for performing UX research, which can be used without having any experience or knowledge of UX. Big help for small businesses, This month's meeting will be hosted by our friends at Grrr, who will also provide us with drinks, 19:00 19:30 19:40  'Do-it-yourself UX - Threat or opportunity' 20:30  Food, drinks, Hanna Zoon is an interaction designer and design researcher, who currently teaches Interaction and UX design at Fontys University of Applied Sciences in Eindhoven. She studied at the Design Academy Eindhoven and received a master's degree in Industrial Design for the project ''Include', a Toolbox of User Research for Inclusive Design', which was developed in co-operation with TNO, Small IT businesses often have misconceptions about user research and UX, To resolve this problem Hanna Zoon developed ‘Include’, a toolbox of user research methods. With this toolbox, it would be possible to do UX activities such as user research and evaluations, Do come and join the discussion about the 'do-it-yourself' trend and it's consequences!","id":9049,"color":"#e0393e"
    },
    {
        "name":"Hackers and Founders (Amsterdam, NL) Meetup","role":"visitor","type":"Meetup","startStamp":1401987600000,"endStamp":1401987600000,"description":"Tim Molendijk - Serial entrepreneur and co-founder of two successful startups Nouncy and Smart.pr, Travis James - Founder May Furniture Company, designer furniture built in Brooklyn, Craft beer on draft: Gaia 2.0 from Oedipus brewing.","id":9050,"color":"#e0393e"
    },
    {
        "name":"AmsterdamJS","role":"visitor","type":"Meetup","startStamp":1402506000000,"endStamp":1402516800000,"description":"Welcome to the latest edition of AmsterdamJS! We are having it at the amazing Publitas offices again (thanks guys!!), 19:10 19:50 - The new Cloud9 The editor war is not over. After more than a year under development, Fabian will unveil the new Cloud9 As always, come for drinks, Sergi","id":9051,"color":"#e0393e"
    },
    {
        "name":"DevopsDays Amsterdam","role":"visitor","type":"Meetup","startStamp":1403157600000,"endStamp":1403359200000,"description":"For the 2nd year we are organizing DevopsDays Amsterdam. Just like last year we have a nice program set up. 3 full days of DevOps. A first day with Workshops. And two days of talks, Make sure you register via eventbrite: http://www.devopsdays.org/events/2014 The organizers.","id":9052,"color":"#e0393e"
    },
    {
        "name":"NodeSchool Amsterdam","role":"visitor","type":"Meetup","startStamp":1403369100000,"endStamp":1403383500000,"description":"If you're curious about Node and want to explore it further, On the 21st of June, there'll be a number of NodeSchool events distributed across the globe: Sydney, Berlin, Costa Rica, Kiev, • Functional JavaScript: Learn fundamental functional programming features of JavaScript in vanilla ES5 All are welcome. NodeSchool is designed specifically for developers with some JavaScript knowledge, but little or no experience with Node.js. This event will give you a solid start with Node.js and round-out your JavaScript skills. You'll want to have some basic skills using the terminal to get started – if you're not sure, If you're an experienced Node developer, come participate as a mentor! Mentoring can be an incredibly fun and rewarding experience, and you may end up accidentally learning something yourself! Get in touch with us if you're interested in helping out.","id":9054,"color":"#e0393e"
    },
    {
        "name":"Ethereum Workshop","role":"visitor","type":"Meetup","startStamp":1403627400000,"endStamp":1403627400000,"description":"Another interactive / hackathon / workshop style event.  The doors open at 6:30PM, we'll start at 7:00PM until 22:00 Bring your own laptop! Drinks and internet access are provided. Pizza's will be delivered at around 8 https://blockchain.info/address/1Db8sJQ7Umh2ewvKMTos9vZCco8BsCLK8 Ethereum Training slides https://www.dropbox.com/sh/ke8377226obaudx/AACKOpb4X0lCv8WQ_iaur2SKa","id":9055,"color":"#e0393e"
    },
    {
        "name":"JS MVC Meetup #9","role":"visitor","type":"Meetup","startStamp":1403715600000,"endStamp":1403715600000,"description":"1 Denis Radin will talk about Web Components (X-Tag, Polymer), React.JS and how they can be mixed in order to be a good V in MVC pattern. The presentation gives insights on ReactiveElements, 2 Rik Schennink will talk about his ConditionerJS framework. He’ll discuss the ideas behind it, it’s inner workings, market positioning, and future development plans.","id":9056,"color":"#e0393e"
    },
    {
        "name":"Ember.js Meetup #3 - the Open Spaces edition","role":"visitor","type":"Meetup","startStamp":1404320400000,"endStamp":1404320400000,"description":"For this meetup we're going to try something a little different. Instead of having organized talks, To get an idea of what to expect, you can watch Bruce Eckel's 7 https://www.youtube.com/watch?v=aD3S0wlbek0 We'll start the meetup off by having people suggest topics and vote on the topics in the first 20 mins or so. Depending on the number of people, we'll run 1 or 2 discussions for 45 minutes. Depending on the number of discussion topics, we'll run 1 or 2 If you're looking to have some interesting discussions about Ember and related technologies, this is the place to be. Feel free to bring your laptop to show off your latest Ember projects!","id":9057,"color":"#e0393e"
    },
    {
        "name":"Open Coffee Amsterdam @ Launchdesk Bovendebalie","role":"visitor","type":"Meetup","startStamp":1404370800000,"endStamp":1404370800000,"description":"Have a casual cup of coffee with about 100 tech enthousiasts every 1st Thursday of the month at 09:00AM in the Bovendebalie coworking space building (Café de Balie, Marieke, Innovation awards 2014 For the eighth time in a row the Accenture Innovation Awards will take place this year to determine the most innovative products, services and concepts of The Netherlands. Concepts younger than three years can participate. This year ten winners in different categories will get the 'blauwe tulp'. An independent panel judges initiatives in different industries on basis of innovation, PS. If you're looking for shared office space in Amsterdam, check out our new initiative Launchdesk","id":9058,"color":"#e0393e"
    },
    {
        "name":"Hackers and Founders (Amsterdam, NL) Meetup","role":"visitor","type":"Meetup","startStamp":1404406800000,"endStamp":1404406800000,"description":" The Craft beer on draft is the just released Meagara American Pale Ale from Amsterdam's Butcher's Tears brewery.","id":9059,"color":"#e0393e"
    },
    {
        "name":"Drinks & Laughs","role":"visitor","type":"Meetup","startStamp":1406048400000,"endStamp":1406048400000,"description":"We'll visit our familiar venue De Bierfabriek again on Tuesday, the 22 Join us to talk shop, and have some drinks, brought to you for free by Springest.","id":9060,"color":"#e0393e"
    },
    {
        "name":"Community Managers Amsterdam: part 2","role":"visitor","type":"Meetup","startStamp":1406134800000,"endStamp":1406134800000,"description":"Hi all, After a great kick-off with a diverse group of interesting people, So here it is! We meet again in the Rockstart Ballroom on July 23 Cheers, Julie (@ikbenjulie) and Filemon (@filemonschoffer)","id":9061,"color":"#e0393e"
    },
    {
        "name":"Ethereum Community Projects: Eris, BitVote & BioStrike","role":"visitor","type":"Meetup","startStamp":1406221200000,"endStamp":1406221200000,"description":"Ethereum development is nicely coming along; the long awaited POC5 • Eris: build, test, The location for this evening is sponsored by the Waag Society, beer and sodas available; no crowd-funded Pizza's this time, but you are welcome to eat together at 18:00: 'bring your own food'. There are plates and cutlery.","id":9062,"color":"#e0393e"
    },
    {
        "name":"MySQL UG Meetup Q3 2014: Indexes","role":"visitor","type":"Meetup","startStamp":1407861000000,"endStamp":1407861000000,"description":"'Indexes: The neglected performance all-rounder' If you can't find the location you can call Luis Motta Campos on +31 64 653 2726 Drinks and Pizza will be provided.","id":9063,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - August/2014","role":"visitor","type":"Meetup","startStamp":1408640400000,"endStamp":1408640400000,"description":"August topic will be: Event sourcing! This month, 19:00 19:30 - 20:30 20:30 - 20:45 20:45: Pizza, Social, Over the past 18 Marijn is co-founder and lead developer of Pink Tie, We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9064,"color":"#e0393e"
    },
    {
        "name":"AmsterdamJS September","role":"visitor","type":"Meetup","startStamp":1409677200000,"endStamp":1409688000000,"description":" Come have some beers, snacks and JavaScript!","id":9065,"color":"#e0393e"
    },
    {
        "name":"Open Coffee Amsterdam @ Launchdesk Bovendebalie","role":"visitor","type":"Meetup","startStamp":1409814000000,"endStamp":1409814000000,"description":"Have a casual cup of coffee with about 100 tech enthousiasts every 1st Thursday of the month at 09:00AM in the Bovendebalie coworking space building (Café de Balie, Marieke, Innovation awards 2014 For the eighth time in a row the Accenture Innovation Awards will take place this year to determin the most innovative products, services and concepts of The Netherlands. Concepts younger than three years can participate. This year ten winners in different categories will get the 'blauwe tulp'. An independent panel judges initiatives in different industries on basis of innovation, PS. If you're looking for shared office space in Amsterdam, check out our new initiative Launchdesk","id":9066,"color":"#e0393e"
    },
    {
        "name":"JS MVC Meetup #10","role":"visitor","type":"Meetup","startStamp":1410366600000,"endStamp":1410377400000,"description":" 18:30 19:00 21:30 1 React.js is a library to implement views in a way that is both architecturally sound and performant. It's like unix tools: do one thing, and do it right. It can be applied both to small parts of an existing webapp, In the latter case React can be coupled with existing frameworks, 2 Or how to stop using ES3 Objects and start loving ES5. As we developers start building larger applications, the need to organize code, While these frameworks already have put in a lot of tought into providing better encapsulation, Javascript, as a language, also has handed us a number of wonderful tools.","id":9067,"color":"#e0393e"
    },
    {
        "name":"Monthly Meeting - September/2014","role":"visitor","type":"Meetup","startStamp":1411059600000,"endStamp":1411059600000,"description":"Summer is over and September is here. This month, Ross Tuck will tell us all about Hemoglobins and Hobgoblins, 19:00 19:30 - 20:30 20:30 - 20:45 20:45: Pizza, Social, Models, sure. That’s all part of MVC. Those are the objects that hold your business logic. Except…do they really? In PHP, the norm is to have an anemic domain model. Even if you want to move away from that (whatever it is), In this talk, we’ll look at different schools of thought for managing your code’s truly important parts and the impact on related areas like testing or form libraries. From plain models to service layers, DDD to CQRS, Ross Tuck is a senior developer in the Netherlands, despite being American. He’s currently obsessed with hypermedia, CQRS, middleware and vector graphics but this tends to change quickly. Otherwise, We got some awesome stuff to give away this month, so make sure you attend another awesome meetup!","id":9068,"color":"#e0393e"
    }
];
