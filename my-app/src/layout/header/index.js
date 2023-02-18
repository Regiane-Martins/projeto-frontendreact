import MainHeader from "./main-header";
import { HeaderContent } from "./styled";
import SubHeader from "./sub-header";


function Header(props) {
  const { setIsOnFilter, setCategory, name, setName } = props;
  return (
    <HeaderContent>
      <SubHeader />
      <MainHeader setCategory={setCategory} setIsOnFilter={setIsOnFilter} name={name} setName={setName} />
    </HeaderContent>
  );
}
export default Header;
