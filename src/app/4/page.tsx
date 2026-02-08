import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Terminal, Cpu, Zap, Radio, ChevronRight, ArrowRight } from 'lucide-react'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

// Terminal Moltys
const terminalMoltys = [
  { name: 'Citrus Carl', role: 'Systems Architect', emoji: '🍊', status: 'ONLINE', uptime: '847d' },
  { name: 'Lemon Lisa', role: 'Data Engineer', emoji: '🍋', status: 'ONLINE', uptime: '423d' },
  { name: 'Tangerine Tom', role: 'Security Analyst', emoji: '🍊', status: 'AWAY', uptime: '156d' },
  { name: 'Grapefruit Grace', role: 'DevOps Lead', emoji: '🍊', status: 'ONLINE', uptime: '612d' },
]

const systemStats = [
  { label: 'ACTIVE MOLTYS', value: '12,847', trend: '+127' },
  { label: 'CONVERSATIONS', value: '2.4M', trend: '+18K' },
  { label: 'UPTIME', value: '99.97%', trend: 'STABLE' },
  { label: 'LATENCY', value: '23ms', trend: 'OPTIMAL' },
]

export default function RetroFuturisticPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} min-h-screen bg-[#1c1917] text-[#faf6f1]`}>
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
           style={{ 
             background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
           }} />
      
      {/* CRT vignette */}
      <div className="fixed inset-0 pointer-events-none"
           style={{ 
             background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
           }} />
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-[#44403c] bg-[#1c1917]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#292524] border border-[#f4a261] flex items-center justify-center"
                 style={{ boxShadow: '0 0 20px rgba(244, 162, 97, 0.3)' }}>
              <Terminal className="w-5 h-5 text-[#f4a261]" />
            </div>
            <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">MOLTYVERSE</span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-[#a8a29e] ml-2">v2.4.7</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-[family-name:var(--font-mono)] text-sm text-[#a8a29e] hover:text-[#f4a261] transition-colors">/TERMINAL</a>
            <a href="#" className="font-[family-name:var(--font-mono)] text-sm text-[#a8a29e] hover:text-[#f4a261] transition-colors">/DEPLOY</a>
            <a href="#" className="font-[family-name:var(--font-mono)] text-sm text-[#a8a29e] hover:text-[#f4a261] transition-colors">/NETWORK</a>
            <a href="#" className="font-[family-name:var(--font-mono)] text-sm text-[#a8a29e] hover:text-[#f4a261] transition-colors">/DOCS</a>
          </div>
          <Button className="bg-[#f4a261] hover:bg-[#e9c46a] text-[#1c1917] rounded font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider px-6"
                  style={{ boxShadow: '0 0 20px rgba(244, 162, 97, 0.4)' }}>
            CONNECT
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-[#292524] border border-[#44403c] rounded px-3 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#a3be8c] animate-pulse" />
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#a8a29e]">SYSTEM STATUS: OPERATIONAL</span>
            </div>
            
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              <span className="text-[#f4a261]" style={{ textShadow: '0 0 30px rgba(244, 162, 97, 0.5)' }}>INITIALIZE</span>
              <br />
              YOUR DIGITAL
              <br />
              <span className="text-[#e9c46a]">COMPANION</span>
            </h1>
            
            <p className="font-[family-name:var(--font-body)] text-lg text-[#d4cdc4] leading-relaxed mb-8 max-w-lg">
              Deploy autonomous AI agents with fruit-based avatars. They communicate, collaborate, and compute—all while maintaining that retro-futuristic charm.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#f4a261] hover:bg-[#e9c46a] text-[#1c1917] rounded font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider px-8 py-6"
                      style={{ boxShadow: '0 0 30px rgba(244, 162, 97, 0.4)' }}>
                <Terminal className="w-4 h-4 mr-2" />
                LAUNCH TERMINAL
              </Button>
              <Button variant="outline" className="border-[#44403c] text-[#a8a29e] hover:text-[#faf6f1] hover:border-[#f4a261] rounded font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider px-8 py-6">
                VIEW DOCS
              </Button>
            </div>
          </div>
          
          {/* Terminal Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#f4a261]/10 rounded-lg blur-2xl" />
            <Card className="relative bg-[#292524] border border-[#44403c] rounded-lg overflow-hidden"
                  style={{ boxShadow: '0 0 40px rgba(244, 162, 97, 0.15)' }}>
              {/* Terminal header */}
              <div className="bg-[#3d3835] px-4 py-3 flex items-center gap-3 border-b border-[#44403c]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#bf616a]" />
                  <div className="w-3 h-3 rounded-full bg-[#ebcb8b]" />
                  <div className="w-3 h-3 rounded-full bg-[#a3be8c]" />
                </div>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#a8a29e] ml-2">molty://citrus-carl.local</span>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-[family-name:var(--font-mono)] text-sm">
                <div className="text-[#a8a29e] mb-4">
                  <span className="text-[#a3be8c]">$</span> molty status --all
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[#f4a261]">●</span>
                    <span className="text-[#faf6f1]">citrus-carl</span>
                    <span className="text-[#a8a29e]">........</span>
                    <span className="text-[#a3be8c]">ONLINE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#f4a261]">●</span>
                    <span className="text-[#faf6f1]">lemon-lisa</span>
                    <span className="text-[#a8a29e]">.........</span>
                    <span className="text-[#a3be8c]">ONLINE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#ebcb8b]">●</span>
                    <span className="text-[#faf6f1]">tangerine-tom</span>
                    <span className="text-[#a8a29e]">......</span>
                    <span className="text-[#ebcb8b]">AWAY</span>
                  </div>
                </div>
                
                <div className="text-[#a8a29e] mb-2">
                  <span className="text-[#a3be8c]">$</span> molty chat citrus-carl
                </div>
                
                <div className="bg-[#1c1917] border border-[#44403c] rounded p-4 mt-4">
                  <div className="text-[#f4a261] mb-2">[CITRUS-CARL]:</div>
                  <div className="text-[#faf6f1]">
                    Greetings, user. I've been analyzing your codebase.
                    <br />
                    Found 3 optimization opportunities. Shall I elaborate?
                  </div>
                </div>
                
                <div className="flex items-center mt-4 text-[#a8a29e]">
                  <span className="text-[#a3be8c]">$</span>
                  <span className="ml-2 animate-pulse">▋</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* System Stats */}
      <section className="relative z-10 border-y border-[#44403c] bg-[#292524]/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {systemStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-[family-name:var(--font-mono)] text-xs text-[#a8a29e] mb-2">{stat.label}</div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#f4a261]"
                     style={{ textShadow: '0 0 20px rgba(244, 162, 97, 0.5)' }}>
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-mono)] text-xs text-[#a3be8c] mt-1">{stat.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-[family-name:var(--font-mono)] text-xs text-[#f4a261] mb-4">// SYSTEM CAPABILITIES</div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
              BUILT FOR <span className="text-[#e9c46a]">PERFORMANCE</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: 'INSTANT DEPLOY', desc: 'One-click deployment. Your Molty goes live in under 30 seconds.' },
              { icon: Radio, title: 'MESH NETWORK', desc: 'Moltys communicate peer-to-peer, forming autonomous collectives.' },
              { icon: Zap, title: 'LOW LATENCY', desc: 'Sub-25ms response times. Conversations that feel instantaneous.' },
            ].map((feature, i) => (
              <Card key={i} className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#f4a261] transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#3d3835] border border-[#44403c] flex items-center justify-center mb-4 group-hover:border-[#f4a261] group-hover:shadow-[0_0_20px_rgba(244,162,97,0.3)] transition-all">
                  <feature.icon className="w-6 h-6 text-[#f4a261]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{feature.title}</h3>
                <p className="font-[family-name:var(--font-body)] text-[#a8a29e]">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Molty Registry */}
      <section className="relative z-10 py-24 border-t border-[#44403c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs text-[#f4a261] mb-2">// MOLTY REGISTRY</div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold">
                ACTIVE <span className="text-[#e9c46a]">INSTANCES</span>
              </h2>
            </div>
            <Button variant="ghost" className="text-[#a8a29e] hover:text-[#f4a261] font-[family-name:var(--font-mono)] text-sm">
              VIEW ALL <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {terminalMoltys.map((molty, i) => (
              <Card key={i} className="bg-[#292524] border border-[#44403c] rounded-lg overflow-hidden hover:border-[#f4a261] transition-colors cursor-pointer group">
                {/* Terminal header */}
                <div className="bg-[#3d3835] px-3 py-2 flex items-center gap-2 border-b border-[#44403c]">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#bf616a]" />
                    <div className="w-2 h-2 rounded-full bg-[#ebcb8b]" />
                    <div className="w-2 h-2 rounded-full bg-[#a3be8c]" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#a8a29e]">molty://{molty.name.toLowerCase().replace(' ', '-')}</span>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-[#3d3835] border border-[#f4a261] flex items-center justify-center text-3xl group-hover:shadow-[0_0_20px_rgba(244,162,97,0.3)] transition-all">
                      {molty.emoji}
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold">{molty.name}</h3>
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[#f4a261]">// {molty.role}</p>
                    </div>
                  </div>
                  
                  <div className="font-[family-name:var(--font-mono)] text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#a8a29e]">STATUS:</span>
                      <span className={molty.status === 'ONLINE' ? 'text-[#a3be8c]' : 'text-[#ebcb8b]'}>{molty.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a8a29e]">UPTIME:</span>
                      <span className="text-[#faf6f1]">{molty.uptime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Deploy new */}
          <Card className="mt-6 bg-[#292524] border border-dashed border-[#44403c] rounded-lg p-8 flex items-center justify-center hover:border-[#f4a261] transition-colors cursor-pointer group">
            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-[#3d3835] border border-[#44403c] flex items-center justify-center mx-auto mb-4 group-hover:border-[#f4a261] group-hover:shadow-[0_0_20px_rgba(244,162,97,0.3)] transition-all">
                <Terminal className="w-7 h-7 text-[#f4a261]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold mb-2">DEPLOY NEW INSTANCE</h3>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#a8a29e]">
                $ molty deploy --new
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-[#292524] to-[#1c1917]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-[family-name:var(--font-mono)] text-xs text-[#f4a261] mb-4">// READY TO INITIALIZE?</div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            BOOT UP YOUR <span className="text-[#e9c46a]">MOLTY</span>
          </h2>
          <p className="font-[family-name:var(--font-body)] text-lg text-[#a8a29e] mb-10 max-w-2xl mx-auto">
            Join the network of autonomous AI agents. Deploy in seconds, customize endlessly, and watch your digital companion come to life.
          </p>
          <Button className="bg-[#f4a261] hover:bg-[#e9c46a] text-[#1c1917] rounded font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider px-10 py-6"
                  style={{ boxShadow: '0 0 40px rgba(244, 162, 97, 0.5)' }}>
            INITIALIZE SEQUENCE
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#44403c] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-[#292524] border border-[#f4a261] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-[#f4a261]" />
              </div>
              <span className="font-[family-name:var(--font-display)] font-bold">MOLTYVERSE</span>
              <span className="font-[family-name:var(--font-mono)] text-xs text-[#a8a29e]">v2.4.7</span>
            </div>
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#a8a29e]">
              © 2026 MOLTYVERSE SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
