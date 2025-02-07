# ollama

**Ollama** 是一个开源的大型语言模型服务，提供了类似 OpenAI 的 API 接口和聊天界面，可以非常方便地部署最新版本的 GPT 模型并通过接口使用。支持热加载模型文件，无需重新启动即可切换不同的模型。

Ollama 下载：https://ollama.com/download

Ollama 官方主页：[https://ollama.com](https://ollama.com/)

Ollama 官方 GitHub 源代码仓库：[https://github.com/ollama/ollama/](https://github.com/ollama/ollama)

docker安装官方教程：https://hub.docker.com/r/ollama/ollama

#### CPU 运行

```bash
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

#### Nvidia GPU 运行

1. 安装 [Nvidia container toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation).
2. Run Ollama inside a Docker container

```bash
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

### 拉取模型 

```bash
docker exec -it ollama ollama run deepseek-r1:1.5b
```



模型库：

https://ollama.com/library