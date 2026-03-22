gdjs.Select_95LevelCode = {};
gdjs.Select_95LevelCode.localVariables = [];
gdjs.Select_95LevelCode.idToCallbackMap = new Map();
gdjs.Select_95LevelCode.GDNewSpriteObjects1= [];
gdjs.Select_95LevelCode.GDNewSpriteObjects2= [];
gdjs.Select_95LevelCode.GDGameNameObjects1= [];
gdjs.Select_95LevelCode.GDGameNameObjects2= [];
gdjs.Select_95LevelCode.GDMediumObjects1= [];
gdjs.Select_95LevelCode.GDMediumObjects2= [];
gdjs.Select_95LevelCode.GDEasyButtonObjects1= [];
gdjs.Select_95LevelCode.GDEasyButtonObjects2= [];
gdjs.Select_95LevelCode.GDGeniusObjects1= [];
gdjs.Select_95LevelCode.GDGeniusObjects2= [];
gdjs.Select_95LevelCode.GDHardObjects1= [];
gdjs.Select_95LevelCode.GDHardObjects2= [];
gdjs.Select_95LevelCode.GDVeryHardObjects1= [];
gdjs.Select_95LevelCode.GDVeryHardObjects2= [];


gdjs.Select_95LevelCode.asyncCallback21885796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay_easy", false);
}
gdjs.Select_95LevelCode.localVariables.length = 0;
}
gdjs.Select_95LevelCode.idToCallbackMap.set(21885796, gdjs.Select_95LevelCode.asyncCallback21885796);
gdjs.Select_95LevelCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Select_95LevelCode.asyncCallback21885796(runtimeScene, asyncObjectsList)), 21885796, asyncObjectsList);
}
}

}


};gdjs.Select_95LevelCode.asyncCallback21986788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay_medium,", false);
}
gdjs.Select_95LevelCode.localVariables.length = 0;
}
gdjs.Select_95LevelCode.idToCallbackMap.set(21986788, gdjs.Select_95LevelCode.asyncCallback21986788);
gdjs.Select_95LevelCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Select_95LevelCode.asyncCallback21986788(runtimeScene, asyncObjectsList)), 21986788, asyncObjectsList);
}
}

}


};gdjs.Select_95LevelCode.asyncCallback22019724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay_hard", false);
}
gdjs.Select_95LevelCode.localVariables.length = 0;
}
gdjs.Select_95LevelCode.idToCallbackMap.set(22019724, gdjs.Select_95LevelCode.asyncCallback22019724);
gdjs.Select_95LevelCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Select_95LevelCode.asyncCallback22019724(runtimeScene, asyncObjectsList)), 22019724, asyncObjectsList);
}
}

}


};gdjs.Select_95LevelCode.asyncCallback22118828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay_veryhard", false);
}
gdjs.Select_95LevelCode.localVariables.length = 0;
}
gdjs.Select_95LevelCode.idToCallbackMap.set(22118828, gdjs.Select_95LevelCode.asyncCallback22118828);
gdjs.Select_95LevelCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Select_95LevelCode.asyncCallback22118828(runtimeScene, asyncObjectsList)), 22118828, asyncObjectsList);
}
}

}


};gdjs.Select_95LevelCode.asyncCallback8075604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay_genius", false);
}
gdjs.Select_95LevelCode.localVariables.length = 0;
}
gdjs.Select_95LevelCode.idToCallbackMap.set(8075604, gdjs.Select_95LevelCode.asyncCallback8075604);
gdjs.Select_95LevelCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Select_95LevelCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Select_95LevelCode.asyncCallback8075604(runtimeScene, asyncObjectsList)), 8075604, asyncObjectsList);
}
}

}


};gdjs.Select_95LevelCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EasyButton"), gdjs.Select_95LevelCode.GDEasyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_95LevelCode.GDEasyButtonObjects1.length;i<l;++i) {
    if ( gdjs.Select_95LevelCode.GDEasyButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Select_95LevelCode.GDEasyButtonObjects1[k] = gdjs.Select_95LevelCode.GDEasyButtonObjects1[i];
        ++k;
    }
}
gdjs.Select_95LevelCode.GDEasyButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Select_95LevelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Medium"), gdjs.Select_95LevelCode.GDMediumObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_95LevelCode.GDMediumObjects1.length;i<l;++i) {
    if ( gdjs.Select_95LevelCode.GDMediumObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Select_95LevelCode.GDMediumObjects1[k] = gdjs.Select_95LevelCode.GDMediumObjects1[i];
        ++k;
    }
}
gdjs.Select_95LevelCode.GDMediumObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Select_95LevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hard"), gdjs.Select_95LevelCode.GDHardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_95LevelCode.GDHardObjects1.length;i<l;++i) {
    if ( gdjs.Select_95LevelCode.GDHardObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Select_95LevelCode.GDHardObjects1[k] = gdjs.Select_95LevelCode.GDHardObjects1[i];
        ++k;
    }
}
gdjs.Select_95LevelCode.GDHardObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Select_95LevelCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VeryHard"), gdjs.Select_95LevelCode.GDVeryHardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_95LevelCode.GDVeryHardObjects1.length;i<l;++i) {
    if ( gdjs.Select_95LevelCode.GDVeryHardObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Select_95LevelCode.GDVeryHardObjects1[k] = gdjs.Select_95LevelCode.GDVeryHardObjects1[i];
        ++k;
    }
}
gdjs.Select_95LevelCode.GDVeryHardObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Select_95LevelCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Genius"), gdjs.Select_95LevelCode.GDGeniusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Select_95LevelCode.GDGeniusObjects1.length;i<l;++i) {
    if ( gdjs.Select_95LevelCode.GDGeniusObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Select_95LevelCode.GDGeniusObjects1[k] = gdjs.Select_95LevelCode.GDGeniusObjects1[i];
        ++k;
    }
}
gdjs.Select_95LevelCode.GDGeniusObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Select_95LevelCode.eventsList4(runtimeScene);} //End of subevents
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

