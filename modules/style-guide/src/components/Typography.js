import React, { useState, useEffect } from "react";
import ClayLayout from "@clayui/layout";

export default function () {
  const rowStyle = {
    marginBottom: "2rem",
  };
  const spanStyle = {
    fontSize: '0.875rem',
    color: 'var(--gray-500)'
  }
  const HEADING_OBJECT_TEMPLATE = {h1: '', h2: '', h3: '', h4: '', h5: '', h6: ''};
  const PARAGRAPH_OBJECT_TEMPLATE = {large: '', base: '', small: '', xsmall: '', tiny: ''};
  const ACTION_OBJECT_TEMPLATE = {large: '', medium: '', small: ''};
  const [headingsFontSizeLg, setHeadingsFontSizeLg] = useState(HEADING_OBJECT_TEMPLATE);
  const [headingsFontSizeMd, setHeadingsFontSizeMd] = useState(HEADING_OBJECT_TEMPLATE);
  const [headingsFontSizeSm, setHeadingsFontSizeSm] = useState(HEADING_OBJECT_TEMPLATE);
  const [headingsLineHeightLg, setHeadingsLineHeightLg] = useState(HEADING_OBJECT_TEMPLATE);
  const [headingsLineHeightMd, setheadingsLineHeightMd] = useState(HEADING_OBJECT_TEMPLATE);
  const [headingsLineHeightSm, setheadingsLineHeightSm] = useState(HEADING_OBJECT_TEMPLATE);
  const [paragrpahFontSize, setParagrpahFontSize] = useState(PARAGRAPH_OBJECT_TEMPLATE);
  const [paragrpahLineHeight, setParagrpahLineHeight] = useState(PARAGRAPH_OBJECT_TEMPLATE);
  const [actionFontSize, setActionFontSize] = useState(ACTION_OBJECT_TEMPLATE);
  const [actionLineHeight, setActionLineHeight] = useState(ACTION_OBJECT_TEMPLATE);

  useEffect(() => {
        new Array(6).fill(0).map((_, i) => {
          setHeadingsFontSizeLg((prevState) => ({...prevState, ['h' + (i+1)]: getFontSize('heading' + (i+1))}));
          setHeadingsFontSizeMd((prevState) => ({...prevState, ['h' + (i+1)]: getFontSize('headingMd' + (i+1))}));
          setHeadingsFontSizeSm((prevState) => ({...prevState, ['h' + (i+1)]: getFontSize('headingSm' + (i+1))}));
          setHeadingsLineHeightLg((prevState) => ({...prevState, ['h' + (i+1)]: getLineHeight('heading' + (i+1))}));
          setheadingsLineHeightMd((prevState) => ({...prevState, ['h' + (i+1)]: getLineHeight('headingMd' + (i+1))}));
          setheadingsLineHeightSm((prevState) => ({...prevState, ['h' + (i+1)]: getLineHeight('headingSm' + (i+1))}));
          
        });
        
        setParagrpahFontSize({large: getFontSize('pLarge'), base: getFontSize('pBase'), small: getFontSize('pSmall'), xsmall: getFontSize('pXsmall'), tiny: getFontSize('pTiny')});
        setParagrpahLineHeight({large: getLineHeight('pLarge'), base: getLineHeight('pBase'), small: getLineHeight('pSmall'), xsmall: getLineHeight('pXsmall'), tiny: getLineHeight('pTiny')});
        setActionFontSize({large: getFontSize('aLarge'), medium: getFontSize('aMedium'), small: getFontSize('aSmall')});
        setActionLineHeight({large: getLineHeight('aLarge'), medium: getLineHeight('aMedium'), small: getLineHeight('aSmall')});
  }, []);

  const getFontSize = (elementId) => {
    let el = document.getElementById(elementId);
    return window.getComputedStyle(el, null).getPropertyValue('font-size');
  };

  const getLineHeight = (elementId) => {
    let el = document.getElementById(elementId);
    return window.getComputedStyle(el, null).getPropertyValue('line-height');
  };

  return (
    <ClayLayout.Container view>
      <ClayLayout.Row justify="start" style={rowStyle}>
        <ClayLayout.Col>
          <h1><span style={{ color: 'var(--gray-400)' }}>02.</span> Typography</h1>
        </ClayLayout.Col>
      </ClayLayout.Row>

      <ClayLayout.Row justify="start" style={rowStyle}>
        <ClayLayout.Col size={3}>
          <div className="d-inline-flex flex-column">
            <h2>Source Sans Pro</h2>
            <span>Primary Font</span>
          </div>
        </ClayLayout.Col>

        <ClayLayout.Col>
          <ClayLayout.Col>
            <h3 style={{color: 'var(--primary-lighten-1)'}}>Headings</h3>
          </ClayLayout.Col>
          <ClayLayout.Col>
            <h5 style={{color: 'var(--secondary-lighten-1)'}}>Desktop</h5>
          </ClayLayout.Col>
          {new Array(6).fill(0).map((_, i) => (
            <ClayLayout.Col key={i}>
              <div
                className="d-flex flex-column"
              >
                {React.createElement(('h'+ (i+1)), {id: 'heading' + (i+1)}, "Heading " + (i+1))}
                <span style={spanStyle}>Font Size: {headingsFontSizeLg['h'+(i + 1)]}</span>
                <span style={spanStyle}>Line Height: {headingsLineHeightLg['h'+(i + 1)]}</span>
              </div>
            </ClayLayout.Col>
          ))}
        </ClayLayout.Col>

        <ClayLayout.Col>
          <ClayLayout.Col>
            <h5 style={{color: 'var(--secondary-lighten-1)'}}>Tablet</h5>
          </ClayLayout.Col>
          {new Array(6).fill(0).map((_, i) => (
            <ClayLayout.Col key={i}>
              <div
                className="d-flex flex-column"
              >
                {React.createElement(('h'+ (i+1)), {id: 'headingMd' + (i+1), className: `h${(i+1)}-md`}, "Heading " + (i+1))}
                <span style={spanStyle}>Font Size: {headingsFontSizeMd['h'+(i + 1)]}</span>
                <span style={spanStyle}>Line Height: {headingsLineHeightMd['h'+(i + 1)]}</span>
              </div>
            </ClayLayout.Col>
          ))}
        </ClayLayout.Col>

        <ClayLayout.Col>
          <ClayLayout.Col>
            <h5 style={{color: 'var(--secondary-lighten-1)'}}>Mobile</h5>
          </ClayLayout.Col>
          {new Array(6).fill(0).map((_, i) => (
            <ClayLayout.Col key={i}>
              <div
                className="d-flex flex-column"
              >
                {React.createElement(('h'+ (i+1)), {id: 'headingSm' + (i+1), className: `h${(i+1)}-sm`}, "Heading " + (i+1))}
                <span style={spanStyle}>Font Size {headingsFontSizeSm['h'+(i + 1)]}</span>
                <span style={spanStyle}>Line Height: {headingsLineHeightSm['h'+(i + 1)]}</span>
              </div>
            </ClayLayout.Col>
          ))}
        </ClayLayout.Col>
      </ClayLayout.Row>

      <ClayLayout.Row justify="start" style={rowStyle}>
        <ClayLayout.Col size={3} />

        <ClayLayout.Col>
          <ClayLayout.Col>
            <h3 style={{color: 'var(--primary-lighten-1)'}}>Body</h3>
          </ClayLayout.Col>
          <ClayLayout.Row justify="start" style={rowStyle}>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="pLarge" className="p-large">Paragraph Large</p>
                <span style={spanStyle}>Font Size: {paragrpahFontSize.large}</span>
                <span style={spanStyle}>Line Height: {paragrpahLineHeight.large}</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="pBase" className="p-base">Paragraph Base</p>
                <span style={spanStyle}>Font Size: {paragrpahFontSize.base}</span>
                <span style={spanStyle}>Line Height: {paragrpahLineHeight.base}</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="pSmall" className="p-small">Paragraph Small</p>
                <span style={spanStyle}>Font Size: {paragrpahFontSize.small}</span>
                <span style={spanStyle}>Line Height: {paragrpahLineHeight.small}</span>
              </div>
            </ClayLayout.Col>
          </ClayLayout.Row>

          <ClayLayout.Row justify="start" style={rowStyle}>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="pXsmall" className="p-xsmall">Paragraph XSmall</p>
                <span style={spanStyle}>Font Size: {paragrpahFontSize.xsmall}</span>
                <span style={spanStyle}>Line Height: {paragrpahLineHeight.xsmall}</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="pTiny" className="p-tiny">Paragraph Tiny</p>
                <span style={spanStyle}>Font Size: {paragrpahFontSize.tiny}</span>
                <span style={spanStyle}>Line Height: {paragrpahLineHeight.tiny}</span>
              </div>
            </ClayLayout.Col>

            <ClayLayout.Col />

          </ClayLayout.Row>
          
        </ClayLayout.Col>
      </ClayLayout.Row>


      <ClayLayout.Row justify="start" style={rowStyle}>
        <ClayLayout.Col size={3} />

        <ClayLayout.Col>
          <ClayLayout.Col>
            <h3 style={{color: 'var(--primary-lighten-1)'}}>Action</h3>
          </ClayLayout.Col>
          <ClayLayout.Row justify="start" style={rowStyle}>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="aLarge" className="a-large">Action Large</p>
                <span style={spanStyle}>Font Size: {actionFontSize.large}</span>
                <span style={spanStyle}>Line Height: {actionLineHeight.large}</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="aMedium" className="a-medium">Action Medium</p>
                <span style={spanStyle}>Font Size: {actionFontSize.medium}</span>
                <span style={spanStyle}>Line Height: {actionLineHeight.medium}</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col>
              <div
                className="d-flex flex-column"
              >
                <p id="aSmall" className="a-small">Action Small</p>
                <span style={spanStyle}>Font Size: {actionFontSize.small}</span>
                <span style={spanStyle}>Line Height: {actionLineHeight.small}</span>
              </div>
            </ClayLayout.Col>
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>
    </ClayLayout.Container>
  );
}
