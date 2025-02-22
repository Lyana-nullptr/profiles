<!-- cSpell:ignore Schniz -->

# Node.js Setup

## What is Node.js?

独立于浏览器运行的 JS 运行时环境（类同与 JDK/JVM）。

## How to Use?

### 1. 环境配置（using Windows，PowerShell，FNM）

FNM 是一个跨平台的 Node.js 版本管理器。

安装 fnm，[设置 Shell 环境](https://github.com/Schniz/fnm?tab=readme-ov-file#shell-setup)。

```shell
winget install Schniz.fnm

# 跟随官方教程设置 Shell 环境
# 以 PowerShell 为例
echo 'fnm env --use-on-cd --corepack-enabled --shell powershell | Out-String | Invoke-Expression' >> $PROFILE

# 设置镜像源（系统环境变量），重启终端
# FNM_NODE_DIST_MIRROR = https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/

# 安装 node 22 并设为默认
fnm install 22

# 设置项目 node 版本，并重启你的终端
cd a-node-project
echo 'v22.14.0' > .node-version

# 使用 corepack 安装 pnpm (pnpm 需要 node 18+)
pnpm install

# ...
```

### 2. 安装事项

- pnpm 需要 node 18+

- yarn 安装依赖时会严格检查 Node.js 版本是否满足依赖包中 `package.json` 的 `engines` 字段，可以使用如下指令来禁用版本检查（可能导致程序运行出现版本兼容性问题）：

  ```shell
  yarn config set ignore-engines true
  ```

- node-sass 对 Node.js 版本有严格要求，会导致依赖安装失败/程序运行失败。node-sass ^4.14 最高仅支持到 node 14。强烈推荐将 node-sass 迁移至 sass，详见 <https://www.npmjs.com/package/node-sass?activeTab=readme#node-version-support-policy>。
