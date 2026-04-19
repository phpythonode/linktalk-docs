import {useEffect} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HeroBg from '@site/src/components/HeroBg';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
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
          AI 驱动的实时同声传译
        </div>

        <Heading as="h1" className={styles.heroTitle}>
          说中文，<span className={styles.heroTitleGradient}>全球听</span>
        </Heading>
        
        <p className={styles.heroSubtitle}>
          1.3 秒极速同传 · 双通道独立输出 · 无需显卡 · 实时克隆你的音色
          <br />让语言不再是直播和生意的门槛
        </p>
        
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1.3s</span>
            <span className={styles.statLabel}>首音延迟</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>支持语言</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>7×24</span>
            <span className={styles.statLabel}>稳定在线</span>
          </div>
        </div>
        
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs">
            快速开始 →
          </Link>
          <Link className={styles.btnSecondary} to="/docs/scenarios">
            查看应用场景
          </Link>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>向下滚动</span>
        <div className={styles.scrollLine} />
      </div>
    </header>
  );
}

function MetricsBar() {
  const platforms = [
    { name: 'OBS Studio', icon: '🎬' },
    { name: 'Zoom', icon: '💻' },
    { name: '腾讯会议', icon: '🤝' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'YouTube', icon: '▶️' },
    { name: '直播伴侣', icon: '📡' },
    { name: 'Google Meet', icon: '🟢' },
    { name: '飞书会议', icon: '🪁' },
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
        <p className={styles.metricsTagline}>无缝接入你的工作流</p>
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
      title: '素材出海',
      desc: '中文素材实时翻译，AI 自动配音输出，支持 10+ 语言。双通道同时输出，热点不再错过。',
      tags: ['成本低', '效率高', '多语言']
    },
    {
      icon: '💼',
      title: '国际会议',
      desc: '双通道实时互翻：通道 A 中→英，通道 B 英→中，同时进行互不干扰。接入 Zoom / 腾讯会议 / OBS。',
      tags: ['双向翻译', '多平台', '专业级']
    },
    {
      icon: '🌏',
      title: '跨境直播',
      desc: '你说中文，观众实时听到母语，首音延迟仅 1.3 秒。支持音色克隆，用你的声音说外语。',
      tags: ['低延迟', '音色克隆', '7×24 在线']
    },
  ];
  
  return (
    <section className={clsx(styles.section, styles.sectionDark)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>应用场景</div>
          <Heading as="h2" className={styles.sectionTitle}>
            一个工具，三大场景
          </Heading>
          <p className={styles.sectionSubtitle}>
            无论是内容创作、直播带货还是商务会议，语桥都能为你提供专业的实时翻译服务
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
    { icon: '⚡', title: '极速响应', desc: '首音延迟仅 1.3 秒，接近真人同传水平' },
    { icon: '🎙️', title: '音色克隆', desc: '实时克隆你的音色，用你的声音说外语' },
    { icon: '🔄', title: '双通道输出', desc: '同时输出两路翻译，互不干扰' },
    { icon: '💰', title: '成本极低', desc: '对接官方 API，按实际用量计费，新用户享免费额度' },
    { icon: '🖥️', title: '无需显卡', desc: '纯 CPU 运行，普通电脑即可使用' },
    { icon: '🌐', title: '多语言支持', desc: '支持中英日韩法德西等 10+ 种语言' },
    { icon: '🔌', title: '灵活接入', desc: '支持 OBS、Zoom、腾讯会议等主流平台' },
    { icon: '🛡️', title: '稳定可靠', desc: '7×24 小时稳定运行，99.9% 可用性' }
  ];
  
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>核心优势</div>
          <Heading as="h2" className={styles.sectionTitle}>
            为什么选择语桥
          </Heading>
          <p className={styles.sectionSubtitle}>
            专业级的实时翻译能力，简单易用
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
    { num: '1', title: '下载安装', desc: '一键安装，无需配置环境' },
    { num: '2', title: '配置音频', desc: '设置虚拟音频设备' },
    { num: '3', title: '选择语言', desc: '选择源语言和目标语言' },
    { num: '4', title: '开始使用', desc: '实时翻译，即刻生效' }
  ];
  
  return (
    <section className={clsx(styles.section, styles.sectionDark)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>使用流程</div>
          <Heading as="h2" className={styles.sectionTitle}>
            四步开始使用
          </Heading>
          <p className={styles.sectionSubtitle}>
            简单配置，即可享受专业级实时翻译服务
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
  const plans = [
    {
      scenario: '素材出海',
      title: '内容创作',
      price: null,
      unit: null,
      features: [
        '中文素材实时翻译',
        'AI 自动配音输出',
        '支持 10+ 语言',
        '双通道同时输出',
        '适合短视频、Vlog'
      ]
    },
    {
      scenario: '国际会议',
      title: '商务会议',
      price: null,
      unit: null,
      featured: true,
      features: [
        '双通道实时互翻',
        '中英双向翻译',
        '接入多种会议平台',
        '专业级音质',
        '适合远程会议'
      ]
    },
    {
      scenario: '跨境直播',
      title: '直播带货',
      price: null,
      unit: null,
      features: [
        '1.3 秒首音延迟',
        '实时音色克隆',
        '7×24 小时在线',
        '支持主流直播平台',
        '适合电商、教育'
      ]
    }
  ];
  
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionCenter}>
          <div className={styles.sectionLabel}>适用场景</div>
          <Heading as="h2" className={styles.sectionTitle}>
            按需选择，灵活使用
          </Heading>
          <p className={styles.sectionSubtitle}>
            对接火山引擎官方 API，按实际用量计费，新用户赠送 100 万 token
          </p>
        </div>
        
        <div className={styles.pricingGrid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={clsx(styles.pricingCard, plan.featured && styles.pricingCardFeatured)}>
              <div className={styles.pricingScenario}>{plan.scenario}</div>
              <h3 className={styles.pricingTitle}>{plan.title}</h3>
              <ul className={styles.pricingList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaGlow} />
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          准备好打破语言壁垒了吗？
        </Heading>
        <p className={styles.ctaSubtitle}>
          立即开始使用语桥，让你的内容触达全球观众
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.btnPrimary} to="/docs">
            立即开始
          </Link>
          <Link className={styles.btnSecondary} to="/docs/faq">
            常见问题
          </Link>
        </div>
      </div>
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
      title={`${siteConfig.title} - 说中文，全球听`}
      description="语桥同声传译 - 1.3秒极速同传，双通道独立输出，实时克隆音色，让语言不再是直播和生意的门槛">
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
