import Banner from "../components/Banner.tsx";
import Catagories from "../components/Catagories.tsx";
import IntroWebsite from "../components/IntroWebsite.tsx";

function Home() {
    return (
      <div>
          <Banner/>
          <Catagories/>
          <IntroWebsite/>
      </div>
    );
}

export default Home