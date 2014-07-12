/*
 * Name: LiveWhite SewisePlayerSkin framework V1.0.0
 * Author: Jack Zhang
 * Website: http://www.sewise.com/
 * Date: 24th March 2014
 * Copyright: 2014, Sewise
 * 
 */

(function(win, $){
	$(document).ready(function(){
		var mainPlayer = SewisePlayer.ILivePlayer;
		var elementObject = new SewisePlayerSkin.ElementObject();
		var elementLayout = new SewisePlayerSkin.ElementLayout(elementObject);
		var logoBox = new SewisePlayerSkin.LogoBox(elementObject);
		var topBar = new SewisePlayerSkin.TopBar(elementObject);
		var controlBar = new SewisePlayerSkin.ControlBar(elementObject, elementLayout, topBar);
		
		
		//实现ILiveSkin接口//////////////////////////////////////
		SewisePlayerSkin.ILiveSkin.player = function(mPlayer){
			mainPlayer = mPlayer;
			controlBar.setPlayer(mainPlayer);
			
		}
		SewisePlayerSkin.ILiveSkin.started = function(){
			controlBar.started();
		}
		SewisePlayerSkin.ILiveSkin.paused = function(){
			controlBar.paused();
		}
		SewisePlayerSkin.ILiveSkin.stopped = function(){
			controlBar.stopped();
		}
		SewisePlayerSkin.ILiveSkin.duration = function(totalTimes){
			controlBar.setDuration(totalTimes);
		}
		SewisePlayerSkin.ILiveSkin.timeUpdate = function(){
			controlBar.timeUpdate();
			topBar.setClock(mainPlayer.playTime());
		}
		SewisePlayerSkin.ILiveSkin.programTitle = function(title){
			topBar.setTitle(title);
			
			//console.log("Title: " + title);
		}
		SewisePlayerSkin.ILiveSkin.logo = function(url){
			logoBox.setLogo(url);
			
			//console.log("logo: " + url);
		}
		SewisePlayerSkin.ILiveSkin.volume = function(value){
			//重置音量UI状态。
			
			//console.log("live volume: " + value);
		}
		
		SewisePlayerSkin.ILiveSkin.clarityButton = function(state){
			//重置clarityButton显示状态。
			/*if(state != "enable"){
				
			}*/
			//console.log("clarityButton: " + state);
		}
		SewisePlayerSkin.ILiveSkin.timeDisplay = function(state){
			//重置playTime显示状态。
			/*if(state != "enable"){
				
			}*/
		}
		SewisePlayerSkin.ILiveSkin.controlBarDisplay = function(state){
			//重置controlBar显示状态。
			if(state != "enable"){
				controlBar.hide2();
			}
		}
		SewisePlayerSkin.ILiveSkin.topBarDisplay = function(state){
			//重置topBar显示状态。
			if(state != "enable"){
				topBar.hide2();
			}
		}
		SewisePlayerSkin.ILiveSkin.customStrings = function(strings){
			//customStrings值。
			
			//console.log("customStrings: " + strings);
		}
		
		
		//通知主播放器皮肤已经初始化完成.
		try{
			SewisePlayer.CommandDispatcher.dispatchEvent({type: SewisePlayer.Events.PLAYER_SKIN_LOADED, playerSkin: SewisePlayerSkin.ILiveSkin});
		}catch(e){
			console.log("No Main Player");
			
			//alert("No Main Player");
		}
		
		//$(".sewise-player-ui").css("visibility", "hidden");
		
	})

})(window, window.jQuery);