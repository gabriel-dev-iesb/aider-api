import { Address, SocialNetwork } from '../../../interfaces';

interface CreateOrganizationDTO {
  name: string;
  representative: string;
  logo: string;
  email: string;
  categories: string[];
  social_network: SocialNetwork;
  address: Address;
}

export { CreateOrganizationDTO };
