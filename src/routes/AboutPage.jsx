import { useSelector } from "react-redux";
import About from "../features/about/About";
import { isAboutLoading } from "../features/about/aboutSlice";
import Loader from "../components/Loader";

export default function AboutPage() {
  const isLoading = useSelector(isAboutLoading)

  return(
    <div>
      {isLoading ? <Loader /> : <About />}
    </div>
  )
}