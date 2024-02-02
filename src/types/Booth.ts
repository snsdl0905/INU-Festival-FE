import BoothDay from './BoothDay';

interface Booth {
    id: string;
    name: string;
    category: string;
    department: string;
    description: string;
    liked: number;
    img: string;
    comment: number;
    boothDays: BoothDay[];
  }

export default Booth;
