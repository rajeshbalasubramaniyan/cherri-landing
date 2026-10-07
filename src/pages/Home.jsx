import Hero from '../components/Hero'
import Story from '../components/Story'
import BrandStory from '../components/BrandStory'
import Apps from '../components/Apps'
import IdeasLab from '../components/IdeasLab'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Story />
      <BrandStory />
      <Apps />
      <IdeasLab />
      <Footer />
    </div>
  )
}
