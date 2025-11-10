import { useState } from "react";
import { Heart, MessageCircle, Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  image: string;
  title: string;
  location: string;
  date: string;
  caption: string;
  hashtags: string[];
  likes: number;
  comments: number;
  shares: number;
  year: number;
  category: string;
}

const Gallery = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [filter, setFilter] = useState<"all" | "2025" | "2024" | "2023">("all");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const posts: Post[] = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "🏆 1st Place - IAS TAM Technical Challenge",
      location: "Tunis, Tunisia",
      date: "October 2025",
      caption: "First place at IAS TAM Technical Challenge! Our startup Defensys won with an AI-powered security platform that provides proactive application protection. Proud of what we built in 48 hours!",
      hashtags: ["AI", "Security", "Innovation", "FirstPlace", "Hackathon"],
      likes: 127,
      comments: 23,
      shares: 12,
      year: 2025,
      category: "Awards"
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "🎖️ Best Android Project - GDG TechDays",
      location: "Sousse, Tunisia",
      date: "April 2025",
      caption: "Best Android Project at GDG TechDays! Incredible learning experience focusing on Kotlin development and modern Android architecture. Thanks to GDG Sousse for this amazing bootcamp!",
      hashtags: ["Android", "Kotlin", "GDG", "TechDays"],
      likes: 94,
      comments: 15,
      shares: 8,
      year: 2025,
      category: "Awards"
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "🥉 RedRoom Hackathon",
      location: "Tunisia",
      date: "March 2025",
      caption: "3rd place overall and 2nd in CTF at RedRoom Hackathon by Securinets! 26 hours of intensive cybersecurity challenges. Sleep is overrated when you're cracking codes! 💪",
      hashtags: ["Cybersecurity", "CTF", "Hackathon", "RedRoom"],
      likes: 156,
      comments: 31,
      shares: 19,
      year: 2025,
      category: "Hackathons"
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "🎯 Sight Day Congress",
      location: "ISITCOM, Tunisia",
      date: "2024",
      caption: "Successfully organized Sight Day Congress as part of IEEE ESSTHS! Bringing together students and industry professionals to discuss technology's impact on society.",
      hashtags: ["IEEE", "Leadership", "TechForGood", "SightDay"],
      likes: 203,
      comments: 42,
      shares: 25,
      year: 2024,
      category: "IEEE Events"
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "🤖 Robots League 2.0",
      location: "ISITCOM, Tunisia",
      date: "2024",
      caption: "Coordinating Robots League 2.0 was an incredible experience! Watching students compete with their autonomous robots and seeing their passion for embedded systems.",
      hashtags: ["Robotics", "IEEE", "Embedded", "RobotsLeague"],
      likes: 178,
      comments: 37,
      shares: 21,
      year: 2024,
      category: "IEEE Events"
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "🌟 TSYP 11 Congress",
      location: "Tunisia",
      date: "2024",
      caption: "Part of the TSYP 11 Organizing Committee! Working with talented young professionals across regions to create impactful technical programs.",
      hashtags: ["IEEE", "TSYP", "Leadership", "Networking"],
      likes: 142,
      comments: 28,
      shares: 16,
      year: 2024,
      category: "IEEE Events"
    },
    {
      id: 7,
      image: "/placeholder.svg",
      title: "💻 IEEEXtreme 18.0",
      location: "Online",
      date: "October 2024",
      caption: "24 hours of non-stop competitive programming at IEEEXtreme 18.0! Solving algorithms, debugging at 3 AM, and pushing our limits.",
      hashtags: ["Programming", "Competition", "IEEE", "IEEEXtreme"],
      likes: 189,
      comments: 34,
      shares: 18,
      year: 2024,
      category: "Competitions"
    },
    {
      id: 8,
      image: "/placeholder.svg",
      title: "📚 IEEE Technical Bootcamp",
      location: "ISITCOM, Tunisia",
      date: "2024",
      caption: "Leading technical bootcamp session on IoT and embedded systems for IEEE members. Sharing knowledge and inspiring the next generation of engineers!",
      hashtags: ["Teaching", "IoT", "IEEE", "Bootcamp"],
      likes: 165,
      comments: 29,
      shares: 14,
      year: 2024,
      category: "Bootcamps"
    }
  ];

  const filteredPosts = posts.filter(post => {
    if (filter === "all") return true;
    return post.year.toString() === filter;
  });

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const getDisplayLikes = (post: Post) => {
    const isLiked = likedPosts.has(post.id);
    return isLiked ? post.likes + 1 : post.likes;
  };

  return (
    <div className="min-h-[calc(100vh-120px)] p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-2 font-mono">// My Journey in Tech</h1>
        <p className="text-muted-foreground font-mono text-sm mb-6">
          // Events • Awards • Moments • Memories
        </p>

        {/* Filters */}
        <div className="flex gap-4">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="font-mono"
          >
            All
          </Button>
          <Button
            variant={filter === "2025" ? "default" : "outline"}
            onClick={() => setFilter("2025")}
            className="font-mono"
          >
            2025
          </Button>
          <Button
            variant={filter === "2024" ? "default" : "outline"}
            onClick={() => setFilter("2024")}
            className="font-mono"
          >
            2024
          </Button>
          <Button
            variant={filter === "2023" ? "default" : "outline"}
            onClick={() => setFilter("2023")}
            className="font-mono"
          >
            2023
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer interactive-element glow-cyan"
            onClick={() => setSelectedPost(post)}
          >
            {/* Image */}
            <div className="aspect-square bg-accent relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>

            {/* Stats */}
            <div className="border-t border-border p-3 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" strokeWidth={1.5} />
                <span>{getDisplayLikes(post)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" strokeWidth={1.5} />
                <span>{post.shares}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="font-mono text-sm font-semibold mb-1">yassine_hallous</p>
              <p className="text-xs text-muted-foreground mb-2">
                📍 {post.location} • 📅 {post.date}
              </p>
              <p className="text-sm font-semibold mb-2">{post.title}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-card border border-primary rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden grid lg:grid-cols-2 animate-scale-in glow-purple"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="bg-accent flex items-center justify-center p-8">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <p className="font-mono font-semibold">yassine_hallous</p>
                  <p className="text-xs text-muted-foreground">
                    📍 {selectedPost.location} • 📅 {selectedPost.date}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPost(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <h2 className="text-xl font-bold">{selectedPost.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedPost.caption}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="text-primary text-sm font-mono cursor-pointer hover:underline"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleLike(selectedPost.id)}
                    className="flex items-center gap-2 interactive-element"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        likedPosts.has(selectedPost.id)
                          ? "fill-red-500 text-red-500"
                          : ""
                      }`}
                      strokeWidth={1.5}
                    />
                    <span className="font-semibold">{getDisplayLikes(selectedPost)}</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
                    <span className="font-semibold">{selectedPost.comments}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-6 h-6" strokeWidth={1.5} />
                    <span className="font-semibold">{selectedPost.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
