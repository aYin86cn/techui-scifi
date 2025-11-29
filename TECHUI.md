# TechUI Development Journey

[English](#english) | [中文](#中文)

---

## English

### Development Background

TechUI was independently developed by **ayin**. All components before 2023 were manually coded. From 2023 to 2025, AI-assisted development was introduced for new components, significantly improving development efficiency.

-----

### Version Evolution

#### Ver 0.1 - Genesis (2019)

The project originated from a friend's commission to develop a data visualization product with a sci-fi tech aesthetic. The first version was built upon **@jiaminghi/data-view**.

#### Ver 1.0 - Deep Customization (Around 2020)

Through practical usage, valuable insights were gained, leading to deep iteration of the data-view component library. Major achievements during this phase include:

  - In-depth study of data-view's SVG calculation mechanisms
  - Independent development of multiple dynamic SVG components
  - Implementation of pure front-end licensing functionality using encrypted JavaScript

#### Ver 2.0 - Technical Breakthrough (Around 2021)

To enhance the security of the licensing system, the **Rust** language was learned and mastered, resulting in the creation of a **WebAssembly (WASM)** component for license encryption/decryption and specialized computations.

#### Ver 3.x - Challenging Exploration (Around 2022-2023)

During the iteration from 2.0, due to less formal development processes and numerous breaking changes, the version number rapidly jumped to 3.x. The market response to this version fell short of expectations. A post-mortem analysis revealed the following key issues:

1.  **Unreasonable Pricing Strategy** - Prices were too high and lacked market competitiveness
2.  **Poor User Experience** - As a first-time component library release, the syntax design and usage patterns had many inconveniences
3.  **Overly Restrictive Licensing** - Harsh and unreasonable restrictions (such as annual license renewal requirements)

-----

### Ver 3.0 - A Fresh Start (Since 2023)

#### Reconstruction Philosophy

After deep reflection, the unique advantages of dynamic SVG became clear. Leveraging accumulated technical experience, a decision was made to launch a completely reimagined version 3.0.

The new version starts from **0.0.1**, with all releases before **1.0.0** considered beta versions. From the outset, the core design principles of **"Easy to use, Lightweight, and Reasonable"** were established, drawing on the strengths of various solutions.

#### Core Updates

**Component Library Reconstruction**

1.  Developed numerous new components to form the **@techui/base** foundational component library
2.  Built the **@techui/admin** admin dashboard component library based on the workbench and newly developed base components
3.  Upgraded all techui-vue2 components to **Vue 3**, refined props configurations, and created the **@techui/scifi** sci-fi themed component library

**Core Module Optimization**

4.  Refactored the **techui-core (WASM)** module, adding lightweight licensing functionality and perfecting the heavy licensing mechanism
5.  Fully upgraded the **adaptivePanel** component to **TuiAdaptive**, adding view control modes, pass-through containers, and other features
6.  Upgraded the **panel3D** component to **Tui3DPanel**, adding thickness parameters and more configuration options
7.  Removed the monitoring and debugging tools from techui-vue2, refactoring them into the **tuiPanicAlert** component

**Infrastructure Enhancement**

8.  Redesigned the global theme system, developed a custom multilingual functionality, transformed the global vector background, and added global audio notifications
9.  Customized and repackaged commonly used third-party tools into the **@techui/libs** library to meet customization needs and avoid risks from breaking changes in third-party components
10. Consolidated self-developed utility functions to build the **@techui/utils** toolkit
11. Completely removed dependencies on data-view component library functions and methods (retained 9 classic dv-border-box components with renaming), fully adopting self-developed utility functions
12. Leveraged AI to develop multiple data display components, such as scrolling tables, scrolling progress bars, etc.

-----

### Acknowledgments

  - chroma.js
  - Floating UI

**Special Thanks**

  - @jiaminghi/data-view

-----

### Author

  - **aYin**
  - Email: [ayin86cn@gmail.com](mailto:ayin86cn@gmail.com)
  - WeChat: jay1986cn

### Homepage

[https://techui.net](https://techui.net)

---

## 中文

### 开发背景

TechUI 工程由 **ayin** 独立完成开发。2023 年之前的所有组件均采用手工编写，2023-2025 年期间，借助 AI 辅助开发新组件，显著提升了开发效率。

---

### 版本演进

#### Ver 0.1 - 初创阶段（2019年）

项目起源于好友委托，需要开发一款具有科技科幻风格的数据可视化产品。基于 **@jiaminghi/data-view** 完成了首个版本的开发。

#### Ver 1.0 - 深度定制 (2020年前后)

在实际使用中积累了大量实践经验，对 data-view 组件库进行了深度迭代。这一阶段的主要成果包括：

- 深入学习 data-view 的 SVG 计算机制
- 自主研发了多款动态 SVG 组件
- 使用加密 JS 实现了纯前端许可证功能

#### Ver 2.0 - 技术突破 (2021年前后)

为了强化许可证功能的安全性，学习并掌握了 **Rust** 语言，构建了 **WebAssembly 组件（WASM）**，用于许可证的加解密和特殊计算。

#### Ver 3.x - 曲折探索 (2022-2023年前后)

在 2.0 的迭代过程中，由于开发流程不够规范，伴随着大量破坏性更新，版本号快速跃升至 3.x。这一版本的市场推广未达预期，经过复盘总结出以下主要问题：

1. **定价策略不合理** - 价格过高且缺乏市场竞争力
2. **用户体验欠佳** - 作为首次发布的组件库，在语法设计和使用方式上存在诸多不便
3. **许可证机制过严** - 限制条件苛刻且不合理（如一年更新一次许可证）

---

### Ver 3.0 - 全新起点 (2023年至今)

#### 重构理念

经过深刻反思，认识到动态 SVG 的独特优势。基于前期积累的技术经验，决定开启真正意义上的 3.0 版本重构。

新版本从 **0.0.1** 开始编号，在发布 **1.0.0** 正式版之前均为测试版。开发之初便确立了**"易用、轻量、合理"**的核心设计原则，博采众长、取长补短。

#### 核心更新

**组件库重构**

1. 研发大量新组件，形成 **@techui/base** 基础组件库
2. 基于工作台及新开发的 base 组件，打造 **@techui/admin** 管理后台组件库
3. 将 techui-vue2 全部组件升级为 **Vue3** 版本，完善 props 配置，构建 **@techui/scifi** 科幻风格组件库

**核心模块优化**

4. 重构 **techui-core (WASM)** 模块，新增轻量级许可证功能，完善重度许可证机制
5. **adaptivePanel** 组件全面升级为 **TuiAdaptive**，新增视图控制模式、穿透容器等特性
6. **panel3D** 组件升级为 **Tui3DPanel**，新增厚度参数及更多配置项
7. 移除 techui-vue2 中的监控调试工具，重构为 **tuiPanicAlert** 组件

**基础设施完善**

8. 重新设计全局主题系统，自研多语言功能，改造全局矢量背景，新增全局音效提醒
9. 对常用第三方工具进行定制化改造，打包为 **@techui/libs** 库，既满足定制需求，也规避了第三方组件破坏性更新的风险
10. 整合自研工具函数，构建 **@techui/utils** 工具库
11. 完全移除 data-view 组件库的依赖函数和方法（保留 9 款经典 dv-border-box 组件并重命名），全面采用自研工具函数
12. 借助 AI 开发多款数据展示组件，如滚动表格、滚动进度条等

---

### 致谢

- chroma.js
- Floating UI

**特别鸣谢**

- @jiaminghi/data-view

---

### 作者

- **aYin**
- 邮箱: <ayin86cn@gmail.com>
- 微信: jay1986cn

### 官网

<https://techui.net>

---

## Keywords

`@techui` `techui` `TechUI` `ayin` `journey` `history` `development` `evolution` `版本历史` `开发历程`
