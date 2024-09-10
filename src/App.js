import './App.css';
import CourseList from './CourseList/CourseList.tsx';

const list = [
  {
    id: 1,
    title: 'Hello',
    description: 'World World World World World World World World World',
    counter: 5,
    is_active: true
  },
  {
    id: 2,
    title: 'Hello',
    description: 'World World World World World World World World World',
    counter: 5,
    is_active: true
  },
  {
    id: 3,
    title: 'Hello',
    description: 'World World World World World World World World World',
    counter: 5,
    is_active: true
  },
  {
    id: 4,
    title: 'Hello',
    description: 'World World World World World World World World World',
    counter: 5,
    is_active: false
  },
  {
    id: 5,
    title: 'Hello',
    description: 'World World World World World World World World World',
    counter: 5,
    is_active: true
  },
  {
    id: 6,
    title: 'Hello',
    description: 'World World World World World World World World World',
    counter: 5,
    is_active: false
  },
]

function App() {
  return (
    <div>
      <header>
        Список курсов
      </header>
      <main>
        <CourseList list={list} />
      </main>
    </div>
  );
}

export default App;
