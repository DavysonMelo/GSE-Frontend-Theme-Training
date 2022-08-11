<div class="asset-publisher-image-wrapper">
	<#if (Image.getData())?? && Image.getData() != "">
		<img class="asset-publisher-image" alt="${Image.getAttribute("alt")}" data-fileentryid="${Image.getAttribute("fileEntryId")}" src="${Image.getData()}" />
	</#if>
</div>

<#if (Title.getData())??>
	<h3>
		${Title.getData()}
	</h3>
</#if>