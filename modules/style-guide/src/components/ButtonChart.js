import React from 'react';

import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';

export default function (props) {
    const { buttonSize, buttonIcon, iconButtonSymbol, isRounded } = props;

    const buttonRowStyle = {
        alignItems: 'flex-end',
        marginBottom: "4.62rem",
    }

    const topDivider = {
        width: '11rem', height: 'auto', marginTop: '1rem', marginBottom: '2.5rem'
    }

    const botDivider = {
        width: '5.12rem', height: 'auto', marginTop: '1rem'
    }

    const BUTTON_TITLES = {
        sm: 'Small',
        md: 'Medium',
        lg: 'Large'
    }

    return (
        <>
            {/* No Icon Buttons */}
            <ClayLayout.Row justify="start" style={buttonRowStyle}>
                <ClayLayout.Col size={1}>
                    <div style={{ alignItems: 'center', transform: 'rotate(-90deg)' }} className="d-inline-flex flex-column">
                        <span>NO ICON</span>
                        <hr style={botDivider} />
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <span>SOLID</span>
                        <hr style={topDivider} />
                        <ClayButton className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} displayType='primary'>{BUTTON_TITLES[buttonSize]} Button</ClayButton>
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <span>GHOST</span>
                        <hr style={topDivider} />
                        <ClayButton className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} displayType={'primary'} outline>{BUTTON_TITLES[buttonSize]} Button</ClayButton>
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <span>BORDERLESS</span>
                        <hr style={topDivider} />
                        <ClayButton className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} displayType={'link'}>{BUTTON_TITLES[buttonSize]} Button</ClayButton>
                    </div>
                </ClayLayout.Col>
            </ClayLayout.Row>
            {/* Icon + Text Buttons */}
            <ClayLayout.Row justify="start" style={buttonRowStyle}>
                <ClayLayout.Col size={1}>
                    <div style={{ alignItems: 'center', transform: 'rotate(-90deg)' }} className="d-inline-flex flex-column">
                        <span>ICON</span>
                        <hr style={botDivider} />
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <ClayButton className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} displayType='primary'>
                            <span className="inline-item inline-item-before">
                                <ClayIcon symbol={buttonIcon} />
                            </span>
                            {BUTTON_TITLES[buttonSize]} Button
                        </ClayButton>
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                            <ClayButton outline className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`}>
                                <span className="inline-item inline-item-before">
                                    <ClayIcon symbol={buttonIcon} />
                                </span>
                                {BUTTON_TITLES[buttonSize]} Button
                            </ClayButton>
                        </div>
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <ClayButton className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} displayType={'link'}>
                            <span className="inline-item inline-item-before">
                                <ClayIcon symbol={buttonIcon} />
                            </span>
                            {BUTTON_TITLES[buttonSize]} Button
                        </ClayButton>
                    </div>
                </ClayLayout.Col>
            </ClayLayout.Row>
            {/* Icon Buttons */}
            <ClayLayout.Row justify="start" style={buttonRowStyle}>
                <ClayLayout.Col size={1}>
                    <div style={{ alignItems: 'center', transform: 'rotate(-90deg)', width: 'max-content' }} className="d-inline-flex flex-column">
                        <span>ICON ONLY</span>
                        <hr style={botDivider} />
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <ClayButtonWithIcon className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} symbol={iconButtonSymbol} displayType={'primary'} />
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <ClayButtonWithIcon outline className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} symbol={iconButtonSymbol} displayType={'primary'} />
                    </div>
                </ClayLayout.Col>
                <ClayLayout.Col className='d-inline-flex' style={{ justifyContent: 'center' }}>
                    <div style={{ alignItems: 'center' }} className="d-inline-flex flex-column">
                        <ClayButtonWithIcon className={`btn-${buttonSize} ${isRounded ? 'rounded' : ''}`} symbol={iconButtonSymbol} displayType={'link'} />
                    </div>
                </ClayLayout.Col>
            </ClayLayout.Row>
        </>
    )
}
