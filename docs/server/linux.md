1、alias 命令别名
示例：
alias btPull="cd /data/bt/ && git pull";

2、.sh shell文件对操作过程的封装

3、tcp udp

4、配置SSH服务：卸载重装一遍ssh服务
sudo apt-get remove openssh-server
sudo apt-get install openssh-server
sudo vi /etc/ssh/sshd_config
sudo service ssh restart

5、查看哪些端口被打开 netstat -anp

nc -lp 23 &(打开23端口，即telnet)

netstat -an | grep 23 (查看是否打开23端口)

netstat -nltp | grep 端口号

lsof -i:端口号


6、设置软链接

ln -s 【目标目录】 【软链接地址】
rm -rf 【软链接地址】
ln -snf 【新目标目录】 【软链接地址】


7、linux系统host修改
vi  /etc/hosts


