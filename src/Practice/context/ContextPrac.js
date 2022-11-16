import { ColorProvider } from './context/color';
import ColorBox from './component/ColorBox';
import SelectColors from './component/SelectColors';
const ContextPrac = () => {
  return (
    <ColorProvider>
      <div className="main">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default ContextPrac;
