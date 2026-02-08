'use client'

import { useState, useEffect, useRef } from 'react'
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
  Copy,
  Pencil,
  Trash2,
  MessageSquare,
  Users,
  Key,
  Power,
  Check,
  X,
} from 'lucide-react'
import { SettingsModal } from '@/components/settings-modal'
import { ShareMoltyModal } from '@/components/share-molty-modal'

// Status types: 'online' | 'booting' | 'offline'
type MoltyStatus = 'online' | 'booting' | 'offline'

// Mock data for Moltys
const moltysData = [
  { 
    id: '1', 
    name: 'Orange Oliver', 
    image: '/moltys/molty-orange.png', 
    status: 'online' as MoltyStatus,
    description: 'Helping founders turn ideas into sustainable businesses. Inspired by the strategic thinking of top entrepreneurs.',
  },
  { 
    id: '2', 
    name: 'Lemon Lea', 
    image: '/moltys/molty-lemon.png', 
    status: 'booting' as MoltyStatus,
    description: 'Crafting brand identities that resonate and endure. A creative force with an eye for design.',
  },
  { 
    id: '3', 
    name: 'Fig Francesca', 
    image: '/moltys/molty-fig.png', 
    status: 'offline' as MoltyStatus,
    description: 'Scaling startups from zero to one, one experiment at a time. Data-driven and growth-obsessed.',
  },
  { 
    id: '4', 
    name: 'Persimmon Pete', 
    image: '/moltys/molty-persimmon.png', 
    status: 'online' as MoltyStatus,
    description: 'Making complex systems simple and beautiful. Your guide through the technical wilderness.',
  },
]

