(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,r){e.exports=r.p+"static/media/MyProfile.9bffd650.png"},function(e,t,r){e.exports=r.p+"static/media/Gerich.f51d9759.png"},function(e,t,r){e.exports=r.p+"static/media/Royal.3c84ae26.png"},function(e,t,r){e.exports=r.p+"static/media/joker.7fd06357.jpg"},function(e,t,r){e.exports=r.p+"static/media/robot.e2ce37d7.png"},function(e,t,r){e.exports=r.p+"static/media/earth.67af05e1.jpg"},,function(e,t,r){e.exports=r(28)},,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(7),i=r.n(o),l=r(1);const s=l.b`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Arial', sans-serif;
     background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    color: #ffffff;
    overflow: hidden;
    position: relative;
    min-height: 100vh;
    overflow: auto;
  }

`,c=l.c.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  transition: background 0.3s ease-in-out;

background: ${e=>{let{scrolled:t}=e;return t?"rgba(0, 0, 0, 0.7)":"transparent"}};
  box-shadow: ${e=>{let{scrolled:t}=e;return t?"0 2px 4px rgba(0, 0, 0, 0.2)":"none"}};
`,m=l.c.a`
  text-decoration: none;
  color: ${e=>{let{scrolled:t,theme:r}=e;return t?r.colors.primaryText:r.colors.logo}};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.highlight||"#fff"}};
  }
`,d=l.c.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  cursor: pointer;

  div {
    background: ${e=>{let{theme:t}=e;return t.colors.textColor}};
    height: 3px;
    width: 100%;
    transition: all 0.3s linear;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${e=>{let{isMenuOpen:t}=e;return t?"rotate(45deg)":"rotate(0)"}};
    }
    &:nth-child(2) {
      opacity: ${e=>{let{isMenuOpen:t}=e;return t?"0":"1"}};
    }
    &:nth-child(3) {
      transform: ${e=>{let{isMenuOpen:t}=e;return t?"rotate(-45deg)":"rotate(0)"}};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`,p=l.c.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${e=>{let{isMenuOpen:t}=e;return t?"flex":"none"}};
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    background: ${e=>{let{theme:t}=e;return t.colors.primaryGradient}};
    width: 250px;
    height: 100vh;
    padding: 2rem;
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.buttonShadow}};
    z-index: 999;
  }
`,h=l.c.a`
  text-decoration: none;
   color: ${e=>{let{scrolled:t,theme:r}=e;return t?r.colors.primaryText:r.colors.accent}};
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s, transform 0.2s;

  &:hover {
     color: ${e=>{let{theme:t}=e;return t.colors.highlight||"#fff"}}; 
      transform: scale(1.1);
  }

    &.active {
    color: ${e=>{let{theme:t}=e;return t.colors.logo||"#4F7886"}}; // Highlight active link
    font-weight: bold;
    text-decoration: underline;
  }
