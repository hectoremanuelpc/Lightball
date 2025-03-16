import StatsCards from './StatsCards';
import RecentPosts from './RecentPosts';
import { Post } from './RecentPosts';

interface OverviewProps {
  stats?: {
    posts: number;
    views: number;
    subscribers: number;
    postsGrowth: string;
    viewsGrowth: string;
    subscribersGrowth: string;
  };
  recentPosts?: Post[];
  onNewPost?: () => void;
  onEditPost?: (id: number) => void;
}

export default function Overview({
  stats = {
    posts: 0,
    views: 0,
    subscribers: 0,
    postsGrowth: "+0",
    viewsGrowth: "+0",
    subscribersGrowth: "+0"
  },
  recentPosts = [],
  onNewPost,
  onEditPost
}: OverviewProps) {
  return (
    <div>
      <StatsCards stats={stats} />
      <RecentPosts 
        posts={recentPosts} 
        onNewPost={onNewPost} 
        onEditPost={onEditPost} 
      />
    </div>
  );
} 