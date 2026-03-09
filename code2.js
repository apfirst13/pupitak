gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDRestartObjects1= [];
gdjs.GameOverCode.GDRestartObjects2= [];
gdjs.GameOverCode.GDBack_9595lobbyObjects1= [];
gdjs.GameOverCode.GDBack_9595lobbyObjects2= [];
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];
gdjs.GameOverCode.GDFinalScoreDisplayObjects1= [];
gdjs.GameOverCode.GDFinalScoreDisplayObjects2= [];


gdjs.GameOverCode.asyncCallback12135452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameOverCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
gdjs.GameOverCode.localVariables.length = 0;
}
gdjs.GameOverCode.idToCallbackMap.set(12135452, gdjs.GameOverCode.asyncCallback12135452);
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameOverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.GameOverCode.asyncCallback12135452(runtimeScene, asyncObjectsList)), 12135452, asyncObjectsList);
}
}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameOverCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDRestartObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDRestartObjects1[k] = gdjs.GameOverCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_lobby"), gdjs.GameOverCode.GDBack_9595lobbyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDBack_9595lobbyObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDBack_9595lobbyObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDBack_9595lobbyObjects1[k] = gdjs.GameOverCode.GDBack_9595lobbyObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDBack_9595lobbyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FinalScoreDisplay"), gdjs.GameOverCode.GDFinalScoreDisplayObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameOverCode.GDFinalScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFinalScoreDisplayObjects1[i].getBehavior("Text").setText("Total Score" + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDRestartObjects1.length = 0;
gdjs.GameOverCode.GDRestartObjects2.length = 0;
gdjs.GameOverCode.GDBack_9595lobbyObjects1.length = 0;
gdjs.GameOverCode.GDBack_9595lobbyObjects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreDisplayObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreDisplayObjects2.length = 0;

gdjs.GameOverCode.eventsList1(runtimeScene);
gdjs.GameOverCode.GDRestartObjects1.length = 0;
gdjs.GameOverCode.GDRestartObjects2.length = 0;
gdjs.GameOverCode.GDBack_9595lobbyObjects1.length = 0;
gdjs.GameOverCode.GDBack_9595lobbyObjects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreDisplayObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreDisplayObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
