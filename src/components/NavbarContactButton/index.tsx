import {useState} from 'react';
import type {ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import ContactModal from '@site/src/components/ContactModal';
import styles from './styles.module.css';

export default function NavbarContactButton(): ReactNode {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.btn} onClick={() => setOpen(true)}>
        <Translate id="navbar.contact.button">联系购买</Translate>
      </button>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
