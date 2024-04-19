
'use client';
import { useRef } from 'react';

interface LinkItem {
  text: string;
  ref: React.RefObject<HTMLElement>
}

function NavLinks(props: {items: LinkItem[]}){
  return (
    <nav className="flex flex-col items-end">
      { props.items.map(
        item =>
        <a key={item.text} className="underline hover:cursor-pointer"
          onClick={() => {
            if(item.ref.current) item.ref.current.scrollIntoView({behavior: 'smooth'});
            console.log(item.ref.current);
          }}
        >
          {item.text}
        </a>
      )}
    </nav>
  );
}

function BannerSection(props: {children?: React.ReactNode}){
  return (
    <section id="banner" className="min-h-screen bg-slate-800">
      {props.children}
    </section>
  );
}

function AboutSection(props: {sectionRef: React.RefObject<HTMLElement>}){
  return (
    <section ref={props.sectionRef} id="about" className="min-h-screen bg-orange-100">
    </section>
  );
}

function ExperienceSection(props: {sectionRef: React.RefObject<HTMLElement>}){
  return (
    <section ref={props.sectionRef} id="experience" className="min-h-screen bg-white">
    </section>
  );
}


export default function MainPage(){

  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  const linkItems: LinkItem[] = [
    {
      text: 'About Me',
      ref: aboutRef
    },
    {
      text: 'Experience',
      ref: experienceRef
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <BannerSection>
        <NavLinks items={linkItems}/>
      </BannerSection>
      <AboutSection sectionRef={aboutRef}/>
      <ExperienceSection sectionRef={experienceRef}/>
    </div>
  );
}