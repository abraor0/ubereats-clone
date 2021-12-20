import Wrapper from '../UI/Wrapper';
import Logo from '../UI/Logo';
import Button from '../UI/Button';
import CartButton from './CartButton';
import SearchBar from './SearchBar';

interface HeaderProps {
  openAside: () => void;
}

const Header: React.FC<HeaderProps> = ({ openAside }) => (
  <header>
    <Wrapper className="flex justify-between items-center py-4 gap-10">
      <button className="text-2xl" onClick={openAside}>
        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"><path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path></svg>
      </button>
      <Logo />
      <SearchBar />
      <CartButton />
      <Button href="/login" secondary>
        Sign in
      </Button>
    </Wrapper>
  </header>
);

export default Header;