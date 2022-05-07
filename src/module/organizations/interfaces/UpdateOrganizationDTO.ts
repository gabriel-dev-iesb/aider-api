import { Address, SocialNetwork } from '../../../interfaces';

interface UpdateOrganizationDTO {
  id: string;
  name?: string;
  representative?: string;
  logo?: string;
  email?: string;
  categories?: string[];
  social_network?: SocialNetwork;
  address?: Address;
}

export { UpdateOrganizationDTO };
