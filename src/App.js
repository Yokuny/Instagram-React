import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Stories from "./Stories";
import Posts from "./Posts";
import MobileFooter from "./MobileFooter";
const App = () => (
  <>
    <NavBar />
    <main className="mainContentGrid">
      <SideBar />
      <main className="mainContent">
        <Stories />
        <Posts />
        <MobileFooter />
      </main>
    </main>
  </>
);
export default App;
