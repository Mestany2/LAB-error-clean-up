import studentsOnDom from '../pages/studentsOnDom';
import { houses, students } from '../utils/sample_data/Students';

const createId = (array) => {
  if (array.length) {
    const idArray = array.map((el) => el.id);
    return Math.max(...idArray) + 1;
  }
  return 0;
};

const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];
  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');
    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });
    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

export default sortStudent;
