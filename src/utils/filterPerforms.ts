import Perform from '../types/Perform';

export default function filterPerforms(
  performs: Perform[],
  filterCategory: string,
) {
  return performs.filter((perform) => (
    perform.day === filterCategory
  ));
}
