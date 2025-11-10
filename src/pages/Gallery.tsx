import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryPost {
  id: string;
  image: string;
  title: string;
  caption: string;
  location: string;
  date: string;
  year: number;
  category: string;
  likes: number;
  comments: number;
  shares: number;
  hashtags: string[];
}

interface GalleryData {
  posts: GalleryPost[];
}

interface ContentSection {
  title: string;
  content: string;
}

const Gallery: React.FC = () => {
  const [galleryData, setGalleryData] = useState<GalleryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<GalleryPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [openSections, setOpenSections] = useState({
    timeline: true,
    categories: false
  });

  useEffect(() => {
    fetch('/data/gallery.json')
      .then(response => response.json())
      .then(data => {
        setGalleryData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading gallery data:', error);
        setLoading(false);
      });
  }, []);

  const posts = galleryData?.posts || [];

  const filteredPosts = selectedYear
    ? posts.filter(post => post.year === selectedYear)
    : posts;

  const handleLike = (postId: string) => {
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

  const getDisplayLikes = (post: GalleryPost) => {
    const baseLikes = post.likes;
    const userLike = likedPosts.has(post.id) ? 1 : 0;
    return baseLikes + userLike;
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex">
        <aside className="w-80 border-r border-border bg-card/50 backdrop-blur-sm">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold font-mono">Filters</h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground font-mono text-sm">Loading...</p>
          </div>
        </aside>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground font-mono">Loading gallery data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-80 border-r border-border bg-card/50 backdrop-blur-sm">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold font-mono">Filters</h2>
        </div>

        {/* Sidebar Content */}
        <div className="p-6 space-y-6">
          {/* Timeline Section */}
          <div>
            <button
              onClick={() => toggleSection('timeline')}
              className="flex items-center gap-2 w-full text-left font-mono text-sm hover:text-primary transition-colors"
            >
              <ChevronRight className={`w-4 h-4 transition-transform ${openSections.timeline ? 'rotate-90' : ''}`} />
              timeline
            </button>
            {openSections.timeline && (
              <div className="ml-6 mt-2 space-y-2 text-sm font-mono">
                {Array.from(new Set(posts.map(post => post.year))).sort((a, b) => b - a).map(year => (
                  <button
                    key={year}
                    className={`flex items-center gap-2 w-full text-left hover:text-primary transition-colors ${
                      selectedYear === year ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                  >
                    <ChevronRight className="w-3 h-3" />
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Categories Section */}
          <div>
            <button
              onClick={() => toggleSection('categories')}
              className="flex items-center gap-2 w-full text-left font-mono text-sm hover:text-primary transition-colors"
            >
              <ChevronRight className={`w-4 h-4 transition-transform ${openSections.categories ? 'rotate-90' : ''}`} />
              categories
            </button>
            {openSections.categories && (
              <div className="ml-6 mt-2 space-y-2 text-sm font-mono">
                {Array.from(new Set(posts.map(post => post.category))).map(category => (
                  <button
                    key={category}
                    className="flex items-center gap-2 w-full text-left hover:text-primary transition-colors text-muted-foreground"
                    onClick={() => {
                      // Filter by category logic could be added here
                      console.log(`Filter by ${category}`);
                    }}
                  >
                    <ChevronRight className="w-3 h-3" />
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Tab Header */}
        <div className="border-b border-border px-6 py-2 flex items-center gap-2">
          <span className="text-sm font-mono text-foreground">gallery.tsx</span>
          <button className="ml-auto text-muted-foreground hover:text-foreground">×</button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 font-mono">// My Journey in Tech</h1>
            <p className="text-muted-foreground font-mono text-sm mb-6">
              // Events • Awards • Moments • Memories
            </p>
          </div>

          {/* Results Counter */}
          <div className="mb-6">
            <p className="text-xs text-muted-foreground font-mono">
              Showing {filteredPosts.length} of {posts.length} posts
            </p>
          </div>

          {/* Grid or Empty State */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground font-mono">
                No posts match the selected filters
              </p>
            </div>
          )}
        </div>
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
