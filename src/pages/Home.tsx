import Banner from "../components/Banner.tsx";
import Catagories from "../components/Catagories.tsx";
import WhyUs from "../components/WhyUs.tsx";
import FeaturedProduct from "../components/FeaturedProduct.tsx";

function Home() {
    return (
      <div>
          <Banner/>
          <Catagories/>
          <WhyUs/>
          <FeaturedProduct/>
      </div>
    );
}

export default Home