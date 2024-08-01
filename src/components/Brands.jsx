
import amazon from '../assets/amazon.svg';
import dribble from '../assets/dribble.svg';
import hubspot from '../assets/hubspot.svg';
import netflix from '../assets/netflix.svg';
import notion from '../assets/notion.svg';
import zoom from '../assets/zoom.svg';


const Brands = () => {
    const brands = [
        amazon,
        dribble,
        hubspot,
        netflix,
        notion,
        zoom,
      ];
      

      const sliderContainerStyle = {
        // width: "100%",
    overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      };
      
      const sliderTrackStyle = {
        display: "flex",
        animation: "scroll 15s linear infinite",
      };
      
      const slideStyle = {
        flex: "0 0 auto",
        width: "200px", // Adjust based on your design
        padding: "1rem",
      };
      
      const imgStyle = {
        height: "3rem",
        width:"5rem",
      };
      
      const keyframesStyle = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }`;
  return (
    <div style={sliderContainerStyle}>
      <style>{keyframesStyle}</style>
      <div style={sliderTrackStyle}>
        {brands.map((brand, index) => (
          <div key={index} style={slideStyle}>
            <img src={brand} alt={`Brand ${index + 1}`} style={imgStyle} />
          </div>
        ))}
        {brands.map((brand, index) => (
          <div key={index} style={slideStyle}>
            <img src={brand} alt={`Brand ${index + 1}`} style={imgStyle} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
