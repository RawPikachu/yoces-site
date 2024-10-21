import { ParallaxProvider } from "react-scroll-parallax";

import { Landing } from "./components/Landing";
import { InfoSection } from "./components/About";

function App() {
    return (
        <ParallaxProvider>
            <div className="wrapper">
                <Landing />
                <InfoSection />
            </div>
        </ParallaxProvider>
    );
}

export default App;
