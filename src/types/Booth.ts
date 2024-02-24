import BoothDay from './BoothDay';
import boothImg from './boothImg';
import BoothComment from './BoothComment';

interface Booth {
    id: string;
    name: string;
    category: string;
    department: string;
    description: string;
    liked: number;
    img: string;
    boothDays: BoothDay[];
    boothImgs: boothImg[];
    boothComments: BoothComment[];
  }

export default Booth;
