import React from 'react';

// Clay Dependencies
import ClayLayout from '@clayui/layout';

// Custom Components
import ButtonChart from './ButtonChart';

export default function () {
    const rowStyle = {
        marginBottom: "2rem",
    };

    return (
        <ClayLayout.Container view>
            <ClayLayout.Row justify="start" style={rowStyle}>
                {/* Buttons Title */}
                <ClayLayout.Col>
                    <h1><span style={{ color: 'var(--gray-400)' }}>05.</span> Buttons</h1>
                </ClayLayout.Col>
            </ClayLayout.Row>
            {/* Large Buttons */}
            <ClayLayout.Row justify="start" style={rowStyle}>
                <ClayLayout.Col>
                    <h3 style={{ color: 'var(--primary)' }}>Large</h3>
                </ClayLayout.Col>
            </ClayLayout.Row>
            <ButtonChart buttonSize='lg' buttonIcon='upload' iconButtonSymbol={'plus'} />

            {/* Medium Buttons */}
            <ClayLayout.Row justify="start" style={rowStyle}>
                <ClayLayout.Col>
                    <h3 style={{ color: 'var(--primary)' }}>Medium</h3>
                </ClayLayout.Col>
            </ClayLayout.Row>
            <ButtonChart buttonSize='md' buttonIcon='upload' iconButtonSymbol={'plus'} />

            {/* Small Buttons */}
            <ClayLayout.Row justify="start" style={rowStyle}>
                <ClayLayout.Col>
                    <h3 style={{ color: 'var(--primary)' }}>Small</h3>
                </ClayLayout.Col>
            </ClayLayout.Row>
            <ButtonChart buttonSize='sm' buttonIcon='upload' iconButtonSymbol={'plus'} />

            {/* Rounded Buttons */}
            <ClayLayout.Row justify="start" style={rowStyle}>
                <ClayLayout.Col>
                    <h3 style={{ color: 'var(--primary)' }}>Rounded</h3>
                </ClayLayout.Col>
            </ClayLayout.Row>
            <ButtonChart buttonSize='md' buttonIcon='upload' iconButtonSymbol={'plus'} isRounded={true} />
        </ClayLayout.Container>
    )
}