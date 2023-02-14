import { htmlStructure, header, startSortingBtn } from '../pages/homePage';
import { events } from '../components/sortStudents';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
