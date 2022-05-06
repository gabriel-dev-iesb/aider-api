import { Address, SocialNetwork } from '../../../interfaces';
import { Aider } from '../../aiders/interfaces';

interface Organization {
  id: string;
  name: string;
  representative: string;
  logo: string;
  email: string;
  categories: string[];
  social_network: SocialNetwork;
  address: Address;
  // TODO: / FIXME: Criar model e adicionar tipagem de causas
  causes: string[];
  aiders: Aider[];
}

export { Organization };
