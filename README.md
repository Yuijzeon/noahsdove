# noahsdove

## 如何使用

在使用此腳本之前 請先安裝 [OCI-CLI](https://github.com/oracle/oci-cli) 並登您的 OCI 帳號

然後把 instance_launch_a1.sh 裡啟動 VM 實體所需的參數填好

以及把 index.js 裡的 <discord_token>, <discord_channel_id> 填好

npm 安裝依賴項 child_process, discord.js

最後執行 node index.js

## 功能

簡單的向 Orcale 伺服器傳送啟動 VM 實體的請求

並在伺服器回應時將結果傳到 discord

如果啟動失敗則會再次啟動到成功為止

## 螢幕截圖

<img src="https://i.imgur.com/Bq75uwU.png =250x250" width="300">
