import { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Nav from '../components/Nav'
import LightRays from '../components/hero/Hero'
import { ScrollVelocity } from '../components/Marque'
import About from '../components/about/About'
import Skillslayout from '../components/Skills/Skillslayout'
import ProjectLayout from '../components/Projects/ProjectLayout'
import Loader from '../components/Loader/Loader'
import Footerlayout from '../components/Footer/Footerlayout'

export default function Home() {
  const containerRef = useRef(null)
  const homeRef = useRef(null)
const aboutRef = useRef(null)
const projectRef = useRef(null)
const contactRef = useRef(null)

  const locoRef = useRef(null)
  const [loading, setLoading] = useState(true)
const [showLoader, setShowLoader] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
    setTimeout(() => setShowLoader(false), 700) 
  }, 3500)

  return () => clearTimeout(timer)
}, [])



  useEffect(() => {
    if (!loading) {
      locoRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.08,
        multiplier: 1
      })

      return () => {
        if (locoRef.current) locoRef.current.destroy()
      }
    }
  }, [loading])

const scrollToHome = () => {
  if (!locoRef.current) return
  locoRef.current.scrollTo(homeRef.current, {
    offset: 0,
    duration: 800,
    easing: [0.25, 0.0, 0.35, 1.0]
  })
}

const scrollToAbout = () => {
  if (!locoRef.current) return
  locoRef.current.scrollTo(aboutRef.current, {
    offset: -100,
    duration: 800,
    easing: [0.25, 0.0, 0.35, 1.0]
  })
}

const scrollToProjects = () => {
  if (!locoRef.current) return
  locoRef.current.scrollTo(projectRef.current, {
    offset: -100,
    duration: 800,
    easing: [0.25, 0.0, 0.35, 1.0]
  })
}

const scrollToContact = () => {
  if (!locoRef.current) return
  locoRef.current.scrollTo(contactRef.current, {
    offset: -100,
    duration: 800,
    easing: [0.25, 0.0, 0.35, 1.0]
  })
}

  if (loading) return <Loader />

  return (
    <div data-scroll-container ref={containerRef}>
      <Nav   onHomeClick={scrollToHome}
  onAboutClick={scrollToAbout}
  onProjectClick={scrollToProjects}
  onContactClick={scrollToContact} />

      <div data-scroll-section ref={homeRef}>
  <LightRays />
  <ScrollVelocity
    texts={[
      'Python_react_django_html_css_github_POstmen_mongodb_drf_docker_',
      'Nodejs_nextjs_express_mongodb_docker_django_Javascript'
    ]}
    className="custom-scroll-text text-gray-600 uppercase"
  />
</div>

<div data-scroll-section ref={aboutRef}>
  <About />
</div>

<div data-scroll-section ref={projectRef}>
  <ProjectLayout />
</div>

<div data-scroll-section ref={contactRef}>
  <Footerlayout />
</div>

    </div>
  )
}
