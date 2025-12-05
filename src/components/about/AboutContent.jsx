
export const AboutContent = () => {
  return (
    <div className="w-[90%] text-[18px] leading-relaxed">

      <p>
        Hi, I’m <span className="font-semibold">Pritom Dey</span>, a Junior Full-Stack Web Developer 
        passionate about building clean, scalable, and user-friendly web applications.
        I specialize in modern JavaScript technologies and enjoy creating smooth digital 
        experiences with clean code and intuitive design.
      </p>

      {/* ----- What I Do ----- */}
      <h3 className="font-semibold text-blue-300 text-[20px]">What I Do :</h3>
      <ul className="list-disc ml-6 mt-2 ">
        <li>Develop responsive and high-performance web applications</li>
        <li>Work confidently with MERN Stack & Django REST Framework</li>
        <li>Explore modern tools like Next.js and TypeScript</li>
        <li>Focus on clean UI, smooth UX, and maintainable code</li>
        
      </ul>

      {/* ----- What Defines Me ----- */}
      <h3 className="font-semibold text-blue-300 text-[20px]">What Defines Me :</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>Quick learner with a curiosity for new technologies</li>
        <li>Strong sense of responsibility and problem-solving</li>
        <li>Experienced in mentoring, guiding juniors, and working creatively</li>
        <li>Passionate about continuous improvement and meaningful projects</li>
      </ul>
<a
  href="https://drive.google.com/file/d/1uIpaTH0Ru6s1V3kRfzX4J_4W0PFziwYh/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block 
    mt-2
    px-8 py-2 
    rounded-xl 
    font-semibold 
    text-white 
    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
    shadow-lg 
    hover:shadow-blue-400/50
    hover:scale-105 
    transition-all 
    duration-300 
    border border-white/10 
    backdrop-blur-md
  "
>
  My Resume
</a>


    </div>
  )
}
