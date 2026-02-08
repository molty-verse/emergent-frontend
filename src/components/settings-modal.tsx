"use client"

import { useState } from "react"
import { Eye, EyeOff, AlertTriangle, Check, ExternalLink, Sparkles, Twitter } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface SettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type PlanTier = 'free' | 'pro'

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
const [showApiKey, setShowApiKey] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  // Form state (mock - no actual API calls)
  const [discordUsername, setDiscordUsername] = useState("")
  const [email, setEmail] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Billing state (mock)
  const [currentPlan] = useState<PlanTier>('free')

  const handleSave = () => {
    // Mock save - would make API calls here
    console.log("Saving settings:", { discordUsername, email, apiKey, newPassword })
    onOpenChange(false)
  }

  const handleDeleteAccount = () => {
    // Mock delete - would make API call here
    console.log("Deleting account...")
    setShowDeleteConfirm(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="bg-[#121413] border-white/[0.1] text-[#f0ebe4] max-w-lg max-h-[calc(100vh-4rem)] !flex !flex-col overflow-hidden"
        showCloseButton={true}
      >
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="font-[family-name:var(--font-display)] text-xl text-[#f0ebe4]">
            Settings
          </DialogTitle>
          <DialogDescription className="text-[#9a958c] font-[family-name:var(--font-body)]">
            Manage your account settings and preferences.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 min-h-0 overflow-y-auto -mx-6 px-6 scrollbar-styled">
          <div className="space-y-6 py-2">
          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[#9a958c] font-[family-name:var(--font-body)] uppercase tracking-wider">
              Account
            </h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f0ebe4] font-[family-name:var(--font-body)]">
                Discord Username
              </label>
              <Input
                value={discordUsername}
                onChange={(e) => setDiscordUsername(e.target.value)}
                placeholder="username#0000"
                className="bg-white/[0.03] border-white/[0.08] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:border-[#daa06d]/50 focus-visible:ring-[#daa06d]/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f0ebe4] font-[family-name:var(--font-body)]">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-white/[0.03] border-white/[0.08] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:border-[#daa06d]/50 focus-visible:ring-[#daa06d]/20"
              />
            </div>
          </div>

          <Separator className="bg-white/[0.06]" />

          {/* Security Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[#9a958c] font-[family-name:var(--font-body)] uppercase tracking-wider">
              Security
            </h3>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f0ebe4] font-[family-name:var(--font-body)]">
                Anthropic API Key
              </label>
              <div className="relative">
                <Input
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-ant-..."
                  className="bg-white/[0.03] border-white/[0.08] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:border-[#daa06d]/50 focus-visible:ring-[#daa06d]/20 pr-10 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#686460] hover:text-[#f0ebe4] transition-colors"
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f0ebe4] font-[family-name:var(--font-body)]">
                New Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="bg-white/[0.03] border-white/[0.08] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:border-[#daa06d]/50 focus-visible:ring-[#daa06d]/20 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#686460] hover:text-[#f0ebe4] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f0ebe4] font-[family-name:var(--font-body)]">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="bg-white/[0.03] border-white/[0.08] text-[#f0ebe4] placeholder:text-[#686460] focus-visible:border-[#daa06d]/50 focus-visible:ring-[#daa06d]/20 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#686460] hover:text-[#f0ebe4] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <Separator className="bg-white/[0.06]" />

          {/* Billing Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[#9a958c] font-[family-name:var(--font-body)] uppercase tracking-wider">
              Billing
            </h3>

            {/* Current Plan Display */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">Current plan:</span>
                  <span className={`text-sm font-semibold font-[family-name:var(--font-body)] ${
                    currentPlan === 'pro' ? 'text-[#daa06d]' : 'text-[#f0ebe4]'
                  }`}>
                    {currentPlan === 'pro' ? 'Pro' : 'Free'}
                  </span>
                  {currentPlan === 'pro' && (
                    <Sparkles className="w-3.5 h-3.5 text-[#daa06d]" />
                  )}
                </div>
                {currentPlan === 'pro' && (
                  <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">$29/month</span>
                )}
              </div>

              {/* Plan Benefits */}
              {currentPlan === 'free' ? (
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8b9a72] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">1 agent included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Twitter className="w-4 h-4 text-[#686460] mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm text-[#686460] font-[family-name:var(--font-body)]">
                        +1 bonus agent when you post on X
                      </span>
                      <button 
                        onClick={() => window.open('https://twitter.com/intent/tweet?text=Just%20created%20my%20first%20Molty%20on%20%40moltyverse%20%F0%9F%8D%8A%20AI%20companions%20with%20personality!', '_blank')}
                        className="ml-2 text-sm text-[#daa06d] hover:text-[#e5b07d] font-[family-name:var(--font-body)] font-medium underline underline-offset-2 transition-colors"
                      >
                        Click to claim
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8b9a72] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">Up to 50 agents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8b9a72] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)]">Priority support</span>
                  </div>
                </div>
              )}
            </div>

            {/* Upgrade / Manage Billing */}
            {currentPlan === 'free' ? (
              <div className="p-4 rounded-xl bg-[#daa06d]/5 border border-[#daa06d]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#daa06d] font-[family-name:var(--font-body)]">
                    Upgrade to Pro
                  </span>
                  <span className="text-sm text-[#daa06d] font-[family-name:var(--font-body)]">$29/month</span>
                </div>
                <p className="text-xs text-[#9a958c] font-[family-name:var(--font-body)] mb-3">
                  Get up to 50 agents and unlock the full potential of Moltyverse.
                </p>
                <Button
                  className="w-full bg-[#daa06d] hover:bg-[#daa06d]/90 text-[#151816] font-medium h-9"
                  onClick={() => window.open('https://billing.stripe.com/p/login/test', '_blank')}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Upgrade Now
                </Button>
              </div>
            ) : (
              <a
                href="https://billing.stripe.com/p/login/test"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-colors group"
              >
                <span className="text-sm text-[#9a958c] font-[family-name:var(--font-body)] group-hover:text-[#f0ebe4] transition-colors">
                  Manage billing on Stripe
                </span>
                <ExternalLink className="w-4 h-4 text-[#686460] group-hover:text-[#f0ebe4] transition-colors" />
              </a>
            )}
          </div>

          <Separator className="bg-white/[0.06]" />

          {/* Danger Zone */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-red-400/80 font-[family-name:var(--font-body)] uppercase tracking-wider">
              Danger Zone
            </h3>

            {!showDeleteConfirm ? (
              <Button
                variant="ghost"
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10 border border-red-400/20 hover:border-red-400/30"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            ) : (
              <div className="p-4 rounded-xl bg-red-400/10 border border-red-400/20 space-y-3">
                <p className="text-sm text-red-300 font-[family-name:var(--font-body)]">
                  Are you sure? This action cannot be undone.
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 text-[#9a958c] hover:text-[#f0ebe4] hover:bg-white/[0.04]"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDeleteAccount}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 pt-2 flex-shrink-0">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="flex-1 text-[#9a958c] hover:text-[#f0ebe4] hover:bg-white/[0.04] border border-white/[0.08]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1 bg-[#daa06d] hover:bg-[#daa06d]/90 text-[#151816] font-medium"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