gdjs.Select_95LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Select_95LevelCode.GDNewSpriteObjects1.length = 0;
gdjs.Select_95LevelCode.GDNewSpriteObjects2.length = 0;
gdjs.Select_95LevelCode.GDGameNameObjects1.length = 0;
gdjs.Select_95LevelCode.GDGameNameObjects2.length = 0;
gdjs.Select_95LevelCode.GDMediumObjects1.length = 0;
gdjs.Select_95LevelCode.GDMediumObjects2.length = 0;
gdjs.Select_95LevelCode.GDEasyButtonObjects1.length = 0;
gdjs.Select_95LevelCode.GDEasyButtonObjects2.length = 0;
gdjs.Select_95LevelCode.GDGeniusObjects1.length = 0;
gdjs.Select_95LevelCode.GDGeniusObjects2.length = 0;
gdjs.Select_95LevelCode.GDHardObjects1.length = 0;
gdjs.Select_95LevelCode.GDHardObjects2.length = 0;
gdjs.Select_95LevelCode.GDVeryHardObjects1.length = 0;
gdjs.Select_95LevelCode.GDVeryHardObjects2.length = 0;

gdjs.Select_95LevelCode.eventsList5(runtimeScene);
gdjs.Select_95LevelCode.GDNewSpriteObjects1.length = 0;
gdjs.Select_95LevelCode.GDNewSpriteObjects2.length = 0;
gdjs.Select_95LevelCode.GDGameNameObjects1.length = 0;
gdjs.Select_95LevelCode.GDGameNameObjects2.length = 0;
gdjs.Select_95LevelCode.GDMediumObjects1.length = 0;
gdjs.Select_95LevelCode.GDMediumObjects2.length = 0;
gdjs.Select_95LevelCode.GDEasyButtonObjects1.length = 0;
gdjs.Select_95LevelCode.GDEasyButtonObjects2.length = 0;
gdjs.Select_95LevelCode.GDGeniusObjects1.length = 0;
gdjs.Select_95LevelCode.GDGeniusObjects2.length = 0;
gdjs.Select_95LevelCode.GDHardObjects1.length = 0;
gdjs.Select_95LevelCode.GDHardObjects2.length = 0;
gdjs.Select_95LevelCode.GDVeryHardObjects1.length = 0;
gdjs.Select_95LevelCode.GDVeryHardObjects2.length = 0;


return;

}

gdjs['Select_95LevelCode'] = gdjs.Select_95LevelCode;
