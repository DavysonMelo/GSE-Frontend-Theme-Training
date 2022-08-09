<div class="d-flex flex-column align-items-center justify-content-center challenge-web-content">
	<#if (Text77349973.getData())??>
		<h2 class="challenge-content-title">${Text77349973.getData()}</h2>
	</#if>

	<#if (Image20321478.getData())?? && Image20321478.getData() != "">
		<div class="challenge-content-img-wrapper">
			<img alt="${Image20321478.getAttribute("alt")}" data-fileentryid="${Image20321478.getAttribute("fileEntryId")}" src="${Image20321478.getData()}" />
		</div>
	</#if>

	<div class="challenge-content-body">
		<#if (RichText54814437.getData())??>
			${RichText54814437.getData()}
		</#if>
	</div>
</div>