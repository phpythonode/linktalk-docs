---
sidebar_position: 2
---

# 快速上手

五分钟完成安装与首次使用。

---

## 第一步：下载软件

前往百度网盘获取安装包：

- 链接：https://pan.baidu.com/s/1YqSVe5xaDVu0equaof9pCw?pwd=f438
- 提取码：`f438`

---

## 第二步：安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

1. 下载 `LinkTalk_1.0.0_x64_en-US.msi`
2. 双击运行，按提示完成安装
3. 启动语桥，开始使用

  </TabItem>
  <TabItem value="mac" label="macOS（Apple 芯片）">

1. 下载 `LinkTalk_1.0.0_aarch64.dmg`
2. 双击挂载，将 LinkTalk 拖入「应用程序」文件夹
3. 打开终端，执行以下命令解除系统限制：

```bash
xattr -cr /Applications/Linktalk.app
```

4. 执行完成后即可正常启动

:::tip
如果提示「无法打开，因为无法验证开发者」，执行上方命令后重新打开即可。
:::

  </TabItem>
</Tabs>

---

## 第三步：配置 API

语桥使用火山引擎同声传译 API 作为底层引擎。

1. 注册账号：https://console.volcengine.com/auth/login
2. 进入控制台，开通**同声传译**服务
3. 创建 API Key，复制后填入语桥设置页

:::tip 新用户免费额度
注册后火山引擎赠送 **100 万 token（约 29 小时）**，日常使用完全够用，用完再充，不用不扣费。
:::

:::caution
配置 API Key 时请**关闭代理/科学上网**，否则可能导致连接失败。
:::

---

## 第四步：开始翻译

1. 在设置中选择输入语言和输出语言
2. 配置音频输入设备（麦克风）和输出设备
3. 点击开始，对着麦克风说话，翻译实时输出

需要将翻译声音传入直播或会议软件？参考[虚拟声卡配置](./virtual-audio)。

---

## 系统要求

| 项目 | 要求 |
|------|------|
| Windows | Windows 10 / 11（64位） |
| macOS | Apple 芯片（M1 / M2 / M3 / M4） |
| 音频 | 麦克风 + 扬声器或耳机 |
| 网络 | 延迟建议 < 100ms，推荐有线或稳定 Wi-Fi |
| 显卡 | 无要求，普通集显即可 |
