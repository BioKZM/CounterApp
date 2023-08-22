            // app.getFileIcon(appPath).then(icon => {
            //     const dataURL = icon.toDataURL();
            //     appIconsData[0][appName] = dataURL;
            //     appListData[0].push(appName);
            //     const filteredAppListData = [...new Set(appListData[0])];
            //     const filteredAppIconsData = [...new Set(appIconsData)];
            //     let appListJsonData = {"appList" : [filteredAppListData], "appIcons" : filteredAppIconsData};
            //     let jsonDataToWrite = JSON.stringify(appListJsonData);
            //     fs.writeFileSync(filePath + `\\data\\appList.json`,jsonDataToWrite);
            //     let template = {"currentSession": 0, "totalSession" : 0};
            //     let jsonTemplate = JSON.stringify(template);
            //     fs.writeFileSync(filePath + `\\data\\apps\\${appName}.json`,jsonTemplate);
            // let appCounterDict = {};
            // if (data.appList[0] == undefined)
            // {
            //   data.appList[0] = [];
            // }
            // data.appList[0].forEach(app => {
            //   let appJsonFile = fs.readFileSync(filePath + `\\data\\apps\\${app}.json`,'utf-8');
            //   const appJsonData = JSON.parse(appJsonFile);
            //   appCounterDict[app] = [appJsonData.currentSession,appJsonData.totalSession];

            // });
            // let jsonFile = fs.readFileSync(filePath + '\\data\\appList.json','utf-8');
            // const jsonData = JSON.parse(jsonFile)
            // let appListData = jsonData.appList;
            // let appIconsData = jsonData.appIcons;
            
            // event.reply('appList',appListData,appIconsData,appCounterDict);
            // let appCounterDict = {};
            // appListData[0].forEach(app => {
            //   let appJsonFile = fs.readFileSync(filePath + `\\data\\apps\\${app}.json`,'utf-8');
            //   const appJsonData = JSON.parse(appJsonFile);
            //   appCounterDict[app] = [appJsonData.currentSession,appJsonData.totalSession]; 

            // });
            
            // event.reply("sendAppCounterData",appCounterArray);
            // });
          // event.reply('appDialogResult', result.filePaths);