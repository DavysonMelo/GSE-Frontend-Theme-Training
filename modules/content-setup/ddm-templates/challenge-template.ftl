<div class="d-flex flex-column align-items-center justify-content-center challenge-web-content">
	<#if (Title.getData())??>
		<h2 class="challenge-content-title">${Title.getData()}</h2>
	</#if>

	<#if (Image.getData())?? && Image.getData() != "">
		<div class="challenge-content-img-wrapper">
			<img alt="${Image.getAttribute("alt")}" data-fileentryid="${Image.getAttribute("fileEntryId")}" src="${Image.getData()}" />
		</div>
	</#if>

	<div class="challenge-content-body">
		<#if (Content.getData())??>
			${Content.getData()}
		</#if>
	</div>
</div>