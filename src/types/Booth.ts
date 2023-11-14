import BoothDay from './BoothDay';

interface Booth {
    id: number;
    name: string;
    category: string;
    department: string;
    description: string;
    liked: number;
    boothDays: BoothDay[];
  }

export default Booth;
