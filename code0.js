gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDNewSpriteObjects1= [];
gdjs.LobbyCode.GDNewSpriteObjects2= [];
gdjs.LobbyCode.GDStartButtonObjects1= [];
gdjs.LobbyCode.GDStartButtonObjects2= [];
gdjs.LobbyCode.GDGameNameObjects1= [];
gdjs.LobbyCode.GDGameNameObjects2= [];


gdjs.LobbyCode.asyncCallback15333660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(15333660, gdjs.LobbyCode.asyncCallback15333660);
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.LobbyCode.asyncCallback15333660(runtimeScene, asyncObjectsList)), 15333660, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.LobbyCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDStartButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDStartButtonObjects1[k] = gdjs.LobbyCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDNewSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewSpriteObjects2.length = 0;
gdjs.LobbyCode.GDStartButtonObjects1.length = 0;
gdjs.LobbyCode.GDStartButtonObjects2.length = 0;
gdjs.LobbyCode.GDGameNameObjects1.length = 0;
gdjs.LobbyCode.GDGameNameObjects2.length = 0;

gdjs.LobbyCode.eventsList1(runtimeScene);
gdjs.LobbyCode.GDNewSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewSpriteObjects2.length = 0;
gdjs.LobbyCode.GDStartButtonObjects1.length = 0;
gdjs.LobbyCode.GDStartButtonObjects2.length = 0;
gdjs.LobbyCode.GDGameNameObjects1.length = 0;
gdjs.LobbyCode.GDGameNameObjects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
