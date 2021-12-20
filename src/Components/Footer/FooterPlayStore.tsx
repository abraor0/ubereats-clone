const FooterPlayStore: React.FC<propsWithClass> = ({ className }) => (
  <a className={className} href="https://play.google.com/store/apps/details?id=com.ubercab.eats" target="_blank" rel="noreferrer">
    <img className="h-10" src="assets/play_store.png" alt="play store" />
  </a>
);

export default FooterPlayStore;