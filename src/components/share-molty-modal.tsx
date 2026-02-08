"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronDown, UserPlus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Collaborator {
  id: string
  name: string
  email: string
  image?: string
  type: 'human' | 'molty'
  role: 'owner' | 'manager'
}

interface ShareMoltyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  moltyName: string
  availableMoltys: Array<{
    id: string
    name: string
    image: string
  }>
  currentMoltyId: string
}

// Mock current user
const currentUser: Collaborator = {
  id: 'current-user',
  name: 'Diogo Iwasaki',
  email: 'diwasaki@buildersleague.com',
  image: '/avatars/diogo.jpg',
  type: 'human',
  role: 'owner'
}

// Mock available humans to add
const availableHumans = [
  { id: 'h1', name: 'Salena Thompson', email: 'salena@communityofbighearts.com' },
  { id: 'h2', name: 'Marcus Chen', email: 'marcus@example.com' },
  { id: 'h3', name: 'Aria Johnson', email: 'aria@example.com' },
]

export function ShareMoltyModal({ 
  open, 
  onOpenChange, 
  moltyName,
  availableMoltys,
  currentMoltyId
}: ShareMoltyModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [collaborators, setCollaborators] = useState<Collaborator[]>([currentUser])
  const [showDropdown, setShowDropdown] = useState(false)

  // Filter out current molty and already added collaborators
  const filteredMoltys = availableMoltys
    .filter(m => m.id !== currentMoltyId)
    .filter(m => !collaborators.some(c => c.id === m.id))
    .filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const filteredHumans = availableHumans
    .filter(h => !collaborators.some(c => c.id === h.id))
    .filter(h => 
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.email.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const hasResults = filteredMoltys.length > 0 || filteredHumans.length > 0

  const addCollaborator = (collaborator: Omit<Collaborator, 'role'> & { role?: 'manager' }) => {
    setCollaborators(prev => [...prev, { ...collaborator, role: 'manager' }])
    setSearchQuery('')
    setShowDropdown(false)
  }

  const removeCollaborator = (id: string) => {
    if (id === currentUser.id) return // Can't remove owner
    setCollaborators(prev => prev.filter(c => c.id !== id))
  }

  const handleDone = () => {
    // Mock save - would make API calls here
    console.log("Sharing molty with:", collaborators)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="bg-[#121413] border-white/[0.1] text-[#f0ebe4] max-w-md"
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-display)] text-xl text-[#f0ebe4]">
            Share &quot;{moltyName}&quot;
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Search Input */}
          <div className="relative">
            <Input
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowDropdown(true)
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Add people, moltys, or email addresses"
              className="bg-white/[0.03] border-white/[0.08] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:border-[#daa06d]/50 focus-visible:ring-[#daa06d]/20"
            />
            
            {/* Dropdown */}
            {showDropdown && searchQuery && hasResults && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1d1b] border border-white/[0.1] rounded-xl shadow-xl z-50 overflow-hidden">
                <ScrollArea className="max-h-[200px]">
                  {/* Moltys Section */}
                  {filteredMoltys.length > 0 && (
                    <div className="p-2">
                      <p className="text-xs text-[#686460] font-[family-name:var(--font-body)] uppercase tracking-wider px-2 py-1">
                        Moltys
                      </p>
                      {filteredMoltys.map(molty => (
                        <button
                          key={molty.id}
                          onClick={() => addCollaborator({
                            id: molty.id,
                            name: molty.name,
                            email: '',
                            image: molty.image,
                            type: 'molty'
                          })}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/[0.08]">
                            <Image src={molty.image} alt={molty.name} width={32} height={32} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-sm text-[#f0ebe4] font-[family-name:var(--font-body)]">{molty.name}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Humans Section */}
                  {filteredHumans.length > 0 && (
                    <div className="p-2 border-t border-white/[0.06]">
                      <p className="text-xs text-[#686460] font-[family-name:var(--font-body)] uppercase tracking-wider px-2 py-1">
                        People
                      </p>
                      {filteredHumans.map(human => (
                        <button
                          key={human.id}
                          onClick={() => addCollaborator({
                            id: human.id,
                            name: human.name,
                            email: human.email,
                            type: 'human'
                          })}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#daa06d]/20 border border-[#daa06d]/30 flex items-center justify-center">
                            <span className="text-xs font-medium text-[#daa06d]">
                              {human.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="text-left">
                            <p className="text-sm text-[#f0ebe4] font-[family-name:var(--font-body)]">{human.name}</p>
                            <p className="text-xs text-[#686460] font-[family-name:var(--font-body)]">{human.email}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </div>
            )}

            {/* No results */}
            {showDropdown && searchQuery && !hasResults && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1d1b] border border-white/[0.1] rounded-xl shadow-xl z-50 p-4">
                <div className="flex items-center gap-3 text-[#686460]">
                  <UserPlus className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-[family-name:var(--font-body)]">No results found</p>
                    <p className="text-xs">Try a different search term</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Click outside to close dropdown */}
          {showDropdown && (
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setShowDropdown(false)}
            />
          )}

          {/* People with access */}
          <div>
            <h3 className="text-sm font-medium text-[#9a958c] font-[family-name:var(--font-body)] mb-3">
              People with access
            </h3>
            
            <div className="space-y-2">
              {collaborators.map(collaborator => (
                <div 
                  key={collaborator.id}
                  className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                >
                  {/* Avatar */}
                  {collaborator.type === 'molty' && collaborator.image ? (
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/[0.08]">
                      <Image src={collaborator.image} alt={collaborator.name} width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#daa06d]/20 border border-[#daa06d]/30 flex items-center justify-center">
                      <span className="text-sm font-medium text-[#daa06d]">
                        {collaborator.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#f0ebe4] font-[family-name:var(--font-body)] truncate">
                      {collaborator.name}
                    </p>
                    {collaborator.email && (
                      <p className="text-xs text-[#686460] font-[family-name:var(--font-body)] truncate">
                        {collaborator.email}
                      </p>
                    )}
                    {collaborator.type === 'molty' && (
                      <p className="text-xs text-[#daa06d] font-[family-name:var(--font-body)]">
                        Molty
                      </p>
                    )}
                  </div>

                  {/* Role */}
                  <div className="flex items-center gap-1">
                    {collaborator.role === 'owner' ? (
                      <span className="text-sm text-[#686460] font-[family-name:var(--font-body)]">
                        Owner
                      </span>
                    ) : (
                      <button className="flex items-center gap-1 text-sm text-[#9a958c] hover:text-[#f0ebe4] font-[family-name:var(--font-body)] transition-colors">
                        Manager
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    )}
                    
                    {/* Remove button (not for owner) */}
                    {collaborator.role !== 'owner' && (
                      <button
                        onClick={() => removeCollaborator(collaborator.id)}
                        className="ml-2 p-1 text-[#686460] hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <Button
            onClick={handleDone}
            className="bg-[#daa06d] hover:bg-[#daa06d]/90 text-[#151816] font-medium px-6"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
