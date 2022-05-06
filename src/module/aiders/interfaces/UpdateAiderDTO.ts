import { SocialNetwork } from '../../../interfaces/SocialNetwork';

interface UpdateAiderDTO {
  name?: string;
  email?: string;
  avatar_url?: string;
  bio?: string;
  interests?: string[];
  social_network?: SocialNetwork;
}

export { UpdateAiderDTO };