`,u=l.c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;var f=()=>{const[e,t]=Object(n.useState)(!1),[r,o]=Object(n.useState)(!1),[i,l]=Object(n.useState)("hero"),s=()=>{t(!e)};return Object(n.useEffect)(()=>{const e=()=>{o(window.scrollY>50);const e=document.querySelectorAll("section");let t="hero";e.forEach(e=>{const r=e.offsetTop-100,n=r+e.offsetHeight;window.scrollY>=r&&window.scrollY<n&&(t=e.id)}),l(t)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(c,{scrolled:r},a.a.createElement(m,{href:"#hero",onClick:()=>t(!1)},"Ralphael Oshun"),a.a.createElement(d,{isMenuOpen:e,onClick:s},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement(p,{isMenuOpen:e},a.a.createElement(h,{href:"#experience",onClick:()=>t(!1)},"Experience"),a.a.createElement(h,{href:"#projects",onClick:()=>t(!1)},"Projects"),a.a.createElement(h,{href:"#contact",onClick:()=>t(!1)},"Contact")),e&&a.a.createElement(u,{onClick:s})))};var g={colors:{primaryBackground:"#1b2735",textColor:"#333",primaryText:"#333",logo:"#ffc107",accent:"#4F7886",gradientBackground:"linear-gradient(135deg, #007BFF, #6A5ACD)",primaryGradient:"rgba(0, 0, 0, 0.9)"},shadows:{buttonShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"}},x=r(10);const b=l.d`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
`,w=l.c.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`,v=l.c.div`
  position: absolute;
  width: ${e=>{let{size:t}=e;return t}}px;
  height: ${e=>{let{size:t}=e;return t}}px;
  background: transparent;

  &.stars1 {
    box-shadow: 0px 0px #fff, 20px 50px #fff, 200px 400px #fff, 400px 800px #fff, 600px 1200px #fff, 800px 1600px #fff;
    animation: ${b} 50s linear infinite;
  }

  &.stars2 {
    box-shadow: 0px 0px #fff, 50px 100px #fff, 300px 600px #fff, 500px 900px #fff, 700px 1400px #fff, 900px 1800px #fff;
    animation: ${b} 100s linear infinite;
  }

  &.stars3 {
    box-shadow: 0px 0px #fff, 100px 200px #fff, 400px 800px #fff, 600px 1200px #fff, 800px 1600px #fff;
    animation: ${b} 150s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    top: 2000px;
    width: inherit;
    height: inherit;
    background: inherit;
    box-shadow: inherit;
  }
`;var y=()=>a.a.createElement(w,null,a.a.createElement(v,{className:"stars1",size:1}),a.a.createElement(v,{className:"stars2",size:2}),a.a.createElement(v,{className:"stars3",size:3}));const E=l.c.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Stack content vertically on smaller screens */
  height: 100vh;
  padding: 0 2rem;
   margin-bottom: 4rem;
  color: white;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,k=l.c.div`
  display: flex;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack content */
    text-align: center; /* Center text */
  }
`,$=l.c.img`
  width: 100%;
  max-width: 150px; /* Set max-width for smaller screens */
  height: auto; /* Maintain aspect ratio */
  border-radius: 50%;
  margin-right: 2rem;
  border: 5px solid white;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`,C=l.c.div`
  max-width: 600px;
  text-align: center; /* Center-align text for smaller screens */

  h1 {
    font-size: 2.5rem; /* Adjust font size for better readability */

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    span {
     color: ${e=>{let{theme:t}=e;return t.colors.logo}};
    }
  }
`,z=l.c.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-style: italic;
  color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  overflow: hidden;
  
  width: 100%;
  max-width: 300px;
  height: 1.8rem; /* Ensures consistent height for text changes */
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,S=(l.c.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
`,l.c.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically */
    gap: 1rem; /* Reduce gap for compact layout */
  }
`),j=l.c.a`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
  background: ${e=>{let{theme:t}=e;return t.colors.gradientBackground}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.buttonShadow}};
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller font for compact buttons */
    padding: 0.6rem 1.2rem;
  }
`;var A=r(11),I=r.n(A);var M=()=>a.a.createElement(E,{id:"hero"},a.a.createElement(y,null),a.a.createElement(k,null,a.a.createElement($,{src:I.a,alt:"Your Profile"}),a.a.createElement(C,null,a.a.createElement("h1",null,"Hello,",a.a.createElement("span",null," I'm Ralphael")),a.a.createElement(z,null,a.a.createElement(x.Typewriter,{words:["Download My Resume","Code Architect","Full Stack Developer","Creative Problem Solver","Clean Code Advocate","Debugging Ninja","Innovative Thinker","Front End Wizard","Bank End Builder","Team Player Extraordinaire","Database Guru","API Connoisseur","Code Whisperer","Tech Evangelist","UI/UX Visionary","Software Alchemist","Always Learning"],loop:!0,cursor:!0,cursorStyle:"|",typeSpeed:50,deleteSpeed:30,delaySpeed:2e3})),a.a.createElement(S,null,a.a.createElement(j,{href:"#contact"},"Hire Me"),a.a.createElement(j,{href:"https://www.dropbox.com/scl/fi/112sgwqjgfesjq894m8l7/ITDeveloper.docx?rlkey=bywrulpkxzer8zhggvcfvx41f&st=8l5jvx60&dl=1",download:"ITDeveloper.docx"},"Download Resume"))))),O=r(4),B=r(12),D=r.n(B),T=r(13),R=r.n(T),Y=r(14),N=r.n(Y),P=r(15),F=r.n(P);var _=[{name:"C#",iconClass:"devicon-csharp-plain"},{name:"React",iconClass:"devicon-react-original"},{name:"Node.js",iconClass:"devicon-nodejs-plain"},{name:"Express",iconClass:"devicon-express-original"},{name:"SQL",iconClass:"devicon-mysql-plain"},{name:"MongoDB",iconClass:"devicon-mongodb-plain"},{name:"CSS",iconClass:"devicon-css3-plain"},{name:"Bootstrap",iconClass:"devicon-bootstrap-plain"},{name:"MUI",iconClass:"devicon-materialui-plain"},{name:"Java",iconClass:"devicon-java-plain"}];const L=[{id:1,title:"Cowch",image:N.a,synopsis:"A full-stack MERN project inspired by Netflix with login, Registration and password authentication. Connect to the IMDB API and watch the movie trailers ",liveDemo:"https://afoghandi.github.io/cowch/",github:"https://github.com/Afoghandi/cowch"},{id:2,title:"Gerich Kitchens",image:D.a,synopsis:"A sleek portfolio showcasing projects and skills with React and CSS.",liveDemo:"https://afoghandi.github.io/gerich/",github:"https://github.com/Afoghandi/gerich"},{id:3,title:"Royal Tosh",image:R.a,synopsis:"A static page using gradient that never fails to catch attention",liveDemo:"https://royal-tosh.vercel.app/",github:"https://github.com/Afoghandi/RoyalTosh"},{id:4,title:"Modern Bank",image:F.a,synopsis:"A dynamic static web paged, designed using Vercel.",liveDemo:"https://modern-bank-rosy.vercel.app/",github:"https://github.com/Afoghandi/ModernBank"}],q=[{id:1,title:"Software Developer",company:"Ageas Insurance",duration:"July 2020 - Present",description:"As an IT Developer at Ageas, I am responsible for designing, developing, and maintaining our comprehensive enterprise content management (ECM) OnBase system, OnBase, which is used to capture, manage, store, and retrieve documents while automating workflows and business processes. "},{id:2,title:"Learning and Development Officer",company:"Ageas Insurance",duration:"September 2016 - July 2020",description:"I was responsible for creating and delivering training programmes that were based around a blended approach to learning to ensure trainees receive an understanding of the core elements of their role and the fundamental believes of the company"},{id:3,title:"Motor Claims Technical Advisor",company:"Ageas Insurance",duration:"June 2014 - September 2016",description:"As a technical advisor, I served as a referral point for foreign claims, theft, credit hire and as a telematics expert, which enabled me to support, guide and offer solutions to others. I reviewed outstanding debts and negotiated with external clients to reach an amicable resolution, which involved collating and analysing data, analysing the behaviour patterns  and applying this knowledge to future cases. "},{id:4,title:"Customer Service Advisor",company:"Ageas Insurance",duration:"April 2012 - June 2014",description:"I worked within the Affinity Sales department where I dealt with high volumes of calls.  I was responsible for listening to clients and assisting them in finding a product that met their needs whilst ensuring they received an individualised pleasant experience.  "},{id:5,title:"Design Consultant",company:"Venture Photography",duration:"August 2011 - December 2011",description:"Venture was all about providing customers with a complete experience.  I was responsible for leading clients through their images and ensuring they had a positive experience whilst they choose their pictures.  My role included sales, digital image manipulation to meet the customers requirements and also ensuring images were ready for collection.  I was also responsible for phoning clients, arranging appointments and covering the Reception desk in the studio.  "}],J=[{name:"Instagram",href:"https://www.instagram.com/four__meta/profilecard/?igsh=MWw3ZzRjOHZjamR4eg==",icon:a.a.createElement(O.a,null)},{name:"LinkedIn",href:"https://www.linkedin.com/in/afo-omo-oshun-01b401140?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",icon:a.a.createElement(O.b,null)}],G=l.c.section`
  padding: 4rem 2rem;
   position: relative;
  
  z-index: 1;
  background: #f7f8fc;
  color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
  text-align: center;
 

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,H=l.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
`,U=l.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`,V=l.c.div`
  font-size: 3rem;
  color: ${e=>{let{theme:t}=e;return t.colors.accent}};
