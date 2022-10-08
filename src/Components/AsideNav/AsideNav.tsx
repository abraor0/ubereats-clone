import Button from '../UI/Button';
import ScreenOverlay from '../UI/ScreenOverlay';
import { IoLogoAndroid, IoLogoApple } from 'react-icons/io';

interface AsideNavProps {
  showAside: boolean;
  closeAside: () => void;
}

const AsideNav: React.FC<AsideNavProps> = ({ showAside, closeAside }) => (
  <aside className={`${showAside ? 'translate-x-0 opacity-1' : ' -translate-x-full opacity-0'} transition-[transform,opacity] duration-[700ms,400ms] z-20 flex flex-col max-w-[300px] fixed inset-y-0 left-0 p-6 text-sm text-neutral-900 bg-neutral-100`}>
    <Button href="/login" className="block overrides:rounded-none text-center overrides:py-4 overrides:text-lg">Fazer login</Button>
    {showAside && <ScreenOverlay stateAction={closeAside}/>}
    <ul className="pt-6">
      <li className="mb-4 last:mb-0"><a href="/bussiness">Criar conta da empresa</a></li>
      <li className="mb-4 last:mb-0"><a href="/restaurant">Adicione seu restaurante</a></li>
      <li className="mb-4 last:mb-0"><a href="/delivery">Cadastre-se para fazer entregas</a></li>
    </ul>
    <div className="mt-auto mb-8 grid grid-cols-[55px_1fr] gap-x-4 gap-y-6 justify-center">
      <img src="./assets/uber_phone.svg" alt="uber phone logo"/>
      <p className="text-base">Confira ainda mais opções no app.</p>
      <div className="col-span-2">
        <Button href="#" secondary className="inline-flex items-center gap-2 mr-3 overrides:py-2 overrides:px-3">
          <IoLogoApple className="text-lg" />iPhone
        </Button>
        <Button href="#" secondary className="inline-flex items-center gap-2 mr-3 overrides:py-2 overrides:px-3">
          <IoLogoAndroid className="text-lg" />Android
        </Button>
      </div>
    </div>
  </aside>
);

export default AsideNav;