import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HeroBg from '@site/src/components/HeroBg';
import ContactModal from '@site/src/components/ContactModal';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBg}>
        <div className={clsx(styles.orb, styles.orb1)} />
        <div className={clsx(styles.orb, styles.orb2)} />
        <div className={clsx(styles.orb, styles.orb3)} />
        <div className={styles.grid} />
        <HeroBg />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <Translate id="homepage.hero.badge">AI 驱动的实时同声传译</Translate>
        </div>

        <Heading as="h1" className={styles.heroTitle}>
          <Translate id="homepage.hero.title.prefix">说中文，</Translate>
          <span className={styles.heroTitleGradient}>
            <Translate id="homepage.hero.title.highlight">全球听</Translate>
          </span>
        </Heading>

        <p className={styles.heroSubtitle}>
          <Translate id="homepage.hero.subtitle">
            1.3 秒极速同传 · 双通道独立输出 · 无需显卡 · 实时克隆你的音色
          </Translate>
          <br />
          <Translate id="homepage.hero.subtitle2">让语言不再是直播和生意的门槛</Translate>
        </p>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1.3s</span>
            <span className={styles.statLabel}>
              <Translate id="homepage.stat.latency">首音延迟</Translate>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>
              <Translate id="homepage.stat.languages">支持语言</Translate>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>7×24</span>
            <span className={styles.statLabel}>
              <Translate id="homepage.stat.uptime">稳定在线</Translate>
            </span>
          </div>
        </div>

        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs">
            <Translate id="homepage.hero.cta.start">快速开始 →</Translate>
          </Link>
          <Link className={styles.btnSecondary} to="/docs/scenarios">
            <Translate id="homepage.hero.cta.scenarios">查看应用场景</Translate>
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span><Translate id="homepage.scroll">向下滚动</Translate></span>
        <div className={styles.scrollLine} />
      </div>
    </header>
  );
}

