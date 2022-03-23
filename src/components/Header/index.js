import { Container } from './styles';

import Logo from '../../assets/images/myLogo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" width="201" />
    </Container>
  );
}
