({  
	showHideSpinner : function(component, event, helper) {
		if(component.get('v.show')){
            component.set("v.shouldDisplay", true);
            component.set("v.spinnerCSS", 'slds-spinner--brand slds-spinner slds-spinner--'+component.get('v.type'));
        } else {
            component.set("v.shouldDisplay", false);
        }
	}
})