function MetricsBar() {
  const platforms = [
    { name: 'OBS Studio', icon: '🎬' },
    { name: 'Zoom', icon: '💻' },
    { name: translate({id: 'platform.tencentMeeting', message: '腾讯会议'}), icon: '🤝' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'YouTube', icon: '▶️' },
    { name: translate({id: 'platform.streamingCompanion', message: '直播伴侣'}), icon: '📡' },
    { name: 'Google Meet', icon: '🟢' },
    { name: translate({id: 'platform.feishu', message: '飞书会议'}), icon: '🪁' },
    { name: 'Microsoft Teams', icon: '🔷' },
    { name: 'Webex', icon: '🌐' },
    { name: 'DingTalk', icon: '📌' },
    { name: 'Discord', icon: '🎮' },
    { name: 'Twitch', icon: '💜' },
    { name: 'Bilibili', icon: '📺' },
    { name: 'Skype', icon: '☁️' },
  ];
  const items = [...platforms, ...platforms];

  return (
    <section className={styles.metricsBar}>
      <div className={styles.metricsBarInner}>
        <p className={styles.metricsTagline}>
          <Translate id="homepage.metrics.tagline">无缝接入你的工作流</Translate>
        </p>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {items.map((p, i) => (
              <span key={i} className={styles.platformItem} style={{'--shimmer-delay': `${(i % 15) * 0.4}s`} as React.CSSProperties}>
                <span className={styles.platformIcon}>{p.icon}</span>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  const scenarios = [
    {
      icon: '🎬',
      title: translate({id: 'homepage.scenario.content.title', message: '素材出海'}),
      desc: translate({id: 'homepage.scenario.content.desc', message: '中文素材实时翻译，AI 自动配音输出，支持 10+ 语言。双通道同时输出，热点不再错过。'}),
      tags: [
        translate({id: 'homepage.scenario.content.tag1', message: '成本低'}),
        translate({id: 'homepage.scenario.content.tag2', message: '效率高'}),
        translate({id: 'homepage.scenario.content.tag3', message: '多语言'}),
      ],
    },
    {
      icon: '💼',
      title: translate({id: 'homepage.scenario.meeting.title', message: '国际会议'}),
      desc: translate({id: 'homepage.scenario.meeting.desc', message: '双通道实时互翻：通道 A 中→英，通道 B 英→中，同时进行互不干扰。接入 Zoom / 腾讯会议 / OBS。'}),
      tags: [
        translate({id: 'homepage.scenario.meeting.tag1', message: '双向翻译'}),
        translate({id: 'homepage.scenario.meeting.tag2', message: '多平台'}),
        translate({id: 'homepage.scenario.meeting.tag3', message: '专业级'}),
      ],
    },
    {
      icon: '🌏',
      title: translate({id: 'homepage.scenario.live.title', message: '跨境直播'}),
      desc: translate({id: 'homepage.scenario.live.desc', message: '你说中文，观众实时听到母语，首音延迟仅 1.3 秒。支持音色克隆，用你的声音说外语。'}),
      tags: [
        translate({id: 'homepage.scenario.live.tag1', message: '低延迟'}),
        translate({id: 'homepage.scenario.live.tag2', message: '音色克隆'}),
        translate({id: 'homepage.scenario.live.tag3', message: '7×24 在线'}),
      ],
    },
  ];

  return (
    <section className={clsx(styles.section, styles.sectionDark)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>
            <Translate id="homepage.scenarios.label">应用场景</Translate>
          </div>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.scenarios.title">一个工具，三大场景</Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="homepage.scenarios.subtitle">
              无论是内容创作、直播带货还是商务会议，语桥都能为你提供专业的实时翻译服务
            </Translate>
          </p>
        </div>

        <div className={styles.scenariosGrid}>
          {scenarios.map((item, idx) => (
            <div key={idx} className={styles.scenarioCard}>
              <span className={styles.scenarioIcon}>{item.icon}</span>
              <h3 className={styles.scenarioTitle}>{item.title}</h3>
              <p className={styles.scenarioDesc}>{item.desc}</p>
              <div>
                {item.tags.map((tag, i) => (
                  <span key={i} className={styles.scenarioTag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: '⚡',
      title: translate({id: 'homepage.feature.speed.title', message: '极速响应'}),
      desc: translate({id: 'homepage.feature.speed.desc', message: '首音延迟仅 1.3 秒，接近真人同传水平'}),
    },
    {
      icon: '🎙️',
      title: translate({id: 'homepage.feature.voice.title', message: '音色克隆'}),
      desc: translate({id: 'homepage.feature.voice.desc', message: '实时克隆你的音色，用你的声音说外语'}),
    },
    {
      icon: '🔄',
      title: translate({id: 'homepage.feature.dual.title', message: '双通道输出'}),
      desc: translate({id: 'homepage.feature.dual.desc', message: '同时输出两路翻译，互不干扰'}),
    },
    {
      icon: '💰',
      title: translate({id: 'homepage.feature.cost.title', message: '成本极低'}),
      desc: translate({id: 'homepage.feature.cost.desc', message: '对接官方 API，按实际用量计费，新用户享免费额度'}),
    },
    {
      icon: '🖥️',
      title: translate({id: 'homepage.feature.nogpu.title', message: '无需显卡'}),
      desc: translate({id: 'homepage.feature.nogpu.desc', message: '纯 CPU 运行，普通电脑即可使用'}),
    },
    {
      icon: '🌐',
      title: translate({id: 'homepage.feature.multilang.title', message: '多语言支持'}),
      desc: translate({id: 'homepage.feature.multilang.desc', message: '支持中英日韩法德西等 10+ 种语言'}),
    },
    {
      icon: '🔌',
      title: translate({id: 'homepage.feature.integrate.title', message: '灵活接入'}),
      desc: translate({id: 'homepage.feature.integrate.desc', message: '支持 OBS、Zoom、腾讯会议等主流平台'}),
    },
    {
      icon: '🛡️',
      title: translate({id: 'homepage.feature.stable.title', message: '稳定可靠'}),
      desc: translate({id: 'homepage.feature.stable.desc', message: '7×24 小时稳定运行，99.9% 可用性'}),
    },
  ];

  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>
            <Translate id="homepage.features.label">核心优势</Translate>
          </div>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.features.title">为什么选择语桥</Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="homepage.features.subtitle">专业级的实时翻译能力，简单易用</Translate>
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIconWrap}>{item.icon}</div>
              <div>
                <h3 className={styles.featureCardTitle}>{item.title}</h3>
                <p className={styles.featureCardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: translate({id: 'homepage.step1.title', message: '下载安装'}),
      desc: translate({id: 'homepage.step1.desc', message: '一键安装，无需配置环境'}),
    },
    {
      num: '2',
      title: translate({id: 'homepage.step2.title', message: '配置音频'}),
      desc: translate({id: 'homepage.step2.desc', message: '设置虚拟音频设备'}),
    },
    {
      num: '3',
      title: translate({id: 'homepage.step3.title', message: '选择语言'}),
      desc: translate({id: 'homepage.step3.desc', message: '选择源语言和目标语言'}),
    },
    {
      num: '4',
      title: translate({id: 'homepage.step4.title', message: '开始使用'}),
      desc: translate({id: 'homepage.step4.desc', message: '实时翻译，即刻生效'}),
    },
  ];

  return (
    <section className={clsx(styles.section, styles.sectionDark)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>
            <Translate id="homepage.howItWorks.label">使用流程</Translate>
          </div>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.howItWorks.title">四步开始使用</Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="homepage.howItWorks.subtitle">简单配置，即可享受专业级实时翻译服务</Translate>
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((item, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepNumber}>{item.num}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [contactOpen, setContactOpen] = useState(false);

  const plans = [
    {
      label: translate({id: 'homepage.pricing.monthly.label', message: '月卡'}),
      price: '88',
      unit: translate({id: 'homepage.pricing.monthly.unit', message: '/ 月'}),
      period: translate({id: 'homepage.pricing.monthly.period', message: '按月订阅'}),
      save: null,
    },
    {
      label: translate({id: 'homepage.pricing.quarterly.label', message: '季卡'}),
      price: '228',
      unit: translate({id: 'homepage.pricing.quarterly.unit', message: '/ 季'}),
      period: translate({id: 'homepage.pricing.quarterly.period', message: '每月仅 ¥76'}),
      save: translate({id: 'homepage.pricing.quarterly.save', message: '省 ¥36'}),
    },
    {
      label: translate({id: 'homepage.pricing.yearly.label', message: '年卡'}),
      price: '688',
      unit: translate({id: 'homepage.pricing.yearly.unit', message: '/ 年'}),
      period: translate({id: 'homepage.pricing.yearly.period', message: '每月仅 ¥57'}),
      save: translate({id: 'homepage.pricing.yearly.save', message: '省 ¥368'}),
      featured: true,
    },
  ];

  const features = [
    translate({id: 'homepage.pricing.feature1', message: '全部核心功能'}),
    translate({id: 'homepage.pricing.feature2', message: '双通道实时翻译'}),
    translate({id: 'homepage.pricing.feature3', message: '10+ 语言支持'}),
    translate({id: 'homepage.pricing.feature4', message: '音色克隆'}),
    translate({id: 'homepage.pricing.feature5', message: '7×24 在线服务'}),
  ];

  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>
            <Translate id="homepage.pricing.label">价格</Translate>
          </div>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.pricing.title">简单透明的定价</Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="homepage.pricing.subtitle">买断时长，不限用量，越长越划算</Translate>
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={clsx(styles.pricingCard, plan.featured && styles.pricingCardFeatured)}>
              {plan.save && <div className={styles.pricingBadge}>{plan.save}</div>}
              <div className={styles.pricingScenario}>{plan.label}</div>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingCurrency}>¥</span>
                <span className={styles.pricingAmount}>{plan.price}</span>
                <span className={styles.pricingUnit}>{plan.unit}</span>
              </div>
              <div className={styles.pricingPeriod}>{plan.period}</div>
              <ul className={styles.pricingList}>
                {features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className={clsx(styles.pricingBtn, plan.featured && styles.pricingBtnFeatured)}
                onClick={() => setContactOpen(true)}>
                <Translate id="homepage.pricing.buyNow">立即购买</Translate>
              </button>
            </div>
          ))}
        </div>
      </div>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}

function CTA() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaGlow} />
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          <Translate id="homepage.cta.title">准备好打破语言壁垒了吗？</Translate>
        </Heading>
        <p className={styles.ctaSubtitle}>
          <Translate id="homepage.cta.subtitle">立即开始使用语桥，让你的内容触达全球观众</Translate>
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.btnPrimary} to="/docs">
            <Translate id="homepage.cta.start">立即开始</Translate>
          </Link>
          <button className={styles.btnContact} onClick={() => setContactOpen(true)}>
            💬 <Translate id="homepage.cta.contact">联系购买</Translate>
          </button>
          <Link className={styles.btnSecondary} to="/docs/faq">
            <Translate id="homepage.cta.faq">常见问题</Translate>
          </Link>
        </div>
      </div>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-homepage', 'true');
    return () => {
      document.documentElement.removeAttribute('data-homepage');
    };
  }, []);

  return (
    <Layout
      title={translate({id: 'homepage.title', message: '说中文，全球听'})}
      description={translate({
        id: 'homepage.description',
        message: '语桥同声传译 - 1.3秒极速同传，双通道独立输出，实时克隆音色，让语言不再是直播和生意的门槛',
      })}>
      <HomepageHeader />
      <MetricsBar />
      <Scenarios />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
    </Layout>
  );
}
