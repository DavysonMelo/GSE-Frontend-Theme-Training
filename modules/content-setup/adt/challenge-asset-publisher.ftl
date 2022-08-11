<#assign journalArticleLocalService = serviceLocator.findService("com.liferay.journal.service.JournalArticleLocalService") />

<#if journalArticleLocalService??>
	
	<#if !entries?has_content>
		<#if !themeDisplay.isSignedIn()>
			${renderRequest.setAttribute("PORTLET_CONFIGURATOR_VISIBILITY", true)}
		</#if>

		<div class="alert alert-info">
			<@liferay_ui["message"] key="there-are-no-results" />
		</div>
	</#if>
<div class="web-content-wrapper d-flex justify-content-strech">
	<#list entries as entry>
			<#assign

				assetRenderer = entry.getAssetRenderer()

				entryTitle = htmlUtil.escape(assetRenderer.getTitle(locale))
							 
				entrySummary = htmlUtil.escape(assetRenderer.getSummary(renderRequest, renderResponse))

				article = journalArticleLocalService.getLatestArticle(entry.getClassPK())

				viewURL = assetPublisherHelper.getAssetViewURL(renderRequest, renderResponse, assetRenderer, entry, !stringUtil.equals(assetLinkBehavior, "showFullContent"))		 
			/>

			<div class="asset-wrapper">
				<#assign
					className = assetRenderer.getClassName()
				/>

				<#if className == "com.liferay.journal.model.JournalArticle">
					<#assign
						journalArticle = assetRenderer.getAssetObject()
						journalArticleId = journalArticle.getArticleId()
						journalArticleGroupId = journalArticle.getGroupId()
					/>
					<a class="journal-article-link" href="${viewURL}">
						<@liferay_journal["journal-article"]
							articleId=journalArticleId
							groupId=journalArticleGroupId
							ddmTemplateKey="45345"
						/>
						<p class="content-summary">
							${entrySummary}
						</p>
					</a>
				</#if>
			</div>
	</#list>
</div>
</#if>