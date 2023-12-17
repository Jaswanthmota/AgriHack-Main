
import list from "../components/Data";
import Cards from "../components/Card";
import "../Styles/Amazon.css";
const Amazon = ({ handleClick }) => {
  return (<section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;