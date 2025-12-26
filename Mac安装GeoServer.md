Mac 安装 GeoServer

前置准备
1. 安装 Java11 版本(Java 8 会报错)
JDK 安装包地址推荐：https://www.azul.com/downloads/?version=java-8-lts&os=macos&package=jdk#zulu

```bash
# 验证是否安装成功
java -version

# 1. 查看本地安装的所有JDK版本
/usr/libexec/java_home -V

# 2. Java环境变量配置
open -e ~/.bash_profile

# 3. 写入下面内容
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_271.jdk/Contents/Home

PATH=$JAVA_HOME/bin:$PATH:.

CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.

export JAVA_HOME

export PATH

export CLASSPATH

# 3.1 注意/Library/Java/JavaVirtualMachines/jdk1.8.0_271.jdk/Contents/Home为自己安装的JDK路径

# 4. 使配置生效
source ~/.bash_profile
```

2. 安装GeoServer
```bash
# 创建安装目录
mkdir -p ~/Applications/GeoServer
cd ~/Applications/GeoServer

# 使用 curl 下载
curl -L -o geoserver-2.24.2-bin.zip https://downloads.sourceforge.net/project/geoserver/GeoServer/2.24.2/geoserver-2.24.2-bin.zip

# 解压文件
unzip geoserver-2.24.2-bin.zip -d ~/Applications/

# 进入bin文件目录
cd ~/Applications/GeoServer/bin

# 启动GeoServer服务
sh startup.sh

# 访问
http://localhost:8080/geoserver
```
	

