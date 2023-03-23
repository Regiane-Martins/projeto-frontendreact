import MainHeader from "./main-header";
import { HeaderContent } from "./styled";
import SubHeader from "./sub-header";

function Header(props) {
  const { setIsOnFilter, category, setCategory, name, setName, changeScreen, totalItemCart } =
    props;

  return (
    <HeaderContent>
      <SubHeader />
      <MainHeader
        category={category}
        setCategory={setCategory}
        setIsOnFilter={setIsOnFilter}
        name={name}
        setName={setName}
        changeScreen={changeScreen}
        totalItemCart={totalItemCart}
      />
    </HeaderContent>
  );
}
export default Header;
