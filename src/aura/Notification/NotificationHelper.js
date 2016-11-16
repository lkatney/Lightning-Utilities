({
    timerReset:[], //array for storing timeouts and removing those every time on a call of the controller method
    setNotification :function(cmp,event,helper) {
        //get attribute values from the component
        var params=event.getParam("arguments");
        console.log(params);
        // now clear all the timeouts from before to avoid removing div with previous ones triggered
        for (var i = 0 ; i < helper.timerReset.length ; i++) {
            clearTimeout(helper.timerReset[i]);
            helper.timerReset.splice(0,1);
        }
        cmp.set("v.show",params.notiShow);
        //show
        if(params.notiShow){

            var notificationType = cmp.get("v.notificaionType");
        	var notification = {};

            if(notificationType == 'bar'){
        	   notification["cls"] = 'slds-notify slds-notify--alert slds-theme--alert-texture';
            }else{
                notification["cls"] = 'slds-modal__header slds-theme--alert-texture';
            }

        	notification["icon"] = 'announcement';

        	var iconUrl = '/resource/slds/assets/icons/utility-sprite/svg/symbols.svg#';
        	if(params.notiType == 'Success'){
				notification["cls"] = notification["cls"] + ' slds-theme--success';
				notification["icon"] = iconUrl+'check';
        	}else if(params.notiType == 'Error'){
        		notification["cls"] = notification["cls"] + ' slds-theme--error';
        		notification["icon"] = iconUrl+'error';
        	}else if(params.notiType == 'Warning'){
        		notification["cls"] = notification["cls"] + ' slds-theme--success warning';
        		notification["icon"] = 'warning';
        	}else if(params.notiType == 'offline'){
        		notification["cls"] = notification["cls"] + ' slds-theme--offline';
        		notification["icon"] = iconUrl+'offline';
        	}
        	cmp.set("v.notification", notification);
        	cmp.set("v.type",params.notiType);
	        cmp.set("v.message",params.notiMesg);
            cmp.set("v.popupheader",params.notiHeader);
	        cmp.set("v.show",params.notiShow);
            cmp.set("v.redirectUri", params.notiRedirectUri);

            //set timer for bar notifications only
            if(notificationType == 'bar'){
    	        var cTime = params.notiTime;

                //hide if there if the time is defined
                if(cTime != "forever"){
                    helper.timerReset.push(setTimeout(function() {
                        cmp.set("v.show",false);
                    },parseInt(cTime)));//add timer to an array
                }
            }
        }
    }
})