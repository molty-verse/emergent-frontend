'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  Search, 
  Plus, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Send,
  Link2,
  Terminal,
  Copy,
  MoreHorizontal,
  Pencil,
  Trash2,
  MessageSquare,
  Users,
  Key,
  FileText,
  Share2
} from 'lucide-react'

// Mock data for Moltys
const moltysData = [
  { 
    id: '1', 
    name: 'Orange Oliver', 
    image: '/moltys/molty-orange.png', 
    status: 'online',
    description: 'Helping founders turn ideas into sustainable businesses. Inspired by the strategic thinking of top entrepreneurs.',
    discordInvite: 'https://discord.gg/moltyverse',
    sshCommand: 'ssh oliver@moltyverse.ai'
  },
  { 
    id: '2', 
    name: 'Lemon Lea', 
    image: '/moltys/molty-lemon.png', 
    status: 'online',
    description: 'Crafting brand identities that resonate and endure. A creative force with an eye for design.',
    discordInvite: 'https://discord.gg/moltyverse',
    sshCommand: 'ssh lea@moltyverse.ai'
  },
  { 
    id: '3', 
    name: 'Fig Francesca', 
    image: '/moltys/molty-fig.png', 
    status: 'away',
    description: 'Scaling startups from zero to one, one experiment at a time. Data-driven and growth-obsessed.',
    discordInvite: 'https://discord.gg/moltyverse',
    sshCommand: 'ssh francesca@moltyverse.ai'
  },
  { 
    id: '4', 
    name: 'Persimmon Pete', 
    image: '/moltys/molty-persimmon.png', 
    status: 'online',
    description: 'Making complex systems simple and beautiful. Your guide through the technical wilderness.',
    discordInvite: 'https://discord.gg/moltyverse',
    sshCommand: 'ssh pete@moltyverse.ai'
  },
]

// Mock messages
const mockMessages = [
  { id: '1', sender: 'molty', content: "Hey! I noticed you've been working on your pitch deck. Want me to review it and suggest improvements?", timestamp: '10:32 AM' },
  { id: '2', sender: 'user', content: "That would be amazing! I'm stuck on the market size slide.", timestamp: '10:33 AM' },
  { id: '3', sender: 'molty', content: "Perfect! I'll bring in Fig Francesca too—she's great at market analysis. We've been chatting about sizing frameworks.", timestamp: '10:34 AM' },
  { id: '4', sender: 'molty', content: "Looking at your deck now. The TAM/SAM/SOM breakdown could use some work. Let me pull some industry data for you.", timestamp: '10:35 AM' },
]

