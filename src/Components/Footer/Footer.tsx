import Wrapper from '../UI/Wrapper';
import FooterAppleStore from './FooterAppleStore';
import FooterPlayStore from './FooterPlayStore';
import FooterUberLogo from './FooterUberLogo';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-20">
    <Wrapper className="flex justify-between">
      <div className="grid grid-cols-[max-content_max-content] gap-x-4 flex-grow">
        <FooterUberLogo className="col-span-2" />
        <FooterAppleStore className="self-end"/>
        <FooterPlayStore className="self-end" />
      </div>
      <div className="flex flex-grow">
        <ul className="flex-grow">
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Get Help</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Buy gift cards</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Add your restaurant</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Sign up to deliver</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Create a business account</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Save on your first order</a>
          </li>
        </ul>
        <ul  className="flex-grow">
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Restaurants near me</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">View all cities</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">View all countries</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">Read our blog</a>
          </li>
          <li className="mb-4 last:mb-0">
            <a className="hover:underline" href="/">About Uber Eats</a>
          </li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper>
      <hr className="my-10"></hr>
      <div className="flex justify-between">
        <div className="text-xl flex gap-x-5">
          <a href="https://facebook.com">
            <AiFillFacebook />
          </a>
          <a href="https://twitter.com">
            <AiOutlineTwitter />
          </a>
          <a href="https://instagram.com">
            <AiOutlineInstagram />
          </a>
        </div>
        <div className="text-sm flex flex-col gap-4">
          <div className="flex gap-8 justify-end">
            <a className="hover:underline" href="/">Privacy Policy</a>
            <a className="hover:underline" href="/">Terms</a>
            <a className="hover:underline" href="/">Pricing</a>
            <a className="hover:underline mr-1" href="/">Do not sell my info(California)</a>
          </div>
          <div className="flex gap-7">
            <p className="">This site is protected by reCAPTCHA and the Google <a className="hover:underline" href="/">Privacy Policy</a> and <a className="hover:underline" href="/">Terms of Service</a> apply.</p>
            <p>© 2021 Uber Technologies Inc.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  </footer>
);

export default Footer;