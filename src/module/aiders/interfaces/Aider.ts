import { SocialNetwork } from '../../../interfaces/SocialNetwork';

interface Aider {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  bio: string;
  interests: string[];
  // favorites: string[];
  social_network: SocialNetwork;
}

export { Aider };
