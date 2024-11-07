
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Wilson" age={20} bio="Loves cycling, swimming, and studies German." />
      <Footer />
    </div>
  );
}

export default App;
