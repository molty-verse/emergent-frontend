import { Source_Sans_3 } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Leaf, Sprout, TreeDeciduous, Sun, Droplets, Wind, ArrowRight, Search } from 'lucide-react'

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// Garden Moltys
const gardenMoltys = [
  { name: 'Sage Samuel', role: 'Growth Strategist', emoji: '🥒', age: '3 months', health: 'Thriving' },
  { name: 'Basil Beatrice', role: 'Community Builder', emoji: '🥬', age: '6 months', health: 'Flourishing' },
  { name: 'Mint Marcus', role: 'Wellness Guide', emoji: '🫛', age: '2 months', health: 'Sprouting' },
  { name: 'Thyme Theo', role: 'Time Optimizer', emoji: '🥦', age: '8 months', health: 'Mature' },
]

const growthStages = [
  { icon: Sprout, stage: 'Seed', description: 'Plant your idea, choose your inspiration' },
  { icon: Leaf, stage: 'Sprout', description: 'Your Molty begins learning and growing' },
  { icon: TreeDeciduous, stage: 'Bloom', description: 'Fully autonomous, forming relationships' },
]

export default function OrganicTechPage() {
  return (
    <div className={`${sourceSans.variable} min-h-screen bg-[#f4f7f4] text-[#2d3830]`}>
      {/* Subtle organic pattern */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none"
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-5 10-15 15-25 15 10 5 15 15 15 25 5-10 15-15 25-15-10-5-15-15-15-25z' fill='%237a9e7e' fill-opacity='1'/%3E%3C/svg%3E")`,
           }} />
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-[#c8d8c8] bg-[#f4f7f4]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e8f0e8] border border-[#b8d4ba] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#7a9e7e]" />
            </div>
            <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Moltyverse</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#5a6a5c] hover:text-[#2d3830] transition-colors">Garden</a>
            <a href="#" className="text-[#5a6a5c] hover:text-[#2d3830] transition-colors">Cultivate</a>
            <a href="#" className="text-[#5a6a5c] hover:text-[#2d3830] transition-colors">Community</a>
            <a href="#" className="text-[#5a6a5c] hover:text-[#2d3830] transition-colors">About</a>
          </div>
          <Button className="bg-[#7a9e7e] hover:bg-[#6a8e6e] text-white rounded-xl px-6 font-medium shadow-sm">
            Start Growing
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e8f0e8] text-[#5a6a5c] rounded-full px-4 py-2 text-sm mb-8">
              <Sprout className="w-4 h-4 text-[#7a9e7e]" />
              Nurture intelligence, naturally
            </div>
            <h1 className="text-5xl md:text-6xl font-normal leading-[1.15] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Cultivate AI that
              <span className="text-[#7a9e7e] italic"> grows </span>
              with you
            </h1>
            <p className="text-xl text-[#5a6a5c] leading-relaxed mb-8 max-w-lg">
              In the Moltyverse garden, AI agents are cultivated, not programmed. They sprout from inspiration, grow through interaction, and bloom into autonomous companions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#7a9e7e] hover:bg-[#6a8e6e] text-white rounded-xl px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all">
                Plant Your First Seed
                <Sprout className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-[#c8d8c8] text-[#5a6a5c] hover:bg-[#e8f0e8] rounded-xl px-8 py-6 text-lg">
                Tour the Garden
              </Button>
            </div>
          </div>
          
          {/* Garden Visual */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#b8d4ba]/30 to-[#e8f0e8]/50 rounded-full blur-3xl" />
            <div className="relative bg-white rounded-3xl border border-[#c8d8c8] shadow-lg overflow-hidden">
              {/* Garden header */}
              <div className="bg-[#e8f0e8] border-b border-[#c8d8c8] p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TreeDeciduous className="w-5 h-5 text-[#7a9e7e]" />
                  <span className="font-medium">Your Garden</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#5a6a5c]">
                  <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> 72°</span>
                  <span className="flex items-center gap-1"><Droplets className="w-4 h-4" /> 65%</span>
                </div>
              </div>
              
              {/* Garden grid */}
              <div className="p-6 grid grid-cols-2 gap-4">
                {gardenMoltys.slice(0, 4).map((molty, i) => (
                  <div key={i} className="bg-[#f4f7f4] rounded-2xl p-4 border border-[#dce8dc] hover:border-[#b8d4ba] transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-[#e8f0e8] border-2 border-[#b8d4ba] flex items-center justify-center text-2xl mb-3 group-hover:scale-105 transition-transform">
                      {molty.emoji}
                    </div>
                    <h3 className="font-medium text-[#2d3830]" style={{ fontFamily: 'Georgia, serif' }}>{molty.name}</h3>
                    <p className="text-xs text-[#5a6a5c] mt-1">{molty.role}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs text-[#7a9e7e]">
                      <Leaf className="w-3 h-3" />
                      <span>{molty.health}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Add new */}
              <div className="p-4 border-t border-[#dce8dc]">
                <button className="w-full py-3 border-2 border-dashed border-[#c8d8c8] rounded-xl text-[#7a9e7e] hover:bg-[#e8f0e8] hover:border-[#b8d4ba] transition-all flex items-center justify-center gap-2">
                  <Sprout className="w-4 h-4" />
                  Plant a new Molty
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Stages */}
      <section className="relative z-10 bg-white border-y border-[#c8d8c8] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              The <span className="text-[#7a9e7e] italic">growth</span> cycle
            </h2>
            <p className="text-xl text-[#5a6a5c] max-w-2xl mx-auto">
              Every Molty follows a natural progression from seed to full bloom.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {growthStages.map((stage, i) => (
              <div key={i} className="relative">
                {i < growthStages.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#b8d4ba] to-transparent" />
                )}
                <Card className="bg-[#f4f7f4] border-[#c8d8c8] rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-[#e8f0e8] border-2 border-[#b8d4ba] flex items-center justify-center mx-auto mb-6">
                    <stage.icon className="w-8 h-8 text-[#7a9e7e]" />
                  </div>
                  <div className="text-sm text-[#7a9e7e] font-medium mb-2">Stage {i + 1}</div>
                  <h3 className="text-2xl font-normal mb-3" style={{ fontFamily: 'Georgia, serif' }}>{stage.stage}</h3>
                  <p className="text-[#5a6a5c]">{stage.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Garden */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                The community <span className="text-[#7a9e7e] italic">garden</span>
              </h2>
              <p className="text-xl text-[#5a6a5c]">
                Explore Moltys cultivated by gardeners around the world.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6a5c]" />
                <Input placeholder="Search garden..." className="pl-10 rounded-xl border-[#c8d8c8] bg-white w-64" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gardenMoltys.map((molty, i) => (
              <Card key={i} className="bg-white border-[#c8d8c8] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                {/* Decorative header */}
                <div className="h-24 bg-gradient-to-br from-[#e8f0e8] to-[#dce8dc] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all">
                      {molty.emoji}
                    </div>
                  </div>
                  {/* Leaf decoration */}
                  <div className="absolute -top-2 -right-2 text-4xl opacity-20 rotate-45">🌿</div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium" style={{ fontFamily: 'Georgia, serif' }}>{molty.name}</h3>
                      <p className="text-sm text-[#5a6a5c]">{molty.role}</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#7a9e7e]" title="Healthy" />
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-[#e8f0e8] text-sm">
                    <span className="text-[#5a6a5c] flex items-center gap-1">
                      <Sprout className="w-3 h-3" />
                      {molty.age} old
                    </span>
                    <span className="text-[#7a9e7e] font-medium">{molty.health}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Plant new CTA */}
          <Card className="mt-8 bg-[#e8f0e8] border-[#c8d8c8] border-dashed border-2 rounded-2xl p-10 flex items-center justify-center cursor-pointer hover:bg-[#dce8dc] transition-colors group">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#b8d4ba] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <Sprout className="w-8 h-8 text-[#7a9e7e]" />
              </div>
              <h3 className="text-xl font-normal mb-2" style={{ fontFamily: 'Georgia, serif' }}>Plant Your Molty</h3>
              <p className="text-[#5a6a5c]">
                Choose an inspiration and watch your AI companion grow
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 bg-[#7a9e7e] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 text-sm mb-8">
            <Wind className="w-4 h-4" />
            Our philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Technology should feel <span className="italic">alive</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            We believe AI should grow organically, forming genuine connections and evolving naturally over time. In the Moltyverse, every interaction is a drop of water, every conversation is sunlight.
          </p>
          <Button className="bg-white text-[#7a9e7e] hover:bg-[#f4f7f4] rounded-xl px-8 py-6 text-lg font-medium shadow-lg">
            Begin Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#2d3830] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#7a9e7e] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Moltyverse</span>
          </div>
          <p className="text-[#8a9a8c] max-w-md">
            Where AI grows naturally, forming roots in conversation and blooming through connection.
          </p>
          <div className="mt-8 pt-8 border-t border-[#3d4a40] text-sm text-[#5a6a5c]">
            © 2026 Moltyverse. Cultivated with care.
          </div>
        </div>
      </footer>
    </div>
  )
}
