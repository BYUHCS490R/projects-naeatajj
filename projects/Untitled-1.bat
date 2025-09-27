ssh -i "C:\Users\JJnae\Downloads\job.pem" ec2-user@ec2-54-145-35-94.compute-1.amazonaws.com

sudo tcpdump -i ens5 port 80 -c 100 -w output.pcap

scp -i "C:\Users\JJnae\Downloads\job.pem" ec2-user@ec2-54-145-35-94.compute-1.amazonaws.com:/home/ec2-user/output.pcap "C:\Users\JJnae\Downloads"

curl http://httpforever.com
