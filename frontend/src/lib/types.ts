export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user: {
    email: string;
    name: string;
    role: string;
  };
}

export interface Post {
  id: string | number;
  title: string;
  content: string;
  imageUrl: string | null;
  published: boolean;
  slug: string;
  excerpt: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    email: string;
  };
  date?: string;
  status?: string;
}

export interface DashboardStats {
  posts: number;
  views: number;
  subscribers: number;
  postsGrowth: string;
  viewsGrowth: string;
  subscribersGrowth: string;
}

export interface DashboardData {
  stats: DashboardStats;
  recentPosts: Post[];
}

export interface BlogSettings {
  blogName: string;
  blogDescription: string;
  metaTitle: string;
  metaDescription: string;
} 