// Status indicator component with expand animation
function StatusIndicator({ 
  status, 
  size = 'small',
  borderColor = '#121413'
}: { 
  status: MoltyStatus
  size?: 'small' | 'large'
  borderColor?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showText, setShowText] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const prevStatusRef = useRef(status)

  const statusConfig = {
    online: { color: 'bg-[#8b9a72]', text: 'Online', textColor: 'text-[#8b9a72]' },
    booting: { color: 'bg-[#daa06d]', text: 'Booting', textColor: 'text-[#daa06d]' },
    offline: { color: 'bg-[#686460]', text: 'Offline', textColor: 'text-[#686460]' },
  }

  const config = statusConfig[status]
  // Size in pixels for the dot
  const dotPx = size === 'large' ? 16 : 12
  const borderPx = size === 'large' ? 3 : 2
  const totalSize = dotPx + (borderPx * 2)

  const triggerAnimation = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsExpanded(true)
    setShowText(true)
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false)
      setTimeout(() => setShowText(false), 300)
    }, 3000)
  }

  // Trigger animation on status change - this is a valid pattern for responding to prop changes
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (prevStatusRef.current !== status) {
      prevStatusRef.current = status
      setAnimationKey(k => k + 1)
    }
  }, [status])

  // Run animation when key changes
  useEffect(() => {
    if (animationKey > 0) {
      triggerAnimation()
    }
  }, [animationKey])
  /* eslint-enable react-hooks/set-state-in-effect */

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={triggerAnimation}
    >
      <div 
        className="flex items-center rounded-full transition-all duration-300 ease-out overflow-hidden"
        style={{ 
          height: totalSize,
          borderWidth: borderPx,
          borderColor,
          backgroundColor: isExpanded ? borderColor : 'transparent',
          paddingLeft: isExpanded ? 2 : 0,
          paddingRight: isExpanded ? 8 : 0,
        }}
      >
        <div 
          className={`rounded-full ${config.color} flex-shrink-0 ${status === 'booting' ? 'animate-pulse' : ''}`}
          style={{ width: dotPx, height: dotPx }}
        />
        <div 
          className={`
            overflow-hidden transition-all duration-300 ease-out flex items-center
            ${isExpanded ? 'max-w-[60px] ml-1.5 opacity-100' : 'max-w-0 ml-0 opacity-0'}
          `}
        >
          {showText && (
            <span className={`text-[10px] font-semibold font-[family-name:var(--font-body)] whitespace-nowrap leading-none ${config.textColor}`}>
              {config.text}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// Mock messages
const mockMessages = [
  { id: '1', sender: 'molty', content: "Hey! I noticed you've been working on your pitch deck. Want me to review it and suggest improvements?", timestamp: '10:32 AM' },
  { id: '2', sender: 'user', content: "That would be amazing! I'm stuck on the market size slide.", timestamp: '10:33 AM' },
  { id: '3', sender: 'molty', content: "Perfect! I'll bring in Fig Francesca too—she's great at market analysis. We've been chatting about sizing frameworks.", timestamp: '10:34 AM' },
  { id: '4', sender: 'molty', content: "Looking at your deck now. The TAM/SAM/SOM breakdown could use some work. Let me pull some industry data for you.", timestamp: '10:35 AM' },
]

export default function AppPage() {
  const [moltys, setMoltys] = useState(moltysData)
  const [selectedMoltyId, setSelectedMoltyId] = useState(moltysData[0].id)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false)
  const [messageInput, setMessageInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [isEditingDescription, setIsEditingDescription] = useState(false)
  const [editedDescription, setEditedDescription] = useState('')
  const [showDeleteMoltyConfirm, setShowDeleteMoltyConfirm] = useState(false)

  const selectedMolty = moltys.find(m => m.id === selectedMoltyId) || moltys[0]

  const filteredMoltys = moltys.filter(molty => 
    molty.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleMoltyPower = () => {
    const newStatus: MoltyStatus = selectedMolty.status === 'offline' ? 'booting' : 'offline'
    
    setMoltys(prev => prev.map(m => 
      m.id === selectedMoltyId ? { ...m, status: newStatus } : m
    ))

    // If turning on, simulate boot sequence: booting -> online after 2 seconds
    if (newStatus === 'booting') {
      setTimeout(() => {
        setMoltys(prev => prev.map(m => 
          m.id === selectedMoltyId ? { ...m, status: 'online' as MoltyStatus } : m
        ))
      }, 2000)
    }
  }

  const startEditingDescription = () => {
    setEditedDescription(selectedMolty.description)
    setIsEditingDescription(true)
  }

  const saveDescription = () => {
    setMoltys(prev => prev.map(m => 
      m.id === selectedMoltyId ? { ...m, description: editedDescription } : m
    ))
    setIsEditingDescription(false)
  }

  const cancelEditingDescription = () => {
    setIsEditingDescription(false)
    setEditedDescription('')
  }

  const handleDeleteMolty = () => {
    // Remove the molty from the list
    setMoltys(prev => prev.filter(m => m.id !== selectedMoltyId))
    // Select the first remaining molty
    const remainingMoltys = moltys.filter(m => m.id !== selectedMoltyId)
    if (remainingMoltys.length > 0) {
      setSelectedMoltyId(remainingMoltys[0].id)
    }
    setShowDeleteMoltyConfirm(false)
  }

  return (
    <div className="h-screen w-screen bg-[#1a2420] overflow-hidden relative">
      {/* Noise texture overlay on the background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} 
      />
      
      {/* Main layout container */}
      <div className="h-full w-full flex relative z-10 p-2 gap-0">
        
        {/* Left Sidebar - No border, just background */}
        <div 
          className={`flex flex-col transition-all duration-300 flex-shrink-0 ${
            sidebarCollapsed ? 'w-[72px]' : 'w-[264px]'
          }`}
        >
          {/* Sidebar inner container - no border */}
          <div className="flex flex-col h-full bg-transparent">
            
            {/* Sidebar Header */}
            <div className="p-4 flex items-center justify-between">
              {!sidebarCollapsed && (
                <div className="flex items-center gap-2.5">
                  {/* Logo Icon */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#daa06d] to-[#c4846a] flex items-center justify-center shadow-[0_2px_8px_rgba(218,160,109,0.3)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="6" fill="#151816" fillOpacity="0.9"/>
                      <ellipse cx="12" cy="20" rx="8" ry="4" fill="#151816" fillOpacity="0.6"/>
                      <circle cx="10" cy="7" r="1.5" fill="#f0ebe4"/>
                      <circle cx="14" cy="7" r="1.5" fill="#f0ebe4"/>
                      <path d="M10 10 Q12 12 14 10" stroke="#f0ebe4" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-fraunces)] text-lg font-medium text-[#f0ebe4] tracking-tight">
                    Moltyverse
                  </span>
                </div>
              )}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className={`w-8 h-8 text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04] ${sidebarCollapsed ? 'mx-auto' : ''}`}
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
                    onClick={() => setSelectedMoltyId(molty.id)}
                    className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all group ${
                      selectedMolty.id === molty.id 
                        ? 'bg-white/[0.08] border border-white/[0.1]' 
                        : 'hover:bg-white/[0.04] border border-transparent'
                    } ${sidebarCollapsed ? 'justify-center' : ''}`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className={`rounded-xl overflow-hidden border transition-all ${
                        selectedMolty.id === molty.id ? 'border-[#daa06d]/40' : 'border-white/[0.08] group-hover:border-white/[0.12]'
                      } w-10 h-10`}>
                        <Image src={molty.image} alt={molty.name} width={40} height={40} className="w-full h-full object-cover" />
                      </div>
                      {/* Status indicator */}
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#1a2420] ${
                        molty.status === 'online' ? 'bg-[#8b9a72]' : molty.status === 'booting' ? 'bg-[#daa06d] animate-pulse' : 'bg-[#686460]'
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
                {!sidebarCollapsed && <span className="ml-2 font-[family-name:var(--font-body)] text-sm">Moltys</span>}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setSettingsOpen(true)}
                className={`text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04] ${
                  sidebarCollapsed ? 'w-10 h-10 p-0' : 'flex-1 justify-start'
                }`}
              >
                <Settings className="w-4 h-4" />
                {!sidebarCollapsed && <span className="ml-2 font-[family-name:var(--font-body)] text-sm">Settings</span>}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Area (Chat + Right Sidebar wrapped together with full border) */}
        <div className="flex-1 flex min-w-0 bg-[#151816] rounded-[16px] border border-white/[0.1] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.4)]">
          
          {/* Chat Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Chat Header */}
            <div className="h-16 border-b border-white/[0.06] bg-[#151816] px-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/[0.08]">
                    <Image src={selectedMolty.image} alt={selectedMolty.name} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#151816] ${
                    selectedMolty.status === 'online' ? 'bg-[#8b9a72]' : selectedMolty.status === 'booting' ? 'bg-[#daa06d] animate-pulse' : 'bg-[#686460]'
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
            <div className="p-4 border-t border-white/[0.06] bg-[#151816]">
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

          {/* Right Sidebar - Molty Details (inside the main bordered area) */}
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
                    <div className="absolute -bottom-1 -right-1">
                      <StatusIndicator status={selectedMolty.status} size="large" borderColor="#121413" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mb-4">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#f0ebe4]">{selectedMolty.name}</h3>
                    <Button variant="ghost" size="icon" className="w-7 h-7 text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04]">
                      <Pencil className="w-3.5 h-3.5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={toggleMoltyPower}
                      className={`w-7 h-7 transition-all ${
                        selectedMolty.status === 'offline' 
                          ? 'text-[#8b9a72] hover:text-[#8b9a72] hover:bg-[#8b9a72]/10' 
                          : 'text-[#686460] hover:text-red-400 hover:bg-red-400/10'
                      }`}
                    >
                      <Power className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                  <Button 
                    onClick={() => setShareModalOpen(true)}
                    className="w-full bg-[#daa06d]/10 hover:bg-[#daa06d]/20 text-[#daa06d] border border-[#daa06d]/20 hover:border-[#daa06d]/30 transition-all rounded-xl h-10 font-[family-name:var(--font-body)] font-medium"
                  >
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
                    {isEditingDescription ? (
                      <div className="flex items-center gap-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={cancelEditingDescription}
                          className="w-6 h-6 text-red-400/70 hover:text-red-400 hover:bg-red-400/10"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={saveDescription}
                          className="w-6 h-6 text-[#8b9a72] hover:text-[#8b9a72] hover:bg-[#8b9a72]/10"
                        >
                          <Check className="w-3 h-3" />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={startEditingDescription}
                        className="w-6 h-6 text-[#686460] hover:text-[#f0ebe4] hover:bg-white/[0.04]"
                      >
                        <Pencil className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    {isEditingDescription ? (
                      <Textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-sm text-[#f0ebe4] font-[family-name:var(--font-body)] leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0"
                        autoFocus
                      />
                    ) : (
                      <p className="text-sm text-[#9a958c] font-[family-name:var(--font-body)] leading-relaxed">
                        {selectedMolty.description}
                      </p>
                    )}
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
                </div>

                <Separator className="bg-white/[0.06] my-6" />

                {/* Danger Zone */}
                {!showDeleteMoltyConfirm ? (
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowDeleteMoltyConfirm(true)}
                    className="w-full justify-start text-red-400/70 hover:text-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    <span className="font-[family-name:var(--font-body)]">Delete Molty</span>
                  </Button>
                ) : (
                  <div className="p-4 rounded-xl bg-red-400/10 border border-red-400/20 space-y-3">
                    <p className="text-sm text-red-300 font-[family-name:var(--font-body)]">
                      Are you sure you want to delete <span className="font-semibold">{selectedMolty.name}</span>? This action cannot be undone.
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        onClick={() => setShowDeleteMoltyConfirm(false)}
                        className="flex-1 text-[#9a958c] hover:text-[#f0ebe4] hover:bg-white/[0.04]"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleDeleteMolty}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />

      {/* Share Molty Modal */}
      <ShareMoltyModal 
        open={shareModalOpen} 
        onOpenChange={setShareModalOpen}
        moltyName={selectedMolty.name}
        availableMoltys={moltys.map(m => ({ id: m.id, name: m.name, image: m.image }))}
        currentMoltyId={selectedMoltyId}
      />
    </div>
  )
}
