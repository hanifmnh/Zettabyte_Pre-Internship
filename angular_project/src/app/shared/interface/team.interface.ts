export interface TeamAchievementType {
  achievement: string;
}

export interface TeamType {
  id: string;
  fullname: string;
  nickname: string;
  email: string;
  contact: string;
  imageUrl: string;
  achievements: TeamAchievementType[];
}
