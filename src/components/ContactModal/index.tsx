import {useEffect} from 'react';
import type {ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const wechatImg = require('@site/static/img/wechat.png').default;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({isOpen, onClose}: ContactModalProps): ReactNode {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="关闭">✕</button>
        <div className={styles.header}>
          <div className={styles.icon}>💬</div>
          <h3 className={styles.title}><Translate id="contact.modal.title">联系购买</Translate></h3>
          <p className={styles.subtitle}><Translate id="contact.modal.subtitle">扫码添加微信，获取报价和购买方式</Translate></p>
        </div>
        <div className={styles.qrWrap}>
          <img src={wechatImg} alt="微信二维码" className={styles.qrCode} />
        </div>
        <p className={styles.tip}><Translate id="contact.modal.tip">微信扫一扫 · 添加好友咨询</Translate></p>
      </div>
    </div>
  );
}
