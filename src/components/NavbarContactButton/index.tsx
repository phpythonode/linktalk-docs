import {useState} from 'react';
import type {ReactNode} from 'react';
import ContactModal from '@site/src/components/ContactModal';
import styles from './styles.module.css';

export default function NavbarContactButton(): ReactNode {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.btn} onClick={() => setOpen(true)}>
        联系购买
      </button>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
