import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';  // Import Counter component

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      {/* Use Alice's information here */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography." />
      <Counter /> {/* Include the Counter component */}
      <Footer />
    </div>
  );
}

export default App;
