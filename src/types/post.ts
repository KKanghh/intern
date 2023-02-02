export interface post {
  id: number;
  board: { id: string; description: string };
  categoryId: string;
  title: string;
  subtitle: string | null;
  thumbnail: { id: number; uri: string | null };
  deviceType: "ALL" | "IOS" | "ANDROID";
  createdAt: Date;
  publishDate: Date;
  lastUpdatedAt: Date | null;
  deletedAt: Date | null;
  status: string;
}