`,W=l.c.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;var Z=()=>a.a.createElement(G,null,a.a.createElement("h2",null,"My Skills"),a.a.createElement(H,null,_.map((e,t)=>a.a.createElement(U,{key:t},a.a.createElement(V,null,a.a.createElement("i",{className:e.iconClass})),a.a.createElement(W,null,e.name)))));const K=l.c.section`
  padding: 4rem 2rem;
  max-width: 1200px; 
  margin: 0 auto;
 
  color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${e=>{let{theme:t}=e;return t.colors.accent||"#333"}};
  }
`,Q=l.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
   max-width: 100%; 
 padding: 0rem 2rem;
`,X=l.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||"#f7f8fc"}};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`,ee=l.c.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,te=l.c.div`
  padding: 1.5rem;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  }

  p {
    font-size: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
  }
`,re=l.c.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.9rem;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .btn-live {
    background: ${e=>{let{theme:t}=e;return t.colors.gradientBackground}};
    color: #fff;
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.buttonShadow}};
  }

  .btn-github {
    background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||"#f7f8fc"}};
    color: ${e=>{let{theme:t}=e;return t.colors.accent}};
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.accent}};

    &:hover {
      background: ${e=>{let{theme:t}=e;return t.colors.accent}};
      color: #fff;
    }
  }
`;var ne=()=>a.a.createElement(K,{id:"projects"},a.a.createElement("h2",null,"My Projects"),a.a.createElement(Q,null,L.map(e=>a.a.createElement(X,{key:e.id},a.a.createElement(ee,{src:e.image,alt:e.title}),a.a.createElement(te,null,a.a.createElement("h3",null,e.title),a.a.createElement("p",null,e.synopsis),a.a.createElement(re,null,a.a.createElement("a",{href:e.liveDemo,target:"_blank",rel:"noopener noreferrer",className:"btn-live"},"Live Demo"),a.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"btn-github"},"GitHub")))))));const ae=l.c.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  scroll-margin-top: 80px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${e=>{let{theme:t}=e;return t.colors.accent||"#333"}};
  }
