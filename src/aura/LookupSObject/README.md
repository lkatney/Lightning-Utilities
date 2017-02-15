####Parameters available
<table style="width:100%">
	<thead>
		<tr>
			<th>
				Attribute
			</th>
			<th>
				Required?
			</th>
			<th>
				Description
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				sObjectAPIName
			</td>
			<td>
				Yes
			</td>
			<td>
				The API name of the SObject to search
			</td>
		</tr>
		<tr>
			<td>
				instanceId
			</td>
			<td>
				Yes
			</td>
			<td>
				An id to identify the instance the component
			</td>
		</tr>
		<tr>
			<td>
				index
			</td>
			<td>
				Optional
			</td>
			<td>
				Index to be mentioned if used in iterations
			</td>
		</tr>
		<tr>
			<td>
				label
			</td>
			<td>
				Yes
			</td>
			<td>
				The label to assign to the lookup, eg: Account
			</td>
		</tr>
		<tr>
			<td>
				pluralLabel
			</td>
			<td>
				Yes
			</td>
			<td>
				he plural label to assign to the lookup, eg: Accounts
			</td>
		</tr>
		<tr>
			<td>
				
			</td>
			<td>
				
			</td>
			<td>
				
			</td>
		</tr>
		<tr>
			<td>
				listIconSVGPath
			</td>
			<td>
				Optional
			</td>
			<td>
				The static resource path to the svg icon to use.
			</td>
		</tr>
		<tr>
			<td>
				listIconClass
			</td>
			<td>
				Optional
			</td>
			<td>
				The SLDS class to use for the icon.
			</td>
		</tr>
		<tr>
			<td>
				searchString
			</td>
			<td>
				Optional
			</td>
			<td>
				The search string to find.
			</td>
		</tr>
		<tr>
			<td>
				whereClause
			</td>
			<td>
				Optional
			</td>
			<td>
				The where clause string to filter on records.
			</td>
		</tr>
		<tr>
			<td>
				disabled
			</td>
			<td>
				Optional
			</td>
			<td>
				The attribute to control readonly behaviour of lookup
			</td>
		</tr>
		<tr>
			<td>
				rawSOQL
			</td>
			<td>
				Optional
			</td>
			<td>
				Pass raw soql to be executed
			</td>
		</tr>
		<tr>
			<td>
				context
			</td>
			<td>
				Optional
			</td>
			<td>
				Context with which this code is working. This is to pass into controller to run specific actions
			</td>
		</tr>
	</tbody>
</table>

####Parameters to be used in different scenarios

######Get all accounts with passed search text
    <c:LookupSObject sObjectAPIName="Account" instanceId="account" pluralLabel="Accounts" searchString="{!bindVariable}"/>

######Get all accounts with passed search text filtered with 'Cold' in rating field
    <c:LookupSObject sObjectAPIName="Account" instanceId="account" whereClause="Rating = 'Cold'" pluralLabel="Accounts" searchString="{!field.valueLabel}" />
    
######Lookup field with already selected
	<!-- bindVariable already has value here -->
    <c:LookupSObject sObjectAPIName="Account" instanceId="account" pluralLabel="Accounts" searchString="{!bindVariable}" disabled="true"/>
    
######Lookup fields for table in every row.
	<!-- Assumption: Used within aura:iteration tag-->
    <!-- bindIndexVariable is a row order bind field that depicts row number -->
    <c:LookupSObject sObjectAPIName="Account" instanceId="account" pluralLabel="Accounts" searchString="{!bindVariable}" disabled="true" index="{!bindIndexVariable}"/>
    
######Lookup field to use rawSOQL
 	<c:LookupSObject sObjectAPIName="Account" instanceId="account" pluralLabel="Accounts" rawSOQL="SELECT Account.Id, Account.Name FROM Contact WHERE Email = \'%searchString%\'" searchString="{!sectionTime.horseName}" context="filterAccountsForContacts"/>