function BannerSection(){
  return (
    <section id="banner" className="min-h-screen bg-slate-800">
    </section>
  );
}

function AboutSection(){
  return (
    <section id="about" className="min-h-screen bg-orange-100">
    </section>
  );
}


export default function MainPage(){
  return(
    <div className="flex flex-col min-h-screen">
      <BannerSection/>
      <AboutSection/>
    </div>
  );
}