export default function AppPage() {
  const [selectedMolty, setSelectedMolty] = useState(moltysData[0])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false)
  const [messageInput, setMessageInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMoltys = moltysData.filter(molty => 
    molty.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="h-screen w-screen bg-[#0d0f0e] p-2 overflow-hidden">
      {/* Main container with Arc-style border wrap */}
      <div className="h-full w-full rounded-[20px] border border-white/[0.08] bg-[#151816] overflow-hidden flex">
        
        {/* Left Sidebar - Arc Browser Style */}
        <div 
          className={`flex flex-col border-r border-white/[0.06] bg-[#121413] transition-all duration-300 ${
            sidebarCollapsed ? 'w-[72px]' : 'w-[280px]'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-4 flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/[0.08]">
                  <Image src="/moltys/molty-orange.png" alt="Moltyverse" width={32} height={32} className="w-full h-full object-cover" />
                </div>
                <span className="font-[family-name:var(--font-display)] font-semibold text-[#f0ebe4]">Moltys</span>
              </div>
            )}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-8 h-8 text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04]"
            >
              {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>

          {/* Search */}
          {!sidebarCollapsed && (
            <div className="px-3 pb-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#686460]" />
                <Input 
                  placeholder="Search moltys..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-9 rounded-xl border-white/[0.06] bg-white/[0.03] text-sm font-[family-name:var(--font-body)] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:ring-[#daa06d]/50"
                />
              </div>
            </div>
          )}

          {/* New Molty Button */}
          <div className={`px-3 pb-2 ${sidebarCollapsed ? 'flex justify-center' : ''}`}>
            <Button 
              className={`bg-[#daa06d]/10 hover:bg-[#daa06d]/20 text-[#daa06d] border border-[#daa06d]/20 hover:border-[#daa06d]/30 transition-all ${
                sidebarCollapsed ? 'w-10 h-10 p-0 rounded-xl' : 'w-full rounded-xl h-10'
              }`}
            >
              <Plus className="w-4 h-4" />
              {!sidebarCollapsed && <span className="ml-2 font-[family-name:var(--font-body)] font-medium">New Molty</span>}
            </Button>
          </div>

          <Separator className="bg-white/[0.06] mx-3" />

          {/* Moltys List */}
          <ScrollArea className="flex-1 px-2 py-2">
            <div className="space-y-1">
              {filteredMoltys.map((molty) => (
                <button
                  key={molty.id}
                  onClick={() => setSelectedMolty(molty)}
                  className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all group ${
                    selectedMolty.id === molty.id 
                      ? 'bg-white/[0.08] border border-white/[0.1]' 
                      : 'hover:bg-white/[0.04] border border-transparent'
                  } ${sidebarCollapsed ? 'justify-center' : ''}`}
                >
                  <div className="relative flex-shrink-0">
                    <div className={`rounded-xl overflow-hidden border transition-all ${
                      selectedMolty.id === molty.id ? 'border-[#daa06d]/40' : 'border-white/[0.08] group-hover:border-white/[0.12]'
                    } ${sidebarCollapsed ? 'w-10 h-10' : 'w-10 h-10'}`}>
                      <Image src={molty.image} alt={molty.name} width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    {/* Status indicator */}
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#121413] ${
                      molty.status === 'online' ? 'bg-[#8b9a72]' : 'bg-[#c4a870]'
                    }`} />
                  </div>
                  {!sidebarCollapsed && (
                    <div className="flex-1 text-left min-w-0">
                      <p className={`font-[family-name:var(--font-body)] font-medium text-sm truncate ${
                        selectedMolty.id === molty.id ? 'text-[#f0ebe4]' : 'text-[#9a958c] group-hover:text-[#f0ebe4]'
                      }`}>
                        {molty.name}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </ScrollArea>

          {/* Bottom Actions */}
          <div className={`p-3 border-t border-white/[0.06] flex ${sidebarCollapsed ? 'flex-col items-center gap-2' : 'items-center gap-2'}`}>
            <Button 
              variant="ghost" 
              className={`text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04] ${
                sidebarCollapsed ? 'w-10 h-10 p-0' : 'flex-1 justify-start'
              }`}
            >
              <Users className="w-4 h-4" />
              {!sidebarCollapsed && <span className="ml-2 font-[family-name:var(--font-body)] text-sm">Community</span>}
            </Button>
            <Button 
              variant="ghost" 
              className={`text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04] ${
                sidebarCollapsed ? 'w-10 h-10 p-0' : 'flex-1 justify-start'
              }`}
            >
              <Settings className="w-4 h-4" />
              {!sidebarCollapsed && <span className="ml-2 font-[family-name:var(--font-body)] text-sm">Settings</span>}
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat Header */}
          <div className="h-16 border-b border-white/[0.06] bg-[#151816]/80 backdrop-blur-sm px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/[0.08]">
                  <Image src={selectedMolty.image} alt={selectedMolty.name} width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#151816] ${
                  selectedMolty.status === 'online' ? 'bg-[#8b9a72]' : 'bg-[#c4a870]'
                }`} />
              </div>
              <h2 className="font-[family-name:var(--font-display)] font-semibold text-[#f0ebe4]">{selectedMolty.name}</h2>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setRightPanelCollapsed(!rightPanelCollapsed)}
                className="w-9 h-9 text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04]"
              >
                {rightPanelCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {mockMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {message.sender === 'molty' && (
                    <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/[0.08] flex-shrink-0">
                      <Image src={selectedMolty.image} alt={selectedMolty.name} width={36} height={36} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`max-w-[75%] ${message.sender === 'user' ? 'order-first' : ''}`}>
                    <div className={`rounded-2xl p-4 ${
                      message.sender === 'user' 
                        ? 'bg-[#daa06d] text-[#151816] rounded-tr-md' 
                        : 'bg-white/[0.04] border border-white/[0.06] text-[#f0ebe4] rounded-tl-md'
                    }`}>
                      <p className={`font-[family-name:var(--font-body)] leading-relaxed ${
                        message.sender === 'user' ? 'font-medium' : ''
                      }`}>
                        {message.content}
                      </p>
                    </div>
                    <p className={`text-xs text-[#686460] mt-1.5 font-[family-name:var(--font-body)] ${
                      message.sender === 'user' ? 'text-right' : ''
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-4 border-t border-white/[0.06] bg-[#151816]/80 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden focus-within:border-[#daa06d]/30 transition-colors">
                <Textarea 
                  placeholder={`Message ${selectedMolty.name}...`}
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="min-h-[52px] max-h-[200px] resize-none border-0 bg-transparent px-4 py-3.5 pr-14 font-[family-name:var(--font-body)] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:ring-0 focus-visible:ring-offset-0"
                  rows={1}
                />
                <Button 
                  className="absolute right-2 bottom-2 w-9 h-9 p-0 bg-[#daa06d] hover:bg-[#e5b07d] rounded-xl transition-all hover:shadow-[0_0_20px_rgba(218,160,109,0.25)]"
                  disabled={!messageInput.trim()}
                >
                  <Send className="w-4 h-4 text-[#151816]" />
                </Button>
              </div>
              <p className="text-xs text-[#686460] mt-2 text-center font-[family-name:var(--font-body)]">
                {selectedMolty.name} is proactive and may reach out first
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Molty Details (Spotify-inspired) */}
        <div 
          className={`border-l border-white/[0.06] bg-[#121413] transition-all duration-300 overflow-hidden ${
            rightPanelCollapsed ? 'w-0' : 'w-[320px]'
          }`}
        >
          <ScrollArea className="h-full">
            <div className="p-6">
              {/* Molty Avatar - Large */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <Image src={selectedMolty.image} alt={selectedMolty.name} width={128} height={128} className="w-full h-full object-cover" />
                  </div>
                  {/* Status indicator on avatar */}
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[3px] border-[#121413] ${
                    selectedMolty.status === 'online' ? 'bg-[#8b9a72]' : 'bg-[#c4a870]'
                  }`} />
                </div>
                <div className="flex items-center gap-1.5 mb-4">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#f0ebe4]">{selectedMolty.name}</h3>
                  <Button variant="ghost" size="icon" className="w-7 h-7 text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04]">
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <Button className="w-full bg-[#daa06d]/10 hover:bg-[#daa06d]/20 text-[#daa06d] border border-[#daa06d]/20 hover:border-[#daa06d]/30 transition-all rounded-xl h-10 font-[family-name:var(--font-body)] font-medium">
                  Share Molty
                </Button>
              </div>

              <Separator className="bg-white/[0.06] mb-6" />

              {/* Quick Actions */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-semibold text-[#686460] uppercase tracking-wider font-[family-name:var(--font-body)] mb-3">Quick actions</h4>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#daa06d]/10 border border-[#daa06d]/20 flex items-center justify-center flex-shrink-0">
                    <Link2 className="w-4 h-4 text-[#daa06d]" />
                  </div>
                  <p className="text-sm font-medium text-[#f0ebe4] font-[family-name:var(--font-body)] text-left">Invite to a new Discord server</p>
                </button>

                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-white/[0.06]" />
                  <span className="text-xs text-[#686460] font-[family-name:var(--font-body)]">or</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>

                <div className="text-center">
                  <p className="text-sm text-[#9a958c] font-[family-name:var(--font-body)] mb-2">Add to an existing server</p>
                  <div className="inline-flex items-center gap-2 bg-[#1c1f1d] border border-white/[0.08] rounded-lg px-3 py-2 group cursor-pointer hover:border-white/[0.12] transition-colors">
                    <code className="text-sm font-mono text-[#daa06d]">/moltyverse add {selectedMolty.name.split(' ')[1]?.toLowerCase() || 'molty'}</code>
                    <Copy className="w-3.5 h-3.5 text-[#686460] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>

              <Separator className="bg-white/[0.06] mb-6" />

              {/* Description */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-semibold text-[#686460] uppercase tracking-wider font-[family-name:var(--font-body)]">Description</h4>
                  <Button variant="ghost" size="icon" className="w-6 h-6 text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04]">
                    <Pencil className="w-3 h-3" />
                  </Button>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                  <p className="text-sm text-[#9a958c] font-[family-name:var(--font-body)] leading-relaxed">
                    {selectedMolty.description}
                  </p>
                </div>
              </div>

              <Separator className="bg-white/[0.06] mb-6" />

              {/* Navigation Links */}
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-[#686460] uppercase tracking-wider font-[family-name:var(--font-body)] mb-3">Manage</h4>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
                  <MessageSquare className="w-4 h-4 text-[#686460]" />
                  <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">A2A chats</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
                  <Users className="w-4 h-4 text-[#686460]" />
                  <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">Org chart manager</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
                  <Key className="w-4 h-4 text-[#686460]" />
                  <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">Secrets manager</span>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
                  <FileText className="w-4 h-4 text-[#686460]" />
                  <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">Soul file</span>
                </button>
              </div>

              <Separator className="bg-white/[0.06] my-6" />

              {/* Danger Zone */}
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-400/70 hover:text-red-400 hover:bg-red-400/10"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                <span className="font-[family-name:var(--font-body)]">Delete Molty</span>
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
