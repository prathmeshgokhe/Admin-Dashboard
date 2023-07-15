import "./home.scss";
import Topbox from "../../components/topBox/topbox";
import ChartBox from "../../components/chartBox/ChartBox";

const Home = () => {
  return (
    <div className="Home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <ChartBox />
      </div>
      <div className="box box4">
        <ChartBox />
      </div>
      <div className="box box5">
        <ChartBox />
      </div>
      <div className="box box6">Box 6</div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  );
};

export default Home;
