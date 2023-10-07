import Link from 'next/link';

import { Background } from '../../background/Background';
import { Section } from '../../../app/layout/Section';
import { NavbarTwoColumns } from './NavbarTwoColumns';
import { DigitalPlayLogo } from './DIJogo';
const Hero = () => (
  <Background color="bg-black">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<DigitalPlayLogo xl />}>
        <li className='
        hover:text-blue-900
        z-index: 2;
        position: relative;
        '>
          <Link href="https://github.com/Digital-Foundry">GitHub</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Ghero };
