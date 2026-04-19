import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🎬 素材出海',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        中文素材实时翻译，AI 自动配音输出，支持 10+ 语言。
        双通道同时输出，支持 10+ 语言，热点不再错过。
      </>
    ),
  },
  {
    title: '🌏 跨境直播',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        你说中文，观众实时听到母语，首音延迟仅 <strong>1.3 秒</strong>。
        支持音色克隆，用你的声音说外语，7×24 小时稳定在线。
      </>
    ),
  },
  {
    title: '💼 国际会议',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        双通道实时互翻：通道 A 中→英，通道 B 英→中，同时进行互不干扰。
        接入 Zoom / 腾讯会议 / OBS，支持双向实时互翻。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
