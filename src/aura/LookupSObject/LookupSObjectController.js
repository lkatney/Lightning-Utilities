/**
 * (c) Tony Scott. This code is provided as is and without warranty of any kind.
 *
 * This work by Tony Scott is licensed under a Creative Commons Attribution 3.0 Unported License.
 * http://creativecommons.org/licenses/by/3.0/deed.en_US
 */
({
    /**
     * load selected value in init 
     */
    
    init : function(cmp, event, helper){
        helper.showSelectedLabel(cmp, event);  
    },
    
    /**
     * Search an SObject for a match
     */
	search : function(cmp, event, helper) {
        console.log('in search');
		helper.doSearch(cmp);        
    },

    /**
     * Select an SObject from a list
     */
    select: function(cmp, event, helper) {
        console.log('in select');
    	helper.handleSelection(cmp, event);
    },
    
    /**
     * Clear the currently selected SObject
     */
    clear: function(cmp, event, helper) {
        console.log('in clear');
    	helper.clearSelection(cmp);    
    }
})