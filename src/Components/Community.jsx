"use client"

import { useState } from "react"

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [newPost, setNewPost] = useState({
    type: "diet-chart",
    title: "",
    content: "",
    image: null,
  })

  // Mock data for community posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: "diet-chart",
      title: "My Vata Balancing Diet Plan",
      author: "Dr. Priya Sharma",
      authorAvatar: "/priya.jpg",
      image: "/diet.jpg",
      likes: 24,
      comments: 8,
      timeAgo: "2h",
      content: "Sharing my personalized Vata dosha diet plan that has helped me maintain balance...",
      tags: ["vata", "ayurveda", "diet-plan"],
    },
    {
      id: 2,
      type: "blog",
      title: "Benefits of Triphala in Daily Routine",
      author: "Ayush Patel",
      authorAvatar: "/patel.jpg",
      image: "/triphala.jpg",
      likes: 45,
      comments: 12,
      timeAgo: "4h",
      content: "Triphala has been a game-changer in my digestive health journey...",
      tags: ["triphala", "herbs", "digestion"],
    },
    {
      id: 3,
      type: "diet-chart",
      title: "Pitta Cooling Summer Menu",
      author: "Chef Meera",
      authorAvatar: "/meera.jpg",
      image: "/fruits.jpg",
      likes: 67,
      comments: 15,
      timeAgo: "6h",
      content: "Perfect cooling foods for Pitta constitution during hot summer months...",
      tags: ["pitta", "summer", "cooling-foods"],
    },
    {
      id: 4,
      type: "blog",
      title: "Morning Rituals for Better Agni",
      author: "Ravi Kumar",
      authorAvatar: "/Ravi.jpg",
      image: "/yoga.jpg",
      likes: 32,
      comments: 9,
      timeAgo: "8h",
      content: "Simple morning practices to strengthen your digestive fire...",
      tags: ["agni", "morning-routine", "digestion"],
    },
    {
      id: 5,
      type: "diet-chart",
      title: "Kapha Energizing Breakfast Ideas",
      author: "Nutritionist Sita",
      authorAvatar: "/sita.jpg",
      image: "/breakfast.jpg",
      likes: 28,
      comments: 6,
      timeAgo: "10h",
      content: "Light yet nourishing breakfast options for Kapha types...",
      tags: ["kapha", "breakfast", "energy"],
    },
    {
      id: 6,
      type: "blog",
      title: "Seasonal Eating According to Ayurveda",
      author: "Dr. Anand Joshi",
      authorAvatar: "/aanand.jpg",
      image: "/season.jpg",
      likes: 89,
      comments: 23,
      timeAgo: "12h",
      content: "Understanding how to eat according to seasons for optimal health...",
      tags: ["seasonal-eating", "ayurveda", "health"],
    },
  ])

  const filteredPosts = posts.filter((post) => {
    const matchesFilter = activeFilter === "all" || post.type === activeFilter
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      const post = {
        id: posts.length + 1,
        ...newPost,
        author: "You",
        authorAvatar: "/abstract-geometric-shapes.png",
        image: newPost.image || "/diet-post.jpg",
        likes: 0,
        comments: 0,
        timeAgo: "now",
        tags: [],
      }
      setPosts([post, ...posts])
      setNewPost({ type: "diet-chart", title: "", content: "", image: null })
      setShowCreatePost(false)
    }
  }

  const handleLike = (postId) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">AyurCommunity</h1>
            <button
              onClick={() => setShowCreatePost(true)}
              className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition-all duration-200"
            >
              Create Post
            </button>
          </div>

          {/* Search and Filters */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search posts, tags, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-full px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div className="flex gap-2">
              {["all", "diet-chart", "blog"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter ? "bg-cyan-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter === "all" ? "All Posts" : filter === "diet-chart" ? "Diet Charts" : "Blogs"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md border border-gray-200 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Create New Post</h2>
            <div className="space-y-4">
              <select
                value={newPost.type}
                onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="diet-chart">Diet Chart</option>
                <option value="blog">Blog Post</option>
              </select>
              <input
                type="text"
                placeholder="Post title..."
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                placeholder="Share your experience, tips, or insights..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                rows={4}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCreatePost(false)}
                  className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreatePost}
                  className="flex-1 bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
            >
              {/* Post Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.type === "diet-chart"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-blue-100 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {post.type === "diet-chart" ? "Diet Chart" : "Blog"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Post Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-cyan-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.content}</p>

                {/* Author Info */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.authorAvatar || "/placeholder.svg"}
                      alt={post.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-gray-700">{post.author}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{post.timeAgo}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Interaction Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleLike(post.id)
                    }}
                    className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">No posts found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => setShowCreatePost(true)}
              className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition-colors"
            >
              Create First Post
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
