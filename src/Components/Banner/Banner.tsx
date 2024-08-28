import "./Banner.css";

type Banner = {
  count: number;
}
const Banner = ({ count }: Banner) => {
  


  

  return (
    <div className="top-banner-container">
      <h2>
        Get things Done !
      </h2>

      <h3 className="mt-4">Todo Count :{count}</h3>
    </div>
  );
};

export default Banner;
