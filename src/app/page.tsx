import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const brandVariations = [
  {
    id: 1,
    name: "Playful-Professional",
    description: "Whimsical but trustworthy, like Notion with personality",
    palette: "Peach / Apricot",
    colors: ["#faf8f5", "#e8a87c", "#c38d6a", "#f5e6d3"],
    fonts: "Fraunces + DM Sans",
    theme: "Light",
    emoji: "🍑",
  },
  {
    id: 2,
    name: "Absurdist Avant-Garde",
    description: "Art-forward, gallery-like, lean into surrealism",
    palette: "Eggplant / Aubergine",
    colors: ["#1a1420", "#9d7bb0", "#e8c4d4", "#2d2235"],
    fonts: "Playfair Display + Outfit",
    theme: "Dark",
    emoji: "🍆",
  },
  {
    id: 3,
    name: "Organic-Tech",
    description: "Nature meets AI, botanical, growth metaphors",
    palette: "Sage / Cucumber",
    colors: ["#f4f7f4", "#7a9e7e", "#b8d4ba", "#e8f0e8"],
    fonts: "Instrument Serif + Source Sans 3",
    theme: "Light",
    emoji: "🥒",
  },
  {
    id: 4,
    name: "Retro-Futuristic",
    description: "Vintage computing meets AI, nostalgic yet forward",
    palette: "Citrus / Orange",
    colors: ["#1c1917", "#f4a261", "#e9c46a", "#292524"],
    fonts: "Space Grotesk + IBM Plex",
    theme: "Dark",
    emoji: "🍊",
  },
  {
    id: 5,
    name: "Neo-Brutalist",
    description: "Bold, raw, unapologetic with hard shadows",
    palette: "Watermelon",
    colors: ["#f5f0eb", "#e07a5f", "#81b29a", "#f2cc8f"],
    fonts: "Archivo Black + Work Sans",
    theme: "Mixed",
    emoji: "🍉",
  },
  {
    id: 6,
    name: "Editorial Warmth",
    description: "Notion with personality meets dark citrus elegance",
    palette: "Citrus / Earth",
    colors: ["#1a1816", "#d4a574", "#8a9a7a", "#c4846a"],
    fonts: "Fraunces + DM Sans",
    theme: "Dark",
    emoji: "🍊",
  },
  {
    id: 7,
    name: "Liquid Grove",
    description: "Frosted glass meets earthy warmth with organic typography",
    palette: "Green-Black / Amber",
    colors: ["#151816", "#daa06d", "#8b9a72", "#c9847a"],
    fonts: "Outfit + Plus Jakarta Sans",
    theme: "Dark",
    emoji: "🍋",
    featured: true,
  },
  {
    id: 8,
    name: "Ember Dusk",
    description: "Layered depth with copper accents and stippled textures",
    palette: "Forest-Black / Copper",
    colors: ["#131715", "#d49a6a", "#c4a870", "#7a8a6a"],
    fonts: "Sora + Nunito Sans",
    theme: "Dark",
    emoji: "🍊",
    featured: true,
  },
  {
    id: 9,
    name: "Citrus Mist",
    description: "Aurora gradients and paper textures with soft apricot warmth",
    palette: "Olive-Black / Apricot",
    colors: ["#141715", "#e0a878", "#8a9878", "#c09088"],
    fonts: "Urbanist + Karla",
    theme: "Dark",
    emoji: "🍑",
    featured: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
            <span className="text-2xl">🍉</span>
            <span className="text-sm text-zinc-400">Moltyverse Brand System</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Nine <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 bg-clip-text text-transparent">Unique</span> Visions
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Explore nine distinct brand directions for the Moltyverse—each with its own personality, color palette, and design language.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid gap-6">
          {brandVariations.map((variation) => (
            <Link
              key={variation.id}
              href={`/${variation.id}`}
              className={`group relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                variation.featured 
                  ? 'bg-gradient-to-r from-amber-500/10 via-white/[0.05] to-amber-500/5 border border-amber-500/30 hover:border-amber-500/50' 
                  : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20'
              }`}
            >
              {variation.featured && (
                <div className="absolute -top-3 left-6 flex items-center gap-1.5 bg-amber-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  <Star className="w-3 h-3" />
                  New
                </div>
              )}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Emoji & Number */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform ${
                    variation.featured 
                      ? 'bg-amber-500/20 border border-amber-500/30' 
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    {variation.emoji}
                  </div>
                  <div className="md:hidden">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Variation {variation.id}</span>
                    <h2 className="text-xl font-semibold">{variation.name}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="hidden md:block">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Variation {variation.id}</span>
                    <h2 className="text-2xl font-semibold mt-1">{variation.name}</h2>
                  </div>
                  <p className="text-zinc-400 mt-2">{variation.description}</p>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">Palette:</span>
                      <span className="text-zinc-300">{variation.palette}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">Theme:</span>
                      <span className="text-zinc-300">{variation.theme}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">Fonts:</span>
                      <span className="text-zinc-300">{variation.fonts}</span>
                    </div>
                  </div>
                </div>

                {/* Color swatches */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    {variation.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-lg border border-white/10"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm">
            Each variation includes a complete brand guidelines skill at <code className="text-zinc-400 bg-white/5 px-2 py-0.5 rounded">~/.cursor/skills/moltyverse-v{"{N}"}/</code>
          </p>
        </div>
      </div>
    </div>
  );
}
