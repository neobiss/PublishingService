(function()
{

	/**
	 * Social Publishing
	 *
	 * @method onActionPublish
	 * @param record {object} Object literal representing the file or folder to be actioned
	 */
	YAHOO.Bubbling.fire("registerAction",
	{
		actionName: "onActionPublish",
		fn: function dlA_onActionPublish(record)
		{
		   // Call the Social Publishing Module
		   Alfresco.module.getSocialPublishingInstance().show(
		   {
		      nodeRef: record.nodeRef,
		      filename: record.fileName
		   });
		}
	});
})();