`,oe=l.c.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,ie=l.c.div`
  display: flex;
  flex-direction: ${e=>{let{isLeft:t}=e;return t?"row":"row-reverse"}};
  margin: 2rem 0;
  position: relative;
  opacity: 0; /* Initially hidden */
  transform: translateY(50px); /* Slightly off-screen */
  transition: all 0.6s ease-in-out;

  &.visible {
    opacity: 1; /* Fully visible */
    transform: translateY(0); /* Back to position */
  }
`,le=l.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||"#fff"}};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: ${e=>{let{theme:t}=e;return t.colors.accent}};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
  }
`;var se=()=>{const e=Object(n.useRef)([]);return Object(n.useEffect)(()=>{const t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.5});return e.current.forEach(e=>{e&&t.observe(e)}),()=>{e.current&&e.current.forEach(e=>t.unobserve(e))}},[]),a.a.createElement(ae,{id:"experience"},a.a.createElement("h2",null,"Experience"),a.a.createElement(oe,null,q.map((t,r)=>a.a.createElement(ie,{key:t.id,isLeft:r%2===0,ref:t=>e.current[r]=t},a.a.createElement(le,null,a.a.createElement("h3",null,t.title),a.a.createElement("span",null,t.company," | ",t.duration),a.a.createElement("p",null,t.description))))))};const ce=l.c.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${e=>e.background}) no-repeat center center / cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(70, 130, 180, 0.3); /* Hazy blue tint */
    z-index: 1;
  }
