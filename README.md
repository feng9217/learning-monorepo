# Learning Monorepo

使用 pnpm workspace 搭建的 monorepo 项目，包含多个前端学习项目。

## 项目结构

```
learning/
├── packages/
│   ├── apps/           # 应用项目
│   │   ├── bem/        # BEM 练习项目 (Vue 3 + Vite)
│   │   ├── vite-demo/  # Vite 演示项目
│   │   ├── vue3-demo/  # Vue 3 完整演示 (Pinia, Vue Router, 测试)
│   │   └── ts-learning/# TypeScript 练习项目
│   └── libs/           # 共享库（预留）
├── package.json        # 根配置
├── pnpm-workspace.yaml # pnpm workspace 配置
├── tsconfig.base.json  # TypeScript 基础配置
└── .prettierrc.json    # Prettier 配置
```

## 前置要求

- Node.js >= 18
- pnpm >= 8

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
# 启动所有项目
pnpm dev

# 启动指定项目
pnpm dev:bem
pnpm dev:vite-demo
pnpm dev:vue3-demo

# 或使用 filter
pnpm --filter bem dev
```

### 构建

```bash
# 构建所有项目
pnpm build:all

# 构建指定项目
pnpm --filter bem build
```

### 代码格式化

```bash
# 检查格式
pnpm format:check

# 格式化代码
pnpm format
```

### 其他命令

```bash
# 更新所有依赖
pnpm deps:update

# 清理构建产物和 node_modules
pnpm clean
```

## 添加新项目

### 应用项目

```bash
mkdir -p packages/apps/my-app
cd packages/apps/my-app
npm init  # 或使用 pnpm init
```

### 共享库

```bash
mkdir -p packages/libs/my-lib
cd packages/libs/my-lib
npm init
```

## Monorepo 优势

- ✅ 统一的依赖管理
- ✅ 跨项目代码共享
- ✅ 一致的代码风格
- ✅ 简化的开发流程

## License

MIT
