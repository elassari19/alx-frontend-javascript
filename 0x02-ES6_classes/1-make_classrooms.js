// defines a function named initializeRooms
import ClassRoom from './0-classroom';
// defines a function named initializeRooms
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
