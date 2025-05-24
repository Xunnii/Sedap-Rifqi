import { createRoot } from 'react-dom/client';
import './tailwind.css';
import FrameworkList from './FrameworkList';
import ResponsiveWidth from './ResponsiveWidth';
import frameworkData from "./framework.json";

createRoot(document.getElementById("root"))
.render(
  <div>
    {/* <TailwindCSS/> */}
    {/* <frameworkData/> */}
    {/* <FrameworkList/> */}
    <ResponsiveWidth/>

    
  </div>
);