`,me=l.c.div`
  position: relative;
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||"#fff"}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.buttonShadow}};
  padding: 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack form and summary vertically */
    padding: 2rem;
  }
`,de=l.c.div`
  flex: 1;
`,pe=l.c.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .response-message {
    margin-top: 1rem;
    font-size: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
    background-color: #f0f0f0;
    padding: 0.5rem;
    border-radius: 5px;
    text-align: center;
  }
`,he=l.c.input`
  padding: 0.75rem;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.accent||"#ccc"}};
  border-radius: 5px;
  font-size: 1rem;
`,ue=l.c.textarea`
  padding: 0.75rem;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.accent||"#ccc"}};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
`,fe=l.c.button`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  background: ${e=>{let{theme:t}=e;return t.colors.gradientBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.buttonShadow}};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,ge=l.c.div`
  flex: 1;
  border-left: 2px solid ${e=>{let{theme:t}=e;return t.colors.accent||"#ccc"}};
  padding-left: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.accent||"#333"}};
  }

  h4 {
    font-size: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.textColor||"#666"}};
  }

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    margin-top: 2rem; /* Adds spacing between form and summary on mobile */
    text-align: center;
  }
`;var xe=r(16),be=r.n(xe);var we=()=>{const[e,t]=Object(n.useState)(!1),[r,o]=Object(n.useState)("");return a.a.createElement(ce,{background:be.a,id:"contact"},a.a.createElement(me,null,a.a.createElement(de,null,a.a.createElement(pe,{onSubmit:async e=>{e.preventDefault();try{(await fetch("https://formspree.io/f/ralphaeloshun@gmail.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.target.name.value,email:e.target.email.value,message:e.target.message.value})})).ok?(o("Thank you! Your message has been sent."),t(!0),e.target.reset(),setTimeout(()=>{t(!1)},5e3)):(o("Oops! Something went wrong. Please try again."),t(!0),setTimeout(()=>{t(!1)},5e3))}catch(r){o("Error: Unable to send message. Please try again."),t(!0),setTimeout(()=>{t(!1)},5e3)}}},a.a.createElement(he,{type:"text",name:"name",placeholder:"Your Name",required:!0}),a.a.createElement(he,{type:"email",name:"email",placeholder:"Your Email",required:!0}),a.a.createElement(ue,{name:"message",placeholder:"Your Message",required:!0}),a.a.createElement(fe,{type:"submit"},"Send Message"),e&&a.a.createElement("p",{className:"response-message"},r))),a.a.createElement(ge,null,a.a.createElement("h2",null,"Get in touch"),a.a.createElement("h4",null,"   Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",a.a.createElement("br",null),"Simply fill the from and send me an email."))))};const ve=l.c.footer`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||"#f0f0f0"}};
  color: ${e=>{let{theme:t}=e;return t.colors.textColor||"#333"}};
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.buttonShadow}};
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.accent||"#ccc"}};

  p {
    margin: 0;
    font-size: 1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.textColor}};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.8rem;
  }
`,ye=l.c.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Ee=l.c.a`
  color: ${e=>{let{theme:t}=e;return t.colors.accent||"#4F7886"}};
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.textColor||"#333"}};
    transform: scale(1.2);
  }

  i {
    font-size: 2rem;
  }
`;var ke=()=>a.a.createElement(ve,null,a.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Ralphael Oshun. All Rights Reserved."),a.a.createElement(ye,null,J.map(e=>a.a.createElement(Ee,{key:e.name,href:e.href,target:"_blank","aria-label":e.name},e.icon))));var $e=function(){return a.a.createElement(l.a,{theme:g},a.a.createElement(s,null),a.a.createElement(f,null),a.a.createElement(M,null),a.a.createElement(Z,null),a.a.createElement(ne,null),a.a.createElement(se,null),a.a.createElement(we,null),a.a.createElement(ke,null))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($e,null)))}],[[18,1,2]]]);
//# sourceMappingURL=main.9468f00b.chunk.js.map