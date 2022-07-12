import React from "react";
import ReactDOM from "react-dom";

import AppComponent from "./AppComponent";
import { ClayIconSpriteContext } from "@clayui/icon";

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main(params) {
  const spritemap = themeDisplay.getPathThemeImages() + "/clay/icons.svg";
  ReactDOM.render(
    <ClayIconSpriteContext.Provider value={spritemap}>
      <AppComponent
        portletNamespace={params.portletNamespace}
        contextPath={params.contextPath}
        portletElementId={params.portletElementId}
        configuration={params.configuration}
      />
    </ClayIconSpriteContext.Provider>,
    document.getElementById(params.portletElementId)
  );
}
