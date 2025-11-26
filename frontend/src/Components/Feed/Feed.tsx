import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
  PlayIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

interface FeedPost {
  id: number;
  user: string;
  avatar: string;
  time: string;
  songTitle: string;
  artist: string;
  album: string;
  description: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  coverArt: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<FeedPost[]>([
    {
      id: 1,
      user: "Music Lover",
      avatar: "🎵",
      time: "2 hours ago",
      songTitle: "Midnight Dreams",
      artist: "Harmony Collective",
      album: "Cloud Symphony",
      description:
        "This track hits different in the evening. The atmospheric soundscape is perfect for late-night listening! ✨",
      likes: 124,
      comments: 18,
      isLiked: false,
      coverArt: "🎹",
    },
    {
      id: 2,
      user: "Sound Explorer",
      avatar: "🎧",
      time: "5 hours ago",
      songTitle: "Ethereal Waves",
      artist: "Sky Sound",
      album: "Ambient Journey",
      description:
        "Just discovered this gem! The layering of instruments creates such a peaceful vibe. Highly recommend! 🌊",
      likes: 89,
      comments: 12,
      isLiked: true,
      coverArt: "🌊",
    },
    {
      id: 3,
      user: "Melody Maker",
      avatar: "🎤",
      time: "1 day ago",
      songTitle: "Blue Horizon",
      artist: "Ocean Breeze",
      album: "Coastal Vibes",
      description:
        "Can't stop playing this on repeat! The melody is so catchy and the production quality is top-notch. 🔥",
      likes: 256,
      comments: 34,
      isLiked: false,
      coverArt: "🌅",
    },
  ]);

  const toggleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Soft Blue Background with Cloud Aesthetic */}
      

      {/* Feed Container */}
      <div className="relative z-10 w-full min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Feed Header */}
          <div className="mb-8">
            <div className="backdrop-blur-xl bg-white/20 rounded-2xl border border-white/30 shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                    Music Feed
                  </h1>
                  <p className="text-blue-800/80 font-light">
                    Discover what others are listening to
                  </p>
                </div>
                <div className="p-4 bg-white/20 rounded-xl border border-white/30">
                  <MusicalNoteIcon className="w-8 h-8 text-blue-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Post Header */}
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center text-2xl border border-white/30 backdrop-blur-md">
                        {post.avatar}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900">
                          {post.user}
                        </h3>
                        <p className="text-sm text-blue-800/70 font-light">
                          {post.time}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300">
                      <EllipsisHorizontalIcon className="w-6 h-6 text-blue-800" />
                    </button>
                  </div>
                </div>

                {/* Song Info */}
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-24 h-24 bg-white/30 rounded-2xl flex items-center justify-center text-4xl border border-white/30 backdrop-blur-md shrink-0">
                      {post.coverArt}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <h2 className="text-xl font-bold text-blue-900 truncate">
                          {post.songTitle}
                        </h2>
                        <p className="text-blue-800/80 font-medium">
                          {post.artist}
                        </p>
                        <p className="text-sm text-blue-800/60 font-light">
                          {post.album}
                        </p>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-white/30 hover:bg-white/40 rounded-xl transition-all duration-300 border border-white/30">
                        <PlayIcon className="w-5 h-5 text-blue-700" />
                        <span className="text-sm font-medium text-blue-900">
                          Play Now
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-blue-800/80 font-light leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="flex items-center space-x-2 hover:bg-white/20 px-3 py-2 rounded-xl transition-all duration-300"
                      >
                        {post.isLiked ? (
                          <HeartIconSolid className="w-6 h-6 text-red-500" />
                        ) : (
                          <HeartIcon className="w-6 h-6 text-blue-800" />
                        )}
                        <span className="text-sm font-medium text-blue-900">
                          {post.likes}
                        </span>
                      </button>

                      <button className="flex items-center space-x-2 hover:bg-white/20 px-3 py-2 rounded-xl transition-all duration-300">
                        <ChatBubbleLeftIcon className="w-6 h-6 text-blue-800" />
                        <span className="text-sm font-medium text-blue-900">
                          {post.comments}
                        </span>
                      </button>

                      <button className="flex items-center space-x-2 hover:bg-white/20 px-3 py-2 rounded-xl transition-all duration-300">
                        <ShareIcon className="w-6 h-6 text-blue-800" />
                        <span className="text-sm font-medium text-blue-900">
                          Share
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 flex justify-center">
            <button className="backdrop-blur-xl bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl px-8 py-3 text-blue-900 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
